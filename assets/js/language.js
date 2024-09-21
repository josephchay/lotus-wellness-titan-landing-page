let lanSelect = document.querySelector(".language-selector")

let navLinkHome = document.querySelectorAll(".navLinkHome")
let navLinkAbout = document.querySelectorAll(".navLinkAbout")
let navLinkIngredients = document.querySelectorAll(".navLinkIngredients")
let navLinkContact = document.getElementById("navLinkContact") || null;
let navLinkWhyUs = document.querySelectorAll(".navLinkWhyUs")

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

let longifoliaExtract = document.querySelector(".longifoliaExtract")
let longifoliaExtractDesc = document.querySelector(".longifoliaExtractDesc")

let choose__description = document.querySelector(".choose__description")
let bestReasons = document.querySelector(".bestReason")
let bestReasonSub = document.querySelector(".bestReasonSub")

let healthyIngredients = document.querySelector(".healthyIngredients")
let purchasesPurchases = document.querySelector(".purchasesPurchases")
let healthyBenefits = document.querySelector(".healthyBenefits")
let naturalExtracts = document.querySelector(".naturalExtracts")

let footerProducts = document.querySelector(".footerProducts")
let footerMenu = document.querySelector(".footerMenu")

let whoAreWeAbout = document.querySelector(".whoAreWeAbout")
let weAreAbout = document.querySelector(".weAreAbout")

let subscribeCTA = document.querySelector(".subscribeCTA")

let yourEmailCTA = document.querySelector(".yourEmailCTA")
// let subscribeBtnCTA = document.querySelector(".subscribeBtnCTA")

let purchasesPurchaseHalfYear = document.querySelector(".purchasesPurchaseHalfYear");

