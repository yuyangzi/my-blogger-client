import React, {PureComponent} from "react";
import LinksOfAuthorItemComponent from "./links-of-author-item/links-of-author-item.component";

class LinksOfAuthorComponent extends PureComponent {
    render() {
        return (
            <div className="links-of-author motion-element">
                <LinksOfAuthorItemComponent/>
            </div>
        )
    }
}

export default LinksOfAuthorComponent