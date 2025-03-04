'use client';
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
              <div className='flex gap-3'>
                <p>{job.jobType.type}</p>
                <p>{job.location.location}</p>
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
