import React from 'react';

const BottomOptions = ({ handleSubmit }) => {
    return (
        <div className="md:flex md:items-center md:justify-between bg-darker shadow-xl py-5 px-20 fixed bottom-0 inset-x-0">
            <div className="flex gap-5">
                <input type="text" id="tags" defaultValue="Technology, Programming, AI" className="border-2 rounded-md px-4 py-2" placeholder="Tags" />
                <input type="text" id="createdBy" defaultValue="Admin" className="border-2 rounded-md px-4 py-2" placeholder="Created By" />
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="ml-3 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 gap-4"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                        />
                    </svg>
                    Publish
                </button>
            </div>
        </div>
    );
};

export default BottomOptions;
