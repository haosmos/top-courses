import { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}

function Search(): JSX.Element {
  return (
    <h1>Search</h1>
  );
}

export default withLayout(Search);

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
