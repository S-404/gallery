import {_api} from "../api"

export default class ImagesService {

    static fetchImages(limit) {
        let limitQuery = limit ? `?_limit=${limit}` : ""
        return _api.get(`photos${limitQuery}`)
    }

    static fetchImage(id) {
        return _api.get(`photos/${id}`)
    }
}

