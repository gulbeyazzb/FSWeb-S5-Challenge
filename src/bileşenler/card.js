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

  const headline_div = document.createElement("div");
  headline_div.className = "headline";
  headline_div.textContent = makale["anabaslik"];

  const author_div = document.createElement("div");
  author_div.className = "author";

  const container_div = document.createElement("div");
  container_div.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale["yazarFoto"];

  const span_yazar = document.createElement("span");
  span_yazar.textContent = makale["yazarAdi"] + " tarafından";

  container_div.append(img);
  author_div.append(container_div, span_yazar);
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
      for (let key in response.makaleler) {
        const length2 = response.makaleler[key].length;
        for (let i = 0; i < length2; i++) {
          document
            .querySelector(secici)
            .append(Card(response.makaleler[key][i]));
        }
      }
    })
    .catch((err) => console.log(err));
};

export { Card, cardEkleyici };
// makaleler.bootstrap;
// makaleler.bootstrap[0].yazarAdi;
