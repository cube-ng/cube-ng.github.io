import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cube.ng",
  description: "Official site of the cube.ng project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Science Cases', link: '/science-cases' },
      { text: 'EarthCODE', link: '/earthcode' },
      { text: 'Publications', link: '/publications' },
      { text: 'Events', link: '/events' }
    ],

    /*
    sidebar: [
      {
        text: 'Project',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Science Cases', link: '/science-cases' },
          { text: 'EarthCODE', link: '/earthcode' },
          { text: 'Publications', link: '/publications' },
          { text: 'Events', link: '/events' }
        ]
      }
    ],
    */

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cube-ng/' }
    ],

    footer: {
      copyright: 'Copyright © 2026 Leipzig University'
    }

  }
})
