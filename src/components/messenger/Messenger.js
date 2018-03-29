import React, { Component } from 'react';

import Chat from './Chat';
import ChatsList from './ChatsList';
import Profile from './Profile';

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state= {
      currentChatRoom: 0
    }

    this.changeCurrentChatRoom = this.changeCurrentChatRoom.bind(this);
  }

  componentWillMount() {
    this.setState({
      chatRoom: this.props.chatRoom,
      chatRoomInfo: this.props.chatRoomInfo,
      usersData: this.props.usersData,
    })
    this.getUser()
  }

  changeCurrentChatRoom(id) {
    this.setState({
      currentChatRoom: id
    })
    this.getUser()
  }
  

  getUser() {
    var currentChatRoomInfo = this.props.chatRoomInfo.filter((chatRoomInfo) => {
      return chatRoomInfo['chatroomId'] === this.state.currentChatRoom
    })

    var userProfile = this.props.users.filter((user) => {
      return user['id']  === currentChatRoomInfo[0]['secondUser']
    })

    console.log("current user get", userProfile[0])

    this.setState({
      user: userProfile[0]
    })
  }

  render() {
    return (
      <div className="messenger">
        <div className="row">
          <div className="col-md-3">
            <ChatsList currentChatRoom={this.state.currentChatRoom} chatRoomInfo={this.props.chatRoomInfo} 
              changeCurrentChatRoom={this.changeCurrentChatRoom}
              currentUserId={this.props.currentUserId}  
              users= {this.props.users}/>
          </div>
          <div className="col-md-6">
            <Chat currentChatRoom={this.state.currentChatRoom} chatRoom={this.props.chatRoom}
                  currentUserId={this.props.currentUserId}/>
          </div>

          <div className="col-md-3">
            <Profile currentChatRoom={this.state.currentChatRoom} 
                    chatRoomInfo={this.props.chatRoomInfo}
                    currentUser={this.state.user}
                    users={this.props.users}
                    currentUserId={this.props.currentUserId}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Messenger;
