import AppDispatcher from '../AppDispatcher';

const ChatActions = {
	createMessage(message) {
		AppDispatcher.dispatch({
			type: 'CREATE_MESSAGE',
			message
		});
	}
};

export default ChatActions;
