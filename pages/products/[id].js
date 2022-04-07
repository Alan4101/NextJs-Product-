import Layout from "../../components/Layout";
import ProductItem from "../../components/ProductItem";

import { getAllIds, getById } from "../../lib/products";
import { handlerAddToBookmarks } from "../../lib/utils";

import { config } from "../../config";

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const product = await getById(params.id, config.urlApi, "posts");
  return {
    props: {
      product,
    },
  };
}
export default function Product({ product }) {
  const [item] = product;

  return (
    <Layout>
      <ProductItem
        addToBookmarks={handlerAddToBookmarks}
        data={item}
      ></ProductItem>
    </Layout>
  );
}
