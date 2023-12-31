import art from 'images/artArt@2x.jpg';
import conference from 'images/conferenceC@2x.jpg';
import workshop1 from 'images/workshop-1W@2x.jpg';
import party from 'images/partyP@2x.jpg';
import business from 'images/businessS@2x.jpg';
import workshop from 'images/workshopW@2x.jpg';
import music from 'images/musicM@2x.jpg';
import sport from 'images/sportS@2x.jpg';

export const events = [
  {
    id: '1',
    title: 'Galery Opening',
    description:
      'Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.',
    date: '14/08/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'High',
    picture: art,
  },
  {
    id: '2',
    title: 'Innovation Summit',
    description:
      'Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.',
    date: '12/09/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Conference',
    priority: 'Medium',
    picture: conference,
  },
  {
    id: '3',
    title: 'Empower Your Creativity',
    description:
      'Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop.',
    date: '22/08/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Workshop',
    priority: 'High',
    picture: workshop1,
  },
  {
    id: '4',
    title: 'Summer Soiree',
    description:
      'Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.',
    date: '17/10/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Party',
    priority: 'High',
    picture: party,
  },
  {
    id: '5',
    title: 'Leadership Conference',
    description:
      'Unlock the secrets of effective leadership at our transformative Success Leadership Conference.',
    date: '18/09/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Business',
    priority: 'Medium',
    picture: business,
  },
  {
    id: '6',
    title: 'Tech Startup Showcase',
    description:
      'Witness the future of technology as innovative startups showcase their groundbreaking ideas.',
    date: '15/07/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Workshop',
    priority: 'Low',
    picture: workshop,
  },
  {
    id: '7',
    title: 'Acoustic Garden Concert',
    description:
      'Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.',
    date: '13/07/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Music',
    priority: 'High',
    picture: music,
  },
  {
    id: '8',
    title: 'Extreme Adventure Race',
    description:
      'Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.',
    date: '18/07/2023',
    time: '12:00',
    location: 'Kyiv',
    category: 'Sport',
    priority: 'Low',
    picture: sport,
  },
];
