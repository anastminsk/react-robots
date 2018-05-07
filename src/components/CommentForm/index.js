import React, { Component } from 'react';

export default class CommentForm extends Component {
constructor() {
    super();
    this.state = {
      characters: 0
    };
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <label>New comment</label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={c => this.author = c} />
          <textarea placeholder="Comment:" ref={c => this.body = c} onChange={this.getCharacterCount.bind(this)}></textarea>
        </div>
        <p>{this.state.characters} characters</p>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    );
  }

  getCharacterCount() {
    this.setState({
      characters: this.body.value.length
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.author.value || !this.body.value) {
     alert('Please enter your name and comment.');
     return;
   }

    this.props.addComment(this.author.value, this.body.value);

    this.author.value = '';
    this.body.value = '';

    this.setState({ characters: 0 });
  }
}
