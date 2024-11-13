import React from 'react';
import Header from '../Header/Header';

interface PageWrapperProps {
  headerTitle: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ headerTitle, children }) => {
  return (
    <div>
      <Header title={headerTitle} />
      <main>{children}</main>
    </div>
  );
};

export default PageWrapper;
