module.exports = {
  siteMetadata: {
    title: 'Shaun Young - Registered Massage Therapist',
    author: 'Shaun Young',
    description: 'A Gatsby.js V2 Starter based on Dimension by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/noun_massage_18710.png', 
      },
    },
    'gatsby-plugin-sass',
  ],
}
