import React, { Component } from 'react';
import firebase from 'firebase';

import ChatList from './ChatList';
import ChatForm from './ChatForm';

// let messageRef = firebase.database().ref('messages');


export default class ChatPage extends Component {
	constructor() {
		super();

		this.state = {
			messages: {}
		}

		this.ref = firebase.database().ref('messages');
		this._createMessage = this._createMessage.bind(this);
	}

	componentDidMount() {
		this.ref.on('value', snapshot => {
			this.setState({
				messages: snapshot.val()
			})
		})
	}

	componentWillUnmount() {
		this.ref.off('value');
	}

	_createMessage(message) {
		this.ref.push(message);
		// this.setState({
		// 	messages: this.state.messages.concat(message)
		// });
	}

  render() {
    return (
      <div className="container">
				<ChatForm createMessage={this._createMessage}/>
				<ChatList messages={this.state.messages}/>
      </div>
    )
  }
}
