import sanityClient from '@sanity/client';
import { services } from './constants';

export const client = sanityClient({
  projectId: 'jamx58su',
  dataset: 'production',
  apiVersion: '2022-03-15',
  token: services.SANITY_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true
})