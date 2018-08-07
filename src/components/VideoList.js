import React from 'react';
import VideoListEntry from './VideoListEntry';
const VideoList = props => {
	const videoItems = props.videos.map(video => {
		return (
			<VideoListEntry
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video}
			/>
		);
	});
	return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
