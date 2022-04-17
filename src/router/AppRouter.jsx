import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import MyNavBar from "../components/UI/MyNavBar"
import AppRoutes from "./AppRoutes"

const AppRouter = () => {
    return (
        <Router>
            <MyNavBar/>
            <AppRoutes/>
        </Router>
    )
}

export default AppRouter