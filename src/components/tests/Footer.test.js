import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../Footer'

describe('footer', () => {
  it('renders without crashing', () => {
    expect.assertions(1)
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).not.toBeNull()
  })
})
