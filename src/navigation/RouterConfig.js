import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import {NotFound} from './NotFound'
import {ROOT, LOGIN} from "./CONSTANTS"

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Login} />
                

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>
        </div>
    )
}
