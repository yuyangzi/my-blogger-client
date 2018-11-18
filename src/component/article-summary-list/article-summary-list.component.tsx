import React, {PureComponent} from "react";
import "./article-summary-list.component.css"
import ArticleSummaryItemComponent from "./article-summary-item/article-summary-item.component";

class ArticleSummaryListComponent extends PureComponent {
    render() {
        return (
            <div className="content-wrap">
                <div className="content">
                    <section className="posts-expand">
                        <ArticleSummaryItemComponent articleTitle={'新一代的前端存储方案--indexedDB'} meta={{
                            viewsCount: 10,
                            readTime: 10,
                            updateTime: '',
                            wordCount: 10
                        }} articleSummary={'我们都知道在前端开发当中,有时会因为某些需求,要将一些数据存储在前端本地当中.比如说:为了优化性能,将一些常用的数据存在本地,这样以后需要的时候直接从本地拿,不需要再向后端进行请求.还有就是为了防止CSRF攻击,后端给前端一个token,前端就需要将这个token存在本地.之后每次请求都需要带上这个token.等等不一而足。'} articleImageURL={'https://user-gold-cdn.xitu.io/2018/5/27/163a05ff03a923bd?w=1280&h=720&f=jpeg&s=45301'} articleURL={''}/>

                        <ArticleSummaryItemComponent articleTitle={'新一代的前端存储方案--indexedDB'} meta={{
                            viewsCount: 10,
                            readTime: 10,
                            updateTime: '',
                            wordCount: 10
                        }} articleSummary={'我们都知道在前端开发当中,有时会因为某些需求,要将一些数据存储在前端本地当中.比如说:为了优化性能,将一些常用的数据存在本地,这样以后需要的时候直接从本地拿,不需要再向后端进行请求.还有就是为了防止CSRF攻击,后端给前端一个token,前端就需要将这个token存在本地.之后每次请求都需要带上这个token.等等不一而足。'} articleImageURL={'https://user-gold-cdn.xitu.io/2018/5/27/163a05ff03a923bd?w=1280&h=720&f=jpeg&s=45301'} articleURL={''}/>


                        <ArticleSummaryItemComponent articleTitle={'新一代的前端存储方案--indexedDB'} meta={{
                            viewsCount: 10,
                            readTime: 10,
                            updateTime: '',
                            wordCount: 10
                        }} articleSummary={'我们都知道在前端开发当中,有时会因为某些需求,要将一些数据存储在前端本地当中.比如说:为了优化性能,将一些常用的数据存在本地,这样以后需要的时候直接从本地拿,不需要再向后端进行请求.还有就是为了防止CSRF攻击,后端给前端一个token,前端就需要将这个token存在本地.之后每次请求都需要带上这个token.等等不一而足。'} articleImageURL={'https://user-gold-cdn.xitu.io/2018/5/27/163a05ff03a923bd?w=1280&h=720&f=jpeg&s=45301'} articleURL={''}/>


                        <ArticleSummaryItemComponent articleTitle={'新一代的前端存储方案--indexedDB'} meta={{
                            viewsCount: 10,
                            readTime: 10,
                            updateTime: '',
                            wordCount: 10
                        }} articleSummary={'我们都知道在前端开发当中,有时会因为某些需求,要将一些数据存储在前端本地当中.比如说:为了优化性能,将一些常用的数据存在本地,这样以后需要的时候直接从本地拿,不需要再向后端进行请求.还有就是为了防止CSRF攻击,后端给前端一个token,前端就需要将这个token存在本地.之后每次请求都需要带上这个token.等等不一而足。'} articleImageURL={'https://user-gold-cdn.xitu.io/2018/5/27/163a05ff03a923bd?w=1280&h=720&f=jpeg&s=45301'} articleURL={''}/>
                    </section>
                </div>
            </div>
        )
    }
}

export default ArticleSummaryListComponent;