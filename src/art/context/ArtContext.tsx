import React, { createContext, useContext, useEffect, useReducer } from "react";
import { artReducer, initialState, type ArtAction, type ArtState } from "../reducers/artReducer";
import { loadArtworksFailed, loadArtworksStart, loadArtworksSuccess } from "../actions/ArtActions";
import { ArtService } from "../api/ArtService";

type ArtContextType = {
    state: ArtState;
    dispatch: React.Dispatch<ArtAction>;
}

export const ArtContext = createContext<ArtContextType | null>(null);

export const ArtProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(artReducer, initialState);

    useEffect(() => {
        const fetchArtworks = async () => {
            console.log("aici");
            loadArtworksStart(dispatch);
            try {
                const results = await ArtService.loadArtworks();
                loadArtworksSuccess(dispatch, results);
            } catch (error: any) {
                loadArtworksFailed(dispatch, error.message);
            }
        }
        fetchArtworks();
    }, []);

    return (
        <ArtContext.Provider value={{ state, dispatch }}>
            {children}
        </ArtContext.Provider>
    )
}

export function useArtContext() {
    const context = useContext(ArtContext);
    if (!context) {
        throw new Error("Not inside ArtProvider");
    }
    return context;
}