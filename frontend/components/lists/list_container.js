import List from './list';
import { connect } from 'react-redux';
import { fetchEveryList, addThisList, updateThisList, deleteThisList } from '../../actions/list_actions'

const mapSTP = state => ({
    lists: Object.values(state.lists)
})

const mapDTP = dispatch => ({
    fetchEveryList: () => dispatch(fetchEveryList()),
    addList: (list) => dispatch(addThisList(list)),
    updateList: (listId, list) => dispatch(updateThisList(listId, list)),
    deleteList: (listId) => dispatch(deleteThisList(listId))
})

export default connect(mapSTP, mapDTP)(List);