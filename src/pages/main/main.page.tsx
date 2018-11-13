import React, {PureComponent} from "react";
import './main.page.css'
import SidebarComponent from "../../component/sidebar/sidebar.component";

class MainPage extends PureComponent {
    render() {
        return (
            <main className="main">
                <div className="main-inner">
                    <SidebarComponent/>
                </div>
            </main>
        )
    }
}

export default MainPage;