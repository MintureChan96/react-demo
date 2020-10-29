import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
//import thunk from 'redux-thunk'
import creactSagaMiddleWare from'redux-saga'
import mySagas from './sagas'
const sagaMiddleWare =creactSagaMiddleWare();

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION__COMPOST__?window.__REDUX_DEVTOOLS_EXTENSION__COMPOST__({}):compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare))
const store = createStore(reducer,enhancer)
sagaMiddleWare.run(mySagas)
export  default  store
