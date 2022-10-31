import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  
  return (
    <>
      <Htag tag="h1">Hello from Next JS!</Htag>
      <Button appearance="primary" arrow="right">
        i am the primary button!
      </Button>
      <Button appearance="ghost" arrow="down">
        I am the ghost button!
      </Button>
      <P size="l">Большой текст</P>
      <P size="m">Средний текст</P>
      <P size="s">Маленький текст</P>
      <P size="l">Some text</P>
      <P>Дефолтный текст!!!</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="green">Green</Tag>
      <Tag size="s" color="red">Red</Tag>
      <Tag size="s" color="primary">Ghost</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Tag size="s" color="red">Ghost</Tag>
      <P size="l" color="greenyellow">Hello from menu!!!</P>
    </>
  );
}

export default withLayout(Home);

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    },
  );
  
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
