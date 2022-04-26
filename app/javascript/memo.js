function post (){
  //htmlの情報を受け取る
  const submit = document.getElementById("submit")
  
  //クリックした時のイベント
  submit.addEventListener("click", (e) => {
   //ブラウザのクリックイベントを初期化
   e.preventDefault();
   //フォームの情報を取得
    const form = document.getElementById("form")
    const formData = new FormData(form);
   //非同期通信の設定
   const XHR = new XMLHttpRequest();
   XHR.open("POST", "/posts", true);
   XHR.responseType = "json";
   XHR.send(formData);
  });
};

window.addEventListener('load', post);
