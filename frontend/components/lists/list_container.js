import List from './list';
import { connect } from 'react-redux';
import { fetchEveryList } from '../../actions/list_actions'

const mapSTP = state => ({
    lists: Object.values(state.lists)
})

const mapDTP = dispatch => ({
    fetchEveryList: () => dispatch(fetchEveryList())
})

export default connect(mapSTP, mapDTP)(List);