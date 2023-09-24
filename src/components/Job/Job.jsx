const Job = ({ job }) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div >
            <div class="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div class="card-actions ">
                        <button class="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;