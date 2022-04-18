import {useMemo} from "react"

const useImagesSplitPerCategory = (images, categoryLength) => {
    return useMemo(() => {
        if (images.length) {
            const resultArr = []
            const totalCategories = Math.ceil(images.length / categoryLength)
            for (let category = 1; category <= totalCategories; category++) {
                let beginSlice = categoryLength * (category - 1)
                let endSlice = beginSlice + categoryLength
                resultArr.push({category, images: images.slice(beginSlice, endSlice)})
            }
            return resultArr
        }
        return images
    }, [images, categoryLength])
}

export const useImages = (images, categoryLength) => {
    return useImagesSplitPerCategory(images, categoryLength)
}