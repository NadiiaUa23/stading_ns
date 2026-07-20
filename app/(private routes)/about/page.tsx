// export const metadata = {
//   title: 'About',
//   description: 'This is the about page',
// };

// const About = () => {
//   return <div>About</div>;
// };

// export default About;

// app/about/page.tsx

import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'About page',
};

const About = () => {
  redirect('/');
  return null;
};

export default About;
