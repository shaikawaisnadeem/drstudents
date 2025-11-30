import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dr Students',
    short_name: 'Dr Students',
    description: 'Your trusted partner for Medical and Engineering college admissions, mentorship, and career guidance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/drstudents.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/drstudents.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
