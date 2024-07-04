import React, { useState } from "react";
import InputDesign from "../InputDesign";
import SelectInputDesign from "../MultiInputSelect";
import Checkbox from "../Checkbox";
import { useNavigate } from "react-router-dom";
import Upload from "../Upload";
import axios from "axios";
import { useForm } from "react-hook-form";
import Header from "../Header"
import { addDataApi } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UploadMulti from "../Upload/Upload";
import {Link} from "react-router-dom"

const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [MultiImages, setMultiImages] = useState("");
  const [uploadedImages, setUploadedImages] = useState({
    main_image: "",
    first_floor_map_image: "",
    second_floor_map_image: "",
    sub_image_1: "",
    sub_image_2: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("formData", data);
    data.media = MultiImages
    data.main_image = uploadedImages.main_image;
    data.first_floor_map_image = uploadedImages.first_floor_map_image;
    data.second_floor_map_image = uploadedImages.second_floor_map_image;
    data.sub_image_1 = uploadedImages.sub_image_1;
    data.sub_image_2 = uploadedImages.sub_image_2;
    data.second_floor_map_image = uploadedImages.second_floor_map_image;
    const url = "http://16.170.205.35:3001/api/write/Properties";

    setLoading(true);

    try {
     
      localStorage.setItem("engData", JSON.stringify(data));

      console.log("Success:", data);
    navigate("/add-property-ar")
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const listing = [
    { value: "Buy", label: "Buy" },
    { value: "rent", label: "rent" },
    { value: "sale", label: "sale" },
  ];
  const catogery = [
    { value: "Houses", label: "Houses" },
    { value: "Flates", label: "Flates" },
  ];
  const Location = [
    { value: "Nicosia", label: "Nicosia" },
    { value: "Famagusta ", label: "Famagusta " },
    { value: "Girne", label: "Girne" },
  
  ];
  const handleFileUploadMulti = (base64String) => {
    
    console.log("Image base64 string:", base64String);
    const imageSrc =`data:image/jpeg;base64,${base64String}`;
    setMultiImages((prevImages) => [...prevImages, imageSrc]);
  };
  const handleFileUpload = (base64String, fieldName) => {
    console.log("Image base64 string:", base64String);

    // Update the state with the base64 string for the corresponding image field
    setUploadedImages((prevImages) => ({
      ...prevImages,
      [fieldName]: `data:image/jpeg;base64,${base64String}`,
    }));
  };
  const wordCountValidator = value => {
    const wordCount = value.trim().split(/\s+/).length;
    return wordCount <= 1000 || "You cannot exceed 1000 words";
  };
  return (
    <>
    <Header/>
   
      <div className="px-20 py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 flex flex-col w-full"
        >
          <h1 className="text-2xl flex w-full items-center justify-center uppercase text-[#6b748c]">Add New    
           <span className="text-[#70bcd7] font-semibold ml-2">   Property</span></h1>
          <div className=" p-10">
           <div className="grid grid-cols-3 gap-10">
           <InputDesign
              register={register}
              fieldName={"title"}
              required={true}
              title="Title"
              value="email"
              type="text"
              errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"sub_title"}
              required={true}
              title="Sub Title"
              type="text"
              errors={errors}
            />
            <SelectInputDesign
              register={register}
              fieldName={"listing_type"}
              required={true}
              title={"listing"}
              options={listing}
            />
            <SelectInputDesign
              register={register}
              fieldName={"location_area"}
              required={true}
              title={"Location"}
              options={Location}
            />
            <SelectInputDesign
              register={register}
              fieldName={"category_type"}
              required={true}
              title={"category"}
              options={catogery}
            />
            
            
           
            <InputDesign
              register={register}
              fieldName={"contact_no"}
              required={true}
              title="contact No"
              type="text"
              errors={errors}
            />
            
            <InputDesign
              register={register}
              fieldName={"size"}
              required={true}
              title="size"
              type="text"
                errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"bed_room_count"}
              required={true}
              title="bed room Count"
              type="text"
              errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"bath_count"}
              required={true}
              title="bath Count"
              type="text"
             errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"security_camaras_count"}
              required={true}
              title="security Camera Count"
              type="text"
             errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"disabled_access_type"}
              required={true}
              title="disabled Access Type"
              errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"fence_type"}
              required={true}
              title="fence Type"
              type="text"
              errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"floor_type"}
              required={true}
              title="floor Type"
              type="text"
              errors={errors}
            />
             <InputDesign
              register={register}
              fieldName={"additional_space_type"}
              required={true}
              title="additional Space Type"
              type="text"
              errors={errors}
            />
             <InputDesign
              register={register}
              fieldName={"furnished_type"}
              required={true}
              title="furnished Type"
              type="text"
                    errors={errors}
            />
               <InputDesign
              register={register}
              fieldName={"revolution_date"}
              required={true}
              title="revolution Date"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"ceiling_height"}
              required={true}
              title="ceiling Height"
              type="text"
