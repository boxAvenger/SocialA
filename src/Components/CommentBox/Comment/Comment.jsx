import React from "react";
import PropTypes from 'prop-types';
import s from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={s.comment}>
            <div>
                {props.user}
            </div>
            <div>
                {props.content}
            </div>
        </div>
    )
}
export default Comment;

