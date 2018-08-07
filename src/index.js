// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
// const ApiKey = 'AIzaSyCCOglE5kMdq2FR9Jo91ioJsx2njqpsAVY';

// ReactDOM.render(
// 	<Provider store={createStoreWithMiddleware(reducers)}>
// 		<App />
// 	</Provider>,
// 	document.querySelector('.container')
// );
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import YTSearch from 'youtube-api-search';
const ApiKey = 'AIzaSyCCOglE5kMdq2FR9Jo91ioJsx2njqpsAVY';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [], selectedVideo: null };

		this.videoSearch('basketball');
	}

	videoSearch(term) {
		YTSearch({ key: ApiKey, term: term }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 300);
		return (
			<div>
				<Search onSearchTermChange={videoSearch} />
				<VideoPlayer video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo =>
						this.setState({ selectedVideo })
					}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
