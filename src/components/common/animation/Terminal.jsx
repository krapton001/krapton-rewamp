import React from 'react';

const Terminal = () => {
    return (
        <div className="terminal">
            <div className="terminal-header">
                <div className="terminal-button red" />
                <div className="terminal-button yellow" />
                <div className="terminal-button green" />
            </div>
            <div className="terminal-body">
                <p>$ git status</p>
                <p>$ npm install</p>
                <p>$ echo "Hello World"</p>
            </div>
        </div>
    );
};

export default Terminal;
