import React, {PureComponent} from "react";
import NavItemComponent from "./nav-item/nav-item.component";

class NavComponent extends PureComponent {
    render() {
        return (
            <nav className="site-state motion-element">
                <NavItemComponent/>
            </nav>
        )
    }
}

export default NavComponent