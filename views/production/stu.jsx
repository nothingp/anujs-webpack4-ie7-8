import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {increment,decrement}  from  './reducer';

@connect(
    state=>state.counter,
    dispatch=>bindActionCreators({increment,decrement},dispatch)
)
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
        this.props.increment();
    }

    componentDidMount() {
        console.log(this);
    }

}

export default Stu;