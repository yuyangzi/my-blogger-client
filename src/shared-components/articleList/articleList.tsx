import {List} from 'antd';
import * as React from 'react';
import ArticleListItem from '../articleListItem/articleListItem'
import './articleList.css'
import {IArticleListDataModal} from "./IArticleListDataModal";

const listData: IArticleListDataModal[] = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        href: 'http://ant.design',
        title: `ant design part ${i}`,
    });
}

class ArticleList extends React.Component {

    public render() {
        return <List
            itemLayout="vertical"
            size="large"
            pagination={{
                pageSize: 3,
            }}
            dataSource={listData}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={this.renderItemFn}
        />
    }

    private renderItemFn = (item: IArticleListDataModal) => {
       return <ArticleListItem data={item}/>
    };

}

export default ArticleList;