'use client';
import React from 'react';
import BottomOptions from './BottomOptions';
import EditableContent from './EditableContent';
import ImageContent from './ImageContent';
import { HOST } from '@/constants';
//const HOST = 'http://localhost:3000'

const AddBlog = () => {
    const getInnterHtml = (id) => {
        return document.getElementById(id)?.innerHTML || '';
    };

    const getValue = (id) => {
        return document.getElementById(id)?.value || '';
    };
    const uploadImage = async () => {
        // Access the file input element and its files
        const fileInput = document.getElementById('input-file');
        if (fileInput && fileInput.files.length > 0) {
            const file = fileInput.files[0];

            // Extract the file extension
            const fileExtension = file.name.split('.').pop();
    
            // Replace spaces and append file extension to 'somefile'
            // For more sophisticated encryption, replace Date.now() with your encryption method
            const newFileName = `somefile_${Date.now()}.${fileExtension}`.replace(/\s+/g, '');
    
            // Create a FormData object and append the file
            var formData = new FormData();
            formData.append('file', file, newFileName);

            // Define requestOptions for fetch
            var requestOptions = {
                method: 'POST',
                body: formData,
                redirect: 'follow'
            };
    
            // Make the request to your server
            const res = await fetch(`${HOST}/api/imageUpload?filename=${newFileName}`, requestOptions)
            const data = await res.json();
            return data
        } else {
            console.log('No file selected');
        }
    };
    

    const handleSubmit = async () => {
        const { url } = await uploadImage();
        if(!url) return;
        const title = getInnterHtml('title');
        const description = getInnterHtml('description');
        const content = getInnterHtml('content');
        const tags = getValue('tags');
        const createdBy = getValue('createdBy');

        const formData = {
            title,
            description,
            createdBy,
            content,
            tags,
            imageUrl: url
        };

        const response = await fetch(`/api/blog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData }),
        });
    };

    return (
        <>
            <div className="  overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="title" contentEditable="true">
                                    A better workflow
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700" id="description" contentEditable="true">
                                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ImageContent />
                    <EditableContent />
                </div>
            </div>
            <BottomOptions handleSubmit={handleSubmit} />
        </>
    );
};

export default AddBlog;
