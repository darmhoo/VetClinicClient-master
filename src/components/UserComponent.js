import React from 'react';
import APIServiceCall from './APIServiceCall'


const myStyle = {
    color: '#FFFAF0'
}

export default class UserComponent extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users : []
      }
    }


    componentDidMount(){
        APIServiceCall.getUsers().then(res => {
            console.log("res is .......... ", res)
            this.setState({users: res.data})
        })
        .catch(function (ex) {
            console.log('Response parsing failed. Error: ', ex);
        });;

    }    

    render() {
        return (
            <div>
                <h2 className="text-center">User Details </h2>
                <table style={myStyle} className="table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => 
                                <tr key ={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
  }
}