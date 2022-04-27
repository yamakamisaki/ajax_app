//正しくレスポンスされたらこの描写を返す

const buildHTML = (XHR) => {
  const item = XHR.response.post;  //createアクションで保存したデータを取得している
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  //クリックされたら以下をする
  submit.addEventListener("click", (e) => {
    //ブラウザの初期化
    e.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);
    
    //非同期通信の作成
    const XHR = new XMLHttpRequest();  //これがコントローラーと結びついてるから他のアクションを動かせる
    XHR.open("POST", "/posts", true);  //この先でフォームを保存するのでcreateアクションに繋がっている
    XHR.responseType = "json";
    XHR.send(formData);
    //レスポンスによって返す値を決める
    XHR.onload = () => {
      if(XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

//ロードされたらpost関数をする
window.addEventListener('load', post);