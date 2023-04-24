import { useEffect, useState } from 'react';
import { fetchSingleProduct } from '../api/fetchProducts';
import { ProductModel } from '../models/ProductModel';
import { useAppDispatch } from '../app/hooks';
import { setLoading } from '../slices/uiSlice';

export const useGetSingleProduct = (url: string) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<Error | null>(null);
  const [prodData, setProdData] = useState<ProductModel>();

  useEffect(() => {
    dispatch(setLoading(true))
    fetchSingleProduct(url)
      .then((data) => {
        setProdData(data);
        dispatch(setLoading(false))
      })
      .catch((err: Error) => {
        setError(err);
        dispatch(setLoading(false))
        console.error(`Error fetching Single product: ${err.message}`);
      });
  }, []);
  return { error, prodData };
};
