"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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

  return (
    <div className="p-8 gap-8 grid grid-cols-2 sm:grid-cols-6">
      {list.map((item) => (
        <Card shadow="sm" key={item.id}>
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[200px]"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between h-[100px]">
            <b>{item.name}</b>
            <p className="text-default-500">${item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
