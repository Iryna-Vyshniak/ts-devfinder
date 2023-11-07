import SearchIcon from '../../assets/icon-search.svg?react';
import Button from '../../components/Button/Button';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;

    if (text) {
      onSubmit(text.toLowerCase().trim());
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className={styles.search}>
        <label htmlFor='search' className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type='text'
          name='username'
          id='search'
          placeholder='Search GitHub username...'
          className={styles.textField}
        />
        {hasError && <p className={styles.error}>No result</p>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default Search;
