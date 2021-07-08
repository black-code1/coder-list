export const getStaticPaths = async () => {
  const response = await fetch('https://api.github.com/users');
  const data = await response.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(coder => {
    return {
      params: { id: coder.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch('https://api.github.com/users/' + id);
  const data = await response.json();

  return {
    props: { coder: data }
  }
}



const Details = ({coder}) => {
  return ( 
    <div>
      <h1>{ coder.name }</h1>
    </div>
   );
}
 
export default Details;