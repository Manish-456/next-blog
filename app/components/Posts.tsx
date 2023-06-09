import { getSortedPostsData } from '@/lib/posts'
import React from 'react'
import ListItem from './ListItem';

export default function Posts() {
   const posts =  getSortedPostsData();



  return (
    <section className='mt-6 mx-auto max-w-2xl'>
        <h2 className="text-4xl font-bold dark:text-white/90">
            Blog
            <ul className="w-full">
                {
                    posts.map(post => {
                        return <ListItem key={post.id} post={post} />
                    })
                }
            </ul>
        </h2>
      
    </section>
  )
}
