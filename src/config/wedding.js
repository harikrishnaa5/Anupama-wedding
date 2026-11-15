/**
 * Central wedding configuration.
 * Update these values to customize the invitation.
 */
const wedding = {
  couple: {
    partnerOne: 'Amal',
    partnerTwo: 'Anupama',
  },

  // ISO date string (YYYY-MM-DD). Leave empty to hide countdown.
  dateISO: '2027-01-09',
  time: '11:00 AM',
  timeISO: '11:00', // 24h for Date parsing
  displayDate: {
    day: 'Saturday',
    date: '09',
    month: 'January',
    year: '2027',
  },

  venue: {
    name: 'Venue Name',
    address: 'Full venue address, City, State',
    mapsUrl: 'https://maps.google.com',
  },

  messages: {
    intro: 'Together with our families',
    tagline: 'A beautiful beginning, a lifetime of togetherness.',
    invitationHeading: 'Love brings us together',
    invitationBody:
      'With hearts full of happiness, we invite you to join us as we celebrate the beginning of our forever. Your presence and blessings would make our special day even more memorable.',
    closingHeadline: 'Two hearts, one beautiful journey.',
    closingBody: 'We cannot wait to celebrate this special moment with you.',
  },

  // Place couple photographs in /public/images/ and list paths here.
  photos: {
    // Hero full-bleed background
    hero: '/images/1000333731.jpg',
    // Countdown / moments featured image
    featured: '/images/1000333729.jpg',
    // Gallery supporting images
    secondary: ['/images/1000333730.jpg', '/images/1000333731.jpg'],
  },

  music: {
    // Replace with your wedding song: place file in /public and update this path
    // Supports mp3, wav, etc. (e.g. '/music.mp3')
    src: '/music.wav',
    enabled: true,
  },

  meta: {
    title: 'Amal weds Anupama — Wedding Invitation',
    description:
      'You are invited to celebrate the wedding of Amal & Anupama. Save the date and join us for a beautiful beginning.',
    url: '',
    image: '/og-image.svg',
  },
}

export default wedding
