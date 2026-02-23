'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar' // Adjust import path if needed
import Footer from '../../components/Footer' // Adjust import path if needed
import { supabase } from '@/lib/supabaseClient'
import { useParams } from 'next/navigation'

type Post = {
    id: string
    title: string
    content: string
    cover_image: string
    created_at: string
}

export default function BlogPost() {
    const params = useParams()
    const { id } = params
    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id) {
            fetchPost(id as string)
        }
    }, [id])

    const fetchPost = async (postId: string) => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('id', postId)
                .single()

            if (error) {
                console.error('Error fetching post:', error)
            } else {
                setPost(data)
            }
        } catch (err) {
            console.error('Unexpected error:', err)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="w-full min-h-screen flex items-center justify-center">
                    <p>Loading...</p>
                </div>
                <Footer />
            </>
        )
    }

    if (!post) {
        return (
            <>
                <Navbar />
                <div className="w-full min-h-screen flex items-center justify-center">
                    <p>Post not found.</p>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="w-full px-[5%] md:px-[12%] py-28 scroll-mt-20 min-h-screen">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-Ovo mb-6 text-center leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex justify-center items-center gap-2 text-gray-500 text-sm mb-10">
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>

                    {post.cover_image && (
                        <div className="w-full aspect-video relative rounded-xl overflow-hidden mb-10 shadow-lg">
                            <Image
                                src={post.cover_image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none text-gray-700 font-Outfit leading-relaxed whitespace-pre-wrap">
                        {post.content}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
