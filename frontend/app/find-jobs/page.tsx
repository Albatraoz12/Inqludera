import Link from 'next/link';
import Jobs from '../components/Jobs';

export default async function page() {
  const findJobs = await fetch('http://localhost:3001/api/posts?populate=*');
  const jobs = await findJobs.json();

  return (
    <main className='min-h-[100vh]'>
      <header className='bg-gray-600'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center py-3 max-w-[80vw] mx-auto'>
          <div>
            <p className='font-bold text-xs md:text-lg'>
              På jakt efter nya jobbmöjligheter, men behöver hjälp att hitta
              rätt?
            </p>
          </div>
          <div>
            <Link
              href='/'
              className='bg-purple-600 rounded text-white py-2 px-3 text-center'
            >
              Kontakta Oss
            </Link>
          </div>
        </div>
      </header>
      <section className='max-w-[80vw] mx-auto my-10'>
        <h1 className='text-4xl'>Lediga tjänster</h1>
        <Jobs initialJobs={jobs.data} />
      </section>
    </main>
  );
}
