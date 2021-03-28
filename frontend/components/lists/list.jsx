import React, { useState, useEffect } from 'react';
import ListItem from './list_item';

const List = ({ lists, fetchEveryList, addList, updateList, deleteList, addTask, updateTask, deleteTask }) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        fetchEveryList();
    }, [lists.length]); 

    function handleSubmit(e) {
        e.preventDefault();
        if (input.length > 0) {
            addList(input);
            setInput('');
        }
    }

    function handleTask() {
        setTimeout(() => fetchEveryList(), 50)
    }

    return (
        <div className="list-container" >
            <form className="new-list-form"
                onSubmit={handleSubmit}
            >
                <input type="text"
                    placeholder="Add some new lists!"
                    maxLength="25"
                    className="new-list-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <i className="far fa-check-square new-list-btn"
                    onClick={handleSubmit}
                ></i>
            </form>
            {lists ? 
                lists.map((list, idx) => {
                    return <ListItem list={list} 
                        tasks={list.tasks ? Object.values(list.tasks) : []} 
                        key={idx} 
                        updateList={updateList}
                        deleteList={deleteList}
                        addTask={addTask}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        handleTask={handleTask}
                        />
                })
            :
                <h1>Add Some Lists To Get Started!</h1>
            }
        </div>
    )
}

export default List;