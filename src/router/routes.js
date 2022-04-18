import AboutMePage from "../pages/AboutMePage"
import GalleryPage from "../pages/GalleryPage"
import ImageIdPage from "../pages/ImageIdPage"

export const homeRoute = {path: "/", component: GalleryPage, name: "Галерея"}
export const aboutMeRoute = {path: "/about-me", component: AboutMePage, name: "Обо мне"}
export const imageIdRoute = {path: "/image/:id", component: ImageIdPage, name: "Подробнее"}

export const withNavbarRoutes = [
    {...homeRoute},
    {...aboutMeRoute},
]
