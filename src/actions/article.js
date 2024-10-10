import { types } from '../types/article';
import axios from 'axios';

export const postArticle = data => {
    return {
        type: types.POST_ARTICLE,
        payload: data
    };
};

export const maxCharLenExceeded = () => {
    return {
        type: types.MAX_CHAR_LEN_EXCEEDED
    };
};

export const apiPostsData = data => {
    return {
        type: types.API_POSTS,
        payload: data
    };
};

export const getPostsFromApi = () => {
    return (dispatch) => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/todos',
            method: 'get'
        })
        .then(resp => {
            let data = resp.data.slice(0, 10);
            dispatch(apiPostsData(data));
        })
        .catch(err => {
            console.log(err);
        });
    };

// return () => {
    //     axios({
    //         url: 'https://jsonplaceholder.typicode.com/todos',
    //         method: 'get'
    //     })
    //     .then(resp => {
    //         console.log(resp.data)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }     
};

