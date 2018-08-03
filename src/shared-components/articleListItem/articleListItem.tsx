import {Avatar, List} from "antd";
import * as React from 'react';
import {IArticleListDataModal} from "../articleList/IArticleListDataModal";
import IconText from '../iconText/iconText';
import './articleListItem.css'


class ArticleListItem extends React.Component<{data: IArticleListDataModal}> {
    public render() {
        return (
            <List.Item
                key={this.props.data.title}
                actions={[<IconText type="star-o" text="156" key={1}/>, <IconText type="like-o" text="156" key={2}/>,
                    <IconText type="message" text="2" key={3}/>]}
                extra={<img width={272} alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}>
                <List.Item.Meta
                    avatar={<Avatar src={this.props.data.avatar}/>}
                    title={<a href={this.props.data.href}>{this.props.data.title}</a>}
                    description={this.props.data.description}/>
                {this.props.data.content}
            </List.Item>)
    }
}

export default ArticleListItem;