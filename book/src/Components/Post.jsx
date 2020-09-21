import React from "react";
import PropTypes from 'prop-types';
import s from './Post.module.css';
import CommentBox from "./CommentBox/CommentBox.jsx";


export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data.post
    }
  }
  render() {
    return (

      <div className={s.post}>

        <h3>{this.state.user}</h3>
        <h4>{this.state.content}</h4>
        <CommentBox comments={this.props.data.comments} />
      </div>


    );
  }
}
CommentBox.propTypes = {
  comments : PropTypes.array.isRequired
}
  // Post.propTypes = {
  //   user: PropTypes.string.isRequired, //#G
  //   content: PropTypes.string.isRequired, //#G
  //   id: PropTypes.number.isRequired //#G
  // };


