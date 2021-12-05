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
			const last = menuList.querySelector('.active');
			if (last) last.className = last.className.replace(' active', '');
			e.currentTarget.className += ' active';
		});
	});
})();

(() => {
	const modalBox = $('body .ad-modal');
	modalBox.onclick = () => modalBox.classList.toggle('active');
	const modalBoxClick = $('.music-option .banner-modal-ad-link');
	modalBoxClick.onclick = () => modalBox.classList.toggle('active');
})();

(() => {
	const newPlModalBox = $('body .new-pl-modal');
	const newPlBtn = $('.category-sidebar .new-playlist-btn');

	newPlBtn.onclick = () => newPlModalBox.classList.toggle('active');
	newPlModalBox.querySelector('.new-pl-banner__overlay').onclick = () =>
		newPlModalBox.classList.toggle('active');
})();

(() => {
	const searchBar = $('.main-content .search-bar');
	searchBar.querySelector('input').onfocus = () =>
		searchBar.classList.add('active');

	searchBar.querySelector('input').onblur = () =>
		setTimeout(() => searchBar.classList.remove('active'), 300);

	searchBar
		.querySelectorAll('.suggest-item')
		.forEach((item) =>
			item.addEventListener('click', () =>
				searchBar.classList.remove('active')
			)
		);
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

	render() {
		$('section .song-list ul').innerHTML = this.songs
			.map(
				(song) => `
				<li class="song-item">
					<audio class="hide">
						<source src="${song.audioSrc}" type="audio/mpeg">
					</audio>
					<div class="left">
						<img src="${song.imgSrc}" alt="${song.name}" />
						<div class="left-content">
							<div class="song-title">${song.name}</div>
							<div class="song-artist">${song.artist}</div>
						</div>
					</div>
					<div class="right">
						<span>
							<i class="fas fa-heart ico ico--click"></i>
						</span>
						<span class="duration">3:00</span>
					</div>
				</li>
			`
			)
			.join('');

		$('section .img-preview').innerHTML = this.songs
			.map(
				(song) => `
				<a href="#">
					<img src="${song.imgSrc}" alt="${song.name}" />
				</a>
			`
			)
			.join('');

		$('#playlist .swiper-wrapper').innerHTML = this.playlists
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

		$('#artist .swiper-wrapper').innerHTML = this.artists
			.map(
				(artist) => `
				<div class="artist-info swiper-slide">
					<div class="artist__bg">
						<div
							class="img" 
							style="
								background: url('${artist.imgSrc}');
								background-size: 120% auto;
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

	personalTabsHandle() {
		const hideAll = (list) =>
			list.forEach((item) => (item.style.display = 'none'));
		const showAll = (list) =>
			list.forEach((item) => (item.style.display = 'block'));
		const tabLink = $$('.nav-bar .link');
		const tabItem = $$('.main-page .item');
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
				tabItem[id - 1].style.display = 'block';
				e.currentTarget.className += ' liactive';
			})
		);

		const artistImg = $$('#artist .artist__bg .img');
		artistImg.forEach((item) => {
			item.addEventListener(
				'mouseover',
				() => (item.style.backgroundSize = '150% auto')
			);
			item.addEventListener(
				'mouseout',
				() => (item.style.backgroundSize = '120% auto')
			);
		});
	},

	categoryTabsHandle() {
		const tabLink = $$('.category-sidebar .item');
		const tabItem = $$('.main-content .category-item');
		const tabLinkLth = tabLink.length - 1;
		const personalSection = $('.personal-section');
		const personalNav = $('.personal-section .nav-bar');
		const main = $('.main-content');

		const hideAll = (list) =>
			list.forEach((item) => (item.style.display = 'none'));
		const showAll = (list) =>
			list.forEach((item) => (item.style.display = 'block'));
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
						).style.display = 'block';
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
							'block';
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

		let navPosition = personalNav.offsetTop;
		main.onscroll = () => {
			if (window.innerWidth <= 750) return;

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
		};
	},

	themeToggle() {
		const themeBtn = $('.main-content .top-bar .theme-ico');
		themeBtn.onclick = () => {
			themeBtn.querySelector('.theme-panel').classList.toggle('active');
			const themeList = themeBtn.querySelectorAll('.theme-item');
			themeList.forEach(
				(item) =>
					(item.onclick = () =>
						(document.body.dataset.theme =
							item.innerText.toLowerCase()))
			);
		};
	},

	start() {
		this.render();
		this.themeToggle();
		this.imageSlideShow();
		this.swiperGenerator();
		this.personalTabsHandle();
		this.categoryTabsHandle();
	},
};
musicPlayer.start();
