import { MetadataRoute } from 'next';

const SITE_URL = 'https://eleanor-voss.vercel.app'; // ← update after first deploy

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0  },
    { url: `${SITE_URL}/#research`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9  },
    { url: `${SITE_URL}/#publications`,   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${SITE_URL}/#teaching`,       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7  },
    { url: `${SITE_URL}/#contact`,        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6  },
  ];
}