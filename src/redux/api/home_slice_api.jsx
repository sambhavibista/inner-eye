import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { BASE_URL } from "src/config/base_url";

const initialState = {

    isServiceListLoading: false,
    serviceList: [],
    serviceListError: null,

    isRegistrationLoading: false,

    isGalleryListLoading: false,
    galleryList: [],
    galleryListError: null,
};

// Fetch Service List
export const fetchServiceList = createAsyncThunk(
    "home/fetchServiceList",
    async (_, { rejectWithValue }) => {
        // api

        try {
            const response = await axios.get(`${BASE_URL}/service`);
            console.log("service response", response);
            if (response?.status === 200) {
                return response?.data?.data;
            }
        } catch (err) {
            const errorMessage =
                err?.response?.data?.message || "Could not fetch Service list";
            return rejectWithValue(errorMessage);
        }
    }
);

//service Registration
export const addRegistration = createAsyncThunk(
    "home/addRegistration",
    async (data, { rejectWithValue }) => {
        // api
        console.log("sending data to datatbase", data);
        try {
            const response = await axios.post(`${BASE_URL}/serviceRegister`,{ data});
            console.log("registration response", response);

            if (response?.status === 200) {
                return response?.data?.data;
            }
        } catch (err) {
            const errorMessage =
                err?.response?.data?.message || "failed to register";
            return rejectWithValue(errorMessage);
        }
    }
);

//gallery list
export const fetchGalleryList = createAsyncThunk(
    "home/fetchGalleryList",
    async (_, { rejectWithValue }) => {
        // api

        try {
            const response = await axios.get(`${BASE_URL}/gallary`);
            console.log("gallery response", response);
            if (response?.status === 200) {
                return response?.data?.data;
            }
        } catch (err) {
            const errorMessage =
                err?.response?.data?.message || "Could not fetch gallery list";
            return rejectWithValue(errorMessage);
        }
    }
);

export const homeSlice = createSlice({
    name: "home",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(fetchServiceList.pending, (state) => {
                state.isServiceListLoading = true;
            })
            .addCase(fetchServiceList.fulfilled, (state, action) => {
                state.isServiceListLoading = false;
                state.serviceList = action?.payload;
            })
            .addCase(fetchServiceList.rejected, (state, action) => {
                state.isServiceListLoading = false;
                state.serviceListError = action?.payload;
            })

            // Add registration
            .addCase(addRegistration.pending, (state) => {
                state.isRegistrationLoading = true;
            })
            .addCase(addRegistration.fulfilled, (state, action) => {
                state.isRegistrationLoading = false;
            })
            .addCase(addRegistration.rejected, (state, action) => {
                state.isRegistrationLoading = false;
            })

            //fetch gallery
            .addCase(fetchGalleryList.pending,(state, action)=>{
                state.isGalleryListLoading = true;
                
            })
            .addCase(fetchGalleryList.fulfilled,(state, action)=>{
                state.isGalleryListLoading = false;
                state.galleryList = action?.payload;
            })
            .addCase(fetchGalleryList.rejected,(state, action)=>{
                state.isGalleryListLoading = false;
                state.serviceListError = action?.payload;
            })
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = homeSlice.actions;

export default homeSlice.reducer;
