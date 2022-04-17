export const FETCH_IMAGES = "FETCH_IMAGES"
export const FETCHING_IMAGES = "FETCHING_IMAGES"
export const FETCHING_IMAGES_SUCCESS = "FETCHING_IMAGES_SUCCESS"
export const FETCHING_IMAGES_ERROR = "FETCHING_IMAGES_ERROR"

const imagesState = {
    images: [],
    loading: false,
    error: null,
}

export const imagesReducer = (state = imagesState, action) => {

    switch (action.type) {
        case FETCH_IMAGES:
            return {...state, loading: true, error: null}

        case FETCHING_IMAGES_SUCCESS:
            return {loading: false, error: null, images: action.payload}

        case FETCHING_IMAGES_ERROR:
            return {...state, loading: false, error: action.payload}

        default:
            return state
    }
}

export const fetchImages = (limit) => ({type: FETCH_IMAGES, limit})
export const fetchingImagesCreator = () => ({type: FETCHING_IMAGES})
export const fetchingImagesSuccessCreator = (payload) => ({type: FETCHING_IMAGES_SUCCESS, payload})
export const fetchingImagesErrorCreator = (payload) => ({type: FETCHING_IMAGES_ERROR, payload})
