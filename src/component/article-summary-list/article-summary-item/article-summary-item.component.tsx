import React, {PureComponent} from "react";
import {ArticleSummaryModel} from "../article-summary.model";
import ArticleSummaryItemMetaComponent from "./article-summary-item-meta/article-summary-item-meta.component";
import ArticleSummaryItemSharedMetaComponent
    from "./article-summary-item-shared-meta/article-summary-item-shared-meta.component";

class ArticleSummaryItemComponent extends PureComponent<ArticleSummaryModel> {
    render() {
        return (
            <article className="post post-type-normal " itemScope itemType="http://schema.org/Article">
                <ArticleSummaryItemSharedMetaComponent articleUrl={this.props.articleURL}/>
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
                <div className="post-body" itemProp="articleBody">
                    <div className="post-gallery" itemScope itemType="http://schema.org/ImageGallery">
                        <div className="post-gallery-row">
                            <a className="post-gallery-img fancybox"
                               href={this.props.articleImageURL}
                               rel="gallery_cjo0anxim0000y6he52acmews" itemScope
                               itemType="http://schema.org/ImageObject"
                               itemProp="url">
                                <img src={this.props.articleImageURL} itemProp="contentUrl"/>
                            </a>
                        </div>
                    </div>
                    <p>{this.props.articleSummary}</p>
                    <div className="post-button text-center">
                        <a className="btn" href="/">
                            阅读全文 &raquo;
                        </a>
                    </div>
                </div>
                <footer className="post-footer">
                    <div className="post-eof"/>
                </footer>
            </article>
        )
    }
}

export default ArticleSummaryItemComponent;