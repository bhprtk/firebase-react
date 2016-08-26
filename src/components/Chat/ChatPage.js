import React, { Component } from 'react';

import MessageStore from '../../stores/MessageStore';
import ChatActions from '../../actions/ChatAction';
import ChatList from './ChatList';
import ChatForm from './ChatForm';


export default class ChatPage extends Component {
	constructor() {
		super();

		this.state = {
			messages: MessageStore.get()
		}

		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		MessageStore.startListening(this._onChange)
	}

	componentWillUnmount() {
		MessageStore.stopListening(this._onChange)
	}

	_onChange() {
		this.setState({
			messages: MessageStore.get()
		});
	}

  render() {

		let { messages } = this.state;

    return (
      <div className="container">
				<ChatForm createMessage={this._createMessage}/>
				<ChatList messages={messages}/>
      </div>
    )
  }
}
