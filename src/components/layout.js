

import React from 'react';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';



import 'antd/dist/antd.css';
import styles from './layout.less';



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
        return (
            <Layout className={styles.layout}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo}>Run React With Webpack</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
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
                        <Link to='/about'>Tomato</Link>
                        <Link to='/case'>case</Link>
                        Content
                    </Content>
                </Layout>
            </Layout>
        )
    }
}


export default AppLayout;
// export default withRouter(connect()(AppLayout));