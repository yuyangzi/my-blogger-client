import React, { Component } from 'react'
import TagListComponent from './tag-list/tag-list.component'
import TagDetailComponent from './tag-detail/tag-detail.component'

class TagPage extends Component<{}, { tagName: string | null }> {
  constructor(props: {}) {
    super(props)
    const params = new URLSearchParams(location.search)
    this.state = { tagName: params.get('name') }
  }

  render() {
    return this.state.tagName ? (
      <TagDetailComponent tagName={this.state.tagName} />
    ) : (
      <TagListComponent />
    )
  }
}

export default TagPage
