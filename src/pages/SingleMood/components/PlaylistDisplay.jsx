import React from "react";
import SquaredImage from "./SquaredImage";
import Skeleton from "react-loading-skeleton";

function PlaylistDisplay({ imageSrc, title = false, tracks_total, url, mood }) {
    return (
        <div
            className={`relative px-5 sm:px-10 py-10  playlist-display text-white rounded-2xl overflow-hidden ${mood}`}
        >
            <div className="flex justify-between mb-5">
                <p></p>
                <p>
                    {tracks_total ? (
                        <>
                            {tracks_total}
                            <span className="text-sm ml-1">tracks</span>
                        </>
                    ) : (
                        <Skeleton width={60} />
                    )}
                </p>
            </div>
            <div className="mb-7">
                {imageSrc ? (
                    <SquaredImage src={imageSrc} url={url} />
                ) : (
                    <Skeleton
                        width={"50%"}
                        style={{ paddingBottom: "50%", height: 0 }}
                    />
                )}
            </div>
            <p className="text-3xl sm:text-5xl font-bold">
                {title || <Skeleton style={{ width: "100%" }} />}
            </p>
        </div>
    );
}

export default PlaylistDisplay;
