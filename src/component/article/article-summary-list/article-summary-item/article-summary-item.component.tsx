import React, {PureComponent} from "react";
import ArticleSummaryItemSharedMetaComponent
    from "../../article-summary-item-shared-meta/article-summary-item-shared-meta.component";
import ArticleImageComponent from "../../article-image/article-image.component";
import ArticleHeaderComponent from "../../article-header/article-header.component";
import {ArticleSummaryModel} from "../../article.model";

class ArticleSummaryItemComponent extends PureComponent<ArticleSummaryModel> {
    render() {
        return (
            <article className="post post-type-normal " itemScope itemType="http://schema.org/Article">
                <ArticleSummaryItemSharedMetaComponent articleUrl={this.props.articleURL}/>
                <ArticleHeaderComponent articleTitle={this.props.articleTitle} meta={this.props.meta}/>
                <div className="post-body" itemProp="articleBody">
                    <ArticleImageComponent articleImageURL={this.props.articleImageURL}/>
                    <p>{this.props.articleSummary}</p>
                    <div className="post-button text-center"><a className="btn" href="/">阅读全文 &raquo;</a></div>
                </div>
                <footer className="post-footer">
                    <div className="post-eof"/>
                </footer>
            </article>
        )
    }
}

export default ArticleSummaryItemComponent;