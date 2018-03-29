import React, { Component } from 'react';

class MessageItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentChatRoomId: 0
        }
    }

    componentWillMount() {
        console.log("message item")
    }

    render() {
        if (this.props.myMessage) {
            return (
                <div className="card-not-my-message message-item" >
                <div className= "row">
                    <div className="col-md-8">
                        <h5>{this.props.message['message'] }</h5>
                    </div>
                </div>
            </div>
            );
        } else {
            return (
                <div className="card-my-message message-item" >
                <div className= "row">
                    <div className="col-md-8">
                        <h5>{this.props.message['message'] }</h5>
                    </div>
                </div>
            </div>
            );
        }
    }
}

export default MessageItem;
