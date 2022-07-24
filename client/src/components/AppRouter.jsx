import React, {useContext} from 'react';
// import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Switch, Route, Redirect} from "react-router-dom"
import {SHOP_ROUTE} from "../utils/consts";
import {useCol} from "react-bootstrap/Col";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)

    return (

        <Switch>
            { user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>)}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {/*{ isAuth*/}
            {/*    ? authRoutes.map(({path, Component}) =>*/}
            {/*        <Route key={path} path={path} component={Component} exact/>)*/}
            {/*    : publicRoutes.map(({path, Component}) =>*/}
            {/*        <Route key={path} path={path} component={Component} exact/>*/}
            {/*)}*/}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;