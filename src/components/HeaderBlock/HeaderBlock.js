import React,{Component} from 'react';
import {Menu} from 'antd'
import './Default.less'
export default class HeaderBlock extends Component {
    state = {
        current: 'home',
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        357.ink
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                首页
                            </Menu.Item>
                            <Menu.Item key="basic">
                                通用组件
                            </Menu.Item>
                            <Menu.Item key="layout">
                                布局组件
                            </Menu.Item>
                            <Menu.Item key="navigation">
                                导航组件
                            </Menu.Item>
                            <Menu.Item key="form">
                                表单组件
                            </Menu.Item>
                            <Menu.Item key="display">
                                展示组件
                            </Menu.Item>
                            <Menu.Item key="feedback">
                                反馈组件
                            </Menu.Item>
                            <Menu.Item key="other">
                                其他组件
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

}