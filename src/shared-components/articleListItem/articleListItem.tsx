// import {Avatar, List} from "antd";
import * as React from 'react';
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {IArticleListDataModal} from "../articleList/IArticleListDataModal";
import IconText from '../iconText/iconText';
import './articleListItem.css'

interface IPropsInterface extends RouteComponentProps<any> {
    data: IArticleListDataModal;
}

class ArticleListItem extends React.Component<IPropsInterface> {

    public goArticleContent = () => {
      this.props.history.push('/Article')
    };

    public render() {
        return (
            <div className="list-item" onClick={this.goArticleContent}>
                <div className="list-item-wrap">
                    <div className="list-item-main">
                        <div className="list-item-meta">
                            <div className="list-item-meta-avatar">
                                <span className="ant-avatar ant-avatar-circle ant-avatar-image">
                                    <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                </span>
                            </div>
                            <div className="list-item-meta-content">
                                <h3 className="list-item-meta-title">
                                    <Link to={'/Article'}>{this.props.data.title}</Link>
                                </h3></div>
                        </div>
                        <div className="list-item-content">{this.props.data.content}</div>
                        <ul className="list-item-action">
                            <li><IconText type='star-o' text='176'/></li>
                            <li><IconText type='like-o' text='111'/></li>
                            <li><IconText type='message' text='2'/></li>
                        </ul>
                    </div>
                    <div className="list-item-extra">
                        <img width={272} alt="logo"
                             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ArticleListItem);