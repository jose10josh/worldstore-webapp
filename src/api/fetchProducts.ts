import axios from "axios";
import { ProductModel } from "../models/ProductModel";


export const fetchProducts = async (url:string):Promise<ProductModel[]> => {
  const response = await axios.get<ProductModel[]>(url);
  return response.data;
}