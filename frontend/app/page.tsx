import Image from 'next/image';
import Link from 'next/link';
// import ReactMarkdown from 'react-markdown';

export default async function Home() {
  // let data = await fetch('http://localhost:3001/api/posts');
  // let posts = await data.json();

  return (
    <main className=''>
      <div className='flex lg:justify-around w-[90%] mx-auto py-10 h-[70vh]'>
        <section className='w-[400px] flex flex-col justify-center gap-2 text-lg'>
          <h1 className='text-6xl'>För ALLA oavsett bakgrund</h1>
          <p>
            Vår hjälp Med ett brett nätverk och stor kunskap inom jobb och
            utbildning stöttar vi arbetssökande genom hela processen Vi matchar
            färdigheter med arbetsgivares behov för en perfekt match.
          </p>
          <div className='flex justify-around'>
            <button
              type='button'
              className='p-2 border border-purple-700 rounded bg-purple-700 w-[150px]'
            >
              Arbetssökande
            </button>
            <button
              type='button'
              className='p-2 border border-purple-700 rounded bg-purple-700 w-[150px]'
            >
              Arbetsgivare
            </button>
          </div>
        </section>
        <section className='hidden lg:flex lg:flex-col lg:justify-center h-full'>
          <Image
            src={'/bild1.jpg'}
            height={500}
            width={500}
            alt='bild'
            className='rounded-full h-[500px]'
          />
        </section>
      </div>
      <div className='flex justify-start w-[90%] mx-auto py-10 h-full'>
        <section className='w-full'>
          <h2 className='text-4xl py-10 text-center'>Våra Tjänster</h2>
          <div className='grid lg:grid-cols-3'>
            {/* Cards here */}
            <div className='flex flex-col min-h-[400px] text-center gap-10 py-6 px-4'>
              <div className='min-w-[200px] h-[200px] relative'>
                <Image
                  src={'/bild2.jpg'}
                  alt='bild2'
                  layout='fill'
                  objectFit='fill'
                  className='rounded'
                />
              </div>
              <div>
                <h3 className='text-2xl pb-2'>Rekrytering & Matchning</h3>
                <p>
                  Vi erbjuder noggrann rekrytering och matchning för både
                  arbetsgivaren och den arbetssökande. Vi jobbar med ett
                  coachande förhållningssätt för säkerställa långsiktiga
                  samabrbeten
                </p>
              </div>
            </div>
            <div className='flex flex-col min-h-[400px] text-center gap-10 py-6 px-4'>
              <div className='min-w-[200px] h-[200px] relative'>
                <Image
                  src={'/bild3.jpg'}
                  alt='bild2'
                  layout='fill'
                  objectFit='fill'
                  className='rounded'
                />
              </div>
              <div>
                <h3 className='text-2xl pb-2'>
                  Rusta & Matcha för Arbetssökande
                </h3>
                <p>
                  Är du inskriven på arbetsförmedlingen? Vi hjälper dig nå
                  drömjobbet genom coaching, vägledning i Rusta & Matcha och vår
                  rekryteringsexpertis. Välkommen att söka till oss!
                </p>
              </div>
            </div>
            <div className='flex flex-col min-h-[400px] text-center gap-10 py-6 px-4'>
              <div className='min-w-[200px] h-[200px] relative'>
                <Image
                  src={'/bild4.jpg'}
                  alt='bild2'
                  layout='fill'
                  objectFit='fill'
                  className='rounded'
                />
              </div>
              <div>
                <h3 className='text-2xl pb-2'>Föreläsningar & Workshops</h3>
                <p>
                  Vi erbjuder även inspirerande och unika workshops,
                  föreläsningar och utbildningar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
