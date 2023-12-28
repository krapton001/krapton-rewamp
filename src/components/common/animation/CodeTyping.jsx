'use client';
import React, { useState, useEffect } from 'react';
import styles from './CodeTyping.module.css';

const demoCode = `
/// Adding mongoose
var mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true});

// Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  age: Number
});

// Create a model
const User = mongoose.model('User', UserSchema);

// Create a new user
const newUser = new User({ username: 'john_doe', age: 30 });
newUser.save().then(doc => {
  console.log('User saved:', doc);
}).catch(err => {
  console.error('Error saving user:', err);
});

// Find a user
User.findOne({ username: 'john_doe' }).then(doc => {
  console.log('User found:', doc);
}).catch(err => {
  console.error('Error finding user:', err);
});

`;

const CodeTypingComponent = ({ code = demoCode, setCode }) => {
    const codeSample = code.split('');
    const [typedCode, setTypedCode] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < codeSample.length - 1) {
                setTypedCode((prev) => prev + codeSample[index]);
                if (setCode) setCode((prev) => prev + codeSample[index]);
                index++;
            }
            if (index === codeSample.length) clearInterval(interval);
        }, 0); // Adjust typing speed as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.codeContainer}>
            <pre>{typedCode}</pre>
        </div>
    );
};

export default CodeTypingComponent;
