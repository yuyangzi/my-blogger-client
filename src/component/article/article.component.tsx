import React, { PureComponent } from 'react'
import ArticleImageComponent from './article-image/article-image.component'
import ArticleHeaderComponent from './article-header/article-header.component'
import ArticleSummaryItemSharedMetaComponent from './article-summary-item-shared-meta/article-summary-item-shared-meta.component'
import { ArticleModel } from './article.model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArticleDataMock: ArticleModel = {
  articleTitle: '新一代的前端存储方案--indexedDB',
  meta: {
    viewsCount: 10,
    readTime: 10,
    updateTime: '',
    wordCount: 10,
  },
  articleSummary: `我们都知道在前端开发当中,有时会因为某些需求,要将一些数据存储在前端本地当中.比如说:为了优化性能,将一些常用的数据存在本地,这样以后需要的时候直接从本地拿,不需要再向后端进行请求.还有就是为了防止CSRF攻击,后端给前端一个token,前端就需要将这个token存在本地.之后每次请求都需要带上这个token.等等不一而足。`,
  articleImageURL:
    'https://user-gold-cdn.xitu.io/2018/5/27/163a05ff03a923bd?w=1280&h=720&f=jpeg&s=45301',
  articleURL: '',
  articleId: '',
}

class ArticleComponent extends PureComponent<
  { articleId: string },
  ArticleModel
> {
  constructor(props: { articleId: string }) {
    super(props)
    this.state = ArticleDataMock
  }

  render() {
    return (
      <div className="posts-expand">
        <article
          className="post post-type-normal "
          itemScope
          itemType="http://schema.org/Article"
        >
          <ArticleSummaryItemSharedMetaComponent
            articleUrl={this.state.articleURL}
          />
          <ArticleHeaderComponent
            meta={this.state.meta}
            articleTitle={this.state.articleTitle}
          />
          <div className="post-body" itemProp="articleBody">
            <ArticleImageComponent
              articleImageURL={this.state.articleImageURL}
            />
          </div>
          <footer className="post-footer">
            <div className="post-tags">
              <a href="" rel="tag">
                # HTML5
              </a>
            </div>
            <div className="post-nav">
              <div className="post-nav-next post-nav-item">
                <a href="/" rel="next" title="JavaScript中的装饰器--Decorator">
                  <FontAwesomeIcon icon="chevron-left" />{' '}
                  JavaScript中的装饰器--Decorator
                </a>
              </div>
              <span className="post-nav-divider" />
              <div className="post-nav-prev post-nav-item">
                <a href="/" rel="prev" title="新一代的前端存储方案--indexedDB">
                  新一代的前端存储方案--indexedDB{' '}
                  <FontAwesomeIcon icon="chevron-right" />
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    )
  }
}

export default ArticleComponent
