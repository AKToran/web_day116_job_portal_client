import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  console.log(applications);
  return (
    <div>
      Applications on job: {job_id}
      {
        applications.map(app => <p key={app._id}>{ app.applicant } {app.github}</p>)
      }
    </div>
  );
};

export default ViewApplications;