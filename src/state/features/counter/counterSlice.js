import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

const counterslice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        init: (state) => {
            if (state.value === 0) {
                state.value = "ERROR!!!!"
            } else {
                state.value = 0;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log("incrementAsync.pending...")
        }),
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            console.log("incrementAsync.fullfiled...")
            state.value += action.payload;
        });
    }
});


export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return amount;
    }
)



export const { increment, decrement, incrementByAmount, init } = counterslice.actions;
export default counterslice.reducer;