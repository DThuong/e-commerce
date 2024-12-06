import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../../components";

const Product = () => {
  const { category } = useParams();
  // Convert slug to readable text
  const readableCategory = category?.split("-").join("") || "Product List";
  return (
    <div className="w-full">
      <div className="h-[81px] bg-gray-100 flex items-center justify-center">
        <div className="w-main">
          <h3>{readableCategory || "Product List"}</h3>
          <Breadcrumb category={readableCategory} />
        </div>
      </div>
    </div>
  );
};

export default Product;
