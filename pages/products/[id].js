import { Layout } from '../../components/Layout/layout';
import { getAll, getAllIds, getById } from './../../lib/products';
import ProductItem from './ProductsItem/productItem';

const url = ' http://localhost:3004'
export async function getStaticPaths() {

  const paths = await getAllIds()
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }) {

  const product = await getById(params.id, url, "posts")

  const [id] = product;
  console.log(id.id)
  return {
    props: {
      product
    }
  }
}
export default function Product({product}){
  const [p] = product;
  return(
    <Layout>
      <ProductItem data={p}></ProductItem>
    </Layout>
  )
}