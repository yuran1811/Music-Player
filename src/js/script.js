const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(() => {
	const main = $('.main-content');
	const toTop = $('.to-top');
	main.onscroll = () => {
		if (main.scrollTop > 100) toTop.style.display = 'block';
		else toTop.style.display = 'none';
	};
})();

const musicPlayer = {
	songs: [
		{
			name: 'Nevada',
			artist: 'Vicetone',
			audioSrc: './src/music/Nevada.mp3',
			imgSrc: './src/img/Nevada.png',
		},
		{
			name: 'Summer Time',
			artist: 'K-391',
			audioSrc: './src/music/SummerTime.mp3',
			imgSrc: './src/img/SummerTime.png',
		},
		{
			name: 'Shape of You',
			artist: 'Ed Sheeran',
			audioSrc: './src/music/ShapeOfYou.mp3',
			imgSrc: './src/img/EdSheeran.png',
		},
		{
			name: 'Cheri Cheri Lady',
			artist: 'Modern Talking',
			audioSrc: './src/music/CheriCheriLady.mp3',
			imgSrc: './src/img/ModernTalking.png',
		},
		{
			name: 'Savage Love',
			artist: 'Jason Derulo',
			audioSrc: './src/music/SavageLove.mp3',
			imgSrc: './src/img/SavageLove.png',
		},
	],

	render() {
		const htmls = this.songs.map((song) => {
			return `
				<div class="song">
					<div class="thumb" style="background: url('${song.imgSrc}')"></div>

					<div class="body">
						<h3 class="title">Name: ${song.name}</h3>
						<p class="artist">Singer: ${song.artist}</p>
					</div>

					<div class="option"></div>
				</div>
			`;
		});
		$('.playlist').innerHTML = htmls.join('');
		$('.cd').innerHTML = htmls[0];
	},

	handleEvents() {
		// document.onscroll = () => {
		// const CD = $('.cd');
		// const CDWidth = CD.offsetWidth;
		// document.onscroll = () => {
		// 	const scrollTop =
		// 		window.scrollY || document.documentElement.scrollTop;
		// 	const newCDWidth = Math.max(0, CDWidth - scrollTop);
		// 	CD.style.width = newCDWidth + 'px';
		// 	CD.style.height =
		// 		newCDWidth > 200 ? newCDWidth - 200 + 'px' : newCDWidth;
		// 	CD.style.opacity = newCDWidth / CDWidth;
		// };
		// };
	},

	start() {
		// this.handleEvents();
		// this.render();
	},
};

musicPlayer.start();
