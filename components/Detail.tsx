"use client";

import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProductById } from "@/lib/features/products/productsSlice";
import { RootState } from "@/lib/store";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Skeleton,
} from "@nextui-org/react";

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
        <Skeleton className="w-full h-[400px]" />
      </div>
    );
  }

  return (
    <div className="p-8">
      {product && (
        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={product.name}
              className="w-full object-cover h-[400px]"
              src={product.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between h-[100px]">
            <div>
              <p className="text-lg">{product.name}</p>
              <p className="text-default-800">Category: {product.category}</p>
              <p className="text-default-800">Stock: {product.stock}</p>
            </div>
            <div>
              <p className="text-default-800">${product.price}</p>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Detail;
