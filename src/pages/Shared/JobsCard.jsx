import React from "react";

const JobsCard = ({ job }) => {
  const { title, location, jobType, category, company, company_logo } = job;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex items-center gap-2">
          <img className="w-10" src={company_logo} alt="" />
          <h2 className="card-title">
            {title}
            <div className="badge badge-sm badge-secondary">{category}</div>
          </h2>
        </div>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
