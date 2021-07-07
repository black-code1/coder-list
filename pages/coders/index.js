import styles from '../../styles/Jobs.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {

  const response = await fetch('https://api.github.com/users');
  const data = await response.json();
  console.log(data)

  return {
    props: { coders: data }
  }
}


const Coders = ({ coders }) => {
  console.log(coders)

  return (  
    <div>
      <h1>All Coders</h1>
      {coders.map(coder => (
        <Link href={'/coders/' + coder.id} key={coder.id}>
          <a className={styles.single}>
            <h3>{ coder.login }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Coders;