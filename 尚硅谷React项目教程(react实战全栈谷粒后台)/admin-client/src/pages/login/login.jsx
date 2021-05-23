import React, {Component} from "react";
import './login.less';
import logo from './images/bg.jpg';
import {Form, Input, Button, Icon} from 'antd';
/*
登录的路由组件
 */
export default class Login extends Component {
    handleSubmit = (event) => {

        // 阻止事件的默认行为
        event.preventDefault()

        // 对所有表单字段进行检验
        this.props.form.validateFields(async (err, values) => {
            // 检验成功
            if (!err) {
                // console.log('提交登陆的ajax请求', values)
                // 请求登陆
                const {username, password} = values

                // 调用分发异步action的函数 => 发登陆的异步请求, 有了结果后更新状态
                this.props.login(username, password)

            } else {
                console.log('检验失败!')
            }
        });

        // 得到form对象
        // const form = this.props.form
        // // 获取表单项的输入数据
        // const values = form.getFieldsValue()
        // console.log('handleSubmit()', values)
    }

    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form name="normal_login" className="login-form" initialValues={{remember: true}}
                          onSubmint={this.handleSubmit}>
                        <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
                            <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
                            <Input prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}