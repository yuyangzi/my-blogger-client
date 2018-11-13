import React, {PureComponent} from "react";

class LinksOfAuthorItemComponent extends PureComponent {
    render() {
        return (
            <span className="links-of-author-item">
                <a href="https://github.com/yuyangzi" target="_blank" title="GitHub">
                    <i className="fa fa-fw fa-github"/>
                    GitHub
                </a>
            </span>
        )
    }
}

export default LinksOfAuthorItemComponent