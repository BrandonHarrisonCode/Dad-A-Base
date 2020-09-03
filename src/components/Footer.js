import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <div style={{ textAlign: 'center' }}>
      <h3>Dedicated to Don Harrison</h3>
    </div>

    <p className="copyright">&copy; Brandon Harrison - Dad-A-Base. </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
