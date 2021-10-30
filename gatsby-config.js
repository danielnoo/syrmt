module.exports = {
  siteMetadata: {
    title: 'Shaun Young - Registered Massage Therapist',
    author: 'Shaun Young',
    description: 'Shaun Young Registered Massage Therapist Toronto',
    siteUrl: `https://www.shaunyoungrmt.com`,
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
        icon: 'src/images/sy.png',
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
  ],
}
