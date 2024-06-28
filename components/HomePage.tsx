"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../lib/store";
import { fetchProducts } from "../lib/features/products/productsSlice";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Button,
  Skeleton,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const getRandomRating = (): number => {
  return parseFloat((Math.random() * 0.3 + 4.7).toFixed(1));
};

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="p-8 gap-8 grid grid-cols-2 sm:grid-cols-6">
      {loading
        ? Array.from({ length: 12 }).map((_, index) => (
            <Card shadow="sm" key={index} className="relative">
              <CardBody className="overflow-visible p-0 relative">
                <Skeleton className="w-full h-[200px]" />
              </CardBody>
              <CardFooter className="text-small justify-between h-[100px]">
                <Skeleton className="w-3/4 h-4 mb-2" />
              </CardFooter>
            </Card>
          ))
        : list.map((item) => {
            const discountPrice = Math.round(item.price * 1.1);
            const rating = getRandomRating();

            return (
              <Card shadow="sm" key={item.id} className="relative">
                <CardBody className="overflow-visible p-0 relative">
                  <div className="absolute z-20 top-2 left-2 flex items-center bg-black bg-opacity-50 text-yellow-500 px-2 py-1 rounded">
                    <FontAwesomeIcon icon={faStar} />
                    <span className="ml-1">{rating.toFixed(1)}</span>
                  </div>
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.name}
                    className="w-full object-cover h-[200px]"
                    src={item.image}
                  />
                  <Button
                    color="primary"
                    size="sm"
                    className="absolute bottom-2 right-2 z-10"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                    Add to Cart
                  </Button>
                </CardBody>
                <Link href={`product/${item.id}`}>
                  <CardFooter className="text-small justify-between h-[100px]">
                    <div>
                      <b>{item.name}</b>
                      <p className="text-default-800">Stock: {item.stock}</p>
                    </div>
                    <div>
                      <p className="text-default-800">${discountPrice}</p>
                      <p className="text-default-500 line-through">
                        ${Math.round(item.price)}
                      </p>
                    </div>
                  </CardFooter>
                </Link>
              </Card>
            );
          })}
    </div>
  );
};

export default HomePage;
