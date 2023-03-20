import { configureStore } from "@reduxjs/toolkit";
import {
    carsReducer,
    addCar,
    removeCar,
    changeSeatchTerm
} from './slices/carsSlice';
import {
    changeName,
    changeCost,
    formReducer
} from './slices/formSlice';

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {
    store, 
    changeCost,
    changeName,
    addCar,
    removeCar,
    changeSeatchTerm
}