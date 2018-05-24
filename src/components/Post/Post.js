import React, { Component } from 'react';
import './Post.css';
import Comment from '../Comment/Comment';

class TextPost extends Component {
  render() {
    return (
      <div className="TextPost">
        <p className="TextPost-content">{this.props.post.content}</p>
        <Comment post={this.props.post} />
      </div>
    );
  }
}

export default TextPost;
