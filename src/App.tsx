import { useState } from 'react';
import { defaultUser } from './mock';

import Search from './components/Search/Search';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { BASE_URL } from './shared/constants/constants';
import { isGithubUser } from './shared/utils/typeguards';
import { extractLocalUser } from './shared/utils/exract-local-user';
import { UserCard } from './components/UserCard';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;
    console.log('user: ', user);

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search onSubmit={fetchUser} hasError={!user} />
      {user && <UserCard {...user} />}
    </Container>
  );
}

export default App;
