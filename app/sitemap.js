import { siteConfig } from './constants/site'

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: siteConfig.lastUpdated,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}