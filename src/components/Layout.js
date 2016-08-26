import React, { Component } from 'react';

import ChatPage from './Chat/ChatPage';

export default class Layout extends Component {
  render() {
    return (
      <div style={styles.container}>
        <p className="text-center" style={styles.title}><strong>CHAT UP</strong></p>
        <br/>
        <ChatPage />
      </div>
    )
  }
}

const styles = {
  title: {
    color: 'green',
    fontSize: 40,
    marginTop: 10
  },
  container: {
    background: '#fafafa'
  }
}
