import React, {PureComponent} from "react";
import "./content-list.component.css"

class ContentListComponent extends PureComponent {
    render() {
        return (
            <div className="content-wrap">
                <div className="content">
                    <section className="posts-expand">
                    </section>
                </div>
            </div>
        )
    }
}

export default ContentListComponent;