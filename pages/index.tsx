// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { Htag, Button } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Hello from Next JS!</Htag>
      <Button appearance="primary" arrow="right">
        i am the primary button!
      </Button>
      <Button appearance="ghost" arrow="down">
        I am the ghost button!
      </Button>
    </div>
  );
}
