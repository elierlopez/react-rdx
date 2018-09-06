import React from 'react'
import Footer from './Footer'
import AddUsers from '../containers/AddUser'
import VisibleUserList from '../containers/VisibleUserList'
​
const App = () => (
  <div>
    <AddUsers />
    <VisibleUserList />
    <Footer />
  </div>
)
​
export default App