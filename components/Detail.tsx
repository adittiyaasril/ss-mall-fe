"use client";

import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProductById } from "@/lib/features/products/productsSlice";
import { RootState } from "@/lib/store";
import { Divider, Image, Skeleton, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShieldBlank,
  faShoppingCart,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Detail: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(parseInt(id as string)));
    }
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="p-8">
        <div className="lg:container mx-auto lg:px-24 grid lg:grid-cols-2 gap-8">
          <Skeleton className="w-full h-[400px] rounded-lg" />
          <div>
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-2" />
            <div className="flex h-5 items-center space-x-4 mb-4">
              <Skeleton className="h-6 w-12" />
              <Divider orientation="vertical" />
              <Skeleton className="h-6 w-24" />
              <Divider orientation="vertical" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-10 w-1/4 mb-4" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-full mb-4" />
            <div className="flex space-x-4">
              <Skeleton className="h-12 w-36 rounded-lg" />
              <Skeleton className="h-12 w-36 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!loading && !product) {
    return <div className="p-8">Product not found</div>;
  }

  return (
    <div className="lg:p-8 md:p-3 ">
      {product && (
        <div className="lg:container mx-auto lg:px-24 grid lg:grid-cols-2">
          <Image
            isZoomed
            shadow="sm"
            width={400}
            height={400}
            radius="lg"
            alt={product.name}
            className="object-cover"
            src={product.image}
          />
          <div>
            <p className="text-3xl font-black px-5 pt-5">{product.name}</p>
            <Divider className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-small px-5">
              <div className="bg-black bg-opacity-50 text-yellow-500 px-2 py-1 rounded">
                <p className="ml-1">
                  <FontAwesomeIcon icon={faStar} />
                  5.0
                </p>
              </div>
              <Divider orientation="vertical" />
              <p>Category: {product.category}</p>
              <Divider orientation="vertical" />
              <p> Stock: {product.stock}</p>
            </div>
            <p className="text-4xl text-blue-600 font-bold p-5">
              ${product.price}
            </p>
            <p className="px-5 text-slate-500">
              <FontAwesomeIcon icon={faShieldBlank} /> Money back guarantee if
              the product does not match{" "}
            </p>
            <p className="p-5 text-slate-500">
              <FontAwesomeIcon icon={faTruck} /> Free shipping
            </p>
            <div className="px-5 flex space-x-4">
              <Button size="lg" color="primary" variant="bordered">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                Add To Cart
              </Button>
              <Button size="lg" color="secondary" className="px-16">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
