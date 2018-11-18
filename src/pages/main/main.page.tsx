import React, {PureComponent} from "react";
import './main.page.css'
import SidebarComponent from "../../component/sidebar/sidebar.component";
import ArticleSummaryListComponent from "../../component/article/article-summary-list/article-summary-list.component";

class MainPage extends PureComponent {
    render() {
        return (
            <main className="main">
                <div className="main-inner">
                    <div className="content-wrap">
                        <div className="content">
                            <ArticleSummaryListComponent/>
                        </div>
                    </div>
                    <SidebarComponent/>
                </div>
            </main>
        )
    }
}

export default MainPage;