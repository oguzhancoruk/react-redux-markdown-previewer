import React, { useEffect, useState } from 'react'
import Output from '../Output/Output'
import { useDispatch, useSelector } from 'react-redux'
import { getText } from '../../redux/markdownSlice'


function Input() {
const [text,setText]=useState();
const help=useSelector(state=>state.markdown.help)
const clicked =useSelector(state=>state.markdown.isClicked)
const dispatch=useDispatch();


useEffect(()=>{
  dispatch(getText({text:text}))
 if(clicked===true){
   setText("")
 }
  
},[text])


  return (
    <div className="container mt-5 ">
        <div className='row  col-sm-12 input'>
            <div className="col-sm-6 ">
                <textarea   value={clicked===true?help:text}  onChange={(e)=>setText(e.target.value)}></textarea>
                </div>
            <div className="col-sm-6 "><Output/></div>
        </div>

    </div>
  )
}

export default Input