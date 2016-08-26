import React, { Component } from 'react';

export default class ChatForm extends Component {
	constructor() {
		super();

		this.state = {
			messageText: ''
		}

		this._onInputChange = this._onInputChange.bind(this);
		this._onSubmit = this._onSubmit.bind(this);
	}

	_onInputChange(e) {
		let messageText = e.target.value;
		this.setState({ messageText });
	}

	_onSubmit(e) {
		e.preventDefault();
		let { messageText } = this.state;

		this.props.createMessage(messageText);
		this.setState({
			messageText: ''
		})
	}

  render() {
		let { messageText } = this.state;

    return (
      <form
				className="row"
				onSubmit={this._onSubmit}
				style={styles.formStyle}>
				<input
					type="text"
					value={messageText}
					className="col-md-9 col-sm-9"
					onChange={this._onInputChange}
					style={styles.textBox}
					required/>
				<button
					className="btn btn-success col-md-3 col-sm-3"
					style={styles.button}>Send</button>
      </form>
    )
  }
}

const styles = {
	textBox: {
		height: 50,
		
	},
	formStyle: {
		marginBottom: 20
	},
	button: {
		background: 'green',
		height: 50
	}
}
