import React from 'react';
import ReactDom from 'react-dom';
import BaseComponent from 'components/BaseComponent';

export default class Box extends BaseComponent {
    componentDidMount() {
        console.log('box componentDidMount trigger');
    }
    render() {
        return (
            <div style={{ width: 400, height: 400 }}>
                11111
            </div>
        );
    }
}
