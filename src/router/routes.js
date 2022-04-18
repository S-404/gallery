import AboutMePage from "../pages/AboutMePage"
import GalleryPage from "../pages/GalleryPage"
import ImageIdPage from "../pages/ImageIdPage"

export const withNavbarRoutes = [
    {path: "/", component: GalleryPage, name: "Галерея", isExact:true},
    {path: "/about-me", component: AboutMePage, name: "Обо мне"},
]

export const withoutNavbarRoutes = [
    {path: "/image/:id", component: ImageIdPage, name: "Подробнее"},
]