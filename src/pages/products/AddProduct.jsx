import React from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/products/productSlice";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const dispatch = useDispatch()
    
      const onSubmit = (data) => {
        dispatch(addProduct(data))
      }
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-sl font-semibold text-gray-700 mb-4">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Product Name:{" "}
          </label>
          <input
          {...register("name", { required: true })} 
            type="text"
            name="name"
            id="name"
            placeholder="Product 1"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* category */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Category:{" "}
          </label>
          <select
          {...register("category", { required: true })} 
            name="category"
            id="category"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Choose a category</option>
            <option value="clothing">Clothing</option>
            <option value="gadgets">Gadgets</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>

        {/* product image url */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Product URL:
          </label>
          <input
          {...register("image", { required: true })} 
            type="text"
            name="image"
            id="image"
            placeholder="paste your url:"
            className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* price and date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Price
            </label>
            <input
              type="number"
              name="price"
              {...register("price", { required: true })} 
              id="price"
              placeholder="100"
              className="w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
            Upload Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              {...register("date", { required: true })} 
              className="w-full bg-gray-50 text-black mt-1 p-2 placeholder:text-black rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button type="submit" className="w-full bg-indigo-500 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
