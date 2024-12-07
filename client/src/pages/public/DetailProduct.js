import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apigetProductById, apigetProduct } from "../../apis/product";
import { Breadcrumb, Button, SelectQuantity, ProductInforTab, Product } from "../../components";
import Slider from "react-slick";
import { renderStar, formatMoney } from "../../utils/helpers";

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const DetailProduct = () => {
  const { pid, title, category } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeImage, setActiveImage] = useState(""); // State for currently displayed image

  // Fetch product details by ID
  const fetchProductData = async () => {
    try {
      const response = await apigetProductById(pid);
      if (response.success) {
        setProduct(response.detail);
        setActiveImage(response.detail.images?.[0] || ""); // Set initial image
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  // Fetch related products by category
  const fetchRelatedProducts = async () => {
    try {
      const response = await apigetProduct({ category });
      if (response.success) setRelatedProducts(response.products);
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  useEffect(() => {
    if (pid) {
      fetchProductData();
      fetchRelatedProducts();
    }
  }, [pid]);

  return (
    <div className="w-full">
      {/* Breadcrumb Section */}
      <div className="h-[81px] bg-gray-100 flex items-center justify-center">
        <div className="w-main">
          <h3>{title || "Product Details"}</h3>
          <Breadcrumb title={title} category={category} />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-main m-auto mt-4 flex gap-8">
        {/* Product Images */}
        <div className="w-2/5 flex flex-col gap-4">
          {/* Large Image Display */}
          <img
            src={activeImage || ""}
            alt="product"
            className="h-[458px] w-[458px] border object-cover"
          />
          {/* Thumbnails Slider */}
          <div className="w-[458px]">
            <Slider className="custom-slider" {...sliderSettings}>
              {product?.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`sub-product-${idx}`}
                  className={`h-[143px] w-[143px] border object-cover cursor-pointer ${
                    activeImage === img ? "border-main" : "border-gray-300"
                  }`}
                  onClick={() => setActiveImage(img)} // Update the displayed image on click
                />
              ))}
            </Slider>
          </div>
        </div>

        {/* Product Information */}
        <div className="w-2/5 flex flex-col gap-6">
          <h2 className="text-[30px] font-semibold">{product?.title || "Product Name"}</h2>
          <div className="text-[30px] font-semibold flex items-center justify-between">
            <span>{`${formatMoney(product?.price || 0)} VND`}</span>
            <span className="text-sm font-semibold">{`Stock: ${product?.quantity || 0}`}</span>
          </div>
          <div className="flex items-center gap-2">
            {renderStar(product?.totalRating)}
            <span className="ml-4">{`sold: (${product?.sold} pieces)`}</span>
            </div>
          <ul className="text-sm text-gray-500 list-disc pl-4">
            {product?.description?.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <SelectQuantity />
            <Button name="Add to Cart" />
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="w-main mt-8 mx-auto">
        <ProductInforTab />
      </div>

      {/* Related Products Slider */}
      <div className="w-main mt-8 mx-auto">
        <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main border-red-500">
          OTHER CUSTOMERS ALSO LIKED
        </h3>
        <div className="w-full mt-4">
          <Slider className="custom-slider" {...sliderSettings}>
            {relatedProducts.map((relatedProduct) => (
              <Product key={relatedProduct._id} product={relatedProduct} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
