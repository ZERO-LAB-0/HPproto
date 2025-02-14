// ハンバーガーメニューの処理
const tgl = document.querySelector('#js-tgl');
const menu = document.querySelector('#js-menu');

tgl.addEventListener('click', () => {
  tgl.classList.toggle('active');
  menu.classList.toggle('active');
});

const dd = document.querySelector('#js-ddtgl');

dd.addEventListener('click', () => {
 dd.classList.toggle('active');
});

// ドロップダウンメニューのマウスオーバー処理
'use strict';

{
  // DOM取得
  // 親メニューのli要素
  const parentMenuItem = document.querySelectorAll('.menu__item');

  // イベントを付加
  for (let i = 0; i < parentMenuItem.length; i++) {
    parentMenuItem[i].addEventListener('mouseover', dropDownMenuOpen);
    parentMenuItem[i].addEventListener('mouseleave', dropDownMenuClose);
  }

  // ドロップダウンメニューを開く処理
  function dropDownMenuOpen(e) {
    // 子メニューa要素
    const childMenuLink = e.currentTarget.querySelectorAll('.hdrdd');
 

    // is-activeを付加
    for (let i = 0; i < childMenuLink.length; i++) {
      childMenuLink[i].classList.add('hovered');
    }

  }

  // ドロップダウンメニューを閉じる処理
  function dropDownMenuClose(e) {
    // 子メニューリンク
    const childMenuLink = e.currentTarget.querySelectorAll('.hdrdd');
   
    // is-activeを削除
    for (let i = 0; i < childMenuLink.length; i++) {
      childMenuLink[i].classList.remove('hovered');
    }

  }

}