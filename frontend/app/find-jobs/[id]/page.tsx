import { Data } from '@/app/interface/Job';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import axios from 'axios';
import { ArrowBigLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

async function fetchJob(id: any): Promise<Data> {
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
      <header className='flex items-center justify-between py-5'>
        <div>
          <Link href={'/find-jobs'} className='flex gap-3'>
            <i className='rounded'>
              <ArrowBigLeft size={24} />
            </i>
            <p>Lediga job</p>
          </Link>
        </div>
        <div className='flex gap-3'>
          <i>
            <ExternalLink size={24} />
          </i>
          <button>Ansök direkt</button>
        </div>
      </header>
      <section className='grid grid-cols-1 justify-center items-center mx-auto'>
        <div className='relative w-full min-h-[200px] md:min-h-[500px] mx-auto'>
          <Image
            src={`http://localhost:3001${job.Image.url}`}
            alt='bild'
            fill
            className='object-cover'
          />
        </div>
        <div>
          <h1>{job.Title}</h1>
          <BlocksRenderer content={job.body as any[]} />
        </div>
      </section>
    </main>
  );
}
