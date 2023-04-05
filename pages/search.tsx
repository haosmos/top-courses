import { GetStaticProps } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}

function Search(): JSX.Element {
  const router = useRouter();
  
  return (
    <>
      <h1>Search</h1>
      <h3>{JSON.stringify(router)}</h3>
    </>
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
