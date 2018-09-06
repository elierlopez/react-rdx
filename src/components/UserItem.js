import React from 'react'
import PropTypes from 'prop-types'
​
const UserItem = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)
​
UserItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}