import AboutMePage from "../pages/AboutMePage"
import GalleryPage from "../pages/GalleryPage"
import ImageIdPage from "../pages/ImageIdPage"

export const withNavbarRoutes = [
    {path: "/gallery", component: GalleryPage, name: "Галерея", isExact: true},
    {path: "/gallery/about-me", component: AboutMePage, name: "Обо мне"},
]

export const withoutNavbarRoutes = [
    {path: "/gallery/image/:id", component: ImageIdPage, name: "Подробнее"},
]

export const redirectRoute = {path: "/gallery", component: GalleryPage, name: "Галерея", isExact: true}