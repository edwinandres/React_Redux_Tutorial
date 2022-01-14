import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {

  //Trae el estado global de productos
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  //Consulta los productos ESTO SE PASO A PRODUCTACTIONS
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  //Ejecuta la consulta de productos cada que cambia el estado
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products :", products);
  
  //Retorna un componente Producto
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
