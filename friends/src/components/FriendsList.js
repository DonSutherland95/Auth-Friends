import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default class FriendsList extends Component {
    state = {
    friendsList: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
    .get("/api/friends").then(req=>{
      this.setState({
        friendsList: req.data
      })
    }).catch(err=>{
      console.log(err);
    })
  };
    render() {
        return (
            <div>
                <h2>Your friends:</h2>
                {this.state.friendsList.map(friend => (
                    <div key={friend.id}>
                        <h2 >{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}
