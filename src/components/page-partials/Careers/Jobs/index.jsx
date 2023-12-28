import { Fragment } from 'react';
import jobsdata from '../../../../data/jobs.json';
import JobCard from './JobCard';

export default function Jobs() {
    const { jobs } = jobsdata;
    const renderJob = () => {
        return jobs.map((job, idx) => (
            <Fragment key={idx}>
                <JobCard job={job} />
            </Fragment>
        ));
    };
    return (
        <div className="job-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="job-section-box text-center mb-40">
                            <h3 className="tp-section-title">Open Positions</h3>
                            <p>
                                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque tristique <br />
                                Et amet risus enim accumsan sit purus sit.
                            </p>
                        </div>
                        {renderJob()}
                    </div>
                </div>
            </div>
        </div>
    );
}
