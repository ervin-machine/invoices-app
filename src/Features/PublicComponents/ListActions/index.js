import React, { useEffect, useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./ListActions.css"
import { Link } from 'react-router-dom';

function ListActions(props) {
  const { handleOpenAdd, handleOpenEdit, handleOpenDelete, selected, path } = props
  const [isEditActive, setIsEditActive] = useState(false);
  const [isDeleteActive, setIsDeleteActive] = useState(false)

  useEffect(() => {
    if(selected.length === 1) {
      setIsEditActive(true)
    }

    if(selected.length === 0 || selected.length > 1) {
      setIsEditActive(false)
    }

    if(selected.length > 0) {
      setIsDeleteActive(true)
    }

    if(selected.length === 0) {
      setIsDeleteActive(false)
    }
    
  }, [selected])

  return (
    <div className='list-actions'>
        <button className='list-action' style={{ backgroundColor: "#90EE90"}}  onClick={handleOpenAdd}><AddCircleOutlineIcon /></button>
        <Link to={path}><button className='list-action' style={{ color: isEditActive ? "#FFD580" : "black"}} disabled={!isEditActive ? true : false} onClick={handleOpenEdit}><EditIcon /></button></Link>
        <button className='list-action' style={{ color: isDeleteActive ? "red" : "black"}} disabled={!isDeleteActive ? true : false} onClick={handleOpenDelete}><DeleteIcon /></button>
    </div>
  )
}

export default ListActions