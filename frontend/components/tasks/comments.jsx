import React, { useState } from 'react';

const Comments = ({ comment, update, updateComment, deleteComment }) => {
    const [newComment, setNewComment] = useState(comment.text);
    const [editing, setEditing] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);

    function handleDeleteComment() {
        deleteComment(comment.id)
            .then(update(), setShowPopUp(false));
    }

    function handleSubmit(e) {
        e.preventDefault();
        updateComment(comment.id, newComment)
            .then(update(), setEditing(false));
    }

    return (
        <div className="comments-container">
            {editing ? 
                <form className="edit-comment-form">
                    <input type="text"
                        maxLength="50"
                        className="edit-comment-input"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <i className="far fa-check-square update-comment"
                        onClick={handleSubmit}
                    ></i>
                </form>
            :
                <div className="comment-item-wrapper">
                    <div className="comment-text">{comment.text}</div>
                </div>
            }
            <i className="fas fa-pencil-alt update-button" onClick={() => setEditing(!editing)}></i>
            <span className="delete-list-button" onClick={() => setShowPopUp(true)}>&#x2715;</span>
            {showPopUp ?
                <div className="popup-wrapper" onClick={() => setShowPopUp(false)}>
                    <div className="popup-container" onClick={(e) => e.stopPropagation()} >
                        <div className="popup-inner-container">
                            <p className="popup-text">Are you sure you want to delete this item?</p>
                            <div className="popup-btns">
                                <button onClick={() => setShowPopUp(false)} className="popup-no">NO</button>
                                <button onClick={handleDeleteComment} className="popup-yes">YES</button>
                            </div>
                        </div>
                    </div>
                </div>
            : ""}
        </div>
    )
}

export default Comments;