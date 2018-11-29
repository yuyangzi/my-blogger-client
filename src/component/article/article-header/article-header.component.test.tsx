import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ArticleHeaderComponent from './article-header.component'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleHeader component', () => {
  test('renders', () => {
    const wrapper = shallow(
      <ArticleHeaderComponent
        meta={{
          viewsCount: 10,
          readTime: 10,
          updateTime: '',
          wordCount: 10,
        }}
        articleTitle={'article-header.component.tsx'}
      />
    )
    expect(wrapper.exists()).toBe(true)
  })
})
