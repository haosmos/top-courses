import cn from 'classnames';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';

export function Product({
  product,
  className,
  ...props
}: ProductProps): JSX.Element {
  return (
    <Card className={styles.product}>
      <div сlassName={styles.logo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div сlassName={styles.title}>{product.title}</div>
      <div сlassName={styles.price}>{product.price}</div>
      <div сlassName={styles.credit}>{product.credit}</div>
      <div сlassName={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div сlassName={styles.tags}>
        {product.categories.map(c => <Tag key={c} color="ghost">{c}</Tag>)}
      </div>
      <div сlassName={styles.priceTitle}>цена</div>
      <div сlassName={styles.creditTitle}>кредит</div>
      <div сlassName={styles.rateTitle}>{product.reviewCount} отзывов</div>
    </Card>
  );
}
