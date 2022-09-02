import {createStore,applyMiddleware} from 'redux'
// import createSagaMiddle from 'redux-saga'
// import siginSaga from './saga/signin.saga'
import reducer from './reducer'

// const saga=createSagaMiddle()

const store = createStore(reducer)
// const store = createStore(reducer,applyMiddleware(saga))

// saga.run(siginSaga)

export default store