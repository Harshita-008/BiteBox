import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { IoCartOutline } from "react-icons/io5"
import { FaPlus } from "react-icons/fa6";
import { IoReceiptOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux"
import { RxCross2 } from "react-icons/rx"
import axios from 'axios'
import { serverUrl } from '../App'
import { setSearchItems, setUserData } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Nav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {userData, currentCity, cartItems} = useSelector(state => state.user)
    const {myShopData} = useSelector(state => state.owner)
    const [showInfo, setShowInfo] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [query, setQuery] = useState("")

    const handleLogOut = async() => {
        try {
            const result = await axios.get(`${serverUrl}/api/auth/signout`, {withCredentials: true})
            dispatch(setUserData(null))
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearchItems = async() => {
        try {
            const result = await axios.get(`${serverUrl}/api/item/search-items?query=${query}&city=${currentCity}`, {withCredentials: true})
            dispatch(setSearchItems(result.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(query) {
            handleSearchItems()
        }
        else {
            dispatch(setSearchItems(null))
        }
    }, [query])

    return (
        <div className='w-full h-[180px] flex items-center justify-between md:justify-center gap-[30px] px-[20px] fixed top-[-45px] z-[9999] bg-[#fff9f6] overflow-visible'>
            {showSearch && userData.role=="user" && <div className='w-[90%] h-[70px] bg-white shadow-xl rounded-lg items-center gap-[20px] flex fixed top-[80px] left-[5%] md:hidden'>
                <div className='flex items-center w-[30%] overfow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400'>
                    <FaLocationDot size={25} className='text-[#ff4d2d]'/>
                    <div className='w-[80%] truncate text-gray-600'>{currentCity}</div>
                </div>
                <div className='w-[80%] flex items-center gap-[10px]'>
                    <IoSearch size={25} className='text-[#ff4d2d]'/>
                    <input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full' onChange={(e)=>setQuery(e.target.value)} value={query}/>
                </div>
            </div>}

            <h1 className='text-3xl font-bold mb-2 text-[#ff4d2d]'>BiteBox</h1>

            {userData.role=="user" &&
                <div className='md:w-[60%] ld:w-[40%] h-[70px] bg-white shadow-xl rounded-lg items-center gap-[20px] hidden md:flex'>
                    <div className='flex items-center w-[30%] overfow-hidden gap-[10px] px-[10px] border-r-[2px] border-gray-400'>
                        <FaLocationDot size={25} className='text-[#ff4d2d]'/>
                        <div className='w-[80%] truncate text-gray-600'>{currentCity}</div>
                    </div>
                    <div className='w-[80%] flex items-center gap-[10px]'>
                        <IoSearch size={25} className='text-[#ff4d2d]'/>
                        <input type="text" placeholder='search delicious food...' className='px-[10px] text-gray-700 outline-0 w-full' onChange={(e)=>setQuery(e.target.value)} value={query}/>
                    </div>
                </div>}

            <div className='flex items-center gap-4'> 
                {userData.role=="user" && (showSearch ? <RxCross2 size={25} className='text-[#ff4d2d] md:hidden' onClick={()=>setShowSearch(false)}/> : <IoSearch size={25} className='text-[#ff4d2d] md:hidden' onClick={()=>setShowSearch(true)}/>)}   

                {userData.role=="owner" ? <>
                {myShopData && <><button className='hidden md:flex items-center gap-1 p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]' onClick={()=>navigate("/add-item")}>
                        <FaPlus size={18}/>
                        <span>Add Food Item</span>
                    </button>
                    <button className='md:hidden flex items-center p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]' onClick={()=>navigate("/add-item")}>
                        <FaPlus size={18}/>
                    </button></>}
                    
                    <div className='hidden md:flex items-center gap-2 cursor-pointer relative px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] font-medium' onClick={()=>navigate("/my-orders")}>
                        <IoReceiptOutline size={20}/>
                        <span>My Orders</span>
                    </div>
                    <div className='md:hidden flex items-center gap-2 cursor-pointer relative px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] font-medium' onClick={()=>navigate("/my-orders")}>
                        <IoReceiptOutline size={20}/>
                    </div>
                </> : (
                    <>
                        {userData.role=="user" && 
                            <div className='relative cursor-pointer' onClick={()=>navigate("/cart")}>
                                <IoCartOutline size={25} className='text-[#ff4d2d]'/>
                                <span className='absolute right-[-9px] top-[-12px] text-[#ff4d2d]'>{cartItems.length}</span>
                            </div>}

                        <button className='hidden md:block px-3 py-1 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] text-sm font-medium' onClick={()=>navigate("/my-orders")}>My Orders</button> 
                    </>
                )}                                 

                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#ff4d2d] text-white text-[18px] shadow-xl font-semibold cursor-pointer' onClick={()=>setShowInfo(prev=>!prev)}>
                    {userData?.fullName.slice(0,1)}
                </div>

                {showInfo && <div className={`fixed top-[80px] right-[10px] ${userData.role=="deliveryBoy" ? "md:right-[10%] lg:right-[35%]" : "md:right-[10%] lg:right-[10%]"}  w-[180px] bg-white shadow-2xl rounded-xl p-[20px] flex flex-col gap-[10px] z-[9999]`}>
                    <div className='text-[17px] font-semibold'>{userData.fullName}</div>
                    {userData.role=="user" && <div className='md:hidden text-[#ff4d2d] font-semibold cursor-pointer' onClick={()=>navigate("/my-orders")}>My Orders</div>}               
                    <div className='text-[#ff4d2d] font-semibold cursor-pointer' onClick={handleLogOut}>Log Out</div>
                </div>}               
            </div>  
        </div>
    )
}

export default Nav
