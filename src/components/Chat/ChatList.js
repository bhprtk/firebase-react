import React, { Component } from 'react';

export default class ChatList extends Component {

	render() {
		let { messages } = this.props;

		let messageList = [];

		for(let key in messages) {
			let message = (
				<li key={key}>{messages[key]}</li>
			)
			messageList.push(message);
		}

		// let messageList = messages.reverse().map((message, index) => {
		// 	return (
		// 		<h5 key={index}>{message}</h5>
		// 	)
		// })
		return (
			<div>
				{messageList}
			</div>
		)
	}
}
