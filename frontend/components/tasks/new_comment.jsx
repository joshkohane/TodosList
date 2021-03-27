import React, { useState } from 'react';

const NewComment = ({ addComment, task, update }) => {
    const [text, setText] = useState('');

    function handleSubmit() {
        const comment = { task_id: task.id, text }
        if (text.length > 3) {
            addComment(comment)
                .then(setText(''), update());
        }
    }

    return (
        <form className="new-comment-form">
            <input type="text"
                className="new-comment-input"
                placeholder="Add a new comment!"
                maxLength="50"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="new-task-submit" onClick={handleSubmit}>Add Comment</button>
        </form>
    )
}

export default NewComment;