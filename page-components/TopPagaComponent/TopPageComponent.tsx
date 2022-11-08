import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Htag, Tag, Card, HhData } from '../../components';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';

// eslint-disable-next-line import/no-duplicates

export function TopPageComponent({
  page,
  products,
  firstCategory
}: TopPageComponentProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="grey" size="m">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      
      <div>
        {products && products.map(p => (
          <div key={p._id}>{p.title}</div>
        ))}
      </div>
      
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products && <Tag color="red" size="m">hh.ru</Tag>}
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
}
