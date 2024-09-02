let lanSelect = document.querySelector(".language-selector")

let navLinkHome = document.getElementById("navLinkHome")
let navLinkAbout = document.getElementById("navLinkAbout")
let navLinkIngredients = document.getElementById("navLinkIngredients")
let navLinkContact = document.getElementById("navLinkContact")
let navLinkWhyUs = document.getElementById("navLinkWhyUs")

lanSelect.addEventListener("click", () => {
   if (lanSelect.classList.contains("eng")) {
      lanSelect.classList.remove("eng")
      lanSelect.classList.add("cn")
      lanSelect.innerHTML = "中文"

        navLinkHome.innerHTML = "首页"
        navLinkAbout.innerHTML = "关于我们"
        navLinkIngredients.innerHTML = "成分页"
        navLinkContact.innerHTML = "联系我们"
        navLinkWhyUs.innerHTML = "为什么选择我们"
   } else if (lanSelect.classList.contains("cn")) {
      lanSelect.classList.remove("cn")
      lanSelect.classList.add("bm")
      lanSelect.innerHTML = "BM"

        navLinkHome.innerHTML = "Laman Utama"
        navLinkAbout.innerHTML = "Tentang Kami"
        navLinkIngredients.innerHTML = "Bahan-bahan"
        navLinkContact.innerHTML = "Hubungi Kami"
        navLinkWhyUs.innerHTML = "Mengapa Pilih Kami"
   } else {
      lanSelect.classList.remove("bm")
      lanSelect.classList.add("eng")
      lanSelect.innerHTML = "ENG"

        navLinkHome.innerHTML = "Home"
        navLinkAbout.innerHTML = "About Us"
        navLinkIngredients.innerHTML = "Ingredients"
        navLinkContact.innerHTML = "Contact Us"
        navLinkWhyUs.innerHTML = "Why Us"
   }
});
