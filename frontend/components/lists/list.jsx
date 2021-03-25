import React, { useState, useEffect } from 'react';
import ListItem from './list_item';

const List = ({ lists, fetchEveryList }) => {
    const [currLists, setCurrLists] = useState(lists)

    useEffect(() => {
        fetchEveryList();
    }, [currLists]); 

    return (
        <div>
            {lists.map((list, idx) => {
                return <ListItem list={list} tasks={list.tasks ? Object.values(list.tasks) : []} key={idx} />
            })}
        </div>
    )
}

export default List;