export const addComment = (comment) => (
    $.ajax({
        url: `/api/comments`,
        method: 'POST',
        data: { comment }
    })
)

export const updateComment = (commentId, text) => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'PATCH',
        data: { comment: { text } }
    })
)

export const deleteComment = (commentId) => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    })
)