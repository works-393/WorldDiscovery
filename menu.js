/*右上の ☰（ハンバーガー）を押す
↓
メニューが展開される
↓
メニューが閉じる　に変更 
<script src="../menu.js" defer></script>
*/

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menuButton");
    const menu = document.getElementById("navMenu");

    if (btn && menu) {
        // ハンバーガーボタンを押したときの開閉
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
        });

        // ↓ ここから追加：メニュー内のリンクをクリックしたときに閉じる処理
        const links = menu.querySelectorAll("a"); // メニュー内のすべてのaタグを取得
        
        links.forEach(link => {
            link.addEventListener("click", () => {
                // スマホ表示のとき（menuにflexクラスがついているとき）だけ閉じる
                if (menu.classList.contains("flex")) {
                    menu.classList.add("hidden");
                    menu.classList.remove("flex");
                }
            });
        });
        // ↑ ここまで追加
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("menuButton");
    const menu = document.getElementById("navMenu");

    if (btn && menu) {
        // ハンバーガーボタンを押したときの開閉
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
        });

        // ↓ ここから追加：メニュー内のリンクをクリックしたときに閉じる処理
        const links = menu.querySelectorAll("a"); // メニュー内のすべてのaタグを取得
        
        links.forEach(link => {
            link.addEventListener("click", () => {
                // スマホ表示のとき（menuにflexクラスがついているとき）だけ閉じる
                if (menu.classList.contains("flex")) {
                    menu.classList.add("hidden");
                    menu.classList.remove("flex");
                }
            });
        });
        // ↑ ここまで追加
    }
});
