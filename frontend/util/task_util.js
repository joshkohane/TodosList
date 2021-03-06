export const fetchTask = (taskId) => (
    $.ajax({
        url: `api/tasks/${taskId}`
    })
)

export const addTask = (task) => (
    $.ajax({
        url: `api/tasks`,
        method: 'POST',
        data: { task }
    })
)

export const updateTask = (taskId, task) => (
    $.ajax({
        url: `api/tasks/${taskId}`,
        method: 'PATCH',
        data: { task }
    })
)

export const deleteTask = (taskId) => (
    $.ajax({
        url: `api/tasks/${taskId}`,
        method: 'DELETE'
    })
)