import { connect } from 'react-redux'
import { toggleUser } from '../actions'
import UserList from '../components/UserList'
​
const getVisibleUsers = (users, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return users
    case 'SHOW_COMPLETED':
      return users.filter(t => t.complewted)
    case 'SHOW_ACTIVE':
      return users.filter(t => !t.completed)
  }
}
​
const mapStateToProps = state => {
  return {
    users: getVisibleUsers(state.users, state.visibilityFilter)
  }
}
​
const mapDispatchToProps = dispatch => {
  return {
    onUserClick: id => {
      dispatch(toggleUser(id))
    }
  }
}
​
const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)
​
export default VisibleUserList