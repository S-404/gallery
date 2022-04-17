import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {fetchOneImage} from "../store/reducers/imageReducer"
import {fetchImages} from "../store/reducers/imagesReducer"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
            fetchOneImage,
            fetchImages,
        },
        dispatch)
}