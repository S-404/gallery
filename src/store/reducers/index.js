import {applyMiddleware, combineReducers, createStore} from "redux"
import createSagaMiddleware from "redux-saga"
import {imagesReducer} from "./imagesReducer"
import {imageReducer} from "./imageReducer"
import {rootWatcher} from "../saga"

export const rootReducer = combineReducers({
    images: imagesReducer,
    image: imageReducer
})
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatcher)

