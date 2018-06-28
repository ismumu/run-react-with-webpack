

import React from 'react';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import { withRouter } from 'react-router';
// import { connect } from 'react-redux';

import { Link } from 'react-router-dom';



import 'antd/dist/antd.css';
import styles from './layout.less';


import routes from './routes';



class AppLayout extends React.Component {

    constructor() {
        super();
        this.state = {
            collapsed: false,
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {

        // 根据url默认选中展开项
        let { pathname } = this.props.location;
		let menuDefaultSelectedKeys = ['/']; // 默认选中首页

		routes.map(({ path }) => {
            path == pathname ? menuDefaultSelectedKeys = [path] : '';
		})


        return (
            <Layout className={styles.layout}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo}>Run React With Webpack</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={menuDefaultSelectedKeys}>
                        {
                            routes.map(({ path, name }) => {
                                return (
                                    <Menu.Item key={path}>
                                        <Link to={path}>{name}</Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(AppLayout);