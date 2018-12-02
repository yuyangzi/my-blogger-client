import React, { PureComponent } from 'react'
import TagDetailItemComponent from './tag-detail-item/tag-detail-item.component'

class TagDetailComponent extends PureComponent<{ tagName: string }> {
  render(): React.ReactNode {
    return (
      <div className="posts-collapse">
        <div className="collection-title">
          <h2>
            {this.props.tagName}
            <small>标签</small>
          </h2>
        </div>
        <TagDetailItemComponent />
      </div>
    )
  }
}

export default TagDetailComponent
