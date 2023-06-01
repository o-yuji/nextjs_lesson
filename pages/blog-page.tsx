import Layout from '@/components/Layout'
import React from 'react'
import { getAllPostData } from "../lib/posts"
import Post from "../components/Posts"

export async function getStaticProps() {
  const posts = await getAllPostData();
  return {
    props:{posts},
  }
}

const Blog = ({posts}:any) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post:any) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export default Blog