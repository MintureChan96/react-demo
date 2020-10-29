import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM,GET_TODO_LIST,GET_ACTION_LIST} from "./actionTypes";
import {request} from 'axios'

export const changeInputAction = (value)=>({
       type:CHANGE_INPUT,
        value
})

export  const addItem =()=>({
      type:ADD_ITEM,
})

export  const delItem =(value) =>({
      type:DEL_ITEM,
      value
})

export const getListAction = (value) =>({
    type:GET_TODO_LIST,
    value
})

export const getTodoList =()=>{
  return (dispatch)=>{
    request({
      url:'http://rap2api.taobao.org/app/mock/data/1775811',
      type:'post'
    }).then(r=>{
      const data = r.data.data
      dispatch(getListAction(data))
    })
}
}

export const getTodoListAction =() =>({
     type:GET_ACTION_LIST

})
