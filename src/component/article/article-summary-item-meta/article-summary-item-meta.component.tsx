import React, {PureComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ArticleSummaryMetaComponentDataModel} from "../article.model";

class ArticleSummaryItemMetaComponent extends PureComponent<ArticleSummaryMetaComponentDataModel> {
    render() {
        return (
            <>
                <span className="post-meta-item-icon"><FontAwesomeIcon icon={this.props.icon}/></span>
                <span className="post-meta-item-text">{this.props.text}</span>
            </>
        )
    }
}

export default ArticleSummaryItemMetaComponent