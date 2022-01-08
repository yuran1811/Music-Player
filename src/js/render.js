const HEART_ICO = `bi bi-heart`;

const RANDOM_ICO = `bi bi-shuffle`;
const REPEAT_ICO = `bi bi-arrow-repeat`;

const PLAY_ICO = `bi bi-play-circle`;
const PAUSE_ICO = `bi bi-pause`;

const NEXT_SONG_ICO = `bi bi-skip-forward`;
const PREV_SONG_ICO = `bi bi-skip-backward`;

const MICRO_ICO = `bi bi-mic`;
const VOLUME_ICO = `bi bi-volume-up`;
const PLAYLIST_ICO = `bi bi-music-note-list`;
const MORE_OPTION_ICO = `bi-three-dots`;

const PLAYER_CONTROL_HTML = `
	<div class="player-control">
		<div class="song-info">
			<div class="media-img">
				<img src="" alt="Song Img" />
			</div>
			<div class="media-content">
				<div class="title">Song Name</div>
				<div class="artist">Unknown Artist</div>
			</div>
			<div class="media-option">
				<i class="${HEART_ICO} ico ico--click"></i>
				<i class="${MORE_OPTION_ICO} ico ico--click"></i>
			</div>
		</div>
		<div class="controller">
			<div class="part1">
				<i class="${RANDOM_ICO} ico ico--click"></i>
				<i class="${PREV_SONG_ICO} ico ico--click"></i>
				<div class="play-and-pause">
					<i class="${PLAY_ICO} ico--click"></i>
					<i class="${PAUSE_ICO} ico--click"></i>
				</div>
				<i class="${NEXT_SONG_ICO} ico ico--click"></i>
				<i class="${REPEAT_ICO} ico ico--click"></i>
			</div>
			<div class="part2">
				<div class="left-time">00:00</div>
				<div class="duration-container">
					<input
						id="progress"
						class="duration ico--click"
						type="range"
						value="0"
						step="1"
						min="0"
						max="100"
					/>
				</div>
				<div class="right-time">99:99</div>
			</div>
		</div>
		<div class="player-tools">
			<div class="left">
				<i class="${MICRO_ICO} ico ico--click"></i>
				<i class="${VOLUME_ICO} ico ico--click">
					<input
						id="volume"
						class="volume ico--click"
						type="range"
						value="100"
						step="2"
						min="0"
						max="100"
					/>
				</i>
			</div>
			<div class="vertical-line"></div>
			<i class="${PLAYLIST_ICO} ico ico--click"></i>
		</div>
		<audio class="hide now-play"></audio>
	</div>`;

const MODAL_HTML = `
	<div class="ad-modal">
		<div class="banner-modal-ad">
			<div class="banner-modal-ad__content">
				<img src="./src/img/Logo.png" alt="Logo" />
				<div>Have Fun With my Music Player !!!</div>
			</div>
			<a class="banner-modal-ad-link" href="#">
				<i class="fas fa-crown"></i>
				<span> Go Premium </span>
			</a>
		</div>
	</div>
	<div class="new-pl-modal">
		<div class="new-pl-banner__overlay"></div>
		<div class="new-pl-banner">
			<div class="new-pl-banner__content">
				<div>
					<span> Playlist Name </span>
					<input type="text" placeholder="Type Playlist Name" />
				</div>
				<div>
					<span> Owner </span>
					<input type="text" placeholder="Type Owner Name" />
				</div>
				<a class="new-pl-link" href="#">
					<i class="bi bi-plus-square"></i>
					<span> Create Playlist </span>
				</a>
			</div>
		</div>
	</div>`;

document.body.innerHTML =
	PLAYER_CONTROL_HTML + MODAL_HTML + document.body.innerHTML;
