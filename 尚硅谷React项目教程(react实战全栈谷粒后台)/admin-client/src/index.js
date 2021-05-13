/*
入口js
 */

import React from 'react';
import ReactDom from 'react-dom';

import App from "./App";
import 'antd/dist/antd.css'

// 将App组件渲染到index页面的div上
ReactDom.render(<App/>, document.getElementById('root'));

