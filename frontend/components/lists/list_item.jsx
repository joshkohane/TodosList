import React, { useState } from 'react';
import TaskItem from './task_item';
import NewTask from './new_task';

const ListItem = ({ list, tasks, updateList, handleDelete, deleteList, addTask, updateTask, handleTask }) => {
    const [showTasks, setShowTasks] = useState(false);
    const [editTitleBtn, setEditTitleBtn] = useState(false);
    const [newTitle, setNewTitle] = useState(list.title);
    const [showAddTask, setShowAddTask] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        updateList(list.id, newTitle);
        setEditTitleBtn(false);
    }

    function handleDeleteList() {
        deleteList(list.id);
        setShowPopUp(false);
        handleTask();
    }

    function handleAddTask() {
        handleTask()
    }

    return (
        <div className="list-item-container" onClick={() => setShowTasks(!showTasks)}>
            {editTitleBtn ? 
                <form onClick={(e) => e.stopPropagation()}
                    onSubmit={handleSubmit}
                >
                    <input type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="list-item-title-input"
                        maxLength="20"
                    />
                    <i className="far fa-check-square update-title"
                        onClick={handleSubmit}
                        ></i>
                </form>
            : 
                <h1 className="list-item-title">{list.title}</h1>
            }
            <div className="edit-list-buttons" onClick={(e) => e.stopPropagation()}>
                <i className="fas fa-pencil-alt update-button" onClick={() => setEditTitleBtn(!editTitleBtn)}></i>
                <span className="delete-list-button" onClick={() => setShowPopUp(true)}>&#x2715;</span>
            </div>
            {showTasks ?
                <div onClick={(e) => e.stopPropagation()}>
                    {showAddTask ? 
                        <div>
                            <p onClick={() => setShowAddTask(false)} className="add-task-header">- Add Task</p>
                            <NewTask addTask={addTask} listId={list.id} handleAddTask={handleAddTask} />
                        </div>
                    : 
                        <p onClick={() => setShowAddTask(true)} className="add-task-header">+ Add Task</p>
                    }
                </div>
            : ""}
            {showTasks ?
                tasks.map(((task, idx) => {
                    return <TaskItem task={task} key={idx} updateTask={updateTask} handleAddTask={handleAddTask} />
                }))
            : ""}
            {showPopUp ?
                <div className="popup-wrapper" onClick={() => setShowPopUp(false)}>
                    <div className="popup-container" onClick={(e) => e.stopPropagation()} >
                        <div className="popup-inner-container">
                            <p className="popup-text">Are you sure you want to delete this item?</p>
                            <div className="popup-btns">
                                <button onClick={() => setShowPopUp(false)} className="popup-no">NO</button>
                                <button onClick={handleDeleteList} className="popup-yes">YES</button>
                            </div>
                        </div>
                    </div>
                </div>
            : ""}
        </div>
    )
}

export default ListItem;