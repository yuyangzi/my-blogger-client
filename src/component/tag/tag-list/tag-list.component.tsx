import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class TagListComponent extends PureComponent {
  render(): React.ReactNode {
    return (
      <div className="posts-expand">
        <header className="post-header">
          <h1 className="post-title" itemProp="name headline">
            标签
          </h1>
        </header>
        <div className="tag-cloud">
          <div className="tag-cloud-title">目前共计 26 个标签</div>
          <div className="tag-cloud-tags">
            <Link
              to={{
                pathname: '/tag',
                search: '?name=AJAX',
              }}
            >
              AJAX
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default TagListComponent
