import Slider from "react-slick";

import Layout from "../../components/Layout";
import SliderItem from "../../components/SliderItem";

import { getAll } from "../../lib/products";

import { config } from "../../config";

export async function getServerSideProps() {
  const data = await getAll(config.urlApi, "posts");
  return {
    props: { data },
  };
}
export default function ProductList({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Layout titleSite="Products">
      <h2>Products</h2>
      <div>
        <Slider {...settings}>
          {data.map((el) => (
            <SliderItem key={el.id} data={el}></SliderItem>
          ))}
        </Slider>
      </div>
    </Layout>
  );
}
