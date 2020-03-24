import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Header, Menu } from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogOut = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(null))
  }
  render() {
    const { authedUser, users } = this.props
    const loggedInUser = authedUser ? users[authedUser].name : ''
    return (
      <div>
        <Header>Would you rather?</Header>
        <Menu>
          <Menu.Item name='home' as={NavLink} to='/' />
          <Menu.Item name='new question' as={NavLink} to='/new' />
          <Menu.Item name='leaderboard' as={NavLink} to='/leaderboard' />
          <Menu.Item position='right'>Logged in as {loggedInUser}</Menu.Item>
          <Menu.Item name='log out' position='right' as={NavLink} to='/login' onClick={this.handleLogOut} />
        </Menu>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Nav)