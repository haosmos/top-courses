import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import { MenuItem } from '../../interfaces/menu.interface';
import { withLayout } from '../../layout/Layout';
import { firstLevelMenu } from '../../helpers/helpers';

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}

function Type({ firstCategory }: TypeProps): JSX.Element {
  return (
    <>
      <h1>Type: {firstCategory}</h1>
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  console.log(firstLevelMenu.map(m => `/${m.route}`));
  return {
    paths: firstLevelMenu.map(m => `/${m.route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async (
  { params }: GetStaticPropsContext<ParsedUrlQuery>
) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  
  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
  
  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }
  
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory: firstCategoryItem.id,
    },
  );
  
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
