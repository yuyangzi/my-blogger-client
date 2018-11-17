import React, {PureComponent} from "react";
import NavComponent from "../nav/nav.component";
import LinksOfAuthorComponent from "../links-of-author/links-of-author.component";
import "./sidebar.component.css"

class SidebarComponent extends PureComponent {
    render() {
        return (
            <aside className="sidebar">
                <div className="sidebar-inner">
                    <section className="site-overview sidebar-panel sidebar-panel-active">
                        <div className="site-author motion-element" itemProp="author" itemScope
                             itemType="http://schema.org/Person">
                            <img className="site-author-image" itemProp="image"
                                 src="https://avatars0.githubusercontent.com/u/23147062?v=4&s=460"
                                 alt="王宜明"/>
                            <p className="site-author-name" itemProp="name">王宜明</p>

                            <p className="site-description motion-element" itemProp="description">
                                没有什么问题可以用绝对一词来回答。答案只是一个时期相对的认同。只要自己不后悔就无所谓是否正确</p>
                        </div>
                        <NavComponent/>
                        <LinksOfAuthorComponent/>
                    </section>
                </div>
            </aside>
        )
    }
}

export default SidebarComponent