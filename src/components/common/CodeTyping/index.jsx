'use client';
import { useEffect, useRef, useState } from 'react';

const CodeTypingComponent = ({ code, setCode, className, ...props }) => {
    const [typedCode, setTypedCode] = useState('');
    const ref = useRef();

    useEffect(() => {
        let index = 0;
        let interval;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                observer.disconnect();
                if (code) {
                    interval = setInterval(() => {
                        if (index < code.length) {
                            const nextChar = code[index];
                            setTypedCode((prevTypedCode) => prevTypedCode + nextChar);
                            if (setCode) {
                                setCode((prevCode) => prevCode + nextChar);
                            }
                            index++;
                        } else {
                            clearInterval(interval);
                        }
                    }, 10); // Adjust typing speed as needed
                }
            }
        });

        observer.observe(ref.current);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={`${className} p-4 overflow-scroll min-w-full xl:min-w-[600px] codeContainer text-code shadow-xl rounded-xl bg-black h-96`} {...props} ref={ref}>
            <pre>{typedCode}</pre>
        </div>
    );
};

export default CodeTypingComponent;
