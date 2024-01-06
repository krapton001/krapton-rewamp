'use client';
import { useEffect, useRef, useState } from 'react';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/vs2015.css'; // This is the style similar to VS Code


const CodeTypingComponent = ({ code, setCode, className, ...props }) => {
    const [typedCode, setTypedCode] = useState('');
    const ref = useRef();

    const highlightColor = () => {
        // const codeElement = ref.current.querySelector('code');
        // if (codeElement) {
        //     // Remove the highlighted data attribute to allow re-highlighting
        //     codeElement.removeAttribute('data-highlighted');
        //     hljs.highlightElement(codeElement);
        //     codeElement.style.background = 'black';
        // }
    }

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
                            setTypedCode((prevTypedCode) => {
                                const newTypedCode = prevTypedCode + nextChar;
                                return newTypedCode;
                            });
                            if (setCode) {
                                setCode((prevCode) => prevCode + nextChar);
                            }
                            index++;
                        } else {
                            highlightColor();
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
    }, [code]);
    

    return (
        <div className={`${className} p-4 overflow-scroll min-w-full xl:min-w-[600px] codeContainer text-code shadow-xl rounded-xl bg-black h-96`} {...props} ref={ref}>
            <pre><code className="bg-black language-html">{typedCode}</code></pre>
        </div>
    );
};

export default CodeTypingComponent;
