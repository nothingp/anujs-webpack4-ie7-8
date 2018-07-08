import React from 'react';
import { Button } from 'antd';

export default class CqButton extends React.Component {
    render() {
        return (
            <Button {...this.props}>{this.props.children}</Button>
        );
    }
}