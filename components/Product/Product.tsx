// import cn from 'classnames';
// import React from 'react';
// import { ProductProps } from './Product.props';
// import styles from './Product.module.css';
// import { Card } from '../Card/Card';
// import { Rating } from '../Rating/Rating';
// import { Tag } from '../Tag/Tag';
// import { Htag } from '../Htag/Htag';
// import { Button } from '../Button/Button';
// import { Divider } from '../Divider/Divider';
//
// export function Product({
//   product,
//   className,
//   ...props
// }: ProductProps): JSX.Element {
//   return (
//     <Card className={styles.product}>
//       <div className={styles.logo}>
//         <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
// alt={product.title} /> </div> <div className={styles.title}> <Htag
// tag="h4">{product.title}</Htag> </div> <div
// className={styles.price}>{product.price}</div> <div
// className={styles.credit}>{product.credit}</div> <div className={styles.rating}>
// <Rating rating={product.reviewAvg ?? product.initialRating} /> </div> <div
// className={styles.tags}> {product.categories.map(c => <Tag key={c}
// color="ghost">{c}</Tag>)} </div> <div className={styles.priceTitle}>цена</div> <div
// className={styles.creditTitle}>кредит</div> <div
// className={styles.rateTitle}>{product.reviewCount} отзывов</div> <Divider
// className={styles.hr} /> <div
// className={styles.description}>{product.description}</div> <div
// className={styles.feature}>feature</div> <div className={styles.advBlock}> <div
// className={styles.advantages}> <div> преимущества </div> <div> {product.advantages}
// </div> </div> <div className={styles.disadvantages}> <div> недостатки </div> <div>
// {product.disadvantages} </div> </div> <Divider className={styles.hr} /> <div
// className={styles.actions}> <Button appearance="primary"> Узнать подробности
// </Button> <Button appearance="ghost" arrow="right"> Читать отзывы </Button> </div>
// </div> </Card> ); }

// import { Card } from '../Card/Card';
// import { Rating } from '../Rating/Rating';
// import { Tag } from '../Tag/Tag';
// import { Htag } from '../Htag/Htag';
// import { Button } from '../Button/Button';
// import { Divider } from '../Divider/Divider';
//
// export function Product({
//   product,
//   className,
//   ...props
// }: ProductProps): JSX.Element {
//   return (
//     <Card className={styles.product}>
//       <div className={styles.logo}>
//         <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
// alt={product.title} /> </div> <div className={styles.title}> <Htag
// tag="h4">{product.title}</Htag> </div> <div
// className={styles.price}>{product.price}</div> <div
// className={styles.credit}>{product.credit}</div> <div className={styles.rating}>
// <Rating rating={product.reviewAvg ?? product.initialRating} /> </div> <div
// className={styles.tags}> {product.categories.map(c => <Tag key={c}
// color="ghost">{c}</Tag>)} </div> <div className={styles.priceTitle}>цена</div> <div
// className={styles.creditTitle}>кредит</div> <div
// className={styles.rateTitle}>{product.reviewCount} отзывов</div> <Divider
// className={styles.hr} /> <div
// className={styles.description}>{product.description}</div> <div
// className={styles.feature}>feature</div> <div className={styles.advBlock}> <div
// className={styles.advantages}> <div> преимущества </div> <div> {product.advantages}
// </div> </div> <div className={styles.disadvantages}> <div> недостатки </div> <div>
// {product.disadvantages} </div> </div> <Divider className={styles.hr} /> <div
// className={styles.actions}> <Button appearance="primary"> Узнать подробности
// </Button> <Button appearance="ghost" arrow="right"> Читать отзывы </Button> </div>
// </div> </Card> ); }

import { ForwardedRef, forwardRef, useRef, useState } from 'react';
// import Image from 'next/image';
import cn from 'classnames';
import Image from 'next/image';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';

export function Product({
  product,
  className,
  ...props
}: ProductProps): JSX.Element {
  return (
    <div className={className} {...props}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span>
            <span className="visualyHidden">цена</span>
            {priceRu(product.price)}
          </span>
          {product.oldPrice && (
            <Tag className={styles.oldPrice} color="green">
              <span className="visualyHidden">скидка</span>
              {priceRu(product.price - product.oldPrice)}
            </Tag>
          )}
        </div>
        <div className={styles.credit}>
          <span className="visualyHidden">кредит</span>
          {priceRu(product.credit)}
          <span className={styles.month}>мес</span>
        </div>
        <div className={styles.rating}>
          <span className="visualyHidden">
            {`рейтинг${
              product.reviewAvg ?? product.initialRating}`}
          </span>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(c => (
            <Tag
              key={c}
              className={styles.category}
              color="ghost"
            >
              {c}
            </Tag>
          ))}
        </div>
        <div className={styles.priceTitle} aria-hidden>цена</div>
        <div className={styles.creditTitle} aria-hidden>кредит</div>
        <div className={styles.rateTitle}>
          <a href="#ref">
            {product.reviewCount}
            {' '}
            {declOfNum(
              product.reviewCount,
              ['отзыв', 'отзыва', 'отзывов']
            )}
          </a>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(c => (
            <div className={styles.characteristics} key={c.name}>
              <span className={styles.characteristicsName}>{c.name}</span>
              <span className={styles.characteristicsDots} />
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button appearance="ghost">Читать отзывы</Button>
        </div>
      </Card>
    </div>
  );
}
