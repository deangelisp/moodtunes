import axios from "axios";
import { useQuery } from "react-query";

const getAccessToken = async () => {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        null,
        {
            params: {
                grant_type: "client_credentials",
                client_id: clientId,
                client_secret: clientSecret,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    return response.data.access_token;
};

const getPlaylistByMood = async ({ queryKey }) => {
    const moodCategory = queryKey[1];

    var playlist = {};

    // return false;
    const accessToken = await getAccessToken();
    await axios
        .get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                q: `"${moodCategory}"`,
                type: "playlist",
                limit: 50,
                sort: "popularity",
                public: true,
                source: "spotify",
            },
        })
        .then((response) => {
            const playlists = response.data.playlists.items;

            let playlistsFromSpotify = playlists.filter(
                (playlist) => playlist.owner.id === "spotify"
            );

            if (playlistsFromSpotify.length === 0) {
                playlistsFromSpotify = playlists;
            }

            let playlistsWithImages = playlistsFromSpotify.filter(
                (playlist) => playlist.images.length === 1
            );

            if (playlistsWithImages.length === 0) {
                playlistsWithImages = playlists;
            }

            let randomPlaylist =
                playlistsWithImages[
                    Math.floor(Math.random() * playlistsWithImages.length)
                ];

            playlist = {
                title: randomPlaylist.name,
                image: randomPlaylist.images[0].url,
                tracks_total: randomPlaylist.tracks.total,
                url: randomPlaylist.external_urls.spotify,
                owner: randomPlaylist.owner.display_name,
                description: randomPlaylist.description,
            };

            return playlist;
        })
        .catch((error) => {
            console.log("Error searching for playlist:", error.message);
        });

    return playlist;
};

export const useSpotifyPlaylistByMood = (moodCategory) => {
    return useQuery(["spotifyPlaylistByMood", moodCategory], getPlaylistByMood);
};
