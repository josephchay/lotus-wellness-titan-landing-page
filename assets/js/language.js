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

let sectionSubtitleIngredients = document.querySelector(".sectionSubtitleIngredients")

let buildYour = document.querySelector(".buildYour");
let bestBodySectionTitle = document.querySelector(".bestBodySectionTitle");

let macaRoot = document.querySelector(".macaRoot")
let macaRootDesc = document.querySelector(".macaRootDesc")

let taurine = document.querySelector(".taurine")
let taurineDesc = document.querySelector(".taurineDesc")

let oysterExtract = document.querySelector(".oysterExtract")
let oysterExtractDesc = document.querySelector(".oysterExtractDesc")

let epimediumBrevicornum = document.querySelector(".epimediumBrevicornum")
let epimediumBrevicornumDesc = document.querySelector(".epimediumBrevicornumDesc")

let choose__description = document.querySelector(".choose__description")
let bestReasons = document.querySelector(".bestReason")
let bestReasonSub = document.querySelector(".bestReasonSub")

let healthyIngredients = document.querySelector(".healthyIngredients")
let purchasesPurchases = document.querySelector(".purchasesPurchases")
let healthyBenefits = document.querySelector(".healthyBenefits")
let naturalExtracts = document.querySelector(".naturalExtracts")

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

       sectionSubtitleIngredients.innerHTML = "我们的成分"

       buildYour.innerHTML = "打造"
         bestBodySectionTitle.innerHTML = "最好的身体"

       macaRoot.innerHTML = "玛卡根"
       macaRootDesc.innerHTML = "能量和耐力:玛卡根通常用于提高能量水平和增强耐力。性欲:它通常与性欲和性功能增强有关。情绪:一些研究表明它可能有助于情绪调节和减轻焦虑症状。玛卡功效从提升性功能到增强体力、改善男女性更年期的不适感都有所 帮助"

       taurine.innerHTML = "牛磺酸"
       taurineDesc.innerHTML = "能量和恢复:牛磺酸是一种氨基酸,可能有助于提高运动表现和恢复。心脏健康:它与心血管健康有关,有助于调节血压和胆固醇。心理功能:它可以起到神经保护作用,并可能改善认知功能"

       oysterExtract.innerHTML = "牡蛎提取物"
      oysterExtractDesc.innerHTML = "锌来源:牡蛎提取物富含锌,这对睾酮生成和免疫功能至关重要。\n" +
          "性欲:牡蛎提取物中的锌和其他营养素可以支持性健康和性欲。\n" +
          "整体健康:它可能提供其他好处,例如改善关节健康和增强认知功能。"

       epimediumBrevicornum.innerHTML = "淫羊藿"
       epimediumBrevicornumDesc.innerHTML = "性欲:这种草药传统上用于增强性欲。\n" +
           "勃起功能:它可以通过增加血流量来帮助改善勃起功能。\n" +
           "骨骼健康:一些证据表明,它可以通过影响雌激素水平来支持骨骼健康。"

       bestReasons.innerHTML = "TITAN 带来的好处"
       bestReasonSub.innerHTML = ""

       let tag2 = document.createElement("h1")
       tag2.classList.add("section__title-border")
       tag2.innerHTML = "为什么 "
       let tag3 = document.createElement("h1")
       tag3.classList.add("section__title")
       tag3.innerHTML = "选择我们?"
       bestReasonSub.appendChild(tag2)
       bestReasonSub.appendChild(tag3)

       choose__description.innerHTML = "被多名运动员和健身爱好者使用并信任，TITAN 是那些希望提升表现和实现健身目标的完美选择。"

       healthyIngredients.innerHTML = "健康成分"
         purchasesPurchases.innerHTML = "购买"
            healthyBenefits.innerHTML = "健康好处"
            naturalExtracts.innerHTML = "天然提取物"

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

         sectionSubtitleIngredients.innerHTML = "Bahan-bahan Kami"

       buildYour.innerHTML = "Bina"
            bestBodySectionTitle.innerHTML = " badan terbaik anda"

       macaRoot.innerHTML = "Maca Root"
       macaRootDesc.innerHTML = "Tenaga dan Stamina: Akar Maca sering digunakan untuk meningkatkan tahap tenaga dan stamina.\n" +
           "Libido: la biasanya dikaitkan dengan peningkatan libido dan fungsi seksual.\n" +
           "Mood: Sesetengah kajian mencadangkan ia boleh membantu dengan pengawalaturan mood dan mengurangkan simptom kegelisahan"

       taurine.innerHTML = "Taurin"
       taurineDesc.innerHTML = "Tenaga dan Pemulihan: Taurin ialah asid amino yang boleh membantu dengan prestasi senaman dan pemulihan.\n" +
           "•\n" +
           "la telah dikaitkan dengan kesihatan kardiovaskular dengan membantu mengawal tekanan darah dan kolesterol.\n" +
           "Fungsi Mental: la mempunyai kesan neuroprotektif dan mungkin meningkatkan fungsi kognitif."


       oysterExtract.innerHTML = "Ekstrak Tiram"
       oysterExtractDesc.innerHTML = "Sumber Zink: Ekstrak tiram kaya dengan zink, yang penting untuk pengeluaran testosteron dan fungsi imunisasi\n" +
           "Libido: Zink dan nutrien didalam ekstrak tiram boleh menyokong kesihatan seksual dan libido.\n" +
           "Keseluruhan Kesihatan: la mungkin memberikan faedah lain, seperti memperbaikkan kesihatan sendi dan meningkatkan fungsi kognitif."

         epimediumBrevicornum.innerHTML = "Epimedium Brevicornum"
            epimediumBrevicornumDesc.innerHTML = "Libido: Herba ini digunakan secara tradisional untuk meningkatkan keinginan seksual.\n" +
                "• Fungsi Erektil: la boleh membantu meningkatkan fungsi mencapai ereksi dengan meningkatkan aliran darah.\n" +
                "·\n" +
                "Kesihatan Tulang: Beberapa bukti menunjukkan ia boleh menyokong kesihatan tulang dengan mempengaruhi tahap estrogen."

       bestReasons.innerHTML = "Manfaat TITAN"
       bestReasonSub.innerHTML = ""
       let tag2 = document.createElement("h1")
       tag2.classList.add("section__title-border")
       tag2.innerHTML = "MENGAPA "
       let tag3 = document.createElement("h1")
       tag3.classList.add("section__title")
       tag3.innerHTML = "PILIH ?"
       bestReasonSub.appendChild(tag2)
       bestReasonSub.appendChild(tag3)

        choose__description.innerHTML = "Digunakan dan dipercayai oleh ramai atlet dan peminat kecergasan, TITAN adalah pilihan yang sempurna untuk mereka yang ingin meningkatkan prestasi dan mencapai matlamat kecergasan mereka."

       healthyIngredients.innerHTML = "Bahan-bahan Sihat"
         purchasesPurchases.innerHTML = "Pembelian"
            healthyBenefits.innerHTML = "Manfaat Sihat"
            naturalExtracts.innerHTML = "Ekstrak Semulajadi"

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

            sectionSubtitleIngredients.innerHTML = "Ingredients"

         buildYour.innerHTML = "Build Your"
            bestBodySectionTitle.innerHTML = " Best Body"

         macaRoot.innerHTML = "Maca Root"
         macaRootDesc.innerHTML = "\n" +
             "                            Maca root is often used to boost energy levels and enhance stamina.\n" +
             "                            It's commonly associated with increased libido and sexual function.\n" +
             "                            Studies suggest it may help with mood regulation and reduce symptoms of anxiety."


