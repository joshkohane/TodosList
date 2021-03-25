import React, { useState } from 'react';
import TaskItem from './task_item';

const ListItem = ({ list, tasks }) => {
    const [showTasks, setShowTasks] = useState(false);

    return (
        <div>
            <h1 onClick={() => setShowTasks(!showTasks)}>{list.title}</h1>
            {showTasks ? 
                tasks.map(((task, idx) => {
                    return <TaskItem task={task} key={idx} />
                }))
            : ""}
        </div>
    )
}

export default ListItem;