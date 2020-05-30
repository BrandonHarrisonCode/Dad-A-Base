import PropTypes from 'prop-types'
import React from 'react'

const Joke = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Dad-A-Base Entry #316</h1>
        <p>A fully responsive site template designed by</p>
      </div>
    </div>
  </header>
)

Joke.propTypes = {
  joke: PropTypes.string,
  timeout: PropTypes.bool,
}

export default Joke
