import { types } from '../types/article';
import { maxCharLenExceeded } from '../actions/article';

export const validatePostArticle = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === types.POST_ARTICLE) {
                if (action.payload.title.length > 15) {
                    return dispatch(maxCharLenExceeded());
                }
            }
            return next(action)
        }
    }
}