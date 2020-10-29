import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import './TodoList.css'
import store from '../store'
import {changeInputAction,addItem,delItem,getTodoListAction} from '../store/actionCreators'
import TodoListUI from './TodoListUI'



class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state=store.getState()
    store.subscribe(()=>{this.setState(store.getState())})
   this.changeInputValue =this.changeInputValue.bind(this)
   this.addItem = this.addItem.bind(this)
   this.delItem = this.delItem.bind(this)
  }

  delItem(index){
     store.dispatch(delItem(index))
  }
  changeInputValue(e){
    store.dispatch(changeInputAction(e.target.value))
  }
  addItem(){
    store.dispatch(addItem())
  }

  componentWillMount() {

  }

  componentDidMount() {
    /*const getList = getTodoListAction()
      store.dispatch(getList)*/
    store.dispatch(getTodoListAction())
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
    <TodoListUI inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                list={this.state.list}
                delItem={this.delItem}
    />
    );
  }
}

TodoList.propTypes = {};

export default TodoList;
