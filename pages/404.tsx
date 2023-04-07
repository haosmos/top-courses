import Link from 'next/link';
import React from 'react';
import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

export function Error404(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Страница не найдена</Htag>
      <br />
      <Link
        href="/courses/python"
        style={{
          color: 'green',
          fontStyle: 'italic',
        }}
      >
        Изучите язык программирования Python
      </Link>
    </>
  );
}

export default withLayout(Error404);
