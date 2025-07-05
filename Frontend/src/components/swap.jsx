import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import "./Swap.css"; 

const Swap = () => {
    // Add state to track play status
    const [playstatus, setPlaystatus] = useState("paused");

    // Function to toggle play/pause
    const togglePlayPause = () => {
        setPlaystatus(prevStatus => prevStatus === "playing" ? "paused" : "playing");
    };

    return (
        <div className="play-pause-container">
            {/* Play/Pause Button with Icons */}
            <button onClick={togglePlayPause} className="play-pause-button">
                {playstatus === "playing" ? 
                    <div className="pause-icon"></div> : 
                    <div className="play-icon"></div>
                }
            </button>

            {/* Conditional rendering based on play status */}
            {playstatus === "playing" ? (
                <iframe 
                    src="https://www.youtube.com/embed/6JVEJhOqZTo"
                    title="YouTube video player"
                    width="800"
                    height="450"
                    frameBorder="0"
                    allowFullScreen
                />
            ) : (
                <ImageSlider />
            )}
        </div>
    );
};

export default Swap;