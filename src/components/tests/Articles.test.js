import React from 'react'
import renderer from 'react-test-renderer'

import Articles from '../Articles'

describe('articles', () => {
  it('renders without crashing', () => {
    expect.assertions(1)
    const tree = renderer
      .create(<Articles setWrapperRef={jest.fn()} />)
      .toJSON()
    expect(tree).not.toBeNull()
  })
})
