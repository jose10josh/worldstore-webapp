import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/fetchProducts';
import { ProductModel } from '../models/ProductModel';
import { useAppDispatch } from '../app/hooks';
import { setLoading } from '../slices/uiSlice';

export const useGetProducts = (url: string) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<Error | null>(null);
  const [prodList, setProdList] = useState<ProductModel[]>([]);

  useEffect(() => {
    dispatch(setLoading(true))
    fetchProducts(url)
      .then((data) => {
        setProdList(data);
        dispatch(setLoading(false))
      })
      .catch((err: Error) => {
        setError(err);
        dispatch(setLoading(false))
        console.error(`Error fetching products: ${err.message}`);
      });
  }, []);
  return { error, prodList };
};
