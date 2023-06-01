import React from 'react'
import Link from 'next/link';
import Layout from '@/components/Layout';
import {getAllPostIds,getPostData} from "@/lib/posts"

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback:false,
  }
}

export const getStaticProps = async ({params}:any) => {
  const post: any = await getPostData(params.id)
  return {
    props: {
      post,
    }
  }
}

const Post = ({ post }: any) => {
  if (!post) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">
        ID:{post.id}
      </p>
      <p className="mb-8 text-xl font-bold">
        {post.title}
      </p>
      <p className="px-10">
          {post.body}
      </p>
        <Link href="/blog-page">
        <div className="cursor-pointer flex mt-12">
          <svg
            // xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          <span>BackToBlogPage</span>
          </div>
        </Link>
    </Layout>
  )
}

export default Post