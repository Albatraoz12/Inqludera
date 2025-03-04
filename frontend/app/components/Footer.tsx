import Link from 'next/link';

export default function Navbar() {
  return (
    <footer className='bg-white text-black py-10'>
      <section className='flex flex-col justify-center items-center px-2'>
        <div>
          <h4 className='text-xl'>Prenumenera På våra nyhetsbrev</h4>
          <p className='text-sm'>
            Bli först med att få information om nya förändringar och nyheter hos
            oss!
          </p>
        </div>
        <div>
          <form className='flex flex-col gap-2 mt-2'>
            <div className='flex flex-col'>
              <label htmlFor='email'>E-postadress</label>
              <input
                type='email'
                id='email'
                name='email'
                className='border border-black rounded'
              />
            </div>
            <div>
              <button
                type='submit'
                className='py-2 px-3 border bg-purple-600 rounded text-white'
              >
                Prenumenera
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className='flex justify-around mt-10'>
        <div className='flex flex-col'>
          <Link href='/'>Nyheter</Link>
          <Link href='/'>Om Inqludera</Link>
        </div>

        {/* contact us */}
        <div className='flex flex-col'>
          <p>Kontakta oss:</p>
          <p>070 123 45 67</p>
          <p>Info@inqludera.se</p>
        </div>
      </section>
      {/* Socials */}
      <section className='flex justify-center items-center gap-3 mt-3'>
        <Link href='/'>Instagram</Link>
        <Link href='/'>LinkedIn</Link>
        <Link href='/'>Facebook</Link>
      </section>
    </footer>
  );
}
