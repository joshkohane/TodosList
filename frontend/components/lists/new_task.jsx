import React, { useState } from 'react';

const NewTask = ({ addTask, listId, handleAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    function handleCreate(e) {
        e.preventDefault();
        console.log(description.length)
        if (title.length < 3 || description.length < 3) {
            setError('Title and Description must be longer than 3 characters');
        } else {
            const task = {list_id: listId, title: title, description: description};
            addTask(task)
                .then(
                    setTitle(''),
                    setDescription(''),
                    handleAddTask(),
                    setError('')
                )
        }
    }

    return (
        <div>
            {error.length > 0 ? 
                <p className="error-msg">{error}</p>
            : ""}
            <form className="new-task-form">
                <label>
                    <h2 className="new-task-label">Title</h2>
                    <input type="text"
                        className="new-task-input"
                        maxLength="25"
                        placeholder="Add your title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <h2 className="new-task-label">Description</h2>
                    <textarea type="text"
                        className="new-task-description"
                        maxLength="150"
                        placeholder="Add your description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button className="new-task-submit" onClick={handleCreate}>Create Task</button>
            </form>
        </div>
    )
}

export default NewTask;