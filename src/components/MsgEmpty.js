import React from 'react';

export class MsgEmpty extends React.Component {
    render() {
        return <p className="msg-empty">{this.props.msgEmpty}</p>
    }
}