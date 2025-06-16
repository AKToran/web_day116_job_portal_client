import React, { use } from 'react';

const JobsList = ({myJobsPromise}) => {
  const jobs = use(myJobsPromise);

  return (
    <div>
      {
        jobs.length
      }
    </div>
  );
};

export default JobsList;