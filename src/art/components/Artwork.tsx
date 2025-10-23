import { useParams } from "react-router-dom";
import { useArtContext } from "../context/ArtContext";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";

export function Artwork() {
    const { state } = useArtContext();
    const { id } = useParams();
    const artworkId = Number(id);
    const artwork = state.artworks.find((artwork) => artwork.id == artworkId);
    return (
        <>
            { artwork && (
                <Card>
                    <CardHeader title={artwork.name} subheader={artwork.author} />
                    <CardMedia image={artwork.imageUrl} component="img" />
                    <CardContent>
                        <p>{artwork.description}</p>
                    </CardContent>
                </Card>
            )}
        </>
    );
}