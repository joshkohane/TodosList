export const fetchTask = (taskId) => (
    $.ajax({
        url: `api/tasks/${taskId}`
    })
)

export const addTask = (listId, task) => (
    $.ajax({
        url: `api/tasks`,
        method: 'POST',
        data: { task: { list_id: listId, task } }
    })
)

export const updateTask = (taskId, task) => (
    $.ajax({
        url: `api/tasks/${taskId}`,
        method: 'PATCH',
        data: { task: { task } }
    })
)

export const deleteTask = (taskId) => (
    $.ajax({
        url: `api/tasks/${taskId}`,
        method: 'DELETE'
    })
)