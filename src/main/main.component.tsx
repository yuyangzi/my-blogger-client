import {Breadcrumb, Icon, Layout, Menu} from 'antd';
import * as React from 'react';
import ArticleList from '../shared-components/articleList/articleList'
import './main.component.css';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class Main extends React.Component {
    public state = {
        collapsed: false,
    };

    public onCollapse = (collapsed: any) => {
        this.setState({collapsed});
    };

    public render() {
        return (
            <Layout style={{minHeight: '100vh', width: '1000px', margin: '0 auto'}}>
                <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed'}}
                       collapsible={false} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart"/>
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user"/><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team"/><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>
                        <h1>王宜明的博客空间</h1>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            <ArticleList/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        王宜明的博客空间 ©2017-2018
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Main;