lanSelect.addEventListener("click", () => {
   if (lanSelect.classList.contains("eng")) {
      lanSelect.classList.remove("eng")
      lanSelect.classList.add("cn")
      lanSelect.innerHTML = "中文"

        navLinkHome.forEach((navLink) => {
            navLink.innerHTML = "首页"
        });

        navLinkAbout.forEach((navLink) => {
            navLink.innerHTML = "关于我们"
        })

        navLinkIngredients.forEach((navLink) => {
            navLink.innerHTML = "成分页"
        });

        navLinkWhyUs.forEach((navLink) => {
            navLink.innerHTML = "为什么选择我们"
        });


        footerProducts.innerHTML = "产品"
        footerMenu.innerHTML = "导航"

       if (navLinkContact !== null)
        navLinkContact.innerHTML = "联系我们"

        hereToBoostYourHealth.innerHTML = "提高您的"
        energyAndStrength.innerHTML = "能量和力量"

       homeImg.classList.remove("isEn")
       homeImg.classList.add("isCn")
       homeDesc.innerHTML = "探索 <span class=\"emphasis__brand\">TITAN</span>，旨在提升您的活力和力量，结合尖端科学与天然成分，帮助您每天实现最佳表现并释放您的全部潜能"

       scrollToLearnMore.innerHTML = "滑动查看更多"
       let iTag = document.createElement("i")
       iTag.classList.add("ri-arrow-down-line")
       scrollToLearnMore.appendChild(iTag)

       sectionSubtitleIngredients.innerHTML = "我们的成分"

       buildYour.innerHTML = "打造"
         bestBodySectionTitle.innerHTML = "最好的身体"

       macaRoot.innerHTML = "玛卡根"
       macaRootDesc.innerHTML = "能量和耐力:玛卡根通常用于提高能量水平和增强耐力。<br> <br> 性欲:它通常与性欲和性功能增强有关。<br> <br> 情绪:一些研究表明它有助于情绪调节和减轻焦虑症状。玛卡功效从提升性功能到增强体力、改善男女性更年期的不适感都有所 帮助"

       taurine.innerHTML = "牛磺酸"
       taurineDesc.innerHTML = "能量和恢复:牛磺酸是一种氨基酸,有助于提高运动表现和恢复。<br> <br> 心脏健康:它与心血管健康有关,有助于调节血压和胆固醇。 <br> <br> 心理功能:它可以起到神经保护作用,并改善认知功能"

       oysterExtract.innerHTML = "牡蛎提取物"
      oysterExtractDesc.innerHTML = "锌来源:牡蛎提取物富含锌,这对睾酮生成和免疫功能至关重要。\n <br> <br> " +
          "性欲:牡蛎提取物中的锌和其他营养素可以支持性健康和性欲。\n <br> <br> " +
          "整体健康:它提供其他好处,例如改善关节健康和增强认知功能。"

       epimediumBrevicornum.innerHTML = "淫羊藿"
       epimediumBrevicornumDesc.innerHTML = "性欲:这种草药传统上用于增强性欲。\n <br> <br> " +
           "勃起功能:它可以通过增加血流量来帮助改善勃起功能。\n <br> <br> " +
           "骨骼健康:一些证据表明,它可以通过影响雌激素水平来支持骨骼健康。"

       longifoliaExtract.innerHTML = "东革阿里"
         longifoliaExtractDesc.innerHTML = "睾酮水平:这种草药因其提高睾酮水平的潜力而闻名,这有助于增加肌 肉质量和力量。\n <br> <br> " +
         "性健康:它可以提高性欲和性能力。\n <br> <br> " +
         "\n" +
         "减轻压力:一些研究表明,它可以帮助降低皮质醇水平,从而减轻 压力。"

       bestReasons.innerHTML = "<span class=\"emphasis__brand\">TITAN</span> 带来的好处"
       bestReasonSub.innerHTML = ""

       let tag2 = document.createElement("h1")
       tag2.classList.add("section__title-border")
       tag2.innerHTML = "为什么 "
       let tag3 = document.createElement("h1")
       tag3.classList.add("section__title")
       tag3.innerHTML = "选择我们?"
       bestReasonSub.appendChild(tag2)
       bestReasonSub.appendChild(tag3)

       choose__description.innerHTML = "被多名运动员和健身爱好者使用并信任，<span class=\"emphasis__brand\">TITAN</span> 是那些希望提升表现和实现健身目标的完美选择。"

       healthyIngredients.innerHTML = "健康成分"
         purchasesPurchases.innerHTML = "购买"
            healthyBenefits.innerHTML = "健康好处"
            naturalExtracts.innerHTML = "天然提取物"

       whoAreWeAbout.innerHTML = "关于我们"
         weAreAbout.innerHTML = "我们是一家专注于提供高品质健康产品的公司，我们的产品是由专业团队精心研发，旨在提高您的生活质量。"

       // subscribeCTA.innerHTML = "订阅公司最新动态"

       // yourEmailCTA.placeholder = "您的电子邮件"
         // subscribeBtnCTA.innerHTML = "订阅"

       purchasesPurchaseHalfYear.innerHTML = "/ 半年"

   } else if (lanSelect.classList.contains("cn")) {
      lanSelect.classList.remove("cn")
      lanSelect.classList.add("bm")
      lanSelect.innerHTML = "BM"

       navLinkHome.forEach((navLink) => {
            navLink.innerHTML = "Laman Utama"

       });

        navLinkAbout.forEach((navLink) => {
            navLink.innerHTML = "Tentang Kami"
        });

        navLinkIngredients.forEach((navLink) => {
            navLink.innerHTML = "Bahan-bahan"
        })

        navLinkWhyUs.forEach((navLink) => {

            navLink.innerHTML = "Mengapa Pilih Kami"
        })

       if (navLinkContact !== null)
           navLinkContact.innerHTML = "Hubungi Kami"


       footerProducts.innerHTML = "Produk"
       footerMenu.innerHTML = "Menu"
        hereToBoostYourHealth.innerHTML = "MENINGKATKAN"
        energyAndStrength.innerHTML = "TENAGA & "
       energyAndStrength.appendChild(document.createElement("br"))
        energyAndStrength.appendChild(document.createTextNode("KEKUATAN"))

         homeImg.classList.remove("isCn")
            homeImg.classList.add("isBm")

       homeDesc.innerHTML = "Temui <span class=\"emphasis__brand\">TITAN</span>, disesuaikan untuk meningkatkan daya hidup dan kekuatan anda, menggabungkan sains terkini dengan bahan semula jadi untuk membantu anda mencapai prestasi puncak dan membuka potensi penuh anda setiap hari."

         scrollToLearnMore.innerHTML = "Gulung untuk ketahui lebih lanjut"

       let iTag = document.createElement("i")
       iTag.classList.add("ri-arrow-down-line")
         scrollToLearnMore.appendChild(iTag)

         sectionSubtitleIngredients.innerHTML = "Bahan-bahan Kami"

       buildYour.innerHTML = "Bina"
            bestBodySectionTitle.innerHTML = " badan terbaik anda"

       macaRoot.innerHTML = "Maca Root"
       macaRootDesc.innerHTML = "Tenaga dan Stamina: Akar Maca sering digunakan untuk meningkatkan tahap tenaga dan stamina.\n <br> <br> " +
           "Libido: la biasanya dikaitkan dengan peningkatan libido dan fungsi seksual.\n <br> <br> " +
           "Mood: Sesetengah kajian mencadangkan ia boleh membantu dengan pengawalaturan mood dan mengurangkan simptom kegelisahan"

       taurine.innerHTML = "Taurin"
       taurineDesc.innerHTML = "Tenaga dan Pemulihan: Taurin ialah asid amino yang boleh membantu dengan prestasi senaman dan pemulihan.\n" +
           "\n <br> <br> " +
           "la telah dikaitkan dengan kesihatan kardiovaskular dengan membantu mengawal tekanan darah dan kolesterol.\n <br> <br> " +
           "Fungsi Mental: la mempunyai kesan neuroprotektif dan mungkin meningkatkan fungsi kognitif."


       oysterExtract.innerHTML = "Ekstrak Tiram"
       oysterExtractDesc.innerHTML = "Sumber Zink: Ekstrak tiram kaya dengan zink, yang penting untuk pengeluaran testosteron dan fungsi imunisasi\n <br> <br> " +
           "Libido: Zink dan nutrien didalam ekstrak tiram boleh menyokong kesihatan seksual dan libido.\n <br> <br> " +
           "Keseluruhan Kesihatan: la mungkin memberikan faedah lain, seperti memperbaikkan kesihatan sendi dan meningkatkan fungsi kognitif."

         epimediumBrevicornum.innerHTML = "Epimedium Brevicornum"
            epimediumBrevicornumDesc.innerHTML = "Libido: Herba ini digunakan secara tradisional untuk meningkatkan keinginan seksual.\n <br> <br> " +
                "Fungsi Erektil: la boleh membantu meningkatkan fungsi mencapai ereksi dengan meningkatkan aliran darah.\n" +
                "·\n <br> <br> " +
                "Kesihatan Tulang: Beberapa bukti menunjukkan ia boleh menyokong kesihatan tulang dengan mempengaruhi tahap estrogen."

         longifoliaExtract.innerHTML = "Ekstrak Longifolia"
            longifoliaExtractDesc.innerHTML = "Tahap Testosteron: Herba ini terkenal dengan potensinya untuk meningkatkan tahap testosteron, yang boleh membantu dengan jisim dan kekuatan otot.\n <br> <br> " +
                "\n" +
                "Kesihatan Seksual: la boleh meningkatkan tahap libido dan prestasi seksual. <br> <br> " +
                "Pengurangan Tekanan: Sesetengah penyelidikan menunjukkan ia boleh membantu mengurangkan tahap kortisol, berpotensi menurunkan tekanan."

       bestReasons.innerHTML = "Manfaat <span class=\"emphasis__brand\">TITAN</span>"
       bestReasonSub.innerHTML = ""
       let tag2 = document.createElement("h1")
       tag2.classList.add("section__title-border")
       tag2.innerHTML = "MENGAPA "
       let tag3 = document.createElement("h1")
       tag3.classList.add("section__title")
       tag3.innerHTML = "PILIH ?"
       bestReasonSub.appendChild(tag2)
       bestReasonSub.appendChild(tag3)

        choose__description.innerHTML = "Digunakan dan dipercayai oleh ramai atlet dan peminat kecergasan, <span class=\"emphasis__brand\">TITAN</span> adalah pilihan yang sempurna untuk mereka yang ingin meningkatkan prestasi dan mencapai matlamat kecergasan mereka."

       healthyIngredients.innerHTML = "Bahan-bahan Sihat"
         purchasesPurchases.innerHTML = "Pembelian"
            healthyBenefits.innerHTML = "Manfaat Sihat"
            naturalExtracts.innerHTML = "Ekstrak Semulajadi"

         whoAreWeAbout.innerHTML = "Tentang Kami"
            weAreAbout.innerHTML = "Kami adalah syarikat yang memberi tumpuan kepada produk kesihatan berkualiti tinggi, produk kami direka khas oleh pasukan profesional, bertujuan untuk meningkatkan kualiti hidup anda."

         // subscribeCTA.innerHTML = "Langgan berita terkini syarikat"

         // yourEmailCTA.placeholder = "Emel Anda"
            // subscribeBtnCTA.innerHTML = "Langgan"

         purchasesPurchaseHalfYear.innerHTML = "/ setengah tahun"
   } else {
      lanSelect.classList.remove("bm")
      lanSelect.classList.add("eng")
      lanSelect.innerHTML = "ENG"

        navLinkHome.forEach((navLink) => {
            navLink.innerHTML = "Home"
        });

        navLinkAbout.forEach((navLink) => {
            navLink.innerHTML = "About Us"
        })

        navLinkIngredients.forEach((navLink) => {
            navLink.innerHTML = "Ingredients"
        })

        navLinkWhyUs.forEach((navLink) => {
            navLink.innerHTML = "Why Us"
        })

       footerMenu.innerHTML = "Menu"
        footerProducts.innerHTML = "Products"

       if (navLinkContact !== null)
           navLinkContact.innerHTML = "Contact Us"

        hereToBoostYourHealth.innerHTML = "HERE TO BOOST YOUR"
        energyAndStrength.innerHTML = "ENERGY & "
         energyAndStrength.appendChild(document.createElement("br"))
        energyAndStrength.appendChild(document.createTextNode("STRENGTH"))

         homeImg.classList.remove("isBm")
            homeImg.classList.add("isEn")

       homeDesc.innerHTML = "\n" +
           "                        Discover <span class=\"emphasis__brand\">TITAN</span>, tailored to elevate your vitality and power,\n" +
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
             "                            Maca root is often used to boost energy levels and enhance stamina.\n <br> <br> " +
             "                            It's commonly associated with increased libido and sexual function.\n <br> <br> " +
             "                            Studies suggest it may help with mood regulation and reduce symptoms of anxiety."


taurine.innerHTML = "Taurine"
         taurineDesc.innerHTML = "\n" +
             "                            An amino acid that may help with exercise performance and recovery.\n <br> <br> " +
             "                            Heart Health: It's been linked to cardiovascular health by helping regulate blood pressure and cholesterol.\n <br> <br> " +
             "                            Mental Function: It can have neuroprotective effects and might improve cognitive function."



       oysterExtract.innerHTML = "Oyster Extract"
       oysterExtractDesc.innerHTML = "\n" +
           "                            Zinc Source: Oyster extract is rich in zinc, which is crucial for testosterone production and immune function.\n <br> <br> " +
           "                            Libido: Zinc and other nutrients in oyster extract can support sexual\n" +
           "                            health and libido. <br> <br> \n" +
           "                            Overall Health: It may provide other benefits, such as improved joint health and enhanced cognitive function."


epimediumBrevicornum.innerHTML = "Epimedium Brevicornum"
       epimediumBrevicornumDesc.innerHTML = "\n" +
           "                            Libido: This herb is traditionally used to enhance sexual desire.\n <br> <br> " +
           "                            Erectile Function: It may help improve erectile function by increasing blood flow.\n <br> <br> " +
           "                            Bone Health: Some evidence suggests it can support bone health by influencing estrogen levels."

         longifoliaExtract.innerHTML = "Eurycoma longifolia Extract"
            longifoliaExtractDesc.innerHTML = "Testosterone Levels: This herb is known for its potential to" +
                " increase testosterone levels, which can help with muscle mass and strength. <br> <br> " +
                "Sexual Health: It may improve libido and sexual performance. <br> <br> " +
                "Stress Reduction: Some research indicates it can help reduce cortisol levels, potentially lowering stress."

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

            choose__description.innerHTML = "Used and trusted by many athletes and fitness enthusiasts, <span class=\"emphasis__brand\">TITAN</span> is the perfect choice for those looking to boost performance and achieve their fitness goals."


         healthyIngredients.innerHTML = "Healthy Ingredients"
            purchasesPurchases.innerHTML = "Purchases"
                healthyBenefits.innerHTML = "Healthy Benefits"
                naturalExtracts.innerHTML = "Natural Extracts"

            whoAreWeAbout.innerHTML = "About Us"
            weAreAbout.innerHTML = "We are a company focused on providing high-quality health products, our products are carefully developed by a professional team, aimed at improving your quality of life."

         // subscribeCTA.innerHTML = "Subscribe for new company updates"

            // yourEmailCTA.placeholder = "Your Email"
            // subscribeBtnCTA.innerHTML = "Subscribe"

       purchasesPurchaseHalfYear.innerHTML = "/ half year"
   }
});
