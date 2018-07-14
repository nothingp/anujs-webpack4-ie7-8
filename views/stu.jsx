import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {increment,decrement}  from  './reducer';
import CqButton from 'components/CqButton';
import styles from './stu.less'
import BaseComponent from 'components/BaseComponent';
import { Select } from 'antd';
const Option = Select.Option;

class Stu extends BaseComponent {
    render() {
        return (
            <div>
                <CqButton type="primary">Primary</CqButton>
                <CqButton>Default</CqButton>
                <CqButton type="ghost">Ghost</CqButton>
                <CqButton type="dashed">Dashed</CqButton>
                <div>状态机num值：{this.props.counter}</div>
                <button className={"btnTest"} onClick={this.add}>状态机num值+1</button>

                <Select defaultValue="lucy" style={{ width: 120 }} >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="yiminghe">yiminghe</Option>
                </Select>
            </div>
        );
    }

    add=()=>{
        this.props.increment({num:2});
    }

    componentDidMount() {
        console.log(this);
    }

}

// 加载redux的store
function mapStateToProps(state) {
    console.log('123213',state)
    return state
}

// 注入action
function mapDispatchToProps(dispatch) {
    return bindActionCreators({increment,decrement},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Stu);