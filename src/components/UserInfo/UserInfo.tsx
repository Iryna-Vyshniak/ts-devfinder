import CompanyIcon from '../../assets/icon-company.svg?react';
import LocationIcon from '../../assets/icon-location.svg?react';
import TwitterIcon from '../../assets/icon-twitter.svg?react';
import BlogIcon from '../../assets/icon-website.svg?react';

import { InfoItem, InfoItemProps } from '../InfoItem';
import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';

interface UserInfoProps
  extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
