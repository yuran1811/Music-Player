'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const select = (par, child) => par.querySelector(child);
const selectAll = (par, child) => par.querySelectorAll(child);

// Category Link
(() => {
	const menuList = $('.category-sidebar');
	selectAll(menuList, '.item').forEach((item) => {
		item.onclick = (e) => {
			const last = select(menuList, '.active');
			if (last) last.className = last.className.replace(' active', '');
			e.currentTarget.className += ' active';
		};
	});
})();

// Ad Modal
(() => {
	const modalBox = $('body .ad-modal');
	modalBox.onclick = () => modalBox.classList.toggle('active');

	const modalBoxClick = $('.music-option .banner-modal-ad-link');
	modalBoxClick.onclick = () => modalBox.classList.toggle('active');
})();

// New Playlist Modal Handle
(() => {
	const newPlModalBox = $('body .new-pl-modal');
	const newPlBtn = $('.category-sidebar .new-playlist-btn');
	const toggleActive = () => newPlModalBox.classList.toggle('active');

	select(newPlModalBox, '.new-pl-banner__overlay').onclick = toggleActive;
	select(newPlModalBox, '.new-pl-link').onclick = toggleActive;
	newPlBtn.onclick = toggleActive;
})();

// Search Bar Handle
(() => {
	const searchBar = $('.main-content .search-bar');
	select(searchBar, 'input').onfocus = () =>
		searchBar.classList.add('active');

	select(searchBar, 'input').onblur = () =>
		setTimeout(() => searchBar.classList.remove('active'), 300);

	selectAll(searchBar, '.suggest-item').forEach(
		(item) => (item.onclick = () => searchBar.classList.remove('active'))
	);
})();

// Playlist Sidebar Handle
(() => {
	const playlistSidebar = $('.playlist-sidebar');
	const playlistBtn = $('.player-control .bi-music-note-list');
	playlistBtn.onclick = () => playlistSidebar.classList.toggle('active');

	const options = selectAll(playlistSidebar, '.option');
	options.forEach(
		(item) =>
			(item.onclick = () => {
				const lastActiveOption = select(
					playlistSidebar,
					'.left .active'
				);
				lastActiveOption.classList.remove('active');
				item.classList.add('active');
				if (item === options[1])
					playlistSidebar.classList.add('recent');
				else playlistSidebar.classList.remove('recent');
			})
	);
})();

// Player Control Elements
const playerControl = $('.player-control');
const controller = select(playerControl, '.controller');
const songInfo = select(playerControl, '.song-info');
const audio = select(playerControl, '.now-play');
const songVolume = select(playerControl, '#volume');
const currentSongDuration = select(playerControl, '.right-time');
const currentSongTime = select(playerControl, '.left-time');

const playBtn = select(controller, '.play-and-pause');
const prevBtn = select(controller, '.bi-skip-backward');
const nextBtn = select(controller, '.bi-skip-forward');
const shuffleBtn = select(controller, '.bi-shuffle');
const repeatBtn = select(controller, '.bi-arrow-repeat');
const songProgress = select(controller, '#progress');

const songImg = select(songInfo, '.media-img > img');
const songArtist = select(songInfo, '.artist');
const songTitle = select(songInfo, '.title');

// Section Elements
const personalSection = $('.personal-section');

// System Config
const USER_CONFIG_KEY = 'user__settings';
const api = NhacCuaTui;

const songImgAnimation = songImg.animate([{ transform: 'rotate(360deg)' }], {
	duration: 10000,
	iterations: Infinity,
});

