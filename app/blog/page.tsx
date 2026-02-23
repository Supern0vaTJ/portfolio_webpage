'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'
import Navbar from '../components/Navbar' // Adjust import path
import Footer from '../components/Footer' // Adjust import path
import { supabase } from '@/lib/supabaseClient'

// Define Post type
type Post = {
    id: string
    title: string
    slug: string
    excerpt: string
    cover_image: string
    created_at: string
}

// type Post definition above


export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            setLoading(true)
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Error fetching posts:', error)
            } else {
                setPosts(data || [])
            }
        } catch (err) {
            console.error('Unexpected error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <div className="w-full px-[12%] py-28 scroll-mt-20 min-h-screen">
                <h4 className="text-center mb-2 text-lg font-Ovo">
                    Latest updates and thoughts
                </h4>
                <h2 className="text-center text-5xl font-Ovo mb-10">
                    My Blog
                </h2>

                {loading ? (
                    <p className="text-center">Loading posts...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.id}`} key={post.id} className="group">
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md duration-300 border border-gray-100">
                                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                                        {post.cover_image ? (
                                            <Image
                                                src={post.cover_image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-semibold mb-2 font-Ovo group-hover:text-blue-600 duration-300 line-clamp-2">{post.title}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                                            <span>{new Date(post.created_at).toLocaleDateString()}</span>
                                            <Image src={assets.right_arrow_bold || assets.arrow_icon} alt="arrow" className="w-3" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {!loading && posts.length === 0 && (
                    <div className="text-center text-gray-500 py-10">
                        <p>No posts found.</p>
                    </div>
                )}

            </div>
            <Footer />
        </>
    )
}
