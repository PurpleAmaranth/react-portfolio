import React from 'react';
import PageContent from '../components/PageContent';
import Bio from '../components/Bio';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import { capitalizeFirstLetter } from '../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'bio':
        return <Bio />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'experience':
        return <Experience />;
      default:
        return <Bio />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
