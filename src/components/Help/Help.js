import React from 'react'
import { useSelector } from 'react-redux'
import { getClicked } from '../../redux/markdownSlice'
import { useDispatch } from 'react-redux'

function Help() {

  const dispatch=useDispatch();
  const clicked=useSelector(state=>state.markdown.isClicked)
  console.log(clicked)

  return (
    <div className='help'>
            
        <div onClick={()=>dispatch(getClicked(!clicked))} className={clicked===true?"btn_help1":"btn_help"}>
            <h1>?</h1>
             </div> 
       </div>
  )
}

export default Help