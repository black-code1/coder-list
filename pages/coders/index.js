import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {

  const response = await fetch('https://api.github.com/users');
  const data = await response.json();

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
        <div key={coder.id}>
          <a className={styles.single}>
            <h3>{ coder.login }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Coders;