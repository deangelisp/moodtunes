import React from "react";
import { useParams } from "react-router-dom";
import { useSpotifyPlaylistByMood } from "../../hooks/useSpotify";
import PlaylistDisplay from "./components/PlaylistDisplay";
import capitalize from "../../helpers/capitalize";

function SingleMood() {
    const { moodCategory } = useParams();
    const {
        data: playlist,
        isLoading,
        error,
    } = useSpotifyPlaylistByMood(moodCategory);

    if (!isLoading && error) {
        return <p>Something went wrong</p>;
    }

    return (
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-14 items-center max-w-7xl pt-10 sm:pt-20 relative">
            <a
                href="/"
                className="sm:absolute left-5 top-20 font-semibold op hover:underline hover:opacity-80 cursor-pointer transition-all"
            >
                <i className="fas fa-arrow-left mr-3"></i>
                Try it again
            </a>
            <div className="">
                <p className="text-sm">Your MoodTunes Today is</p>
                <h1 className="text-4xl sm:text-6xl font-bold sm:mb-4">
                    {capitalize(moodCategory)}
                </h1>
                <p className="text-2xl font-light hidden sm:block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </p>
            </div>
            <PlaylistDisplay
                imageSrc={playlist?.image}
                title={playlist?.title}
                tracks_total={playlist?.tracks_total}
                url={playlist?.url}
                mood={moodCategory.toLowerCase()}
            />
        </div>
    );
}

export default SingleMood;
