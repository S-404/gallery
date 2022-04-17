import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import AboutMePage from "../pages/AboutMePage"
import GalleryPage from "../pages/GalleryPage"
import ImageIdPage from "../pages/ImageIdPage"

const AppRoutes = () => {
    return (
            <Switch>
                <Route exact path="/">
                    <GalleryPage/>
                </Route>
                <Route path="/about-me">
                    <AboutMePage/>
                </Route>
                <Route path="/image/:id">
                    <ImageIdPage/>
                </Route>
                <Redirect exact to={"/"}/>
            </Switch>
    )
}

export default AppRoutes