errors={errors}
            />
             <InputDesign
              register={register}
              fieldName={"construction_year"}
              required={true}
              title="construction Year"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"address"}
              required={true}
              title="address"
              type="text"
errors={errors}
            />
           
            <InputDesign
              register={register}
              fieldName={"currency"}
              required={true}
              title="currency"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"price"}
              required={true}
              title="price"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"_360_url"}
              required={true}
              title="360 Url"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"map_url"}
              required={true}
              title="map Url"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"video_image_address"}
              required={true}
              title="video Url"
              type="text"
errors={errors}
            />
             <InputDesign
              register={register}
              fieldName={"heating_type"}
              required={true}
              title="Heating Type"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"window_type"}
              required={true}
              title="Window Type"
              type="text"
errors={errors}
            />
           </div>
        
        
            </div>
          <h1 className="text-2xl px-8">Property <span className="text-[#70bcd7] font-semibold">Good Details</span></h1>
          <div className="grid grid-cols-3 gap-4 p-10">
           
            <Checkbox
              register={register}
              fieldName={"is_pet_friendly"}
              required={true}
              label="Is pet Friendly"
            />
             <Checkbox
              register={register}
              fieldName={"is_floor_available"}
              required={true}
              label="is FLoor Availible"
            />
           
            <Checkbox
              register={register}
              fieldName={"is_additional_space"}
              required={true}
              label="Is aditional Space"
            />
           
            <Checkbox
              register={register}
              fieldName={"is_furnished"}
              required={true}
              label="Is furnished"
            />
         
            <Checkbox
              register={register}
              fieldName={"is_ceiling"}
              required={true}
              label="Is ceiling"
            />
            <Checkbox
              register={register}
              fieldName={"has_heating"}
              required={true}
              label="Has Heating"
            />
            <Checkbox
              register={register}
              fieldName={"has_window"}
              required={true}
              label="Has Window"
            />
            <Checkbox
              register={register}
              fieldName={"has_air_conditioners"}
              required={true}
              label="has Air Conditioners"
            />
            <Checkbox
              register={register}
              fieldName={"has_cable_tv"}
              required={true}
              label="Has Cable TV"
            />
            <Checkbox
              register={register}
              fieldName={"has_fire_place"}
              required={true}
              label="Has fire place"
            />
            <Checkbox
              register={register}
              fieldName={"has_intercorm"}
              required={true}
              label="Has intercorm"
            />
            <Checkbox
              register={register}
              fieldName={"has_wifi"}
              required={true}
              label=" has wifi"
            />
            <Checkbox
              register={register}
              fieldName={"has_ventillation"}
              required={true}
              label=" has Ventillation"
            />
            <Checkbox
              register={register}
              fieldName={"has_garage"}
              required={true}
              label=" has Garage"
            />
            <Checkbox
              register={register}
              fieldName={"has_swimming_pool"}
              required={true}
              label="has swimming pool"
            />
            <Checkbox
              register={register}
              fieldName={"has_parking"}
              required={true}
              label="Has Parking"
            />
            <Checkbox
              register={register}
              fieldName={"has_garden"}
              required={true}
              label="Has Garden"
            />
          </div>
          <h1 className="text-2xl px-8">Property <span className="text-[#70bcd7] font-semibold">Nearby Details</span></h1>
         
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"school_distance"}
              required={true}
              title="school Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"university_distance"}
              required={true}
              title="University Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"hospital_distance"}
              required={true}
              title="hospital Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"metro_station_distance"}
              required={true}
              title="Metro Station Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"grocery_center_distance"}
              required={true}
              title="Grocery Center Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"market_distance"}
              required={true}
              title="Market Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"gym_distance"}
              required={true}
              title="gym Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"river_distance"}
              required={true}
              title="river Distance"
              type="text"
