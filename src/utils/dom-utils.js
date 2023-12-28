export const injectScript = (src) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.head.appendChild(script);
};

export const injectStyle = (src, rel = 'stylesheet', type = 'text/css') => {
    var link = document.createElement('link');
    link.rel = rel;
    link.type = type;
    link.href = src;
    document.head.appendChild(link);
};
