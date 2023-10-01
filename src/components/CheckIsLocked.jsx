import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


export const CheckIsLocked = () => {
    const IS_LOCKED = localStorage.getItem('sillywc_submitted')
    const navigate = useNavigate()

    useEffect(() => {
        if (IS_LOCKED) navigate('/submitted')
    },[])
}
