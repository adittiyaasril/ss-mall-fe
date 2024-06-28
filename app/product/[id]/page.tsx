import Detail from "@/components/Detail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
};

export default function DetailProduct() {
  return (
    <div>
      <Detail />
    </div>
  );
}
