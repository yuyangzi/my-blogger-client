import React, { Component } from 'react'
import './main.page.css'
import SidebarComponent from '../../component/sidebar/sidebar.component'
import ArticleSummaryListComponent from '../../component/article/article-summary-list/article-summary-list.component'
import { Route, Switch } from 'react-router'
import ArticleComponent from '../../component/article/article.component'
import TagPage from '../../component/tag/tag.page'

class MainPage extends Component {
  render() {
    return (
      <main className="main">
        <div className="main-inner">
          <div className="content-wrap">
            <div className="content">
              <Switch>
                <Route
                  exact={true}
                  path="/"
                  component={ArticleSummaryListComponent}
                />
                <Route
                  exact={true}
                  path="/article"
                  component={ArticleComponent}
                />
                <Route exact={true} path="/tag" component={TagPage} />
              </Switch>
            </div>
          </div>
          <SidebarComponent />
        </div>
      </main>
    )
  }
}

export default MainPage
