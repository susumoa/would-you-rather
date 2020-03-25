import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Image, Table, Tab } from 'semantic-ui-react'
import { answerQuestion } from '../actions/questions'

class Leaderboard extends Component {
  render() {
    const { users } = this.props
    const userList = users.map((user) => {
      const { answers, questions, name, id, avatarURL } = user
      const numOfQuestions = questions.length
      const numOfAnswers = Object.keys(answers).length
      const sum = numOfQuestions + numOfAnswers
      return {
        id,
        name,
        numOfQuestions,
        numOfAnswers,
        sum,
        avatarURL
      }
    })
    
const sortedUserList = userList.sort((a, b) => b.sum - a.sum)

    return (
      <div>
        <br />
        <Header as='h2' textAlign='center'>Leaderboard</Header>
        <br />

        <Table className='form-center'>
          <Table.Header className='center'>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>User</Table.HeaderCell>
              <Table.HeaderCell>Questions Asked</Table.HeaderCell>
              <Table.HeaderCell>Questions Answered</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body className='center'>
            {sortedUserList.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell><Image src={user.avatarURL} size='mini' className='avatar' /></Table.Cell>
                <Table.Cell>
                  <Header as='h4'>{user.name}</Header>
                </Table.Cell>
                <Table.Cell>{user.numOfQuestions}</Table.Cell>
                <Table.Cell>{user.numOfAnswers}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Leaderboard)