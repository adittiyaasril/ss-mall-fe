import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function HomePage() {
  const list = [
    {
      title: "Samsung A20",
      img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg",
      price: "$5.50",
    },
    {
      title: "Iphone 15",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
      price: "$3.00",
    },
    {
      title: "Advan",
      img: "https://fdn.gsmarena.com/imgroot/news/23/07/ear-2-black/inline/-1200/gsmarena_001.jpg",
      price: "$10.00",
    },
    {
      title: "Vivo",
      img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo-z9-turbo-1.jpg",
      price: "$5.30",
    },
    {
      title: "Google",
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg",
      price: "$15.70",
    },
    {
      title: "Samsung A20",
      img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg",
      price: "$5.50",
    },
    {
      title: "Iphone 15",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
      price: "$3.00",
    },
    {
      title: "Advan",
      img: "https://fdn.gsmarena.com/imgroot/news/23/07/ear-2-black/inline/-1200/gsmarena_001.jpg",
      price: "$10.00",
    },
    {
      title: "Vivo",
      img: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo-z9-turbo-1.jpg",
      price: "$5.30",
    },
    {
      title: "Google",
      img: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-pro-1.jpg",
      price: "$15.70",
    },
    {
      title: "Samsung A20",
      img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a20.jpg",
      price: "$5.50",
    },
    {
      title: "Iphone 15",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg",
      price: "$3.00",
    },
  ];

  return (
    <div className="p-8 gap-8 grid grid-cols-2 sm:grid-cols-6">
      {list.map((item, index) => (
        <Card shadow="sm" key={index}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[200px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between h-[100px]">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
