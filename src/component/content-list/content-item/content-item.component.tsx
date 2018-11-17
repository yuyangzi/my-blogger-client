import React, {PureComponent} from "react";

class ContentItemComponent extends PureComponent {
    render() {
        return (
            <article className="post post-type-normal " itemScope itemType="http://schema.org/Article">
                <link itemProp="mainEntityOfPage"
                      href="http://www.wangyiming19950222.com/2018/05/26/新一代的前端存储方案--indexedDB/"/>
                <span hidden itemProp="author" itemScope itemType="http://schema.org/Person">
                  <meta itemProp="name" content="王宜明"/>
                  <meta itemProp="description" content=""/>
                  <meta itemProp="image" content="https://avatars0.githubusercontent.com/u/23147062?v=4&s=460"/>
                </span>
                <span hidden itemProp="publisher" itemScope itemType="http://schema.org/Organization">
                  <meta itemProp="name" content="王宜明的博客空间"/>
                </span>
                <header className="post-header">
                    <h3 className="post-title" itemProp="name headline">
                        <a className="post-title-link" href="/" itemProp="url">
                            新一代的前端存储方案--indexedDB
                        </a>
                    </h3>
                    <div className="post-meta">
                        <span className="post-time">
                            <span className="post-meta-item-icon"><i className="fa fa-calendar-o"/></span>
                            <span className="post-meta-item-text">发表于</span>
                            <time title="创建于" itemProp="dateCreated datePublished" dateTime="2018-05-26T22:14:08+08:00">
                                2018-05-26
                            </time>
                        </span>
                        <span className="post-category">
                            <span className="post-meta-divider">|</span>
                            <span className="post-meta-item-icon">
                                <i className="fa fa-folder-o"/>
                            </span>
                            <span className="post-meta-item-text">分类于</span>
                            <span itemProp="about" itemScope itemType="http://schema.org/Thing">
                            <a href="/" itemProp="url" rel="index">
                                <span itemProp="name">原创</span>
                            </a>
                        </span>
                            <span itemProp="about" itemScope itemType="http://schema.org/Thing">
                            <a href="/" itemProp="url" rel="index">
                                <span itemProp="name">前端技术</span>
                            </a>
                        </span>
                        </span>
                        <span id="/2018/05/26/新一代的前端存储方案--indexedDB/" className="leancloud_visitors"
                              data-flag-title="新一代的前端存储方案--indexedDB">
                            <span className="post-meta-divider">|</span>
                            <span className="post-meta-item-icon">
                        <i className="fa fa-eye"/>
                      </span>
                            <span className="post-meta-item-text">阅读次数 </span>
                            <span className="leancloud-visitors-count"/>
                        </span>
                        <div className="post-wordcount">
                            <span className="post-meta-item-icon">
                        <i className="fa fa-file-word-o"/>
                      </span>
                            <span className="post-meta-item-text">字数统计</span>
                            <span title="字数统计">
                        3,804
                      </span>
                            <span className="post-meta-divider">|</span>
                            <span className="post-meta-item-icon">
                        <i className="fa fa-clock-o"/>
                      </span>
                            <span className="post-meta-item-text">阅读时长</span>
                            <span title="阅读时长">14
                      </span>
                        </div>
                    </div>
                </header>
                <div className="post-body" itemProp="articleBody">
                    <div className="post-gallery" itemScope itemType="http://schema.org/ImageGallery">
                        <div className="post-gallery-row">
                            <a className="post-gallery-img fancybox"
                               href="https://user-gold-cdn.xitu.io/2018/5/27/163a05ff03a923bd?w=1280&h=720&f=jpeg&s=45301"
                               rel="gallery_cjo0anxim0000y6he52acmews" itemScope
                               itemType="http://schema.org/ImageObject"
                               itemProp="url">
                                <img
                                    src="https://user-gold-cdn.xitu.io/2018/5/27/163a05ff03a923bd?w=1280&h=720&f=jpeg&s=45301"
                                    itemProp="contentUrl"/>
                            </a>
                        </div>
                    </div>
                    <p>我们都知道在前端开发当中,有时会因为某些需求,要将一些数据存储在前端本地当中.比如说:为了优化性能,将一些常用的数据存在本地,这样以后需要的时候直接从本地拿,不需要再向后端进行请求.还有就是为了防止CSRF攻击,后端给前端一个token,前端就需要将这个token存在本地.之后每次请求都需要带上这个token.等等不一而足。</p>
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

export default ContentItemComponent;