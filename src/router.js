import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Main from './MainPage/Main'
import About from './About/About'

export default (
    <Switch>
        <Route component={ Main } path='/' exact/>
        <Route component={ About } path='/about'/>
    </Switch>
)