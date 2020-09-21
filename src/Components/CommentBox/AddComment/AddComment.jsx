import React from "react";
import PropTypes from 'prop-types';
import s from './AddComment.module.css';

export default class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Ivan',
            content: 'Добавить новое...'
        }
    }
    handleContentChange = (e) => {
        let newValue = e.target.value;
        this.setState(
            () => ({
                content: newValue
            })
        );
    }
    handleFocus = (e) => {
        this.setState(
            () => ({
                content: ''
            })
        );
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onCommentSubmit({
            user: this.state.user.trim(),
            content: this.state.content.trim()
        });
        this.setState(
            () => ({
                content: ''
            })
        );
    }
    render() {
        return (
            <div >
                <div> {JSON.stringify(this.state)}</div>


                <form onSubmit={this.handleSubmit}>
                    <input type="text" onFocus={this.handleFocus} onChange={this.handleContentChange} value={this.state.content} />
                    <input type='submit'  />
                </form>
            </div>
        )
    }
}


