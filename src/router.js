import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Index from './pages/Home/Index';

export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Index}  exact />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}