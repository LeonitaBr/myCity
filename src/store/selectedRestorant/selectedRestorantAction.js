import { SELECTED_RESTAURANT, SELECTED_FOOD } from "../actionTypes"

export const selectedRestorant = (id) => {
    return { type: SELECTED_RESTAURANT, payload: id }
}

export const selectedfoodType = (payload) => {
    return { type: SELECTED_FOOD, payload: payload }
}