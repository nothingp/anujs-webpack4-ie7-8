import React, { Component } from 'react';
import {connect} from 'react-redux';


class Stu extends React.Component {
    render() {
        return (
            <div>
                <div>状态机num值：{this.props.counter}</div>
                <button onClick={this.add.bind(this)}>状态机num值+1</button>
            </div>
        );
    }

    add(){
        this.props.ADD_NUM();
    }

    componentDidMount() {
        console.log(this);
    }

}

export default Stu;