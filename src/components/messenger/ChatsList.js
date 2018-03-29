import React, { Component } from 'react';
import ChatListItem from './ChatListItem';

class ChatsList extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }

  componentWillMount() {
    console.log("chatroomsssss", this.props.chatRooms)
  }
  

  render() {
    return (
      <div className="messenger-component chats-list ">
        <h3 className="section-title">Chats</h3>
        {this.props.chatRoomInfo.map((chatRoom, key) => (
          <ChatListItem key={key} currentChatRoomID={this.props.currentChatRoomID} 
            chatRoom={chatRoom} changeCurrentChatRoom={this.props.changeCurrentChatRoom}
            currentUserId={this.props.currentUserId} 
            users={this.props.users} />
        ))}
      </div>
    );
  }
}

export default ChatsList;
