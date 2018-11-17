import React, {PureComponent} from "react";
import './menu-item.component.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {MenuModel} from "../menu.model";

class MenuItemComponent extends PureComponent<MenuModel> {
    render() {
        return (
            <li className="menu-item menu-item-home">
                <a href="/" rel="section">
                    <FontAwesomeIcon icon={this.props.icon}/> <br/>
                    {this.props.text}
                </a>
            </li>
        )
    }
}

export default MenuItemComponent;