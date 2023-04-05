import cn from 'classnames';
import React, { ReactHTMLElement, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { json } from 'stream/consumers';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import GlassIcon from './search.svg';
import { MenuItem } from '../../interfaces/menu.interface';
import { CourseModel } from '../../interfaces/page.interface';
import { API } from '../../helpers/api';

export function Search({
  className,
  ...props
}: SearchProps): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  
  const goToSearch = (e) => {
    e.preventDefault();
    console.log('goToSearch was clicked!');
    router.push({
      pathname: `/courses/${search}`,
      // query: {
      //   q: search
      // }
    });
  };
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      goToSearch(e);
    }
  };
  
  return (
    <form
      className={cn(className, styles.search)} {...props}
      // onSubmit={(e: React.KeyboardEvent<HTMLFormElement>) => handleKeyDown}
    >
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          console.log('goToSearch was clicked!');
          router.push({
            pathname: `/courses/${search.toLowerCase()}`,
            // query: {
            //   q: search
            // }
          });
          setTimeout(() => {
            setSearch('');
          }, 500);
        }}
        // onSubmit={(e: React.KeyboardEvent<HTMLFormElement>) => handleKeyDown}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </form>
  );
}
