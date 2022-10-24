import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { withLayout } from '../components/layout/Layout';

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
