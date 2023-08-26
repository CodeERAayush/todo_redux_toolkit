import {configureStore} from '@reduxjs/toolkit'
import React from 'react'
import todoSlice from '../Features/todoSlice'
export const store=configureStore({
    reducer:todoSlice,
})
