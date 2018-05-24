import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <p className="Comment">
	      {this.props.post.comments[0].content}
      </p>
    );
  }
}

export default Comment;