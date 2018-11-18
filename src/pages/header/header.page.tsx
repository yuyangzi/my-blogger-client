import React, {PureComponent} from "react";
import MenuComponent from "../../component/menu/menu.component";
import {MenuModel} from "../../component/menu/menu.model";
import {RouteComponentProps, withRouter} from "react-router";

const menuList: MenuModel[] = [
    {icon: 'home', text: '首页'},
    {icon: 'th', text: '分类'},
    {icon: 'archive', text: '归档'},
    {icon: 'tags', text: '标签'},
    {icon: 'heartbeat', text: '公益404'},
    {icon: 'search', text: '搜索'},
];

class HeaderPage extends PureComponent<RouteComponentProps> {

    goHome(event: MouseEvent) {
        event.stopPropagation();
        event.defaultPrevented;
        this.props.history.push('/')
    }

    render() {
        return (
            <header className="header" itemScope itemType="http://schema.org/WPHeader">
                <div className="header-inner">
                    <div className="site-brand-wrapper">
                        <div className="site-meta ">
                            <div className="custom-logo-site-title">
                                <a href="/" className="brand" rel="start" onClick={e => this.goHome.bind(this, e)}>
                                    <span className="logo-line-before"><i/></span>
                                    <span className="site-title">王宜明的博客空间</span>
                                    <span className="logo-line-after"><i/></span>
                                </a>
                            </div>
                        </div>
                        <div className="site-nav-toggle">
                            <button>
                                <span className="btn-bar"/>
                                <span className="btn-bar"/>
                                <span className="btn-bar"/>
                            </button>
                        </div>
                    </div>
                    <nav className="site-nav">
                        <MenuComponent menuList={menuList}/>
                    </nav>
                </div>
            </header>
        )
    }
}

export default withRouter(HeaderPage);