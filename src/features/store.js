import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice"
import sidebarReducer from "./Sidebar/sidebarSlice"
import jobReducer from "./Job/jobSlice"
import allJobsReducer from "./AllJobs/allJobsSlice"
export const store=configureStore({
    reducer:{
     user:userReducer,
     sidebar:sidebarReducer,
     job:jobReducer,
     allJobs:allJobsReducer
    }
})