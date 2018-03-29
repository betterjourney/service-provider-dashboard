import React, { Component } from 'react';
import image from '../../person.png';

class ChatsListItem extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentChatRoomId: 0
        }
        this.handleChangeCurrentChatRoom = this.handleChangeCurrentChatRoom.bind(this)
    }

    componentWillMount() {
        this.setState({
            currentChatRoomId: this.props.chatRoom['chatroomId']
        })
    }

    handleChangeCurrentChatRoom(event) {
        event.preventDefault();
        this.props.changeCurrentChatRoom(this.state.currentChatRoomId);
    }

    getUserName(id) {
        console.log("username",this.props.users)
        var user = this.props.users.filter((user) => {
            console.log("ind", user['id'], id)
            return user['id'] === id
        })
        console.log(user)
        return user[0]['name']
    }


    render() {
        return (
        <div className="card chat-list-item" onClick={this.handleChangeCurrentChatRoom}>
            <div className= "row">
                <div className="col-md-3">
                    <img src={image}/>
                </div>
                <div className="col-md-8">
                    {this.props.chatRoom['firstUser'] === this.props.currentUserId ?
                        <h4>{this.getUserName(this.props.chatRoom['secondUser'])}</h4>
                        :
                        <h4>{this.getUserName(this.props.chatRoom['firstUser'])}</h4>
                    }   
                </div>
            </div>
        </div>
        );
    }
}

export default ChatsListItem;
