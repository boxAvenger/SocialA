import React from "react";
import PropTypes from 'prop-types';
import s from './CommentBox.module.css';
import Comment from './Comment/Comment';
import AddComment from './AddComment/AddComment';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...this.props.comments]

    }
  }

  handleSubmit = (newComment) => {


    this.setState(
      (prevState) => ({
        items: [...prevState.items, newComment],

      }

      )
    );
  }
  render() {
    let comments = this.state.items.map((item) => {
      return (
        <Comment key={item.user + Math.random()} user={item.user} content={item.content} />
      )
    })
    return (
      <div className={s.comments}>
        {comments}
        <AddComment onCommentSubmit={this.handleSubmit} />

      </div>
    );
  }
}

  // Post.propTypes = {
  //   user: PropTypes.string.isRequired, //#G
  //   content: PropTypes.string.isRequired, //#G
  //   id: PropTypes.number.isRequired //#G
  // };


