import { useState } from 'react';
import Image from 'next/image';

import { GetStaticProps } from 'next';
import axios from 'axios';
import { Htag, Card, P } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';
import styles from './index.module.css';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  // eslint-disable-next-line react/no-unused-prop-types
  firstCategory: number;
}

// interface Hero {
//
// }

// function Hero() {
//
//   return (
//     <>
//       <div className={styles.hero}>
//         <Htag tag="h1">
//           Выбери свое будущее из лучших курсов
//         </Htag>
//
//       </div>
//     </>
//   );
// }

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  
  return (
    <div className={styles.gridContainer}>
      {/* <Htag tag="h1" className={styles.hadding}> */}
      {/*   Выбери свое будущее из лучших курсов */}
      {/* </Htag> */}
      <h2 className={styles.hadding}>
        Выбери свое будущее
      </h2>
      <div className={`${styles.block} ${styles.block1}`}>
        <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Picture of the author"
            style={
              {
                objectFit: 'cover',
                // borderRadius: '5px'
              }
            }
            // layout="fill"
            width={700}
            height={500}
        />
        <div className={styles.blockDetails}>
          <h2 className={styles.hadding}>Решитесь на большее</h2>
          <p className={styles.description}>
            Вам есть что показать этому миру. Позвольте себе ставить большие цели, а
            навыки и знания дадим мы. Для этого у нас есть все инструменты
          </p>
        </div>
      </div>
      
      <div className={`${styles.block} ${styles.block2}`}>
        <div className={styles.blockDetails}>
          <h2 className={styles.hadding}>Действуйте</h2>
          <p className={styles.description}>
            Мы создали комфортную среду обучения, чтобы у вас всегда была мотивация
            двигаться вперёд. Учитесь, практикуйтесь и применяйте знания сразу в
            работе
          </p>
        </div>
        <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1537111261224-6fa49cecda2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Picture of the author"
            width={700}
            height={500}
        />
      </div>
      
      <div className={`${styles.block} ${styles.block3}`}>
        
        <div className={styles.blockDetails}>
          <h2 className={styles.hadding}>
            Выберите вектор
            развития
          </h2>
          <p className={styles.description}>
            С нами вы можете получить новую профессию, освоить навыки для развития
            карьеры или перенастроить свой бизнес. Выбирайте подходящую из более 80
            программ.
          </p>
        </div>
        <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="Picture of the author"
            width={700}
            height={500}
        />
        
      </div>
    </div>
  
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
