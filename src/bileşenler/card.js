import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const card_div = document.createElement("div");
  card_div.className = "card";
  card_div.style.width = "30%";

  const headline_div = document.createElement("div");
  headline_div.className = "headline";
  headline_div.textContent = makale["anabaslik"];

  const author_div = document.createElement("div");
  author_div.className = "author";

  const container_div = document.createElement("div");
  container_div.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale["yazarFoto"];
  img.style.width = "15%";

  const span_yazar = document.createElement("span");
  span_yazar.textContent = makale["yazarAdi"] + " tarafından";

  author_div.append(container_div.appendChild(img), span_yazar);
  card_div.append(headline_div, author_div);

  card_div.addEventListener("click", () => {
    alert(headline_div.textContent);
  });
  return card_div;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios
    .get("http://localhost:5001/api/makaleler")
    .then((res) => res.data)
    .then((response) => {
      const length2 = response.makaleler.bootstrap.length;
      for (let i = 0; i < length2; i++) {
        let arr = [];
        arr.push(response.makaleler.bootstrap[i]);
        for (let makale of arr) {
          document.querySelector(secici).append(Card(makale));
        }
      }
      const length = response.makaleler.javascript.length;
      for (let i = 0; i < length; i++) {
        let arr = [];
        arr.push(response.makaleler.javascript[i]);
        for (let makale of arr) {
          document.querySelector(secici).append(Card(makale));
        }
      }
      const length4 = response.makaleler.jquery.length;
      for (let i = 0; i < length4; i++) {
        let arr = [];
        arr.push(response.makaleler.jquery[i]);
        for (let makale of arr) {
          document.querySelector(secici).append(Card(makale));
        }
      }

      const length1 = response.makaleler["node.js"].length;
      for (let i = 0; i < length1; i++) {
        let arr = [];
        arr.push(response.makaleler["node.js"][i]);
        for (let makale of arr) {
          document.querySelector(secici).append(Card(makale));
        }
      }
      const length3 = response.makaleler.teknoloji.length;
      for (let i = 0; i < length3; i++) {
        let arr = [];
        arr.push(response.makaleler.teknoloji[i]);
        for (let makale of arr) {
          document.querySelector(secici).append(Card(makale));
        }
      }
      // const length5 = response.makaleler.node.js.length;
      // for (let i = 0; i < length5; i++) {
      //   const arr = [];
      //   arr.push(response.makaleler.node.js[i]);
      //   for (let makale of arr) {
      //     document.querySelector(secici).append(Card(makale));
      //   }
      // }
      // const length1 = response.makaleler.teknoloji.length;
      // for (let i = 0; i < length1; i++) {
      //   const arr = [];
      //   arr.push(response.makaleler.teknoloji[i]);
      //   for (let makale of arr) {
      //     document.querySelector(secici).append(Card(makale));
      //   }
      // }
    })
    .catch((err) => console.log(err));
};

export { Card, cardEkleyici };
// makaleler.bootstrap;
// makaleler.bootstrap[0].yazarAdi;
