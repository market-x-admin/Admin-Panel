import React,{useEffect, useState} from 'react'
import InputDesign from '../InputDesign'
import SelectInputDesign from '../MultiInputSelect'

import Header from "../../components/Header"
import { useNavigate } from "react-router-dom";
import { arLabels } from './arLabels'
import { useForm } from "react-hook-form";
import axios from "axios"
import {Link} from "react-router-dom"
const ArabicForm = () => {
    const navigate = useNavigate();
    const [prevData, setPrevData] = useState({})
    const [loading, setLoading] = useState(false);
   
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm();
    useEffect(()=>{
      const Data = JSON.parse(localStorage.getItem("engData"))
      setPrevData(Data)
    },[])
    const onSubmit = async (data) => {
      console.log("formData", data);
  
      const url = "https://api.beetkom.org/api/write/Properties";
  
      setLoading(true);
 const EnglishData = prevData
 const newData = data
 EnglishData.turkish = newData
 const sendData = EnglishData
      try {
        const response = await axios.post(url, sendData);
  
        console.log("Success:", response.data);
        navigate("/properties");
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
  
    const listing = [
      { value: "يشتري", label: "يشتري" },
      { value: "إيجار", label: "إيجار" },
      { value: "أُوكَازيُون", label: "أُوكَازيُون" },
    ];
    const catogery = [
      { value: "منازل", label: "منازل" },
      { value: "مشاعل", label: "مشاعل" },
    ];
    const Location = [
      { value: "سلفيت", label: "سلفيت" },
      { value: "نابلس", label: "نابلس" },
      { value: "رام الله", label: "رام الله" },
      { value: "تالكورم", label: "تالكورم" },
      { value: "الخليل", label: "الخليل" },
      { value: "بيت لحم", label: "بيت لحم" },
    ];
 
   
        return (
          <>
          <Header/>
    {/* <div className='px-10 flex justify-between w-full items-center'>
        <Link
        to={`/add_properties`} 
         >English</Link>
        <Link to={`/add-ملكية-ar`}>Arabic</Link>
      </div> */}
            <div className='px-20 py-10'>
             <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 flex flex-col w-full"
        >
           <h1 className="text-2xl flex w-full items-center justify-center uppercase text-[#6b748c]">اضف جديد    
           <span className="text-[#70bcd7] font-semibold ml-2">   ملكية</span></h1>
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
              options={listing}
            />
            <SelectInputDesign
              register={register}
              fieldName={"location_area"}
              required={true}
              options={Location}
            />
            <SelectInputDesign
              register={register}
              fieldName={"category_type"}
              required={true}
              options={catogery}
            />
           
            <InputDesign
              register={register}
              fieldName={"contact_no"}
              required={true}
              title={arLabels.contact_no}
              type="text"
            />
             <textarea
            placeholder={arLabels.description}
            className="border outline-0 p-2"
             name="description" id="description" cols="30" rows="5" 
             {...register("description", { required: true })}
             />
            <InputDesign
              register={register}
              fieldName={"size"}
              required={true}
              title={arLabels.size}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"bed_room_count"}
              required={true}
              title={arLabels.bed_room_count}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"bath_count"}
              required={true}
              title={arLabels.bath_count}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"security_camaras_count"}
              required={true}
              title={arLabels.security_camaras_count}
              type="text"
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
              fieldName={"revolution_date"}
              required={true}
              title={arLabels.revolution_date}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"ceiling_height"}
              required={true}
              title={arLabels.ceiling_height}
              type="text"
            />
           
            <InputDesign
              register={register}
              fieldName={"construction_year"}
              required={true}
              title={arLabels.construction_year}
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
              fieldName={"rating_count"}
              required={true}
              title={arLabels.rating_count}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"currency"}
              required={true}
              title={arLabels.currency}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"price"}
              required={true}
              title={arLabels.price}
              type="text"
            />
           
          
          </div>
          <h1 className="text-2xl px-8">ملكية <span className="text-[#70bcd7] font-semibold">تفاصيل جيدة</span></h1>
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
          <h1 className="text-2xl px-8">ملكية <span className="text-[#70bcd7] font-semibold">تفاصيل قريبة</span></h1>
          <div className="grid grid-cols-3 gap-4 p-10">
            <InputDesign
              register={register}
              fieldName={"school_distance"}
              required={true}
              title={arLabels.school_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"university_distance"}
              required={true}
              title={arLabels.university_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"hospital_distance"}
              required={true}
              title={arLabels.hospital_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"metro_station_distance"}
              required={true}
              title={arLabels.metro_station_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"grocery_center_distance"}
              required={true}
              title={arLabels.grocery_center_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"market_distance"}
              required={true}
              title={arLabels.market_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"gym_distance"}
              required={true}
              title={arLabels.gym_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"river_distance"}
              required={true}
              title={arLabels.river_distance}
              type="text"
            />
            <InputDesign
              register={register}
              fieldName={"wellness_distance"}
              required={true}
              title={arLabels.wellness_distance}
              type="text"
            />
          </div>
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
         
            </div>
            </>
        )
}


export default ArabicForm