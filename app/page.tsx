'use client';

import ReactLenis from 'lenis/react';

import Contacts from '../components/Contacts/Contacts';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Header from '../layout/Header/Header';

export default function Page() {
  return (
    <>
      <ReactLenis root />
      <Header />
      <Hero />
      <Services />
      <Contacts />
    </>
  );
}