taurine.innerHTML = "Taurine"
         taurineDesc.innerHTML = "\n" +
             "                            An amino acid that may help with exercise performance and recovery.\n" +
             "                            Heart Health: It's been linked to cardiovascular health by helping regulate blood pressure and cholesterol.\n" +
             "                            Mental Function: It can have neuroprotective effects and might improve cognitive function."



       oysterExtract.innerHTML = "Oyster Extract"
       oysterExtractDesc.innerHTML = "\n" +
           "                            Zinc Source: Oyster extract is rich in zinc, which is crucial for testosterone production and immune function.\n" +
           "                            Libido: Zinc and other nutrients in oyster extract can support sexual\n" +
           "                            health and libido.\n" +
           "                            Overall Health: It may provide other benefits, such as improved joint health and enhanced cognitive function."


epimediumBrevicornum.innerHTML = "Epimedium Brevicornum"
       epimediumBrevicornumDesc.innerHTML = "\n" +
           "                            Libido: This herb is traditionally used to enhance sexual desire.\n" +
           "                            Erectile Function: It may help improve erectile function by increasing blood flow.\n" +
           "                            Bone Health: Some evidence suggests it can support bone health by influencing estrogen levels."

            bestReasons.innerHTML = "Benefits Reason"
       bestReasonSub.innerHTML = ""
            let tag2 = document.createElement("h1")
            tag2.classList.add("section__title-border")
            tag2.innerHTML = "WHY "
       let tag3 = document.createElement("h1")
         tag3.classList.add("section__title")
            tag3.innerHTML = "CHOOSE US?"
            bestReasonSub.appendChild(tag2)
            bestReasonSub.appendChild(tag3)

            choose__description.innerHTML = "Used and trusted by many athletes and fitness enthusiasts, TITAN is the perfect choice for those looking to boost performance and achieve their fitness goals."


         healthyIngredients.innerHTML = "Healthy Ingredients"
            purchasesPurchases.innerHTML = "Purchases"
                healthyBenefits.innerHTML = "Healthy Benefits"
                naturalExtracts.innerHTML = "Natural Extracts"
   }


});
