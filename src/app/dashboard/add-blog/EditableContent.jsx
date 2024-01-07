import React from 'react';

const EditButton = ({ children, ...props }) => {
    return (
        <button {...props} className="bg-white border  rounded px-3 py-2 text-black hover:bg-gray-100 text-sm font-light flex items-center  gap-2">
            {children}
        </button>
    );
};

const EditableContent = () => {
    const handleAddHeading = () => {
        const content = document.getElementById('content');
        if (content) {
            content.innerHTML += `<h2 class="text-3xl font-bold text-black">Some Heading</h2>`;
        }
    };

    const handleAddList = () => {
        const content = document.getElementById('content');
        if (content) {
            content.innerHTML += `<ul class="list-none my-5">
            <li class="border-b border-gray-200 px-4 py-3 hover:bg-gray-50">
                Item 1
            </li>
            <li class="border-b border-gray-200 px-4 py-3 hover:bg-gray-50">
                Item 2
            </li>
            <li class="border-b border-gray-200 px-4 py-3 hover:bg-gray-50">
                Item 3
            </li>
        </ul>`;
        }
    };

    const handleAddCode = () => {
        const content = document.getElementById('content');
        if (content) {
            content.innerHTML += `<pre><code>console.log('hello world!');</code></pre>`;
        }
    };

    return (
        <>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                    <div className="flex gap-4 my-5">
                        <EditButton onClick={handleAddHeading}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                />
                            </svg>
                            Heading
                        </EditButton>

                        <EditButton onClick={handleAddList}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                                />
                            </svg>
                            List
                        </EditButton>

                        <EditButton onClick={handleAddCode}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                            </svg>
                            Code
                        </EditButton>
                    </div>
                    <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg" id="content" contentEditable="true">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet mattis ligula. Donec sed ipsum sed augue pharetra ultricies. Praesent tincidunt ante at metus
                        iaculis condimentum. Etiam et augue semper, venenatis magna a, finibus dolor. Mauris viverra tincidunt nulla ut tempor. Vivamus nec tortor malesuada, dignissim dolor vel,
                        rhoncus eros. Aliquam porta, nulla aliquam suscipit viverra, sem elit euismod felis, et facilisis turpis sapien sed felis. Cras sit amet convallis enim. Mauris a nisi lobortis
                        magna iaculis semper. Ut euismod nisi ut erat ornare, vitae cursus tellus vestibulum. Nam tristique vel arcu a facilisis. Nulla egestas, dui ac hendrerit ultrices, libero odio
                        gravida risus, a sagittis magna ligula fringilla tortor. Pellentesque rutrum congue nisi vitae faucibus.
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditableContent;
