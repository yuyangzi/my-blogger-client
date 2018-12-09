import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class TagDetailItemComponent extends PureComponent<{
  title: string
  data: string
  id: string
}> {
  render(): React.ReactNode {
    return (
      <article
        className="post post-type-normal"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="post-header">
          <h1 className="post-title">
            <Link className="post-title-link" to="/" itemProp="url">
              <span itemProp="name">对Angular中的生命周期钩子的理解</span>
            </Link>
          </h1>
          <div className="post-meta">
            <time
              className="post-time"
              itemProp="dateCreated"
              dateTime="2017-07-06T20:46:34+08:00"
            >
              07-06
            </time>
          </div>
        </header>
      </article>
    )
  }
}

export default TagDetailItemComponent
