import PropTypes from 'prop-types'
import React from 'react'

class Joke extends React.Component {
  constructor(props) {
    super(props)

    this.fetchJoke = this.fetchJoke.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      id: '',
      joke: '',
    }
  }

  async componentDidMount() {
    this.setState({
      id: '',
      joke: '',
    })

    this.fetchJoke()
  }

  async fetchJoke() {
    const url = 'https://the-dad-a-base-api.herokuapp.com/random'
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error while accessing joke.')
        }
        return response.json()
      })
      .then(parsedJSON => {
        this.setState({
          id: parsedJSON.id,
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
    const id = this.state.id
    const joke = this.state.joke
    console.log(joke)

    return (
      <header id="header" style={this.props.timeout ? { display: 'none' } : {}}>
        <div className="content">
          <div className="inner">
            <h1>Dad-A-Base Entry #{id}</h1>
            <p dangerouslySetInnerHTML={{ __html: joke }}></p>
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
