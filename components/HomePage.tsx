"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { faStar } from "@fortawesome/free-solid-svg-icons";
interface Product {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export default function HomePage() {
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("https://soal3-be.vercel.app/products")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const getRandomRating = (): number => {
    return parseFloat((Math.random() * 0.3 + 4.7).toFixed(1));
  };

  return (
    <div className="p-8 gap-8 grid grid-cols-2 sm:grid-cols-6">
      {list.map((item) => {
        const originalPrice = Math.round(item.price * 1.1);
        const rating = getRandomRating();
        return (
          <Card shadow="sm" key={item.id} className="relative">
            <CardBody className="overflow-visible p-0 relative">
              <div className="absolute z-20 top-2 left-2 flex items-center bg-black bg-opacity-50 text-yellow-500 px-2 py-1 rounded">
                <FontAwesomeIcon icon={faStar} />
                <span className="ml-1">{rating}</span>
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
                Add to Cart
              </Button>
            </CardBody>
            <Link href={`/product/${item.id}`}>
              <CardFooter className="text-small justify-between h-[100px]">
                <div>
                  <b>{item.name}</b>
                  <p className="text-default-800">Stock: {item.stock}</p>
                </div>
                <div>
                  <p className="text-default-800">${item.price}</p>
                  <p className="text-default-500 line-through">
                    ${originalPrice}
                  </p>
                </div>
              </CardFooter>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
