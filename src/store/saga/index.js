import {all} from "redux-saga/effects"
import {fetchImagesWatcher} from "./imagesSaga"
import {fetchImageWatcher} from "./imageSaga"

export function* rootWatcher(){
    yield all([fetchImagesWatcher(),fetchImageWatcher()])
}