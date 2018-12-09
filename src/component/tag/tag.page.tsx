import React, { Component } from 'react'
import TagListComponent from './tag-list/tag-list.component'
import TagDetailComponent from './tag-detail/tag-detail.component'
import { RouteComponentProps, withRouter } from 'react-router'
import { UnregisterCallback } from 'history'

interface IComponentProps extends RouteComponentProps {}

class TagPage extends Component<IComponentProps, { tagName: string | null }> {
  readonly unListen: UnregisterCallback

  constructor(props: IComponentProps) {
    super(props)
    const params = new URLSearchParams(location.search)
    this.state = { tagName: params.get('name') }
    this.unListen = this.props.history.listen(() => {
      console.log('a')
      const params = new URLSearchParams(location.search)
      this.setState({
        tagName: params.get('name'),
      })
    })
  }

  componentDidMount(): void {}

  componentWillUnmount(): void {
    this.unListen()
  }

  render() {
    return this.state.tagName ? (
      <TagDetailComponent tagName={this.state.tagName} />
    ) : (
      <TagListComponent />
    )
  }
}

export default withRouter(TagPage)
