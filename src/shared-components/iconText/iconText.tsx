import {Icon} from 'antd';
import * as React from 'react';
import './iconText.css';

class IconText extends React.Component<{type: string, text: string}> {
    public render() {
        return (<span><Icon type={this.props.type} style={{marginRight: 8}}/>{this.props.text}</span>)
    }
}

export default IconText;