import React, { Component} from 'react'
import { connect } from 'react-redux'
import { fetchUsers} from '../actions'


class UsersList extends Component  {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers(){
        return this.props.users.map( user  =>{
            return <li key={users.id}>{user.name}</li>
        })
    }
    render () {
        return (
            <div> 
                Heres a list of users
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}
UsersList.defaultProps ={
    users : ['hi','mom']
}

function mapStateToProps(state) {
    return {users: state.users}
}

function loadData( store) {
    console.log('this is the store' + store)
  return store.dispatch(fetchUsers())
}

export { loadData};

export default connect(mapStateToProps, {fetchUsers})(UsersList)