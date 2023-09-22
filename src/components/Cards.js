import React, { useState } from 'react'
import Card from './Card';

function Cards({courses,category,setcategory}) {
    
    const [linkedCourses , setLikedCourses] = useState([]);

    const getCourses = () => {

        if(category === 'All'){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach((course) => {
                   allCourses.push(course);
                })
            }) 
            return allCourses;   
        }

        else{
           return courses[category];
        }
        
    }

  return (
    <div className='flex flex-wrap mx-auto w-11/12 max-w-[1200px] justify-center min-h-[50vh] gap-4 items-baseline'>
        {
            getCourses().map((course) => {
                return(
                    <Card key={course.id} course={course} linkedCourses={linkedCourses} setLikedCourses={setLikedCourses}/>
                );
            })
        }
    </div>
  )
}

export default Cards;