import type { Artwork } from "../api/ArtService";

export interface ArtState {
    artworks: Artwork[];
    error: string;
    isLoading: boolean;
}

export type ArtAction = { type: "LOAD_ARTWORKS_START" } |
    { type: "LOAD_ARTWORKS_SUCCESS", payload: Artwork[] } | 
    { type: "LOAD_ARTWORKS_FAILED", payload: string }


export const initialState: ArtState = {
    artworks: [],
    error: "",
    isLoading: false,
}

export function artReducer(state: ArtState, action: ArtAction) {
    switch(action.type) {
        case "LOAD_ARTWORKS_START":
            return {...state, isLoading: true};
        case "LOAD_ARTWORKS_SUCCESS":
            return {...state, isLoading: false, artworks: action.payload, error: ""};
        case "LOAD_ARTWORKS_FAILED":
            return {...state, isLoading: false, error: action.payload, artworks: []};
        default:
            return state;
    }
}