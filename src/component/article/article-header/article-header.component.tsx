import React, {PureComponent} from "react";
import ArticleSummaryItemMetaComponent
    from "../article-summary-item-meta/article-summary-item-meta.component";
import {ArticleHeaderModel} from "../article.model";

class ArticleHeaderComponent extends PureComponent<ArticleHeaderModel> {
    render() {
        return (
            <header className="post-header">
                <h3 className="post-title" itemProp="name headline">
                    <a className="post-title-link" href="/" itemProp="url">{this.props.articleTitle}</a>
                </h3>
                <div className="post-meta">
                        <span className="post-time">
                            <ArticleSummaryItemMetaComponent icon="calendar" text="发表于"/>
                            <time title="创建于" itemProp="dateCreated datePublished"
                                  dateTime={this.props.meta.updateTime}>
                                {this.props.meta.updateTime}
                            </time>
                        </span>
                    <span className="post-category">
                            <span className="post-meta-divider">|</span>
                            <ArticleSummaryItemMetaComponent icon="folder" text="分类于"/>
                            <span itemProp="about" itemScope itemType="http://schema.org/Thing">
                                <a href="/" itemProp="url" rel="index"><span itemProp="name">原创</span></a>
                            </span>
                            <span itemProp="about" itemScope itemType="http://schema.org/Thing">
                                <a href="/" itemProp="url" rel="index"><span itemProp="name">前端技术</span></a>
                            </span>
                        </span>
                    <span className="post-views-count">
                            <span className="post-meta-divider">|</span>
                            <ArticleSummaryItemMetaComponent icon="eye" text="阅读次数"/>
                            <span>{this.props.meta.viewsCount}</span>
                        </span>
                    <div className="post-word-count">
                        <ArticleSummaryItemMetaComponent icon="file-word" text="字数统计"/>
                        <span title="字数统计">{this.props.meta.wordCount}</span>
                        <span className="post-meta-divider">|</span>
                        <ArticleSummaryItemMetaComponent icon="clock" text="阅读时长"/>
                        <span title="阅读时长">{this.props.meta.readTime}</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default ArticleHeaderComponent;