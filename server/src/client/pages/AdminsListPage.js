import React , {Component} from 'react'
import {connect } from 'react-redux'
import {fetchAdmins } from '../actions'
import requireAuth from '../components/hocs/requireAuth'
class AdminsListPage extends Component {

    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        this.props.admins.map(admin => {
            console.log(admin)
            return <li key={admin.id}>{admin.name} hi</li>;
        })
    }


    render() {
       return ( <div>
            <h3>Protected List of admins</h3>
            <ul>
                {this.renderAdmins()}
            </ul>
        </div>
       )}

}

function mapStateToProps ({ admins } ) {
    return {admins} ;
}

export default {
    component : connect (mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)),
    loadData : ({ dispatch }) => dispatch(fetchAdmins())
}