import { siteConfig } from './constants/site'

export default function manifest() {
  return {
    name: `${siteConfig.name} | ${siteConfig.title}`,
    short_name: siteConfig.name,
    description: siteConfig.metaDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#050816',
    theme_color: siteConfig.themeColor,
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