const musicPlayer = {
	userConfig: JSON.parse(localStorage.getItem(USER_CONFIG_KEY)) || {},
	currentIndex: 0,
	randArr: [],
	isRepeat: 0,
	isRand: 0,

	uploadSongs: [
		{
			id: 0,
			name: 'Nevada',
			artist: 'Vicetone',
			audioSrc: './src/music/Nevada.mp3',
			imgSrc: './src/img/Nevada.png',
			length: '3:00',
		},
		{
			id: 1,
			name: 'Summer Time',
			artist: 'K-391',
			audioSrc: './src/music/SummerTime.mp3',
			imgSrc: './src/img/SummerTime.png',
			length: '4:00',
		},
		{
			id: 2,
			name: 'Shape of You',
			artist: 'Ed Sheeran',
			audioSrc: './src/music/ShapeOfYou.mp3',
			imgSrc: './src/img/EdSheeran.png',
			length: '3:10',
		},
		{
			id: 3,
			name: 'Cheri Cheri Lady',
			artist: 'Modern Talking',
			audioSrc: './src/music/CheriCheriLady.mp3',
			imgSrc: './src/img/ModernTalking.png',
			length: '3:30',
		},
		{
			id: 4,
			name: 'Savage Love',
			artist: 'Jason Derulo',
			audioSrc: './src/music/SavageLove.mp3',
			imgSrc: './src/img/SavageLove.png',
			length: '3:60',
		},
	],

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
			id: 0,
			name: 'Nevada',
			artist: 'Vicetone',
			audioSrc: './src/music/Nevada.mp3',
			imgSrc: './src/img/Nevada.png',
			length: '3:00',
		},
		{
			id: 1,
			name: 'Summer Time',
			artist: 'K-391',
			audioSrc: './src/music/SummerTime.mp3',
			imgSrc: './src/img/SummerTime.png',
			length: '4:00',
		},
		{
			id: 2,
			name: 'Shape of You',
			artist: 'Ed Sheeran',
			audioSrc: './src/music/ShapeOfYou.mp3',
			imgSrc: './src/img/EdSheeran.png',
			length: '3:10',
		},
		{
			id: 3,
			name: 'Cheri Cheri Lady',
			artist: 'Modern Talking',
			audioSrc: './src/music/CheriCheriLady.mp3',
			imgSrc: './src/img/ModernTalking.png',
			length: '3:30',
		},
		{
			id: 4,
			name: 'Savage Love',
			artist: 'Jason Derulo',
			audioSrc: './src/music/SavageLove.mp3',
			imgSrc: './src/img/SavageLove.png',
			length: '3:60',
		},
	],
	artists: [
		{
			name: 'Vicetone',
			imgSrc: './src/img/Nevada.png',
			follow: 3000,
			status: false,
		},
		{
			name: 'K-391',
			imgSrc: './src/img/SummerTime.png',
			follow: 3000,
			status: false,
		},
		{
			name: 'Ed Sheeran',
			imgSrc: './src/img/EdSheeran.png',
			follow: 3000,
			status: false,
		},
		{
			name: 'Modern Talking',
			imgSrc: './src/img/ModernTalking.png',
			follow: 3000,
			status: false,
		},
		{
			name: 'Jason Derulo',
			imgSrc: './src/img/SavageLove.png',
			follow: 3000,
			status: false,
		},
	],

	NCTArtists: [],
	NCTTrendArtists: [],
	NCTPlaylists: [],
	NCTRanking: [],
	NCTTop100: [],
	NCTTopics: [],
	NCTHome: [],

	setConfig(key, val) {
		this.userConfig[key] = val;
		localStorage.setItem(USER_CONFIG_KEY, JSON.stringify(this.userConfig));
	},
	loadConfig() {
		this.isRand = this.userConfig.isRand || 0;
		this.isRepeat = this.userConfig.isRepeat || 0;
		this.userConfig.uploadSongs &&
			(this.uploadSongs = JSON.parse(this.userConfig.uploadSongs));
	},

	defineProperties() {
		Object.defineProperty(this, 'currentSong', {
			get: function () {
				return this.songs[this.currentIndex];
			},
		});
	},

	initApp() {
		this.randArr = new Array(this.songs.length);
		this.randArr.fill(0);

		audio.volume = songVolume.value / 100;
		shuffleBtn.classList.toggle('active', this.isRand);
		repeatBtn.classList.toggle('fa-spin', this.isRepeat);

		const lastPlaySong = this.userConfig.currentSong || { id: 0 };
		this.currentIndex = lastPlaySong.id;
		this.loadCurrentSong();
	},

	renderPersonalSection() {
		const _this = this;
		return {
			renderSongs() {
				$('section .song-list ul').innerHTML = _this.uploadSongs
					.map(
						(song) => `
				<li class="song-item" data-songindex="${song.id}" data-songurl="${song.audioSrc}">
					<div class="left">
						<img src="${song.imgSrc}" alt="${song.name}" />
						<div class="left-content">
							<div class="song-title">${song.name}</div>
							<div class="song-artist">${song.artist}</div>
						</div>
					</div>
					<div class="right">
						<span>
							<i class="bi bi-heart ico ico--click"></i>
						</span>
						<span class="duration">${song.length}</span>
					</div>
				</li>
			`
					)
					.join('');
			},
			renderArtists() {
				$('#artist .swiper-wrapper').innerHTML = _this.artists
					.map(
						(artist) => `
				<div class="artist-info swiper-slide">
					<div class="artist__bg">
						<div
							class="img" 
							style="
								background: url('${artist.imgSrc}');
								background-size: 130% auto;
								background-position: center;
								background-repeat: no-repeat;
								transition: all 0.32s ease-in-out;
							"
							></div>
					</div>
					<div class="artist__content">
						<div class="artist__name">${artist.name}</div>
						<div class="artist__follow">${artist.follow} followers</div>
						<div class="artist__status">${artist.status ? 'Follow' : 'Unfollow'}</div>
					</div>
				</div>
			`
					)
					.join('');
			},
			renderPlaylists() {
				$('#playlist .swiper-wrapper').innerHTML = _this.playlists
					.map(
						(playlist) => `
					<div class="playlist-item swiper-slide">
						<div
							class="playlist-option"
							style="
								background: url('${playlist.imgSrc}');
								background-size: 100% 100%;
							">
							<div class="playlist-option-overlay">
								<i class="fas fa-times"></i>
								<i class="fas fa-play"></i>
								<i class="fas fa-ellipsis-h"></i>
							</div>
						</div>
						<div class="playlist-title">${playlist.name}</div>
						<div class="playlist-owner">${playlist.owner}</div>
					</div>
				`
					)
					.join('');
			},
			renderSongPreview() {
				$('section .img-preview').innerHTML = _this.uploadSongs
					.map(
						(song) =>
							`<a href="#"><img src="${song.imgSrc}" alt="${song.name}"/></a>`
					)
					.join('');
				_this.imageSlideShow();
			},
			renderAll() {
				this.renderSongs();
				this.renderArtists();
				this.renderPlaylists();
				this.renderSongPreview();
			},
		};
	},
	renderRankingSection(data) {
		const rankingSection = $('.main-content .ranking-section');
		const rankingSectionHeader = select(rankingSection, '.header');
		const rankingTitle = select(rankingSectionHeader, '.title');
		const rankingSubtitle = select(rankingSectionHeader, '.subtitle');
		const songsInner = select(rankingSection, '.songs');

		const renderRankingPlaylist = (songs) =>
			songs.map((item, index) => {
				let thisSong = this.NCTRanking[index];
				if (index === 0)
					return `
					<div class="itemSong featured" data-songkey="${item.songKey}">
						<audio></audio>
						<div class="content">
							<span class="number">${index + 1}</span>
							<figure class="image">
								<img
									src="${item.thumbnail || item.artists[0].imageUrl}"
									alt="img"
								/>
							</figure>
							<div class="info">
								<div class="text">
									<p class="title">${item.title}</p>
									<p class="artist">${thisSong.artists.map((item) => item.name).join(', ')}</p>
								</div>
								<p class="plays">${item.totalWeekInRanked}</p>
								<div class="moreInfo">
									<div class="moreItem">
										<i class="icon score"></i>
										<p class="iconLabel">${
											item.position <= item.oldPosition
												? `+${
														item.oldPosition -
														item.position
												  }`
												: `-${
														item.position -
														item.oldPosition
												  }`
										}</p>
									</div>

									<div class="counters">
										<div class="moreItem">
											<i class="bi bi-heart ico--click icon heart"></i>
											<p class="iconLabel">
												1452
											</p>
										</div>
										<div class="moreItem">
											<i class="icon play"></i>
											<p class="iconLabel">
												5432
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="categories">
					</div>`;
				return `
					<div class="itemSong list ${
						item.position <= item.oldPosition ? `` : `down`
					}" data-songkey="${item.songKey}">
						<div class="content">
							<span class="number">${index + 1}</span>
							<figure class="image">
								<img
									src="${item.thumbnail || item.artists[0].imageUrl}"
									alt="img"
								/>
							</figure>
							<div class="info">
								<div class="text">
									<p class="title">${item.title}</p>
									<p class="artist">${thisSong.artists.map((item) => item.name).join(', ')}</p>
								</div>

								<p class="plays">${item.totalWeekInRanked} wks</p>

								<div class="moreInfo">
									<div class="moreItem">
										<i class="icon score"></i>
										<p class="iconLabel">${
											item.position <= item.oldPosition
												? `+${
														item.oldPosition -
														item.position
												  }`
												: `-${
														item.position -
														item.oldPosition
												  }`
										}</p>
									</div>

									<div class="counters">
										<div class="moreItem">
											<i class="bi bi-heart ico--click icon heart"></i>
											<p class="iconLabel">325</p>
										</div>
										<div class="moreItem">
											<i class="icon play"></i>
											<p class="iconLabel">
												2683
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>`;
			});
		let allSongs = this.NCTRanking
			? renderRankingPlaylist(this.NCTRanking)
			: [];

		rankingTitle.innerHTML = 'Vietnamese Ranking';
		rankingSubtitle.innerHTML = `Week: ${data.week}, ${data.year}`;

		songsInner.innerHTML = allSongs.slice(0, 5).join('');
		this.songsClickEvent(rankingSection, this);

		const loadRemain = select(rankingSection, '.load-remain');
		loadRemain.onclick = () => {
			songsInner.innerHTML += allSongs.slice(5).join('');
			loadRemain.style.display = 'none';
			this.songsClickEvent(rankingSection, this);
		};

		this.heartIconHandle();
	},
	renderTop100Section(songs) {
		const Top100Section = $('.main-content .top-100');
		const songsInner = select(Top100Section, '.songs');

		const renderTop100Playlist = (songs) =>
			songs.map((item, index) => {
				if (index === 0)
					return `
					<div class="itemSong featured" data-songkey="${item.key}">
						<div class="content">
							<span class="number">${index + 1}</span>
							<figure class="image">
								<img
									src="${item.thumbnail || item.artists[0].imageUrl}"
									alt="img"
								/>
							</figure>
							<div class="info">
								<div class="text">
									<p class="title">${item.title}</p>
									<p class="artist">${item.artists.map((item) => item.name).join(', ')}</p>
								</div>
								<p class="plays long">${item.duration}</p>
							</div>
						</div>
					</div>
					<div class="categories">
						<p>Songs</p>
						<p>Duration</p>
					</div>`;
				return `
					<div class="itemSong list" data-songkey="${item.key}">
						<div class="content">
							<span class="number">${index + 1}</span>
							<figure class="image">
								<img
									src="${item.thumbnail || item.artists[0].imageUrl}"
									alt="img"
								/>
							</figure>
							<div class="info">
								<div class="text">
									<p class="title">${item.title}</p>
									<p class="artist">${item.artists.map((item) => item.name).join(', ')}</p>
								</div>
								<p class="plays">${item.duration}</p>
							</div>
						</div>
					</div>`;
			});
		let allSongs = renderTop100Playlist(songs);
		songsInner.innerHTML = allSongs.slice(0, 5).join('');
		this.songsClickEvent(Top100Section, this);

		const loadRemain = select(Top100Section, '.load-remain');
		loadRemain.onclick = () => {
			songsInner.innerHTML += allSongs.slice(5).join('');
			loadRemain.style.display = 'none';
			this.songsClickEvent(Top100Section, this);
		};

		this.heartIconHandle();
	},
	render() {
		this.renderPersonalSection().renderAll();
		this.initApp();
	},

	imageSlideShow() {
		const imgList = $$('section .img-preview img');
		const imgListLth = imgList.length;
		let imgIndex = 0;
		imgList[0].style.opacity = 1;
		setInterval(() => {
			imgList[imgIndex++].style.opacity = 0;
			if (imgIndex >= imgListLth) imgIndex = 0;
			imgList[imgIndex].style.opacity = 1;
		}, 3000);
	},
	swiperGenerator() {
		const mySwiper = new Swiper('#playlist .swiper-container', {
			direction: 'horizontal',
			centeredSlides: false,
			slidesPerView: 2,
			spaceBetween: 5,
			threshold: 3,
			speed: 800,
			loop: true,
			pagination: {
				el: '#playlist .swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				1024: {
					centeredSlides: false,
					slidesPerView: 4,
					spaceBetween: 5,
					threshold: 5,
				},
				750: {
					centeredSlides: false,
					slidesPerView: 3,
					spaceBetween: 5,
					threshold: 4,
				},
			},
		});

		const mySwiper2 = new Swiper('#artist .swiper-container', {
			direction: 'horizontal',
			centeredSlides: false,
			slidesPerView: 1,
			spaceBetween: 5,
			threshold: 1,
			speed: 800,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				750: {
					centeredSlides: false,
					slidesPerView: 3,
					spaceBetween: 5,
					threshold: 4,
				},
			},
		});
	},

	songsClickEvent(par, _this) {
		const songs = selectAll(par, '.itemSong');
		songs.forEach((item) => {
			item.onclick = (e) => {
				if (e.target.parentElement.className.includes('moreItem'))
					return;

				const key = item.dataset.songkey;
				api.getSong(key).then((data) => {
					if (_this.currentSong.name === data.song.title) return;
					const songArtist = data.song.artists
						.map((item) => item.name)
						.join(', ');

					_this.songs = [
						{
							id: 0,
							name: data.song.title,
							artist: songArtist,
							audioSrc: data.song.streamUrls[0].streamUrl,
							imgSrc: data.song.thumbnail,
							length: data.song.duration,
						},
					];
					_this.currentIndex = 0;
					_this.loadCurrentSong();
					if (audio.src) {
						audio.play();
						songImgAnimation.play();
					}
				});
			};
		});
	},

	personalTabsHandle() {
		const hideAll = (list) =>
			list.forEach((item) => (item.style.display = 'none'));
		const showAll = (list) =>
			list.forEach((item) => (item.style.display = 'flex'));

		const tabLink = $$('.nav-bar .link');
		const tabItem = $$('.personal-section .main-page .item');
		tabLink.forEach((link, id) =>
			link.addEventListener('click', (e) => {
				const last = $('.nav-bar .liactive');
				if (last)
					last.className = last.className.replace('liactive', '');
				if (!id) {
					showAll(tabItem);
					e.currentTarget.className += ' liactive';
					return;
				}
				hideAll(tabItem);
				tabItem[id - 1].style.display = 'flex';
				e.currentTarget.className += ' liactive';
			})
		);

		const artistImg = $$('#artist .artist__bg .img');
		artistImg.forEach((item) => {
			item.onmouseover = () => (item.style.backgroundSize = '155% auto');
			item.onmouseout = () => (item.style.backgroundSize = '130% auto');
		});

		$$('.personal-section .main-page section .title > span').forEach(
			(item, index) =>
				(item.onclick = () => {
					hideAll(tabItem);
					tabItem[index].style.display = 'flex';

					const last = $('.nav-bar .liactive');
					if (last)
						last.className = last.className.replace('liactive', '');
					tabLink[index + 1].className += ' liactive';
				})
		);

		$('.personal-section .new-playlist').onclick = () =>
			$('body .new-pl-modal').classList.toggle('active');
	},
	personalSongClickHandle() {
		const _this = this;
		selectAll(personalSection, 'li[data-songurl]').forEach(
			(item) =>
				(item.onclick = () => {
					const thisSong = this.uploadSongs[item.dataset.songindex];
					_this.songs = [
						{
							id: 0,
							name: thisSong.name,
							artist: thisSong.artist,
							audioSrc: thisSong.audioSrc,
							imgSrc: thisSong.imgSrc,
							length: thisSong.length,
						},
					];
					_this.currentIndex = 0;
					_this.loadCurrentSong();
					if (audio.src) {
						audio.play();
						songImgAnimation.play();
					}
				})
		);
	},
	personalArtistHandle() {
		const artistsStatus = selectAll(personalSection, '.artist__status');
		artistsStatus.forEach(
			(item) =>
				(item.onclick = () => {
					item.classList.toggle('isFollowed');
					if (item.className.includes('isFollowed')) {
						item.innerText = 'Followed';
						item.style.color = 'var(--bg-lv6)';
						item.style.backgroundColor = 'lightgreen';
					} else {
						item.innerText = 'Unfollow';
						item.style.color = 'var(--bg-lv0)';
						item.style.backgroundColor = 'var(--bg-lv6)';
					}
				})
		);
	},
	personalUploadHandle() {
		const uploadBtns = $$('input[type="file"]');
		uploadBtns.forEach(
			(item) =>
				(item.onchange = (e) => {
					const files = Array.from(e.target.files);
					files.forEach((item) => {
						const newURL = URL.createObjectURL(item);
						const newName = item.name.replace(
							`.mp${item.name.slice(-1)}`,
							''
						);
						this.uploadSongs.push({
							id: this.uploadSongs.length,
							name: newName,
							artist: `Your Music`,
							audioSrc: newURL,
							imgSrc: './src/img/Logo.png',
							length: '3:00',
						});
					});
					this.renderPersonalSection().renderSongs();
					this.renderPersonalSection().renderSongPreview();
					this.personalSongClickHandle();
				})
		);
	},
	personalHandle() {
		this.personalSongClickHandle();
		this.personalArtistHandle();
		this.personalUploadHandle();
		this.personalTabsHandle();
	},

	categoryHandle() {
		const tabLink = $$('.category-sidebar .item');
		const tabItem = $$('.main-content .category-item');
		const tabLinkLth = tabLink.length - 1;
		const personalNav = $('.personal-section .nav-bar');
		const main = $('.main-content');

		const hideAll = (list) =>
			list.forEach(
				(item) => (item.style.display = 'none'),
				personalNav.classList.remove('ontop')
			);
		const showAll = (list) =>
			list.forEach((item) => (item.style.display = 'flex'));
		const removeLastActive = () => {
			personalNav
				.querySelectorAll('.liactive')
				.forEach(
					(item) =>
						(item.className = item.className.replace(
							'liactive',
							''
						))
				);
		};

		hideAll(tabItem);
		personalSection.style.display = 'block';

		tabLink.forEach((link, id) =>
			link.addEventListener('click', (e) => {
				const last = $('.category-sidebar .active');
				if (last) last.className = last.className.replace('active', '');
				hideAll(tabItem);
				e.currentTarget.className += ' active';
				switch (id) {
					case tabLinkLth:
						hideAll(personalSection.querySelectorAll('.item'));
						removeLastActive();
						personalSection.style.display = 'block';
						personalSection.querySelector(
							'#playlist'
						).style.display = 'flex';
						personalNav.querySelectorAll('.link')[2].className +=
							' liactive';
						break;
					case tabLinkLth - 1:
						hideAll(personalSection.querySelectorAll('.item'));
						removeLastActive();
						personalNav.querySelectorAll('.link')[1].className +=
							' liactive';
						personalSection.style.display = 'block';
						personalSection.querySelector('#songs').style.display =
							'flex';
						break;
					case 0:
						showAll(personalSection.querySelectorAll('.item'));
						removeLastActive();
						personalNav.querySelectorAll('.link')[0].className +=
							' liactive';
						personalSection.style.display = 'none';
						tabItem[id].style.display = 'block';
						break;
					default:
						personalSection.style.display = 'none';
						tabItem[id].style.display = 'block';
						break;
				}
			})
		);

		/*let navPosition = personalNav.offsetTop;
		main.onscroll = () => {
			const toTop = $('.to-top');
			if (main.scrollTop > 178) toTop.style.display = 'block';
			else toTop.style.display = 'none';

			if (window.innerWidth <= 750) {
				personalNav.classList.remove('ontop');
				return;
			}

			const mainPos = main.scrollTop;
			const navPos = personalNav.getBoundingClientRect().top;
			if (personalNav.className.includes('ontop')) {
				if (mainPos - 20 <= navPosition && navPosition <= mainPos + 20)
					personalNav.classList.remove('ontop');
				else if (mainPos <= navPosition)
					personalNav.classList.remove('ontop');
			} else {
				if (navPos <= 4) personalNav.classList.add('ontop');
			}
		}; */
	},

	topIconHandle() {
		const checkStatus = (item) => {
			if (item.className.includes('active')) {
				item.classList.remove('active');
				return true;
			}
			return false;
		};
		const disableAll = () =>
			$$('.main-content .top-bar .part2 .icon').forEach((item) =>
				item.classList.remove('active')
			);

		const allTheme = [
			['dark', '#0e0c0c'],
			['light', '#f4f4f4'],
			['green', '#a1fbd8'],
			['blue', '#a1b3fa'],
			['pink', '#fcb2b5'],
			['orange', '#fffcaf'],
		];
		const themeBtn = $('.main-content .top-bar .theme-ico');
		themeBtn.addEventListener('click', () => {
			if (checkStatus(themeBtn)) return;
			disableAll();
			themeBtn.classList.toggle('active');
			themeBtn
				.querySelectorAll('.theme-item')
				.forEach(
					(item, index) => (
						(item.onclick = () =>
							(document.body.dataset.theme = item
								.querySelector('span')
								.innerText.trim()
								.toLowerCase())),
						(item.style.backgroundColor = allTheme[index][1])
					)
				);
		});

		$('.main-content .top-bar .setting-ico').onclick = (e) => {
			if (checkStatus(e.currentTarget)) return;
			disableAll();
			e.currentTarget.classList.toggle('active');
			const settingItems = $$('.main-content .top-bar .setting-item');
			settingItems.forEach(
				(item) => (item.onclick = (e) => e.stopPropagation())
			);
		};

		$('.main-content .top-bar .personal-ico').onclick = () => (
			disableAll(), (personalSection.style.display = 'block')
		);
	},
	heartIconHandle() {
		$$('.bi-heart').forEach(
			(item) =>
				(item.onclick = (e) => {
					e.stopPropagation();
					if (item.className.includes('bi-heart-fill'))
						item.className = item.className.replace(
							'bi-heart-fill',
							'bi-heart'
						);
					else
						item.className = item.className.replace(
							'bi-heart',
							'bi-heart-fill'
						);
				})
		);
	},

	loadCurrentSong() {
		currentSongDuration.innerHTML = this.currentSong?.length || '99:99';
		songTitle.innerHTML = this.currentSong?.name;
		songArtist.innerHTML = this.currentSong?.artist;
		songImg.src = this.currentSong?.imgSrc;
		audio.src = this.currentSong?.audioSrc;
		playBtn.click();
	},
	playNextSong() {
		if (this.isRepeat) {
			this.loadCurrentSong();
			return;
		}
		if (this.isRand) {
			this.playShuffle();
			return;
		}

		if (++this.currentIndex >= this.songs.length) this.currentIndex = 0;
		this.loadCurrentSong();
	},
	playPrevSong() {
		if (this.isRepeat) {
			this.loadCurrentSong();
			return;
		}
		if (this.isRand) {
			this.playShuffle();
			return;
		}

		if (--this.currentIndex < 0) this.currentIndex = this.songs.length - 1;
		this.loadCurrentSong();
	},
	playShuffle() {
		if (this.isRepeat) {
			this.loadCurrentSong();
			return;
		}
		if ([...this.randArr].sort()[0]) this.randArr.fill(0);

		let tmp;
		do tmp = Math.floor(Math.random() * this.songs.length);
		while (this.randArr[tmp] === 1 || tmp === this.currentIndex);

		this.randArr[tmp] = 1;
		this.currentIndex = tmp;
		this.loadCurrentSong();
	},
	playerHandle() {
		songImgAnimation.pause();

		songProgress.oninput = () => {
			audio.currentTime = parseFloat(
				(songProgress.value * audio.duration) / 100
			).toFixed(3);
			songProgress.value = parseFloat(
				(audio.currentTime / audio.duration) * 100
			).toFixed(3);

			if (audio.src) {
				songImgAnimation.play();
				audio.play();
			}

			const setTime = () => {
				const minute = ~~(audio.duration / 60);
				const second = ~~(audio.duration - minute * 60);

				currentSongDuration.innerHTML = `${minute}:${second}`;
				currentSongTime.innerHTML = audio.currentTime.toFixed(3);
			};
		};

		playBtn.onclick = () => {
			playerControl.classList.toggle('playing');
			if (!audio.src) return;
			if (audio.paused) {
				audio.play();
				songImgAnimation.play();
			} else {
				audio.pause();
				songImgAnimation.pause();
			}
		};
		nextBtn.onclick = () => {
			if (audio.src) {
				this.playNextSong();
				audio.play();
				songImgAnimation.play();
			}
		};
		prevBtn.onclick = () => {
			if (audio.src) {
				this.playPrevSong();
				audio.play();
				songImgAnimation.play();
			}
		};
		shuffleBtn.onclick = () => (
			(this.isRand = !this.isRand),
			this.setConfig('isRand', this.isRand),
			shuffleBtn.classList.toggle('active'),
			(this.randArr[this.currentIndex] = 1)
		);
		repeatBtn.onclick = () => (
			(this.isRepeat = !this.isRepeat),
			this.setConfig('isRepeat', this.isRepeat),
			repeatBtn.classList.toggle('fa-spin')
		);

		audio.onplay = () => {
			this.setConfig('currentSong', this.currentSong);
			playerControl.classList.add('playing');
		};
		audio.onended = () => {
			if (!audio.src) return;
			if (this.isRepeat) {
				audio.play();
				songImgAnimation.play();
			} else nextBtn.click();
		};
		audio.ontimeupdate = () =>
			(songProgress.value = parseFloat(
				(audio.currentTime / audio.duration) * 100
			).toFixed(3));

		songVolume.oninput = () =>
			(audio.volume = parseFloat(songVolume.value / 100).toFixed(3));
	},

	callApi() {
		const searchBarHandle = (data) => {
			const searchSuggestList = $('.search-bar .suggest-list .content');
			const searchBarRender = () => {
				const topKeyWordHTML = data.topkeyword
					.map(
						(item, index) => `
					<li class="suggest-item">
						<span> #${item.order}  :  ${item.name}</span>
					</li>`
					)
					.join('');
				searchSuggestList.innerHTML = topKeyWordHTML;
			};
			const searchBarEvent = () => {
				const items = selectAll(searchSuggestList, '.suggest-item');
				items.forEach(
					(item) => (item.onclick = () => console.log(item))
				);
			};

			searchBarRender();
			searchBarEvent();
		};
		const trendingArtistHandle = (data) => {
			this.NCTTrendArtists = data;
		};
		const topicsHandle = (data) => {
			this.NCTTopics = data;
		};
		const homeHandle = (data) => {
			this.NCTHome = data;
		};
		const top100Handle = (data) => {
			this.NCTTop100 = data.playlist.songs;
			this.renderTop100Section(this.NCTTop100);
		};
		const rankingHandle = (data) => {
			this.NCTRanking = data.ranking.song;
			this.renderRankingSection(data.ranking);
		};

		const api = NhacCuaTui;
		Promise.all([
			api.getHome(),

			// api.getSong('EdENCgJm9dAa'),
			// api.getLyric('EdENCgJm9dAa'),
			// api.getArtistDetail('erik'),
			// api.getVideoDetail('IXTbg1bBelQKh'),
			// api.getPlaylistDetail('7ROXQyroRFYT'),

			api.getTopics(),
			// api.getTopicDetail('weiwjycnu'),

			api.getTrendingArtists(),
			// api.exploreArtists({
			// 	nation: 'hot',
			// 	gender: 1,
			// }),
			// api.explore({
			// 	type: 'song',
			// }),
			// api.explore({
			// 	type: 'playlist',
			// }),
			// api.explore({
			// 	type: 'mv',
			// }),

			api.getTopKeyword(),
			// api.searchByKeyword('energy'),

			api.getTop100('m3liaiy6vVsF'),
			api.getChart({
				category: 'nhac-viet',
			}),
		])
			.then((data) => {
				console.log(data);
				const [
					home,
					topics,
					trendingArtist,
					topKeyword,
					top100,
					ranking,
				] = data;
				rankingHandle(ranking);
				top100Handle(top100);
				topicsHandle(topics);
				homeHandle(home);
				searchBarHandle(topKeyword);
				trendingArtistHandle(trendingArtist);
			})
			.catch((err) => console.log(err));
	},
	handleEvents() {
		this.topIconHandle();
		this.swiperGenerator();
		this.personalHandle();
		this.categoryHandle();
		this.playerHandle();
	},
	start() {
		this.callApi();
		this.defineProperties();
		this.loadConfig();
		this.render();
		this.handleEvents();
	},
};
musicPlayer.start();
