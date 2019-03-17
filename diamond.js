$(document).ready(function () {
    $(".diamondswrap").diamonds({
        size: 200, //画像サイズ
        gap: 3, //マージン
        hideIncompleteRow: true, //レイアウト調整で最後のイメージを非表示にする
        autoRedraw: true, //ウィンドウサイズリサイズの際に再配置
        itemSelector: ".item" //適用するCSS
    });
});
