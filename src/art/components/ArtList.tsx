import { CircularProgress, Typography } from "@mui/material";
import { ArtListItem } from "./ArtListItem";
import { useArtContext } from "../context/ArtContext";


export function ArtList() {
    const { state } = useArtContext();
    return (
        <>
            {state.isLoading && <CircularProgress />}
            {state.error && <Typography color="red">{state.error}</Typography>}
            {state.artworks.length > 0 && (
                <div className="artworks-container">
                    {state.artworks.map((artwork) => (
                        <ArtListItem key={artwork.id} {...artwork} />
                    ))}
                </div>
            )}
        </>
    )
}