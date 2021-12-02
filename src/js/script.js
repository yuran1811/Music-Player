const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(() => {
	const main = $('.main-content');
	const toTop = $('.to-top');
	main.onscroll = () => {
		if (main.scrollTop > 170) toTop.style.display = 'block';
		else toTop.style.display = 'none';
	};
})();

(() => {
	const menuList = $('.category-sidebar');
	menuList.querySelectorAll('.item').forEach((item) => {
		item.addEventListener('click', (e) => {
			const lastActive = menuList.querySelector('.active');
			if (lastActive)
				lastActive.className = lastActive.className.replace(
					' active',
					''
				);
			e.currentTarget.className += ' active';
		});
	});
})();

(() => {
	const modalBox = $('body .ad-modal');
	modalBox.addEventListener('click', () => {
		modalBox.classList.toggle('active');
	});

	const modalBoxClick = $('.music-option .ad-link');
	modalBoxClick.addEventListener('click', () => {
		modalBox.classList.toggle('active');
	});
})();

(() => {
	const newPlModalBox = $('body .new-pl-modal');
	const newPlBtn = $('.category-sidebar .new-playlist-btn');

	newPlBtn.addEventListener('click', () => {
		newPlModalBox.classList.toggle('active');
	});

	newPlModalBox
		.querySelector('.new-pl-banner__overlay')
		.addEventListener('click', () => {
			newPlModalBox.classList.toggle('active');
		});
})();

const musicPlayer = {
	playlists: [
		{
			name: 'US-UK',
			owner: 'Yuran',
			imgSrc: './src/img/playlist/US-UK.jpg',
		},
		{
			name: 'EDM',
			owner: 'Yuran',
			imgSrc: './src/img/playlist/EDM.jpg',
		},
		{
			name: '80s',
			owner: 'Yuran',
			imgSrc: './src/img/playlist/80s.jpg',
		},
		{
			name: 'Pop',
			owner: 'Yuran',
			imgSrc: './src/img/playlist/Pop.jpg',
		},
		{
			name: 'Energetic',
			owner: 'Yuran',
			imgSrc: './src/img/playlist/Energetic.jpg',
		},
	],

	songs: [
		{
			name: 'Nevada',
			artist: 'Vicetone',
			audioSrc: './src/music/Nevada.mp3',
			imgSrc: './src/img/Nevada.png',
			length: '3:00',
		},
		{
			name: 'Summer Time',
			artist: 'K-391',
			audioSrc: './src/music/SummerTime.mp3',
			imgSrc: './src/img/SummerTime.png',
			length: '3:00',
		},
		{
			name: 'Shape of You',
			artist: 'Ed Sheeran',
			audioSrc: './src/music/ShapeOfYou.mp3',
			imgSrc: './src/img/EdSheeran.png',
			length: '3:00',
		},
		{
			name: 'Cheri Cheri Lady',
			artist: 'Modern Talking',
			audioSrc: './src/music/CheriCheriLady.mp3',
			imgSrc: './src/img/ModernTalking.png',
			length: '3:00',
		},
		{
			name: 'Savage Love',
			artist: 'Jason Derulo',
			audioSrc: './src/music/SavageLove.mp3',
			imgSrc: './src/img/SavageLove.png',
			length: '3:00',
		},
	],

	render() {
		$('section .song-list ul').innerHTML = this.songs
			.map((song) => {
				return `
				<li class="song-item">
					<audio class="hide">
						<source src="${song.audioSrc}" type="audio/mpeg">
					</audio>
					<div class="left">
						<img src="${song.imgSrc}" alt="${song.name}" />
						<div class="left-content">
							<span class="song-title">${song.name}</span>
							<span class="song-artist">${song.artist}</span>
						</div>
					</div>
					<div class="right">
						<span>
							<i class="fas fa-heart ico ico--click"></i>
						</span>
						<span class="duration">3:00</span>
					</div>
				</li>
			`;
			})
			.join('');

		$('section .img-preview').innerHTML = this.songs
			.map((song) => {
				return `
				<a href="#">
					<img src="${song.imgSrc}" alt="${song.name}" />
				</a>
			`;
			})
			.join('');

		$('section .playlist-slider').innerHTML = this.playlists
			.map((playlist) => {
				return `
					<div class="playlist-item">
						<div class="playlist-option" style="background: url('${playlist.imgSrc}');">
							<div class="playlist-option-overlay">
								<i class="fas fa-times"></i>
								<i class="fas fa-play"></i>
								<i class="fas fa-ellipsis-h"></i>
							</div>
						</div>
						<div class="playlist-title">${playlist.name}</div>
						<div class="playlist-owner">${playlist.owner}</div>
					</div>
				`;
			})
			.join('');
	},

	start() {
		this.render();
		(() => {
			const imgList = $$('section .img-preview img');
			const imgListLth = imgList.length;
			let imgIndex = 0;
			imgList[0].style.opacity = 1;
			setInterval(() => {
				imgList[imgIndex++].style.opacity = 0;
				if (imgIndex >= imgListLth) imgIndex = 0;
				imgList[imgIndex].style.opacity = 1;
			}, 3000);
		})();
	},
};
musicPlayer.start();
