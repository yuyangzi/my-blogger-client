import React, {PureComponent} from "react";

class ArticleSummaryItemSharedMetaComponent extends PureComponent<{ articleUrl: string }> {
    render() {
        return (
            <>
                <link itemProp="mainEntityOfPage" href={this.props.articleUrl}/>
                <span hidden itemProp="author" itemScope itemType="http://schema.org/Person">
                  <meta itemProp="name" content="王宜明"/>
                  <meta itemProp="description" content=""/>
                  <meta itemProp="image" content="https://avatars0.githubusercontent.com/u/23147062?v=4&s=460"/>
                </span>
                <span hidden itemProp="publisher" itemScope itemType="http://schema.org/Organization">
                  <meta itemProp="name" content="王宜明的博客空间"/>
                </span>
            </>
        )
    }
}

export default ArticleSummaryItemSharedMetaComponent;