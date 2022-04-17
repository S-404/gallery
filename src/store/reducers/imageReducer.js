export const FETCH_ONE_IMAGE = "FETCH_ONE_IMAGE"
export const FETCHING_ONE_IMAGE = "FETCHING_ONE_IMAGE"
export const FETCHING_ONE_IMAGE_SUCCESS = "FETCHING_ONE_IMAGE_SUCCESS"
export const FETCHING_ONE_IMAGE_ERROR = "FETCHING_ONE_IMAGE_ERROR"

const imageState = {
    image: {},
    loading: false,
    error: null,
}

export const imageReducer = (state = imageState, action) => {

    switch (action.type) {
        case FETCH_ONE_IMAGE:
            return {...state, loading: true, error: null}

        case FETCHING_ONE_IMAGE_SUCCESS:
            return {loading: false, error: null, image: action.payload}

        case FETCHING_ONE_IMAGE_ERROR:
            console.log(action)
            return {...state, loading: false, error: action.payload}

        default:
            return state
    }
}

export const fetchOneImage = (id) => ({type: FETCH_ONE_IMAGE, id})
export const fetchingOneImageCreator = () => ({type: FETCHING_ONE_IMAGE})
export const fetchingOneImageSuccessCreator = (payload) => ({type: FETCHING_ONE_IMAGE_SUCCESS, payload})
export const fetchingOneImageErrorCreator = (payload) => ({type: FETCHING_ONE_IMAGE_ERROR, payload})
