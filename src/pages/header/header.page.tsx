import React, { PureComponent } from 'react'
import MenuComponent from '../../component/menu/menu.component'
import { MenuModel } from '../../component/menu/menu.model'
import { RouteComponentProps, withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './header.page.css'

const menuList: MenuModel[] = [
  { icon: 'home', text: '首页', url: '/' },
  { icon: 'th', text: '分类', url: 'classify' },
  { icon: 'archive', text: '归档', url: '/archive' },
  { icon: 'tags', text: '标签', url: '/tag' },
  { icon: 'edit', text: '写作', url: '/edit' },
  { icon: 'search', text: '搜索', url: 'search' },
]

class HeaderPage extends PureComponent<RouteComponentProps> {
  render() {
    return (
      <header
        className="header"
        itemScope
        itemType="http://schema.org/WPHeader"
      >
        <div className="header-inner">
          <div className="site-brand-wrapper">
            <div className="site-meta ">
              <div className="custom-logo-site-title">
                <Link to="/" className="brand" rel="start">
                  <span className="logo-line-before">
                    <i />
                  </span>
                  <span className="site-title">王宜明的博客空间</span>
                  <span className="logo-line-after">
                    <i />
                  </span>
                </Link>
              </div>
            </div>
            <div className="site-nav-toggle">
              <button>
                <span className="btn-bar" />
                <span className="btn-bar" />
                <span className="btn-bar" />
              </button>
            </div>
          </div>
          <nav className="site-nav">
            <MenuComponent menuList={menuList} />
          </nav>
        </div>
      </header>
    )
  }
}

export default withRouter(HeaderPage)
