import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from "@chakra-ui/react";
import { Input, Select } from "@chakra-ui/react";
import coffeeApi from "../Services/CoffeeApi";

const EditCoffee = () => {
    const {
        register,
        handleSubmit,
        watch, setValue,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        coffeeApi.updateCoffeeById(data).then(() => {
            //do what ever you like after sucessfull update api call 
        })
        // methent axios dapn 
        // call the update update api endpoint 
    };
    const { id } = useParams();

    React.useEffect(() => {
        if (id) {
            // methent axios dapn  and set the form values (inital values of forms)
            // after taking the data use setValues to set the value for the form 
            // call the get api endpoint
            coffeeApi.getCoffeeById(id).then((data) => {
                //eg: setValue('decription',data.description)
                setValue('description', 'new description')
                setValue('name', 'new name')
                setValue('rate', 5)
                setValue('price', 20.00)
                setValue('url', 'new image link')
            })



        }

    }, [id])



    return (

        < div >
            <div className="sect sect--type">
                <div className="">
                    <div className="row--center">
                        <div className="col-md-5 col-xs-8 col-sm-6 col--inbl">
                            <h1 className="sect__title">Edit Product</h1>
                        </div>
                    </div>
                    <div className="row row--small row--center">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <FormControl>
                                <FormLabel>Product Name</FormLabel>
                                <Input
                                    type="text"
                                    borderColor="black"
                                    defaultValue={''}
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
                                    defaultValue={''}
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
                                    defaultValue={0}
                                    {...register("price")}
                                />
                                <FormHelperText>
                                    {errors.price && <span>This field is required</span>}
                                </FormHelperText>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Rating</FormLabel>
                                <Select borderColor="black" defaultValue={1}{...register("rating")}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Select>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Image URL</FormLabel>
                                <Input
                                    type="text"
                                    borderColor="black"
                                    defaultValue={''}
                                    {...register("url")}
                                />
                                <FormHelperText>
                                    {errors.url && <span>This field is required</span>}
                                </FormHelperText>
                            </FormControl>

                            <input type="submit" className="btn btn--opacity" value="save" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EditCoffee;
