import PropTypes from 'prop-types'
import React from 'react'

class Joke extends React.Component {
  constructor(props) {
    super(props)

    this.controller = new AbortController()
    this.signal = this.controller.signal

    this.fetchJoke = this.fetchJoke.bind(this)
    this.componentWillUnmount = this.componentWillUnmount.bind(this)

    this.state = {
      joke: '',
    }
  }

  async componentDidMount() {
    this.setState({
      joke: '',
    })

    this.fetchJoke()
  }

  async fetchJoke() {
    const signal = this.signal

    const url = 'https://the-dad-a-base-api.herokuapp.com/random'
    fetch(url, { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error while accessing joke.')
        }
        return response.json()
      })
      .then(parsedJSON => {
        this.setState({
          joke: parsedJSON.joke,
        })
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          return
        }

        console.error(error)
        console.error('Unable to access the api at:', url)
      })
  }

  render() {
    const joke = this.state.joke

    return (
      <header id="header" style={this.props.timeout ? { display: 'none' } : {}}>
        <div className="content">
          <div className="inner">
            <h1>Dad-A-Base Entry #316</h1>
            <p>{joke}</p>
          </div>
        </div>
      </header>
    )
  }
}

Joke.propTypes = {
  joke: PropTypes.string,
  timeout: PropTypes.bool,
}

export default Joke
