import React, {PureComponent} from "react";
import './sidebar.component.css'

class SidebarComponentTest extends PureComponent {
    render() {
        return (
            <aside className="sidebar">
                <div className="sidebar-inner">
                    <section className="site-overview sidebar-panel sidebar-panel-active">
                    </section>
                </div>
            </aside>
        )
    }
}