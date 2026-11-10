import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero';
import Card from './Card';

function Home() {

    const [posts, setPosts] = useState([]);
    console.log(posts)
    useEffect(() => {
        const getPost = async () => {
            console.log("Calling...")
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await response.json()
                setPosts(data)

            } catch (error) {
                console.log("Error:", error);

            }
        }
        getPost()
    }, [])
    return (
        <>
            <Navbar />
            <Hero />
            <section className='py-7 bg-gray-100'>
                <div className='max-w-7xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8' > Latest Blogs</h2>


                    <div className='grid grid-cols-3 gap-6'>
                        {
                            posts.map((post) => (
                                <Card key={post.id}
                                    title={post.title}
                                    body={post.body}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )

}

export default Home;