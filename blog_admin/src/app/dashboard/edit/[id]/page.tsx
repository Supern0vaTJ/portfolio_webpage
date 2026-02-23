'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter, useParams } from 'next/navigation'

export default function EditPost() {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [content, setContent] = useState('')
    const [coverImage, setCoverImage] = useState('')
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const params = useParams()
    const { id } = params

    useEffect(() => {
        const fetchPost = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (!session) {
                router.push('/login')
                return
            }

            if (!id) return

            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                alert('Error fetching post')
                router.push('/dashboard')
            } else {
                setTitle(data.title)
                setSlug(data.slug)
                setExcerpt(data.excerpt)
                setContent(data.content)
                setCoverImage(data.cover_image || '')
                setLoading(false)
            }
        }
        fetchPost()
    }, [id, router])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const { error } = await supabase
                .from('posts')
                .update({
                    title,
                    slug,
                    excerpt,
                    content,
                    cover_image: coverImage
                })
                .eq('id', id)

            if (error) {
                alert('Error updating post: ' + error.message)
            } else {
                router.push('/dashboard')
            }
        } catch (err) {
            console.error(err)
            alert('Unexpected error')
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <div className="p-8">Loading...</div>

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border p-2 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Slug</label>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="w-full border p-2 rounded bg-gray-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Excerpt</label>
                        <textarea
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            className="w-full border p-2 rounded h-20"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Cover Image URL</label>
                        <input
                            type="text"
                            value={coverImage}
                            onChange={(e) => setCoverImage(e.target.value)}
                            className="w-full border p-2 rounded"
                            placeholder="https://..."
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Content (Markdown supported)</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border p-2 rounded h-64 font-mono text-sm"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading ? 'Update Post' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
