export const fetchAllLists = () => (
    $.ajax({
        url: `api/lists`
    })
)

export const fetchList = (listId) => (
    $.ajax({
        url: `api/lists/${listId}`
    })
)

export const addList = (title) => (
    $.ajax({
        url: `api/lists`,
        method: 'POST',
        data: { list: { title } }
    })
)

export const updateList = (listId, title) => (
    $.ajax({
        url: `api/lists/${listId}`,
        method: 'PATCH',
        data: { list: { title } }
    })
)

export const deleteList = (listId) => (
    $.ajax({
        url: `api/lists/${listId}`,
        method: 'DELETE'
    })
)