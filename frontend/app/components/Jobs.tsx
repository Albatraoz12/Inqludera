'use client';
import { Briefcase, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function Jobs({ initialJobs }: { initialJobs: any }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [filters, setFilters] = useState({ location: '', jobType: '' });

  const handleFilter = () => {
    const filteredJobs = initialJobs.filter((job: any) => {
      return (
        (filters.location === '' ||
          job.location.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (filters.jobType === '' ||
          job.jobType.type
            .toLowerCase()
            .includes(filters.jobType.toLowerCase()))
      );
    });

    setJobs(filteredJobs);
  };

  return (
    <div className='flex flex-col gap-10 py-10'>
      {/* Filtersektion */}
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
          placeholder='Filtrera på jobbtitel...'
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

      {/* Lista av jobb */}
      {jobs && jobs.length > 0 ? (
        jobs.map((job: any) => (
          <div key={job.id} className='flex gap-3'>
            <div className='h-[90px] w-[90px] bg-white text-black'>X</div>
            <div>
              <p>{job.Title}</p>
              <div className='flex gap-3 py-2'>
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
        ))
      ) : (
        <p>Inga lediga tjänster för tillfället. Kontakta oss</p>
      )}
    </div>
  );
}
