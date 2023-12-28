export default function JobCard({ job: { title, location, type, url } }) {
    return (
        <div className="job-post-box">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-4">
                    <div className="job-post-info d-flex justify-content-start align-items-center">
                        <div className="job-post-category">
                            <span>{title}</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5">
                    <div className="job-post-wrapper d-flex align-items-center">
                        <div className="job-post-time d-flex align-items-center">
                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 16.75C13.2802 16.75 16.75 13.2802 16.75 9C16.75 4.71979 13.2802 1.25 9 1.25C4.71979 1.25 1.25 4.71979 1.25 9C1.25 13.2802 4.71979 16.75 9 16.75Z"
                                    stroke="#5F6168"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M9 5.7998V9.9998L11.8 11.3998" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>{type}</span>
                        </div>
                        <div className="job-post-location d-flex align-items-center">
                            <svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 7.51463C1 3.9167 4.13401 1 8 1C11.866 1 15 3.9167 15 7.51463C15 11.0844 12.7658 15.2499 9.28007 16.7396C8.46748 17.0868 7.53252 17.0868 6.71993 16.7396C3.23416 15.2499 1 11.0844 1 7.51463Z"
                                    stroke="#5F6168"
                                    strokeWidth="1.5"
                                />
                                <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z" stroke="#5F6168" strokeWidth="1.5" />
                            </svg>
                            <span>{location}</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="job-post-apply-btn text-start text-md-end">
                        <a className="tp-btn-inner tp-btn-hover alt-color-orange" href={url} target="_blank">
                            <span>Apply</span> <b />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
