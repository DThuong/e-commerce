import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apigetProductById } from "../../apis/product";
import { Breadcrumb } from "../../components";

const DetailProduct = () => {
  const { pid, title, category } = useParams();
  const [product, setProduct] = useState(null);
  const fetchProductData = async () => {
    const response = await apigetProductById(pid);
    console.log(response);
    if (response.success) setProduct(response.detail);
  };

  useEffect(() => {
    if (pid) {
      fetchProductData();
    }
  }, [pid]); // Correct useEffect dependency array

  return (
    <div className="w-full">
      <div className="h-[81px] bg-gray-100 flex items-center justify-center">
        <div className="w-main">
          <h3>{title || "Product Details"}</h3>
          <Breadcrumb title={title} category={category} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
