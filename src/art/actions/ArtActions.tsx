import type { Artwork } from "../api/ArtService";
import type { ArtAction } from "../reducers/artReducer";

export const loadArtworksStart = (dispatch: React.Dispatch<ArtAction>) => {
    dispatch({ type: "LOAD_ARTWORKS_START" });
}

export const loadArtworksSuccess = (dispatch: React.Dispatch<ArtAction>, artworks: Artwork[]) => {
    dispatch({ type: "LOAD_ARTWORKS_SUCCESS", payload: artworks });
}

export const loadArtworksFailed = (dispatch: React.Dispatch<ArtAction>, error: string) => {
    dispatch({ type: "LOAD_ARTWORKS_FAILED", payload: error });
}