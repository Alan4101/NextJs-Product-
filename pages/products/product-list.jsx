import Layout from "../../components/Layout/layout";
import Slider from "react-slick";

import { getAll } from "../../lib/products";

import { config } from "../../config";
import SliderItem from './../../components/SliderItem/sliderItem';

export async function getServerSideProps() {
  const data = await getAll(config.urlApi, 'posts')
  return {
    props: {data}, 
  }
}
export default function ProductList({data}){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true
  };
  
  return (
    <Layout titleSite="Products">
        <h2>Products</h2>
        <div>
        <Slider {...settings}>
          {
            data.map(el=>
              (
                <SliderItem key={el.id} data={el}></SliderItem>
              )
            )
          }
        </Slider>
        </div>
    </Layout>
  )
}