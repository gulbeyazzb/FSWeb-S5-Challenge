import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const topics_div = document.createElement("div");
  topics_div.className = "topics";

  const tab_div1 = document.createElement("div");
  tab_div1.textContent = konu[0];
  tab_div1.className = "tab";

  const tab_div2 = document.createElement("div");
  tab_div2.textContent = konu[1];
  tab_div2.className = "tab";

  const tab_div3 = document.createElement("div");
  tab_div3.textContent = konu[2];
  tab_div3.className = "tab";

  topics_div.append(tab_div1, tab_div2, tab_div3);

  return topics_div;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios
    .get("http://localhost:5001/api/konular")
    .then((res) => res.data)
    .then((response) => {
      return document.querySelector(secici).append(Tablar(response.konular));
    })
    .catch((err) => console.log(err));
};

export { Tablar, tabEkleyici };
