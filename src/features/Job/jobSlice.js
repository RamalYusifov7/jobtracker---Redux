import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { globalApi } from "../../common/Api/globalApi"
import { getAllJobs } from "../AllJobs/allJobsSlice";
const initialState = {
  loading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const addJob = createAsyncThunk(
  "job/AddJob",
  async (job, thunkApi) => {
    try {
      const resp = await globalApi.post("/jobs", job, {
        headers: {
          authorization: `Bearer ${thunkApi.getState().user.user.token}`
        }
      })
      thunkApi.dispatch(clearInputs())
      return resp.data
    } catch (error) {
      console.log(error);
    }
  }
)

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobId, thunkAPI) => {
    try {
      const resp = await globalApi.delete(`/jobs/${jobId}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`
        }
      })
      thunkAPI.dispatch(getAllJobs())
      return resp.data
    } catch (error) {

    }
  }
)

export const editJob = createAsyncThunk(
  'job/editJob',
  async ({ jobId, job }, thunkAPI) => {
    try {
      const resp = await globalApi.patch(`/jobs/${jobId}`, job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });
      thunkAPI.dispatch(clearInputs());
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);


const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload
      state[name] = value
    },
    clearInputs: () => {
      return initialState
    },
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addJob.pending, (state) => {
        state.loading = true
      })
      .addCase(addJob.fulfilled, (state) => {
        state.loading = false
        toast.success("Job added")
      })
      .addCase(addJob.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteJob.rejected, (state) => {
        state.loading = false;
      })
      .addCase(editJob.pending, (state) => {
        state.loading = true
      })
      .addCase(editJob.fulfilled, (state) => {
        state.loading = false
        toast.success("Job Modified")
      })
      .addCase(editJob.rejected, (state) => {
        state.loading = false;
      })
  }

})
export const { handleChange, clearInputs, setEditJob } = jobSlice.actions
export default jobSlice.reducer

