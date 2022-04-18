import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import MyNavBar from "../components/UI/myNavBar/MyNavBar"
import {aboutMeRoute, homeRoute, imageIdRoute} from "./routes"

const AppRouter = () => {
    return (
        <Router basename={"/gallery"}>
            <MyNavBar/>
            <Switch>
                <Route
                    exact
                    path={imageIdRoute.path}
                    component={imageIdRoute.component}
                />
                <Route
                    exact
                    path={homeRoute.path}
                    component={homeRoute.component}
                />
                <Route
                    exact
                    path={aboutMeRoute.path}
                    component={aboutMeRoute.component}
                />
                <Redirect exact to={homeRoute.path}/>
            </Switch>
        </Router>
    )
}

export default AppRouter