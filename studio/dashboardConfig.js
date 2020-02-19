export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4d36f81a04aa431fe1a648',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ak9if7nv',
                  apiId: '2236fa7a-e03c-4c6a-a436-36f90247412f'
                },
                {
                  buildHookId: '5e4d36f91a04aa7aede1a63d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vob3yvvm',
                  apiId: 'f673f12a-938e-457e-8ea9-53c79873072c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blamze/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vob3yvvm.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
