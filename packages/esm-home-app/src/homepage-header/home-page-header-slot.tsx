import { ExtensionSlot } from '@openmrs/esm-framework';
import React from 'react';
import styles from './home-page-header-slot.scss';

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return <ExtensionSlot className={styles['homepageHeader']} name="home-header-slot" />;
};

export default HomeHeader;
