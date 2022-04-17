import {put, takeEvery} from "redux-saga/effects"
import {
    FETCH_IMAGES,
    fetchingImagesCreator,
    fetchingImagesErrorCreator,
    fetchingImagesSuccessCreator
} from "../reducers/imagesReducer"

import ImagesService from "../../services/imagesService"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchImagesWorker(action) {
    yield delay(500)
    yield put(fetchingImagesCreator())
    try {
        const response = yield ImagesService.fetchImages(action.limit)
        yield put(fetchingImagesSuccessCreator(response.data))
    } catch (e) {
        yield put(fetchingImagesErrorCreator(e.message))
    }
}

export function* fetchImagesWatcher() {
    yield takeEvery(FETCH_IMAGES, fetchImagesWorker)
}