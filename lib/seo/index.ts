import { BASE_URL } from '../constants';

const defaultSeo = {
  defaultTitle: 'Overlapp',
  titleTemplate: '%s | Overlapp',
  description: 'Overlapp is the app for connecting over things you like, dislike, and want to do.',
  openGraph: {
    type: 'website',
    title: 'Overlapp',
    description: 'Overlapp is the app for connecting over things you like, dislike, and want to do.',
    site_name: 'overlapp',
    url: BASE_URL,
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSeo;
