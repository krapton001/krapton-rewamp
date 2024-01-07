import React from 'react';

const Pagination = ({ pagination }) => {
    const { currentPage = 1, totalPages = 2, limit = 10, totalBlogs = 20 } = pagination;

    const renderPagination = Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        if (currentPage === page) {
            return (
                <a
                    href={`/blog/${page}`}
                    key={index + '-pagination'}
                    aria-current="page"
                    className={`relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm  text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                    {index + 1}
                </a>
            );
        } else {
            return (
                <a
                    href={`/blog/${page}`}
                    key={index + '-pagination'}
                    className="relative inline-flex items-center px-4 py-2 text-sm hover:bg-gray-100  text-gray-900 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0"
                >
                    {page}
                </a>
            );
        }
    });

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 mt-20 sm:px-6">
            <div className=" flex flex-1 items-center justify-center md:justify-between ">
                <div className="hidden lg:block">
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{limit * currentPage - limit + 1} </span>
                        to <span className="font-medium">{limit * currentPage} </span>
                        of <span className="font-medium">{totalBlogs} </span>
                        results{' '}
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            disabled
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

                        {renderPagination}
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
