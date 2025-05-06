import React,{useEffect, useState} from 'react'
import InputDesign from '../../components/InputDesign';
import SelectInputDesign from '../../components/MultiInputSelect';

import Header from "../../components/Header"
import { useNavigate } from "react-router-dom";
import { arLabels } from '../../components/Form/arLabels';
import { useForm } from "react-hook-form";
import axios from "axios"
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getProperties } from '../../api/api';
const EditArabic = () => {
  const {id, index} = useParams()
  
  const navigate = useNavigate();
  const [prevData, setPrevData] = useState({})
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState({})
  const [propertyData, setPropertyData] = useState(null);
   const fetchSingleProperties = async () => {
     const response = await getProperties();
 
     const propertiesData = response.data?.data?.[index];
     console.log(propertiesData);
     if (propertiesData) {
       setPropertyData(propertiesData?.turkish[0]);
       setPrevData(propertiesData?.turkish[0])
       Object.keys(propertiesData?.turkish[0]).forEach((key) => {
         setValue(key, propertiesData[key]);
       });
     }
   };
  useEffect(() => {
    fetchSingleProperties();
  
  }, []);
  // useEffect(()=>{
  //   const Data = JSON.parse(localStorage.getItem("engDataEdit"))
   
  //   setPrevData(Data.turkish)
  //   setAllData(Data)
   
  // },[])
  const onSubmit = async (data) =>{
    const formData = new FormData()
    formData.append("turkish", JSON.stringify([data])); // ✅ stringify the array
    setLoading(true);
      const url = `https://api.marketx.site/api/update/Properties/${id}`;

   
  
      try {
        const response = await axios.put(url, formData);
        console.log("Success:", response.data);
        toast.success("Property Edited Successfully")
      //  setTimeout(()=>{
      //   navigate("/properties");
      //  },2000)
      } catch (error) {
        console.error("Error:", error); 
        toast.warn("Error", error)
    }finally{
      setLoading(false)
    }
    ;
         

  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const listing = [
    { value: "O satın alır", label: "O satın alır" },
    { value: "kira", label: "kira" },
    { value: "satış", label: "satış" },
  ];
  const catogery = [
    { value: "Evler", label: "Evler" },
    { value: "Meşaleler", label: "Meşaleler" },
  ];
  const Location = [
    { value: "Lefkoşa", label: "Lefkoşa" },
    { value: "Gazimağusa", label: "Gazimağusa" },
    { value: "Girne ", label: " Girne" },
   
  ];

  const wordCountValidator = value => {
    const wordCount = value.trim().split(/\s+/).length;
    return wordCount <= 1000 || "You cannot exceed 1000 words";
  };
      return (
        <>
        <Header/>
 
          <div className='px-20 py-10'>
           <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 flex flex-col w-full"
      >
         <h1 className="text-2xl flex w-full items-center justify-center uppercase text-[#6b748c]">Yeni ekle  
         <span className="text-[#70bcd7] font-semibold ml-2">   Mülk</span></h1>
        <div className="grid grid-cols-3 gap-4 p-10">
          <InputDesign
            register={register}
            fieldName={"title"}
            required={true}
            title={arLabels.title}
            value="email"
            type="text"
          />
          <InputDesign
            register={register}
            fieldName={"sub_title"}
            required={true}
            title={arLabels.sub_title}
            type="text"
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
            options={catogery}
            title={"category"}
          />
          
        
           
         
          <InputDesign
            register={register}
            fieldName={"disabled_access_type"}
            required={true}
            title={arLabels.disabled_access_type}
          />
          <InputDesign
            register={register}
            fieldName={"fence_type"}
            required={true}
            title={arLabels.fence_type}
            type="text"
          />
          <InputDesign
            register={register}
            fieldName={"floor_type"}
            required={true}
            title={arLabels.floor_type}
            type="text"
          />
         
          <InputDesign
            register={register}
            fieldName={"additional_space_type"}
            required={true}
            title={arLabels.additional_space_type}
            type="text"
          />
        
          <InputDesign
            register={register}
            fieldName={"furnished_type"}
            required={true}
            title={arLabels.furnished_type}
            type="text"
          />
         
         
        
         
         
          <InputDesign
            register={register}
            fieldName={"address"}
            required={true}
            title={arLabels.address}
            type="text"
          />
        
          <InputDesign
            register={register}
            fieldName={"currency"}
            required={true}
            title={arLabels.currency}
            type="text"
          />
       
          {/* <InputDesign
            register={register}
            fieldName={"_360_url"}
            required={true}
            title={arLabels._360_url}
            type="text"
          />
          <InputDesign
            register={register}
            fieldName={"map_url"}
            required={true}
            title={arLabels.map_url}
            type="text"
          />
          <InputDesign
            register={register}
            fieldName={"video_image_address"}
            required={true}
            title={arLabels.video_url}
            type="text"
          /> */}
        </div>
        <h1 className="text-2xl px-8">Mülk <span className="text-[#70bcd7] font-semibold">İyi ayrıntılar

</span></h1>
        <div className="grid grid-cols-3 gap-4 p-10">
          <InputDesign
            register={register}
            fieldName={"heating_type"}
            required={true}
            title={arLabels.heating_type}
            type="text"
          />
          <InputDesign
            register={register}
            fieldName={"window_type"}
            required={true}
            title={arLabels.window_type}
            type="text"
          />
         
        </div>
        <div className="py-10 w-full px-10 flex items-start flex-col ">
          <label className=" " htmlFor="description">{arLabels?.description}</label>
         <textarea
        placeholder={arLabels?.description}
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
        <div className="flex items-center w-full justify-center">
          <button
            type="submit"
            // onClick={() => handleSubmit(handleFormSubmit)()}
            className="bg-[#1ebbd7] py-2 px-44 rounded-lg text-white"
          >
            {loading ? "Submitting..." : " Submit"}
          </button>
        </div>
        
        {errors && Object.keys(errors).length > 0 && (
          <div className="text-red-500">
            <p>Fill Complete Form</p>
          </div>
        )}
      </form>
       <ToastContainer/>
          </div>
          </>
      )
}

export default EditArabic