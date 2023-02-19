import React from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { Input, Select } from "@chakra-ui/react";
import CoffeeApi from "../Services/CoffeeApi";
const AddCoffee = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    CoffeeApi.addCoffeeData(data);
  };

  return (
    <div>
      <div className="sect sect--type">
        <div className="">
          <div className="row--center">
            <div className="col-md-5 col-xs-8 col-sm-6 col--inbl">
              <h1 className="sect__title">Add New Product</h1>
            </div>
          </div>
          <div className="row row--small row--center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  type="text"
                  borderColor="black"
                  defaultValue=""
                  {...register("name")}
                />
                <FormHelperText>
                  {errors.name && <span>This field is required</span>}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Product Description</FormLabel>
                <Input
                  type="text"
                  borderColor="black"
                  defaultValue=""
                  {...register("description")}
                />
                <FormHelperText>
                  {errors.description && <span>This field is required</span>}
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  borderColor="black"
                  defaultValue=""
                  {...register("price")}
                />
                <FormHelperText>
                  {errors.price && <span>This field is required</span>}
                </FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Rating</FormLabel>
                <Select borderColor="black" {...register("rating")}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input
                  type="text"
                  borderColor="black"
                  defaultValue=""
                  {...register("type")}
                />
                <FormHelperText>
                  {errors.type && <span>This field is required</span>}
                </FormHelperText>
              </FormControl>
              
              {/* <FormControl>
                <FormLabel>Image URL</FormLabel>
                <Input
                  type="text"
                  borderColor="black"
                  defaultValue=""
                  {...register("url")}
                />
                <FormHelperText>
                  {errors.url && <span>This field is required</span>}
                </FormHelperText>
              </FormControl> */}

              <input type="submit" className="btn btn--opacity" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
