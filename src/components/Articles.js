import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/Dad-A-Base-Logo.svg'

class Articles extends React.Component {
  render() {
    const close = (
      <div
        className="close"
        role="button"
        aria-label="Close article"
        tabIndex={0}
        onClick={() => {
          this.props.onCloseArticle()
        }}
        onKeyDown={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={logo} alt="Dad-A-Base Logo" />
          </span>
          <p>Where does a software engineer keep all of his dad jokes?</p>
          <p>
            In the Dad-A-Base, of course. This site collates and delivers a
            random dad joke whenever you ask for one. I made this website during
            a weekend during quarantine. I was running out of jokes to tell to
            my girlfriend to annoy her, so I wanted to make sure I
            over-engineered a solution to permenantly solve the problem.
          </p>
          <p>
            The dad jokes were collected through a variety of sources. They were
            really springing up all over the place once I got started.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Articles.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Articles
