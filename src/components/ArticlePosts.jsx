import React from 'react';

const ArticlePosts = ({ articles, apiPosts }) => {
    return (
        <>
            <div>
                {articles.map((data, index) => {
                    return (
                        <div key={index} style={{borderBottom: '1px solid #444', paddingBottom: '5px'}}>
                            <h2>{data.title}</h2>
                            <p>{data.content}</p>
                        </div>
                    );
                })}
            </div>
            <hr/>
            <div>
                {apiPosts.map((data, index) => {
                    return (
                        <div key={index} style={{borderBottom: '1px solid #444', paddingBottom: '5px'}}>
                            <h3>{data.title}</h3>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ArticlePosts;