import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function StreamPlayer({ stationName, streamUrl }) {
    const audioRef = useRef(null);

   
  

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="stream-player">

            <div className="now-playing">
                <span className="live-badge">LIVE</span>
                <span>{stationName}</span>
            </div>
            <button onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={toggleMute}>
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
             
        <audio ref={audioRef} src={streamUrl} />
        
    </div>
        
    );
}

export default StreamPlayer;