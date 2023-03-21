import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Htag, Button, P, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}

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
      <P size="l">Большой текст</P>
      <P size="m">Средний текст</P>
      <Tag size="s">Ghost</Tag>
      <P size="s">Маленький текст ggggg</P>
      <P size="l">Some text</P>
      <P>Дефолтный текст!!!</P>
      <Tag size="m" color="green">Green</Tag>
      <Tag size="s" color="red">Red</Tag>
      <Tag size="s" color="primary">Ghost</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Tag size="s" color="red">Ghost</Tag>
      <Input />
      <Textarea placeholder="placeholder" />
    </>
  );
}

export default withLayout(Home);

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
