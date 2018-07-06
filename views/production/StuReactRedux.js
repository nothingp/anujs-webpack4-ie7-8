import { connect } from 'react-redux';

//=====引入组件=====
import Stu from './stu'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    console.log('123213',state)
    return {
        counter: state.counter.counter
    };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        ADD_NUM:function(){
            dispatch({type:"INCREMENT"})
        }
    };
}

//封装传递state和dispatch
var StuReactRedux = connect(mapStateToProps,mapDispatchToProps)(Stu);

export default StuReactRedux