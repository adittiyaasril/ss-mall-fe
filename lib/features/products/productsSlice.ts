import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  image: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

interface ProductsState {
  list: Product[];
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  list: [],
  product: null,
  loading: true,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get<Product[]>(
      "https://soal3-be.vercel.app/products"
    );
    return response.data;
  }
);

// Thunk untuk mengambil detail produk berdasarkan ID
export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: number) => {
    const response = await axios.get<Product>(
      `https://soal3-be.vercel.app/products/${id}`
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product";
      });
  },
});

export default productsSlice.reducer;
