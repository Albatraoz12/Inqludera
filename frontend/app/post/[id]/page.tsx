import Link from 'next/link';
import axios from 'axios';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';
import { div } from 'framer-motion/client';

async function fetchPosts(id: any): Promise<any[]> {
  const response = await axios.get(
    `http://localhost:3001/api/posts/${id}?populate=*`
  );
  return response.data.data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const posts = await fetchPosts(id);
  console.log(posts);

  return (
    <main className='p-10'>
      <div>
        <Link href='/'>Home</Link>
        <h2>{posts.Title}</h2>
        <BlocksRenderer content={posts.body} />
      </div>
      {posts.jobType && posts.location && (
        <div className='flex gap-4'>
          <p>{posts.jobType.type}</p>
          <p>{posts.location.location}</p>
        </div>
      )}
    </main>
  );
}