errors={errors}
            />
            <InputDesign
              register={register}
              fieldName={"wellness_distance"}
              required={true}
              title="wellness Distance"
              type="text"
errors={errors}
            />
          </div>
         <div className="py-10 w-full px-10 flex items-start flex-col ">
          <label className=" " htmlFor="description">Description</label>
         <textarea
        placeholder="Description"
        className="border outline-0 p-2 rounded w-[900px]"
        name="description"
        id="description"
        cols="30"
        rows="5"
        {...register("description", {
          required: "This field is required",
          validate: wordCountValidator
        })}
      />
         </div>
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          <div className=" flex flex-wrap justify-between  p-10">
            <div className=" flex gap-6">
            <div className="flex flex-col space-y-4">
              <Upload
                title="main image"
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "main_image")

                }
                register={register}
                fieldName="main_image"
                required={true}
              />
              {uploadedImages.main_image && (
                <img
                  src={`${uploadedImages.main_image}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>

          

            <div className="flex flex-col space-y-4">
              <Upload
                title="sub image 1"
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "sub_image_1")
                }
                register={register}
                fieldName="sub_image_1"
                required={true}
              />
              {uploadedImages.sub_image_1 && (
                <img
                  src={`${uploadedImages.sub_image_1}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Upload
                title="sub image 2"
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "sub_image_2")
                }
                register={register}
                fieldName="sub_image_2"
                required={true}
              />
              {uploadedImages.sub_image_2 && (
                <img
                  src={`${uploadedImages.sub_image_2}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}

            </div>
           
            </div>
            <div className=" flex gap-6">
          <div className="flex flex-col space-y-4">
              <Upload
                title="first floor map image"
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "first_floor_map_image")
                }
                register={register}
                fieldName="first_floor_map_image"
                required={true}
              />
              {uploadedImages.first_floor_map_image && (
                <img
                  src={`${uploadedImages.first_floor_map_image}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>
            <div className="flex flex-col space-y-4">
              <Upload
                title="second_floor_map_image"
                onFileUpload={(base64String) =>
                  handleFileUpload(base64String, "second_floor_map_image")
                }
                register={register}
                fieldName="second_floor_map_image"
                required={true}
              />
              {uploadedImages.second_floor_map_image && (
                <img
                  src={`${uploadedImages.second_floor_map_image}`}
                  alt="uploadedImage"
                  width={140}
                  className="mb-6"
                />
              )}
            </div>
          </div>
          </div>
         
          <div className="flex gap-2 justify-between">
           <div className="flex gap-3 flex-wrap w-1/2">
          
         {MultiImages? (
        <div className='flex space-x-2'>
       {MultiImages.map((img, id)=>(
         <div key={id} >
          <img src={`${img.trim()}`} alt="uploadedImage" width={200} className='mb-6' />
         </div>
       ))}
    </div>
      ) : null} 
           </div>
           <div>
           <UploadMulti
        title="Upload Media"
        onFileUpload={handleFileUploadMulti}
        register={register}
        fieldName="media"
      />
           </div>
</div>
          <div className="flex items-center w-full justify-center">
            <button
              type="submit"
              // onClick={() => handleSubmit(handleFormSubmit)()}
              className="bg-[#1ebbd7] py-2 px-44 rounded-lg text-white"
            >
              {loading ? "loading..." : " Next"}
            </button>
          </div>
          {errors && Object.keys(errors).length > 0 && (
            <div className="text-red-500">
              <p>Fill Complete Form</p>
            </div>
          )}
        </form>
       
      </div>
    
    </>
  );
};

export default Form;
