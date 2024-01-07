import LazyImg from '@/components/common/LazyImg';
import React from 'react';

const ImageContent = () => {
    const handleSelect = () => {
        document.getElementById('input-file')?.click();
    }

    const handleSelctImg = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
    
            reader.onload = function(e) {
                const preview = document.getElementById('imgPreview');
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
    
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="-ml-12 -mt-12 p-12 lg: lg:top- lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden relative">
            <button onClick={handleSelect} className="bg-white border px-3 py-2 rounded-none flex gap-2 text-sm items-center mb-2 hover:bg-gray-100 absolute">
                <input accept="image/*"  onChange={handleSelctImg} type="file" id="input-file" className="hidden"></input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                </svg>
                Edit
            </button>
            <LazyImg
                src="https://krapton.com/assets/custom_icons/logo-full.webp"
                id="imgPreview"
                className="w-[48rem] h-[25rem] object-cover max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
        </div>
    );
};

export default ImageContent;
