'use client';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import useSWR from 'swr';
type Props = {};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CarouselCars = (props: Props) => {
  const { data, error } = useSWR('/api/staticdata', fetcher);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            width={500}
            height={800}
            className="d-block w-100"
            src="/images/s60_recharge.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <Image
            width={500}
            height={800}
            className="d-block w-100"
            src="/images/v60_recharge.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <Image
            width={500}
            height={800}
            className="d-block w-100"
            src="/images/s90_recharge.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselCars;
