'use client';
import { Briefcase, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function Jobs({ initialJobs }: { initialJobs: any }) {
  const [jobs, setJobs] = useState(initialJobs);

  return (
    <div className='flex flex-col gap-10 py-10'>
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
        <p>Inga lediga tjänster för tillfället. Kontakta Oss</p>
      )}
    </div>
  );
}
