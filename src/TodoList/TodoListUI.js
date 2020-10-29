import React,{Fragment} from 'react';
import {Button, Input, List} from "antd";

const TodoListUI  = (props)=> {
    return (
      <Fragment>
        <div className="container">
          <div className="title">代办事项</div>
          <Input placeholder={props.inputValue}
                 style={{width: '250px'}}
                 onChange={props.changeInputValue}
                 value={props.inputValue}
          />
          <Button type="primary"
                  style={{marginLeft: '12px'}}
                  onClick={props.addItem}
          >添加</Button>

          <div className="listItem">
            <List bordered
                  dataSource={props.list}
                  renderItem={(item, index) => (
                    <List.Item
                      onClick={(index) => {
                        props.delItem(index)
                      }}>
                      {item}
                    </List.Item>
                  )}
            />
          </div>
        </div>
      </Fragment>
    )}
export default TodoListUI;
