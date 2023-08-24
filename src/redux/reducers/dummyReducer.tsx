import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../actions';
import api from '../../services/api';

export interface DummyData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface DummyState {
    data: DummyData[];
    loading: boolean;
    error: string | null;
}

const initialState: DummyState = {
    data: [],
    loading: false,
    error: null,
};

const dummySlice = createSlice({
    name: 'dummy',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action: PayloadAction<DummyData[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dummySlice.actions;

export default dummySlice.reducer;

// Async action to fetch data
export const fetchDummyData = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchDataStart());
        const response = await api.get('/posts');
        dispatch(fetchDataSuccess(response.data));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};