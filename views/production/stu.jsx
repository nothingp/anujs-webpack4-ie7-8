import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {increment,decrement}  from  './reducer';
import { Button } from 'antd';
import styles from './stu.less'


class Stu extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="ghost">Ghost</Button>
                <Button type="dashed">Dashed</Button>
                <div>状态机num值：{this.props.counter}</div>
                <button className={styles.btnTest} onClick={this.add.bind(this)}>状态机num值+1</button>
            </div>
        );
    }

    add(){
        this.props.increment({num:2});
    }

    componentDidMount() {
        console.log(this);
    }

}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    console.log('123213',state)
    return state
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return bindActionCreators({increment,decrement},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Stu);