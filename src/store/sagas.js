import {takeEvery,put} from 'redux-saga/effects'
import {GET_ACTION_LIST} from './actionTypes'
import {request} from 'axios'
import {getListAction} from "./actionCreators";

function* mySaga() {
     yield takeEvery(GET_ACTION_LIST,getList)
}

function* getList () {
    const res =yield request({
      url:'http://rap2api.taobao.org/app/mock/data/1775811',
      type:'get'
    })
   yield put(getListAction(res.data.data))
}
export default mySaga
