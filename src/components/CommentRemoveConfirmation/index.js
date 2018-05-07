import React, { Component } from 'react';

export default class CommentRemoveConfirmation extends Component {
  constructor() {
     super();

     this.state = {
       showConfirm: false
     };
   }

   render() {

     let confirmNode;

     if (this.state.showConfirm) {
       return (
         <span>
           <a href="" onClick={this.confirmDelete.bind(this)}>Yes </a> - or - <a href="" onClick={this.toggleConfirmMessage.bind(this)}> No</a>
         </span>
       );
     } else {
       confirmNode = <a href="" onClick={this.toggleConfirmMessage.bind(this)}>Delete comment?</a>;
     }

     return (
       <span>
         {confirmNode}
       </span>
     );
   }

   toggleConfirmMessage(e) {
     e.preventDefault();

     this.setState({
       showConfirm: !this.state.showConfirm
     });

   }

   confirmDelete(e) {
     e.preventDefault();
     this.props.onDelete();
   }
}
