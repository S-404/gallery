import {put, takeEvery,} from "redux-saga/effects"
import {
    FETCH_ONE_IMAGE,
    fetchingOneImageCreator,
    fetchingOneImageErrorCreator,
    fetchingOneImageSuccessCreator
} from "../reducers/imageReducer"

import ImagesService from "../../services/imagesService"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchImageWorker(action) {
    yield delay(500)
    yield put(fetchingOneImageCreator())
    try {
        const response = yield ImagesService.fetchImage(action.id)
        yield put(fetchingOneImageSuccessCreator(response.data))
    } catch (e) {
        yield put(fetchingOneImageErrorCreator(e.message))
    }
}

export function* fetchImageWatcher() {
    yield takeEvery(FETCH_ONE_IMAGE, fetchImageWorker)
}