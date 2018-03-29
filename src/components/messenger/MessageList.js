import React, { Component } from 'react';
import MessageItem from './MessageItem';

class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }

  filterMessages() {
    console.log("messages");
    var messages = this.props.chatRoom.filter(function (message) {
      return message['chatroomId'] === this.props.currentChatRoom;
    }.bind(this));
    return  messages
  }

  render() {
    return (
      <div className="messenger-component message-list ">
        {
          this.filterMessages().map((message, key) => (
            message['sender'] !== this.props.currentUserId  ? 
            <MessageItem message={message} key={key} myMessage={true}/>
            : 
            <MessageItem message={message} key={key} myMessage={false}/>
          ))
        }
      </div>
    );
  }
}

export default MessageList;
