import artworks from '../../data.json'

export interface Artwork {
    id: number;
    name: string;
    description: string;
    author: string;
    imageUrl: string;
}

export class ArtService {
    static async loadArtworks(): Promise<Artwork[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const shouldFail = Math.random() < 0.3;
                if (shouldFail) {
                    reject(new Error("Network error: could not fetch artworks"));
                } else {
                    resolve(artworks as Artwork[]);
                }
            }, 3000)
        });
    }
}