import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
​
const UserList = ({ users, onUserClick }) => (
  <ul>
    {users.map((user, index) => (
      <UserItem key={index} {...user} onClick={() => onUserClick(index)} />
    ))}
  </ul>
)
​
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onUserClick: PropTypes.func.isRequired
}
​
export default UserList