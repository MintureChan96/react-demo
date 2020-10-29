
import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM,GET_TODO_LIST,GET_ACTION_LIST} from "./actionTypes";
const defaultStore = {
  inputValue: '添加事项',
  list: ['我是react新手', '请大家多多关照', '我开始学习Redux']
}

export default (state = defaultStore, action) => {
  switch (action.type) {

    case CHANGE_INPUT:
      let changeInput = JSON.parse(JSON.stringify(state))
      changeInput.inputValue = action.value
      return changeInput

    case ADD_ITEM:
      let addItem = JSON.parse(JSON.stringify(state))
      addItem.list.push(state.inputValue)
      return addItem

    case DEL_ITEM:
      let delItem = JSON.parse(JSON.stringify(state))
      delItem.list.splice(action.value,1)
      return delItem

    case GET_TODO_LIST:
      let getList =JSON.parse(JSON.stringify(state))
       getList.list=action.value
      return getList

    default:
      return state
  }
}
