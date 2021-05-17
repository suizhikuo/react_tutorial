/*
应用根组件
 */

import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from "./pages/admin/admin";
// import {Button, message} from 'antd';

export default class App extends React.Component {

    // handleClick = () => {
    //     message.success('成功了!');
    // }

    render() {
        // return <Button type="primary" onClick={this.handleClick}>测试antd</Button>
        return (
            <BrowserRouter>
                <Switch>{/* 只匹配其中一个 */}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>

        )
    }
}