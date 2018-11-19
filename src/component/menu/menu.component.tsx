import React, { PureComponent } from 'react'
import './menu.component.css'
import MenuItemComponent from './menu-item/menu-item.component'
import { MenuModel } from './menu.model'

class MenuComponent extends PureComponent<{ menuList: MenuModel[] }> {
    render() {
        const menuItems = this.props.menuList.map(item => (
            <MenuItemComponent
                key={item.text}
                icon={item.icon}
                url={item.url}
                text={item.text}
            />
        ))
        return <ul className="menu">{menuItems}</ul>
    }
}

export default MenuComponent
