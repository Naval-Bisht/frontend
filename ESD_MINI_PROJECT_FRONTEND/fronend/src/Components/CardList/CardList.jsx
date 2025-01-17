import React, { useEffect } from 'react'

import './CardList.css'
import Hostel from '../Hostel/Hostel'
import { useDispatch, useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import { gethostel } from '../../Store/hostelReducer'
import {  ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CircularProgress } from '@mui/material'

const CardList = () => {
  const dispatch = useDispatch()
  const { hostel } = useSelector(store => store)
  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    const name = ''
    const floor = 0
    const all = 0
    dispatch(gethostel({ j: jwt, n: name, f: floor, a: all }))
    console.log('useEffect inside cardlist called')
  }, [])

 

  return (
    <>
      <ToastContainer/>
      {hostel.loading ? (
        <div><CircularProgress /></div>
      ) : (
        <div className='card-list-main'>
          {hostel.hostels.length > 0 ? (
            hostel.hostels.map((item, index) => <Hostel hostel_info={item} />)
          ) : (
            <div>Nothing to show....</div>
          )}
        </div>
      )}
    </>
  )
}

export default CardList
