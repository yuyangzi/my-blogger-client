import React, {PureComponent} from "react";
import ArticleImageComponent from "./article-image/article-image.component";
import ArticleHeaderComponent from "./article-header/article-header.component";
import ArticleSummaryItemSharedMetaComponent
    from "./article-summary-item-shared-meta/article-summary-item-shared-meta.component";
import {ArticleModel} from "./article.model";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ArticleComponent extends PureComponent<ArticleModel> {
    render() {
        return (
            <div className="posts-expand">
                <article className="post post-type-normal " itemScope itemType="http://schema.org/Article">
                    <ArticleSummaryItemSharedMetaComponent articleUrl={this.props.articleURL}/>
                    <ArticleHeaderComponent meta={this.props.meta} articleTitle={this.props.articleTitle}/>
                    <div className="post-body" itemProp="articleBody">
                        <ArticleImageComponent articleImageURL={this.props.articleImageURL}/>
                    </div>
                    <footer className="post-footer">
                        <div className="post-tags"><a href="" rel="tag"># HTML5</a></div>
                        <div className="post-nav">
                            <div className="post-nav-next post-nav-item">
                                <a href="/" rel="next" title="JavaScript中的装饰器--Decorator">
                                    <FontAwesomeIcon icon="chevron-left"/> JavaScript中的装饰器--Decorator
                                </a>
                            </div>
                            <span className="post-nav-divider"/>
                            <div className="post-nav-prev post-nav-item">
                                <a href="/" rel="prev" title="新一代的前端存储方案--indexedDB">
                                    新一代的前端存储方案--indexedDB <FontAwesomeIcon icon="chevron-right"/>
                                </a>
                            </div>
                        </div>
                    </footer>
                </article>
            </div>
        )
    }
}

export default ArticleComponent;