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
        <div className={`${className} z-10 p-4 overflow-scroll text-code shadow-xl bg-black rounded code-type`} {...props} ref={ref}>
            <pre>{typedCode}</pre>
        </div>
    );
};

export default CodeTypingComponent;
