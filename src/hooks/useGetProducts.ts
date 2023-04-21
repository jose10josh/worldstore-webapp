import { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { ProductModel } from "../models/ProductModel";


export const useGetProducts = (url:string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error|null>(null);
  const [prodList, setProdList] = useState<ProductModel[]>([])

  useEffect(() => {
    fetchProducts(url)
      .then(data=>{
        setProdList(data)
        setLoading(false);
      })
      .catch((error:Error) => {
        setError(error);
        setLoading(false);
        console.error(`Error fetching products: ${error.message}`);
      });

    }, [])
  return {loading, error, prodList};
}