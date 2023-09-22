import React, { useState , useEffect } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl , filterData } from "./data";
import { toast } from "react-toastify";


const App = () => {

  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  const fetchData = async() => {
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something Went Wrong")
    }
    setLoading(false);
  }
  
useEffect(() => {
  fetchData();
},[]);


  return (
  <div className="min-h-screen flex flex-col bg-bgDark2">

     <NavBar />

     <Filter filterData={filterData} category={category} setCategory={setCategory}/>

     {
      loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
     }

  </div>
  );
};

export default App;
