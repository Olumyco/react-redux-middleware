import React from 'react';
import { connect } from 'react-redux';
import { postArticle} from '../actions/article';

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postArticle: data => dispatch(postArticle(data))
    };
};

const Another = (props) => {
    console.log('Another', props);
    return (
        <></>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Another);