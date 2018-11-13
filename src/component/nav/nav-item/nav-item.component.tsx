import React, {PureComponent} from "react";

class NavItemComponent extends PureComponent {
    render() {
        return (
            <div className="site-state-item site-state-posts">
                <a href="/">
                    <span className="site-state-item-count">17</span>
                    <span className="site-state-item-name">日志</span>
                </a>
            </div>
        )
    }
}

export default NavItemComponent;