import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import {withNavbarRoutes, withoutNavbarRoutes} from "./routes"
import MyNavBar from "../components/UI/myNavBar/MyNavBar"

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                {withoutNavbarRoutes.map(route => (
                    <Route
                        exact={route?.isExact}
                        key={route.name}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                <>
                    <MyNavBar/>
                    {withNavbarRoutes.map(route => (
                        <Route
                            exact={route?.isExact}
                            key={route.name}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </>
                <Redirect exact to={"/"}/>
            </Switch>
        </Router>
    )
}

export default AppRouter