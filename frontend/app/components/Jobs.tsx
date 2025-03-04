'use client';
import { Briefcase, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const JOBS_PER_PAGE = 10;

export default function Jobs({ initialJobs }: { initialJobs: any }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [filters, setFilters] = useState({ location: '', jobType: '' });
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrera jobben baserat på användarens input
  const filteredJobs = jobs.filter((job: any) => {
    return (
      (filters.location === '' ||
        job.location.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (filters.jobType === '' ||
        job.jobType.type.toLowerCase().includes(filters.jobType.toLowerCase()))
    );
  });

  // Beräkna paginering
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  // Funktion för att hantera filterändringar
  const handleFilter = () => {
    setCurrentPage(1); // Återställ till sida 1 vid filtrering
    setJobs(initialJobs);
  };

  return (
    <div className='flex flex-col gap-10 py-10'>
      {/* 🔍 Filtersektion */}
      <div className='flex gap-3'>
        <input
          type='text'
          placeholder='Filtrera på plats...'
          className='p-2 border rounded'
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <input
          type='text'
          placeholder='Filtrera på job typ...'
          className='p-2 border rounded'
          value={filters.jobType}
          onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
        />
        <button
          className='p-2 bg-blue-500 text-white rounded'
          onClick={handleFilter}
        >
          Sök
        </button>
      </div>

      {/* 📋 Lista av jobb */}
      {currentJobs.length > 0 ? (
        currentJobs.map((job: any) => (
          <Link
            key={job.id}
            href={`/find-jobs/${job.documentId}`}
            className='max-w-[600px]'
          >
            <div className='flex gap-3'>
              <div className='relative h-[90px] w-[90px] bg-white text-black'>
                <Image
                  src={`http://localhost:3001${job.Image.url}`}
                  alt='hejsan'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='my-auto'>
                <p>{job.Title}</p>
                <div className='flex gap-3 py-2 items-center'>
                  <i className='flex gap-3 items-center'>
                    <MapPin size={18} color='white' />
                    {job.location.location}
                  </i>
                  <i className='flex gap-3 items-center'>
                    <Briefcase size={18} color='white' />
                    {job.jobType.type}
                  </i>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Inga lediga tjänster för tillfället. Kontakta oss</p>
      )}

      {/* 🔄 Paginering */}
      <div className='flex justify-center gap-3 mt-5'>
        <button
          className='p-2 bg-gray-500 text-white rounded disabled:opacity-50'
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Föregående
        </button>
        <span className='p-2'>
          Sida {currentPage} av {totalPages}
        </span>
        <button
          className='p-2 bg-gray-500 text-white rounded disabled:opacity-50'
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Nästa
        </button>
      </div>
    </div>
  );
}
