import React, {PureComponent} from "react";
import 'menu-item.component.css'


class MenuItemComponent extends PureComponent {
    render() {
        return (
            <li className="menu-item">
                <a href="/" rel="section">分类</a>
            </li>
        )
    }
}