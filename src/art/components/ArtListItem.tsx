import { Card, CardHeader, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

interface ArtListItemProps {
    id: number;
    name: string;
    author: string;
    imageUrl: string;
}

export function ArtListItem({ id, name, author, imageUrl }: ArtListItemProps) {
    return (
        <Card sx={{ marginBottom: 5 }}>
            <NavLink to={`/art/${id}`}>
                <CardHeader title={name} subheader={author} />
                <CardMedia image={imageUrl} component="img" />
            </NavLink>
        </Card>
    )
}