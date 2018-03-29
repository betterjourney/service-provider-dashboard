import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  getUser() {
    var currentChatRoomInfo = this.props.chatRoomInfo.filter((chatRoomInfo) => {
      return chatRoomInfo['chatroomId'] === this.props.currentChatRoom
    })

    var userProfile = this.props.users.filter((user) => {
      return user['id']  === currentChatRoomInfo[0]['secondUser']
    })

    this.setState({
      user: userProfile[0]
    })
    console.log("ucer profile", this.state.user, userProfile)
  }

  componentWillMount() {
    this.getUser()
    console.log("currentuser from", this.props.currentUser)
  }

  render() {
    return (
      <div className="messenger-component profile">
        <h3 className="section-title">Profile</h3>
        <div className="profile-section">
          <h5>General Information</h5>
          {console.log('currennt user', this.props.currentUser)}
          <h6>Name: {this.props.currentUser['name']}</h6>
          <h6>Last Name: {this.props.currentUser['lastName']}</h6>
          <h6>Age: {this.props.currentUser['age']}</h6>
        </div>
        <div className="profile-section">
          <h5>Journeys</h5>
          {console.log("journeys", this.props.currentUser['journeys'])}
          {
            this.props.currentUser['journeys'].map((journey) => {
              <h6>{journey['name']}</h6>
            })
          }
        </div>
        <div className="profile-section">
          <h5>Support Team</h5>
        </div>
      </div>
    );
  }
} 

export default Profile;
