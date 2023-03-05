import styled from "./Home.module.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllDogs } from "../redux/actions"
import Dogs from "../Dogs/Dogs"

function Home() {
  console.log("Se ejecutó Home");
  const dispatch = useDispatch()
  const dogs = useSelector(state => state.myDogs)
  useEffect(
    ()=>{
      dispatch(getAllDogs())
    },[dispatch]
  )
  // if(dogs.length === 0){
  //   return(
  //     dogs[0].map(
  //       elemento => 
  //         <Dogs
  //         key = {elemento.id}
  //         id = {elemento.id}
  //         name = {elemento.name}
  //         image = {elemento.image}
  //         ></Dogs>
  //     )
  //   )
  // }else{
  //   return (
  //     <div  >
  //      <h1>Loading</h1>
  //     </div>
  //   );
  // }
  return (
    <div className={styled.contenedor} >
      {
        dogs.length !== 0? dogs[0].map(
                elemento => 
                  <Dogs
                  key = {elemento.id}
                  id = {elemento.id}
                  name = {elemento.name}
                  image = {elemento.image}
                  ></Dogs>): <h1>Loading</h1>
      }
    </div>
  )
  
}

export default Home;
