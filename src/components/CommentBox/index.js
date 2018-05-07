import React, { Component } from 'react';
import CommentForm from '../CommentForm';
import CommentAvatarList from '../CommentAvatarList';
import Comment from '../Comment';
import COMMENTS from '../../comments'

export default class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: COMMENTS
    };
  }

  render() {
    const comments = this.getComments();
    return (
      <div className="row comments-container">
        <div className="cell">
          <h2>Join The Discussion</h2>
          <div className="comment-box">
            <CommentForm addComment={this.addComment.bind(this)} />
            <CommentAvatarList avatars={this.getAvatars()} />

            {this.getPopularMessage(comments.length)}
            <h3 className="comment-count">{this.getCommentsTitle(comments.length)}</h3>
            <div className="comment-list">
              {comments}
            </div>
          </div>
        </div>
      </div>
    );
  }

  getAvatars() {
    return this.state.comments.map(comment => comment.avatarUrl);
  }

  getPopularMessage(commentCount) {
    const POPULAR_COUNT = 10;
    if (commentCount > POPULAR_COUNT) {
       return (
         <div>This post is getting really popular, dont miss out!</div>
       );
    }
  }

  getComments() {
    return this.state.comments.map((comment) => {
      return <Comment
               id={comment.id}
               author={comment.author}
               body={comment.body}
               avatarUrl={comment.avatarUrl}
               onDelete={this.deleteComment.bind(this)}
               key={comment.id} />
    });
  }

  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }

  addComment(commentAuthor, commentBody) {
    const comment = {
      id: this.state.comments.length + 1,
      author: commentAuthor,
      body: commentBody,
      avatarUrl: 'images/avatars/avatar-default.png'
    };

    this.setState({
      comments: this.state.comments.concat(comment)
    });

  }

  deleteComment(commentID) {
    const comments = this.state.comments.filter(
      comment => comment.id !== commentID
    );

    this.setState({ comments });
  }
}
