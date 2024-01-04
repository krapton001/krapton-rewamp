'use client';
import React, { useState } from 'react';
import { autoTypingCode } from './constant';
import CodeTypingComponent from '@/components/common/CodeTyping';

const WebsiteBuilder = () => {
    const [code, setCode] = useState('');

    return (
        <div className="lg:mx-auto max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center px-4 xl:px-0">
            <div className="rounded-xl shadow group h-96 w-full xl:min-w-[600px] bg-white overflow-hidden border hover:shadow-2xl relative" dangerouslySetInnerHTML={{ __html: code }}></div>
            <CodeTypingComponent setCode={setCode} code={autoTypingCode} />
        </div>
    );
};

export default WebsiteBuilder;
