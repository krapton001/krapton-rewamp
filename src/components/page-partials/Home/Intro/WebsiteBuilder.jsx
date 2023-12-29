'use client';
import React, { useState } from 'react'
import { autoTypingCode } from './constant'
import CodeTypingComponent from '@/components/common/CodeTyping'

const WebsiteBuilder = () => {
    const [code, setCode] = useState('');

  return (
    <div className="mx-auto max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center">
    <div className="">
        {/* <h2 className="text-center text-primary font-bold text-5xl mb-10">Frontend</h2> */}
        {/* <CodeTypingComponent code={IntroCode} /> */}
        <div className="max-w-sm rounded-xl shadow group bg-white overflow-hidden border z-10 hover:shadow-xl hover:border-primary relative" dangerouslySetInnerHTML={{__html: code}}></div>
    </div>
    <div className="">
        {/* <h2 className="text-center text-primary font-bold text-5xl mb-10">Backend</h2> */}
        <CodeTypingComponent setCode={setCode} code={autoTypingCode} />
    </div>
</div>
  )
}

export default WebsiteBuilder