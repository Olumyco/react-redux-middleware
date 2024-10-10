import React, { useState } from 'react';

const ArticleForm = ({ maxCharLenExceededError, postArticle }) => {
    const [title, setTitle] = useState(''),
        [content, setContent] = useState('');
    
    const handleTitle = e => {
        setTitle(e.target.value);
    };
    
    const handleContent = e => {
        setContent(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            title: title,
            content: content
        };
        console.log(data);
        postArticle(data);
    };


    return (
        <div style={{border: '1px solid #ccc', padding: '20px'}}>
            <h2>Post Article</h2>
            <p style={{color: 'red'}}>{maxCharLenExceededError}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={handleTitle} />
                <br/><br/>
                <textarea placeholder="Content" value={content} onChange={handleContent} style={{width: '170px', height: '50px'}}></textarea>
                <br/><br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ArticleForm;