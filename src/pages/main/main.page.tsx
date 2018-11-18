import React, {PureComponent} from "react";
import './main.page.css'
import SidebarComponent from "../../component/sidebar/sidebar.component";
import ArticleSummaryListComponent from "../../component/article/article-summary-list/article-summary-list.component";
import {Route, Switch} from "react-router";
import ArticleComponent from "../../component/article/article.component";

class MainPage extends PureComponent {
    render() {
        return (
            <main className="main">
                <div className="main-inner">
                    <div className="content-wrap">
                        <div className="content">
                            <Switch>
                                <Route exact={true} path="/list" component={ArticleSummaryListComponent}/>
                                <Route exact={true} path="/article" component={ArticleComponent}/>
                            </Switch>
                        </div>
                    </div>
                    <SidebarComponent/>
                </div>
            </main>
        )
    }
}

export default MainPage;