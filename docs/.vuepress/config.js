/**
 * Site data
 */
const siteData = require("./config-site/info");

module.exports = {
  title: 'k8dash',
  themeConfig: {
    domain: siteData.hostname,
    twitter: siteData.twitter,
    websiteRepo: siteData.websiteRepo,
    repo: siteData.repo,
    repoButtonLabel: siteData.repoButtonLabel,
    logo: siteData.logo,
    slackInvite: siteData.slackInviteURL,
    slackChannel: siteData.slackChannelURL,
    docsDir: "docs",
    search: false,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Search....',
    displayAllHeaders: true,
    // top bar
    nav: [
      //{text: 'Home', link: '/'},
      {text: 'Overview', link: '/overview/'},
      {text: 'Documentation', link: '/documentation/'},
      {text: 'Contribute', link: '/contribute/'},
      //{text: 'Brand', link: '/brand/'},
      //{text: 'Community', link: '/community/'}
      ],
      sidebar: {
        '/overview/':
        [{
          sidebarDepth: 3,
          collapsable: false,
          children: [
            '',
          ]
        }],
        '/install/':
        [{
          sidebarDepth: 3,
          collapsable: false,
          children: [
            '',
          ]
        }],
        '/documentation/':
        [{
          sidebarDepth: 3,
          collapsable: false,
          children: [
            '',
            'brand'
          ]
        }],
        '/contribute/':
        [{
          sidebarDepth: 3,
          collapsable: false,
          children: [
            '',
            'path',
            'development'
          ]
        }]

        },

  plugins: [
    [
      '@vuepress/google-analytics', // adds google analytics plugin
        {
          'ga': 'UA-191628597-1' // UA-00000000-0
        }
    ]
          ]
      },
  //title: siteData.title,
  description: siteData.description,
  repo: siteData.repo,
  repoButtonLabel: siteData.repoButtonLabel
}
