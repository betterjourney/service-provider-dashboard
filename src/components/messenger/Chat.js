import React, { Component } from 'react';
import MessageList from './MessageList';

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = { 

    }
  }

  componentWillMount() {
    console.log("messages")
    console.log("messages chatroom", this.props.chatRoom, this.props.currentChatRoom)
}

  render() {
    return (
      <div className="messenger-component chat">
        <h3 className="section-title">Chat</h3>
        <div className="messages-feed" >
          <MessageList 
            chatRoom={this.props.chatRoom} currentChatRoom={this.props.currentChatRoom}
            currentUserId={this.props.currentUserId} />
        </div>
        <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" className="btn btn-primary" value="Send" />
        </form>
        </div>
      </div>
    );
  }
}

export default Chat;
