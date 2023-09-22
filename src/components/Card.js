import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";

function Card(props) {
    let course = props.course;
    let linkedCourses = props.linkedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        if(linkedCourses.includes(course.id)){
            setLikedCourses((prev) =>
                prev.filter((cid) => (cid !== course.id))
            )

            toast.warning("Like Removed");
        }

        else{

            if(linkedCourses.length === 0){
                setLikedCourses([course.id]);
            }

            else{
              setLikedCourses(prev => [...prev , course.id]);
            }

            toast.success("Liked Successfully");
        }
    }

  return (
    <div className='rounded-md w-[300px] h-max overflow-hidden bg-bgdark'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <button className='w-[40px] h-[40px] bg-white rounded-full grid place-items-center absolute right-2 bottom-3'
            onClick={clickHandler}>
                {linkedCourses.includes(course.id) ? (<FcLike fontSize='1.75rem'/>) : (<FcLikePlaceholder fontSize='1.75rem'/>)}
            </button>
        </div>

        <div className='p-4 bg-bgDark'>
            <p className='font-semibold text-white text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>{course.description.substr(0,100)}...</p>
        </div>
    </div>
  )
}

export default Card;