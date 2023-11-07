import { UserInfo } from '../../components/UserInfo';
import { UserStat } from '../../components/UserStat';
import { UserTitle } from '../../components/UserTitle';
import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <div className={styles.center}>
        <div className={styles.profile}>
          <div className={styles.image}>
            <div className={styles['circle-1']}></div>
            <div className={styles['circle-2']}></div>
            <img
              src={props.avatar}
              alt={props.login}
              width='70'
              height='70'
              className={styles.avatar}
            />
          </div>
          <UserTitle created={props.created} login={props.login} name={props.name} />
          <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
            {props.bio || 'This profile has no bio'}
          </p>
        </div>
        <div className={styles.stats}>
          <UserStat repos={props.repos} followers={props.followers} following={props.following} />
        </div>
      </div>
      <footer className={styles.footer}>
        <UserInfo
          blog={props.blog}
          company={props.company}
          location={props.location}
          twitter={props.twitter}
        />
      </footer>
    </div>
  );
};
