import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JeepGladiator from "../../assets/JeepGladiator.svg";
import starIcon from "../../assets/star-solid 1.svg";
import Buy from "../button/buy";
import Frame from "../border/frame";
import AddWishlist from "../button/addWishlist";
import chevronRight from "../../assets/chevron/chevron-right.svg";

import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { DetailProduct } = useParams();
  useEffect(() => {
    console.log(DetailProduct);
  }, [DetailProduct]);

  return (
    <div className="mx-20">
      <div className="flex items-center">
        <div className="flex items-center">
          <Link to="../..">Home</Link>
          <span>
            <img src={chevronRight} />
          </span>
        </div>
        <div className="flex items-center">
        <Link to={`../../cat/${DetailProduct}`}>Lambo</Link>
          <span>
            <img src={chevronRight} />
          </span>
        </div>
        <div className="flex items-center">
          {DetailProduct}
        </div>
      </div>
      <div className="flex w-full gap-x-11 h-full">
        <div>
          <img src={JeepGladiator} />
          <div className="flex gap-x-7">
            <Frame />
            <Frame />
            <Frame />
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-end">
          <div className="font-poppins italic font-semibold text-3xl mb-2">
            Jeep Gladiator
          </div>
          <div className="flex items-center">
            <img src={starIcon} />
            <div>4.5</div>
            <div className="text-lg">(19 rating) </div>
          </div>
          <div className="font-poppins text-4xl font-bold my-7">
            Rp125.000.000
          </div>
          <div className="mb-4">
            <div>Kondisi: Baru</div>
            <div>Max. Pemesanan: 1 Buah</div>
          </div>
          <div>
            <div>Deskripsi : </div>
            <div className="w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining ...{" "}
            </div>
            <div className="flex gap-5">
              <Buy />
              <AddWishlist />
            </div>
          </div>
        </div>
      </div>
      <div>Home -- Lambo -- Lamborghini Aventador</div>
    </div>
  );
};

export default Product;
