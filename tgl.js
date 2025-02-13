const tgl = document.querySelector('#js-tgl'); //js-hamburgerの要素を取得し、変数hamに格納
const menu = document.querySelector('#js-menu'); //js-navの要素を取得し、変数navに格納
tgl.addEventListener('click', function () { //ハンバーガーメニューをクリックしたら
	tgl.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
	menu.classList.toggle('active'); // ナビゲーションメニューにactiveクラスを付け外し
});