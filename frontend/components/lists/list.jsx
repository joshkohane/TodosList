import React, { useState, useEffect } from 'react';

const List = ({ lists, fetchEveryList }) => {
    const [currLists, setCurrLists] = useState(lists)

    useEffect(() => {
        fetchEveryList();
    }, [currLists]); 

    return (
        <div>
            HELLLLLOOOOOOOOOOO
            {lists.map((list, idx) => {
                return <h1 key={idx} >{list.title}</h1>
            })}
        </div>
    )
}

export default List;