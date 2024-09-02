let lanSelect = document.querySelector(".language-selector")

let navLinkHome = document.getElementById("navLinkHome")
let navLinkAbout = document.getElementById("navLinkAbout")
let navLinkIngredients = document.getElementById("navLinkIngredients")
let navLinkContact = document.getElementById("navLinkContact")
let navLinkWhyUs = document.getElementById("navLinkWhyUs")

let hereToBoostYourHealth = document.getElementById("hereToBoostYour")
let energyAndStrength = document.getElementById("energyAndStrength")

let homeImg = document.querySelector(".home__img")
let homeDesc = document.querySelector(".home__description")

let scrollToLearnMore = document.querySelector(".scrollToLearnMore")

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

        hereToBoostYourHealth.innerHTML = "提高您的"
        energyAndStrength.innerHTML = "能量和力量"

       homeImg.classList.remove("isEn")
       homeImg.classList.add("isCn")
       homeDesc.innerHTML = "探索 TITAN，旨在提升您的活力和力量，结合尖端科学与天然成分，帮助您每天实现最佳表现并释放您的全部潜能"

       scrollToLearnMore.innerHTML = "滑动查看更多"
       let iTag = document.createElement("i")
       iTag.classList.add("ri-arrow-down-line")
       scrollToLearnMore.appendChild(iTag)
   } else if (lanSelect.classList.contains("cn")) {
      lanSelect.classList.remove("cn")
      lanSelect.classList.add("bm")
      lanSelect.innerHTML = "BM"

        navLinkHome.innerHTML = "Laman Utama"
        navLinkAbout.innerHTML = "Tentang Kami"
        navLinkIngredients.innerHTML = "Bahan-bahan"
        navLinkContact.innerHTML = "Hubungi Kami"
        navLinkWhyUs.innerHTML = "Mengapa Pilih Kami"

        hereToBoostYourHealth.innerHTML = "MENINGKATKAN"
        energyAndStrength.innerHTML = "TENAGA & "
       energyAndStrength.appendChild(document.createElement("br"))
        energyAndStrength.appendChild(document.createTextNode("KEKUATAN"))

         homeImg.classList.remove("isCn")
            homeImg.classList.add("isBm")

       homeDesc.innerHTML = "Temui TITAN, disesuaikan untuk meningkatkan daya hidup dan kekuatan anda, menggabungkan sains terkini dengan bahan semula jadi untuk membantu anda mencapai prestasi puncak dan membuka potensi penuh anda setiap hari."

         scrollToLearnMore.innerHTML = "Gulung untuk ketahui lebih lanjut"

       let iTag = document.createElement("i")
       iTag.classList.add("ri-arrow-down-line")
         scrollToLearnMore.appendChild(iTag)
   } else {
      lanSelect.classList.remove("bm")
      lanSelect.classList.add("eng")
      lanSelect.innerHTML = "ENG"

        navLinkHome.innerHTML = "Home"
        navLinkAbout.innerHTML = "About Us"
        navLinkIngredients.innerHTML = "Ingredients"
        navLinkContact.innerHTML = "Contact Us"
        navLinkWhyUs.innerHTML = "Why Us"

        hereToBoostYourHealth.innerHTML = "HERE TO BOOST YOUR"
        energyAndStrength.innerHTML = "ENERGY & "
         energyAndStrength.appendChild(document.createElement("br"))
        energyAndStrength.appendChild(document.createTextNode("STRENGTH"))

         homeImg.classList.remove("isBm")
            homeImg.classList.add("isEn")

       homeDesc.innerHTML = "\n" +
           "                        Discover TITAN, tailored to elevate your vitality and power,\n" +
           "                        combining cutting-edge science with natural ingredients\n" +
           "                        to help you achieve peak performance and unlock your full potential every day."

         scrollToLearnMore.innerHTML = "Scroll to learn more"
       let iTag = document.createElement("i")
       iTag.classList.add("ri-arrow-down-line")
            scrollToLearnMore.appendChild(iTag)
   }


});
