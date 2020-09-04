module.exports = {
  siteMetadata: {
    title: 'The Dad-A-Base',
    author: 'Brandon Harrison',
    description: 'The best collection of dad jokes on the web.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-169207740-1`,
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Dad-A-Base',
        short_name: 'Dad-A-Base',
        start_url: '/',
        background_color: '#2D2831',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
