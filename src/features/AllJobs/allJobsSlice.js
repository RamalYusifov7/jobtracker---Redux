import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { globalApi } from "../../common/Api/globalApi";

const initialFiltersState = {
    search: '',
    searchStatus: 'all',
    searchStatusOptions:['all','pending','declined','interview'],
    searchType: 'all',
    searchTypeOptions:['all','full-time', 'part-time', 'remote', 'internship'],
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  };

const initialState={
   jobs:[],
   loading:true,
   totalJobs: 0,
   numOfPages: 1,
   page: 1,
   ...initialFiltersState
}

export const getAllJobs=createAsyncThunk(
    "job/getAllJobs",
    async(_,thunkAPI)=>{
    const { page, search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobs;

    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;

    if (search) {
        url = url + `&search=${search}`;
      }
       try {
        const resp=await globalApi.get(url,{
            headers:{
                authorization:`Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        return resp.data
       } catch (error) {
           console.log(error);
       }
    }
)
const allJobsSlice=createSlice({
    name:"alJobs",
    initialState,
    reducers:{
        clearValues:(state)=>{
            return {...state,...initialFiltersState}
        },
         handleChange:(state,{payload:{name,value}})=>{
            state[name]=value
         },
         changePage:(state,action)=>{
            state.page=action.payload
         }
    },
    extraReducers:(builder)=>{
        builder
             .addCase(getAllJobs.pending,(state)=>{
                state.loading=true
             })
             .addCase(getAllJobs.fulfilled,(state,action)=>{
                state.loading=false
                state.jobs=action.payload.jobs
                state.numOfPages=action.payload.numOfPages
                state.totalJobs=action.payload.totalJobs
             })
             .addCase(getAllJobs.rejected,(state,{payload})=>{
                state.loading=true
                toast.error(payload)
             })
    }
})

export const {handleChange,clearValues,changePage}=allJobsSlice.actions
export default allJobsSlice.reducer