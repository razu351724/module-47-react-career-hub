import { useEffect, useState } from "react";
import Job from "../Job/Job";
import PropTypes from 'prop-types';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div>
                <h3 className="text-3xl text-center font-semibold">Featured Jobs:{jobs.length}</h3>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 my-6">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div> 
    );
};


export default FeaturedJobs;