import { types } from '../types/article';

const initialState = {
    articles: [],
    maxCharLenExceededError: '',
    apiPosts: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.POST_ARTICLE:
            console.log(action.payload);
            return {
                ...state,
                articles: [...state.articles, action.payload],
                maxCharLenExceededError: ''
            }
        case types.MAX_CHAR_LEN_EXCEEDED:
            return {
                ...state,
                maxCharLenExceededError: 'Title should not be more than 15 Characters'
            }
        case types.API_POSTS:
            return {
                ...state,
                apiPosts: action.payload
            }
        default:
            return state;
    }
};

export default reducer;