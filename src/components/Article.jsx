import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ArticleForm from './ArticleForm';
import ArticlePosts from './ArticlePosts';
import { postArticle} from '../actions/article';
import { getPostsFromApi } from '../actions/article';

const mapStateToProps = state => {
    return {
        articles: state.articles,
        maxCharLenExceededError: state.maxCharLenExceededError,
        apiPosts: state.apiPosts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postArticle: data => dispatch(postArticle(data)),
        getPostsFromApi: () => dispatch(getPostsFromApi())
    };
};

const Article = ({articles, maxCharLenExceededError, postArticle, getPostsFromApi, apiPosts}) => {
    
    useEffect(() => {
        getPostsFromApi();
    }, []);

    return (
        <div>
            <ArticleForm maxCharLenExceededError={maxCharLenExceededError} postArticle = {postArticle} />
            <ArticlePosts articles = {articles} apiPosts={apiPosts} />
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);