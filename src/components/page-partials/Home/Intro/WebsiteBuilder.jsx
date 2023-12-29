'use client';
import React, { useState } from 'react';
import { autoTypingCode } from './constant';
import CodeTypingComponent from '@/components/common/CodeTyping';

const WebsiteBuilder = () => {
    const [code, setCode] = useState('');

    return (
        <div className="mx-auto max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
            <div
                className="rounded-xl shadow group h-96 w-full bg-white overflow-hidden border hover:shadow-xl hover:border-primary relative"
                dangerouslySetInnerHTML={{ __html: code }}
            ></div>
            <CodeTypingComponent setCode={setCode} code={autoTypingCode} />
        </div>
    );
};

export default WebsiteBuilder;
