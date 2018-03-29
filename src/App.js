import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import Header from './ui/Header';
import Sidebar from './ui/Sidebar';
import NotFound from './ui/NotFound';
import Home from './ui/Home';

import Messenger from './components/messenger/Messenger';
import Journey from './components/journey/Journey';
import Clients from './components/clients/Clients';

import usersData from './data/users.json'
import chatRoomInfo from './data/chatRoomInfo.json'
import chatRoom from './data/chatRoom.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      chatRoomData: [],
      chatRoomsData: [],
      // current user fixed
      currentUserId: 0
    }
  }

  filterCurrentUser(usersData) {
    var users = usersData.filter((user) => {
      return user['id'] !== this.state.currentUserId
    })
    console.log("iusersbutme", users)
    this.setState({
      users: users
    })
  }

  componentWillMount() {
    this.filterCurrentUser( usersData['entries'])
    this.setState({
      chatRoom: chatRoom['entries'],
      chatRoomInfo: chatRoomInfo['entries'],
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="sidebar" >    
            <Sidebar/>
          </div>
          <div className="content" >    

            <Switch>
              <Route exact path="/" render={props => 
                <Home {...props} />
                }
              /> 

              <Route exact path="/messaging" render={props => 
                  <Messenger {...props} 
                  users={this.state.users} 
                  chatRoom={this.state.chatRoom} 
                  chatRoomInfo={this.state.chatRoomInfo}
                  currentUserId={this.state.currentUserId}
                  />
                }/>  
                
              <Route exact path="/clients" render={props => 
                <Journey {...props} 
                />
              }/>  

              <Route exact path="/journey" render={props => 
                <Clients {...props} 
                />
              }/>  

              <Route component={NotFound}/>
            </Switch>

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
