import {Avatar, Icon, Layout, Menu} from 'antd';
import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";
import ArticleContentComponent from "../articleContent/article-content.component";
import ArticleList from '../shared-components/articleList/articleList'
import './main.component.css';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

interface INotFoundPageContainerRouterProps {
    history: any;
}

interface INotFoundPageContainerProps extends RouteComponentProps<INotFoundPageContainerRouterProps> {
}

class Main extends React.Component<INotFoundPageContainerProps, any> {
    public state = {
        collapsed: false,
    };

    public onCollapse = (collapsed: any) => {
        this.setState({collapsed});
    };

    public handleSelect = (path: '/home') => {
        this.props.history.push(path);
    };

    public render() {
        return (
            <Layout style={{minHeight: '100vh', width: '1000px', margin: '0 auto'}}>
                <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed'}}
                       collapsible={false} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <Avatar size={140} src={'https://avatars3.githubusercontent.com/u/23147062?s=460&v=4'}
                            style={{display: 'block', margin: '20px auto'}}/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" onClick={this.handleSelect.bind(this, '/home')}>
                            <Icon type="home"/>
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="tag-o"/>
                            <span>标签</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="user"/><span>分类</span></span>}>
                            <Menu.Item key="3">JavaScript</Menu.Item>
                            <Menu.Item key="4">区块链</Menu.Item>
                            <Menu.Item key="5">HTTP网络协议</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>
                        <h1>王宜明的博客空间</h1>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            <Switch>
                                <Route exact={true} path="/" component={ArticleList}/>
                                <Route exact={true} path="/Article" component={ArticleContentComponent}/>
                                <Redirect to={'/'}/>
                            </Switch>
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

export default withRouter(Main);