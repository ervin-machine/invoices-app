import React, { useState } from 'react'
import "./SellerList.css"
import Pagination from '../../../PublicComponents/Pagination'

function SellerList(props) {
    const { sellers, handleSelect, selectedSeller, handleDelete } = props
    const [currentSellers, setCurrentSellers] = useState([])

    const updateSelectedSeller = (seller, id) => {
      return selectedSeller.some(selected => selected.id === seller.id) ? handleDelete(id) : handleSelect(seller)
    }

  return (
    <div>
        <div className='sellers-column-content'>
            <p className='seller-column-item'>Company Name</p>
            <p className='seller-column-item'>Address</p>
            <p className='seller-column-item'>Active</p>
        </div>
        {currentSellers && currentSellers.map((seller, index) => {return (
          <div className='sellers-header-list-1' style={{ backgroundColor: selectedSeller.some(selected => selected.id === seller.id) ? "#90EE90" : "white" }} key={index} onClick={() => updateSelectedSeller(seller, seller.id)}>
            <p className='seller-row-item'>{seller.companyName}</p>
            <p className='seller-row-item'>{seller.hqAddress}</p>
            <p className='seller-row-item'>{seller.isActive.toString()}</p>
        </div>
        )})}
        <Pagination items={sellers} setCurrentItems={setCurrentSellers} />
    </div>
  )
}

export default SellerList