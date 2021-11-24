const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const musicPlayer = {
	songs: [
		{
			name: 'Nevada',
			singer: 'Vicetone',
			src: './src/music/Nevada.mp3',
			img: './src/img/Nevada.png',
		},
		{
			name: 'Summer Time',
			singer: 'K-391',
			src: './src/music/SummerTime.mp3',
			img: './src/img/SummerTime.png',
		},
		{
			name: 'Shape of You',
			singer: 'Ed Sheeran',
			src: './src/music/ShapeOfYou.mp3',
			img: './src/img/EdSheeran.png',
		},
		{
			name: 'Cheri Cheri Lady',
			singer: 'Modern Talking',
			src: './src/music/CheriCheriLady.mp3',
			img: './src/img/ModernTalking.png',
		},
		{
			name: 'Savage Love',
			singer: 'Jason Derulo',
			src: './src/music/SavageLove.mp3',
			img: './src/img/SavageLove.png',
		},
	],

	render() {
		const htmls = this.songs.map((song) => {
			return `
				<div class="song">
					<div class="thumb" style="background: url('${song.img}')"></div>

					<div class="body">
						<h3 class="title">Name: ${song.name}</h3>
						<p class="singer">Singer: ${song.singer}</p>
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
		this.handleEvents();
		this.render();
	},
};

musicPlayer.start();
