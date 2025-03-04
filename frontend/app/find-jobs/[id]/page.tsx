import axios from 'axios';
import { ArrowBigLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

async function fetchJob(id: any): Promise<any[]> {
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
  const job = await fetchJob(id);
  return (
    <main className='w-[80vw] min-h-[80vh] py-10 mx-auto'>
      <header className='flex items-center justify-around '>
        <div className='flex gap-3'>
          <i className='border rounded§'>
            <ArrowBigLeft size={24} />
          </i>
          <Link href={'/find-jobs'}>Lediga job</Link>
        </div>
        <div className='flex gap-3'>
          <i>
            <ExternalLink size={24} />
          </i>
          <button>Ansök direkt</button>
        </div>
      </header>
    </main>
  );
}
