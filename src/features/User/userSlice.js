import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  {globalApi}  from "../../common/Api/globalApi";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utilis/localStorage";
import { toast } from 'react-toastify';


const initialState={
    loading:false,
    user:getUserFromLocalStorage()
}

// loginuser
export const loginUser=createAsyncThunk(
    "user/loginUser",
    async(user)=>{
       try {
        const resp = await globalApi.post('/auth/login', user);
         return resp.data
       } catch (error) {
          console.log(error)
          toast.error("Check your email and password")
       }
    }
)

export const registerUser=createAsyncThunk(
    "user/registerUser",
    async(user)=>{
       try {
        const resp = await globalApi.post('/auth/register', user);
         return resp.data
       } catch (error) {
          initialState.loading=false
          toast.error(error.response.data.msg)
       }
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkAPI) => {
      try {
        const resp = await globalApi.patch('/auth/updateUser', user, {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          },
        });
        return resp.data;
      } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response.data);
        
      }
    }
  );


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
       logoutUser:(state)=>{
          state.user=null;
          removeUserFromLocalStorage()
       }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading=true
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload.user
            addUserToLocalStorage(action.payload.user)
            toast.success(`Login is successful`)
        })
        .addCase(loginUser.rejected,(state)=>{
            state.loading=false;
        })


        .addCase(registerUser.pending,(state)=>{
            state.loading=true
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload.user
            addUserToLocalStorage(action.payload.user)
            toast.success(`Register is successful`)
        })
        .addCase(registerUser.rejected,(state)=>{
            state.loading=false
        })


        .addCase(updateUser.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
          state.loading=false
          state.user=action.payload.user
          addUserToLocalStorage(action.payload.user)
          toast.success("Your profile was updated")
        })
        .addCase(updateUser.rejected,(state)=>{
            state.loading=false
        })
    }
    
})
export const {logoutUser}=userSlice.actions
export default userSlice.reducer

