import { addComment, updateComment, deleteComment } from '../util/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

export const removeComment = (comment) => ({
    type: DELETE_COMMENT,
    comment
})

export const addThisComment = (comment) => dispatch => addComment(comment)
    .then(comment => dispatch(receiveComment(comment)))

export const updateThisComment = (commentId, text) => dispatch => updateComment(commentId, text)
    .then(comment => dispatch(receiveComment(comment)))

export const deleteThisComment = (commentId) => dispatch => deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment)))
