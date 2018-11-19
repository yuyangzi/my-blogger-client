import React, { PureComponent } from 'react'
import './menu-item.component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MenuModel } from '../menu.model'
import { Link } from 'react-router-dom'

class MenuItemComponent extends PureComponent<MenuModel> {
    render() {
        return (
            <li className="menu-item menu-item-home">
                <Link to={this.props.url} rel="section">
                    <FontAwesomeIcon icon={this.props.icon} /> <br />
                    {this.props.text}
                </Link>
            </li>
        )
    }
}

export default MenuItemComponent
