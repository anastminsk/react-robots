import React, { Component } from 'react';
import CommentRemoveConfirmation from '../CommentRemoveConfirmation';

export default class Comment extends Component {
  constructor() {
    super();

    this.state = {
      isAbusive: false
    };
  }

  render() {

    let commentBody;

    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }

    return(
      <div className="comment">

        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />

        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{commentBody}</p>

        <div className="comment-actions">
          <CommentRemoveConfirmation onDelete={this.handleDelete.bind(this)} />
          <a href="#" onClick={this.toggleAbuse.bind(this)}>Report as Abuse</a>
        </div>
      </div>
    );
  }

  toggleAbuse(event) {
    event.preventDefault();

    this.setState({
      isAbusive: !this.state.isAbusive
    });
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }
}
