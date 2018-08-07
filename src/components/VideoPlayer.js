import React from 'react';

const VideoPlayer = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-player col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url} />
			</div>
			<div className="video-player-details">
				<h3>{video.snippet.title}</h3>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
