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
	menuList.querySelectorAll('.item a').forEach((item) => {
		item.addEventListener('click', (e) => {
			const lastActive = menuList.querySelector('.active');
			if (lastActive)
				lastActive.className = lastActive.className.replace(
					' active',
					''
				);
			e.path[1].className += ' active';
		});
	});
})();

const musicPlayer = {
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
						<span>${song.length}</span>
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
