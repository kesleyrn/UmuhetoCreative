(function () {
  "use strict";

  var ishemaFiles = [
    "3V9A3741.jpg", "3V9A3749.jpg", "3V9A3750.jpg", "3V9A3753.jpg", "3V9A3756.jpg", "3V9A3760.jpg", "3V9A3762.jpg", "3V9A3764.jpg", "3V9A3770.jpg", "3V9A3775.jpg", "3V9A3781.jpg", "3V9A3784.jpg", "3V9A3786.jpg", "3V9A3793.jpg", "3V9A3794.jpg", "3V9A3795.jpg", "3V9A3796.jpg", "3V9A3800.jpg", "3V9A3801.jpg", "3V9A3804.jpg", "3V9A3805.jpg", "3V9A3807.jpg", "3V9A3810.jpg", "3V9A3818.jpg", "3V9A3821.jpg", "3V9A3827.jpg", "3V9A3830.jpg", "3V9A3832.jpg", "3V9A3841.jpg", "3V9A3854.jpg", "3V9A3858.jpg", "3V9A3864.jpg", "3V9A3878.jpg", "3V9A3888.jpg", "3V9A3913.jpg", "3V9A3916.jpg", "3V9A3922.jpg", "3V9A3927.jpg", "3V9A3933.jpg", "3V9A3938.jpg", "3V9A3945.jpg", "3V9A3950.jpg", "3V9A3964.jpg", "3V9A3966.jpg", "3V9A3971.jpg", "3V9A3975.jpg", "3V9A3981.jpg", "3V9A3987.jpg", "3V9A3992.jpg", "3V9A3998.jpg", "3V9A4004.jpg", "3V9A4005.jpg", "3V9A4010.jpg", "3V9A4016.jpg", "3V9A4022.jpg", "3V9A4027.jpg", "3V9A4030.jpg", "3V9A4033.jpg", "3V9A4034.jpg", "3V9A4042.jpg", "3V9A4046.jpg", "3V9A4053.jpg", "3V9A4065.jpg", "3V9A4071.jpg", "3V9A4075.jpg", "3V9A4078.jpg",
    "3V9A4104.jpg", "3V9A4104_(2).jpg", "3V9A4106.jpg", "3V9A4114.jpg", "3V9A4116.jpg", "3V9A4117.jpg", "3V9A4118.jpg", "3V9A4119.jpg", "3V9A4120.jpg", "3V9A4121.jpg", "3V9A4122.jpg", "3V9A4123.jpg", "3V9A4124.jpg", "3V9A4125.jpg", "3V9A4126.jpg", "3V9A4127.jpg", "3V9A4128.jpg", "3V9A4129.jpg", "3V9A4130.jpg", "3V9A4131.jpg", "3V9A4132.jpg", "3V9A4133.jpg", "3V9A4134.jpg", "3V9A4135.jpg", "3V9A4136.jpg", "3V9A4137.jpg", "3V9A4138.jpg", "3V9A4139.jpg", "3V9A4141.jpg", "3V9A4149.jpg", "3V9A4153.jpg", "3V9A4169.jpg", "3V9A4178.jpg", "3V9A4194.jpg", "3V9A4195.jpg", "3V9A4199.jpg", "3V9A4201.jpg", "3V9A4225.jpg", "3V9A4228.jpg", "3V9A4237.jpg", "3V9A4255.jpg", "3V9A4260.jpg", "3V9A4265.jpg", "3V9A4271.jpg", "3V9A4277.jpg", "3V9A4282.jpg", "3V9A4284.jpg", "3V9A4286.jpg", "3V9A4307.jpg", "3V9A4311.jpg", "3V9A4313.jpg", "3V9A4315.jpg", "3V9A4320.jpg", "3V9A4345.jpg", "3V9A4351.jpg", "3V9A4352.jpg", "3V9A4360.jpg", "3V9A4369.jpg", "3V9A4372.jpg", "3V9A4375_(2).jpg", "3V9A4376.jpg",
    "DSC09527.jpg", "DSC09530.jpg", "DSC09536.jpg", "DSC09548.jpg", "DSC09559.jpg", "DSC09567.jpg", "DSC09573.jpg", "DSC09574.jpg", "DSC09594.jpg", "DSC09598.jpg", "DSC09611.jpg", "DSC09613.jpg", "DSC09633.jpg", "DSC09639.jpg", "DSC09643.jpg", "DSC09658.jpg", "DSC09667.jpg", "DSC09670.jpg", "DSC09671.jpg", "Only.jpg", "Only_1.jpg"
  ];

  var inyotaFiles = [
    "3V9A6633.jpg.jpeg", "3V9A6637.jpg.jpeg", "3V9A6639.jpg.jpeg", "3V9A6643.jpg.jpeg", "3V9A6646.jpg.jpeg", "3V9A6649.jpg.jpeg", "3V9A6653.jpg.jpeg", "3V9A6655.jpg.jpeg", "3V9A6660.jpg.jpeg", "3V9A6667.jpg.jpeg", "3V9A6674.jpg.jpeg", "3V9A6681.jpg.jpeg", "3V9A6687.jpg.jpeg", "3V9A6688.jpg.jpeg", "3V9A6694.jpg.jpeg", "3V9A6696.jpg.jpeg",
    "3V9A9166.jpg.jpeg", "3V9A9168.jpg.jpeg", "3V9A9171.jpg.jpeg", "3V9A9179.jpg.jpeg", "3V9A9182.jpg.jpeg", "3V9A9185.jpg.jpeg", "3V9A9191.jpg.jpeg", "3V9A9201.jpg.jpeg", "3V9A9202.jpg.jpeg", "3V9A9205.jpg.jpeg", "3V9A9210.jpg.jpeg", "3V9A9216.jpg.jpeg", "3V9A9218.jpg.jpeg", "3V9A9342.jpg.jpeg", "3V9A9348.jpg.jpeg", "3V9A9355.jpg.jpeg", "3V9A9359.jpg.jpeg", "3V9A9364.jpg.jpeg", "3V9A9383.jpg.jpeg", "3V9A9406.jpg.jpeg", "3V9A9412.jpg.jpeg", "3V9A9418.jpg.jpeg", "3V9A9423.jpg.jpeg", "3V9A9425.jpg.jpeg", "3V9A9430.jpg.jpeg", "3V9A9435.jpg.jpeg", "3V9A9445.jpg.jpeg", "3V9A9451.jpg.jpeg", "3V9A9452.jpg.jpeg", "3V9A9462.jpg.jpeg", "3V9A9471.jpg.jpeg"
  ].concat(ishemaFiles.map(function (file) {
    return "ISHEMA/Umuheto_Creative/" + file;
  }));

  var ngaboFiles = ["Seer_57.JPG.jpeg", "Seer_54.JPG.jpeg", "Seer_59.JPG.jpeg", "Seer_72.JPG.jpeg"];

  var collections = {
    inyota: {
      title: "Inyota",
      description: "Browse the Inyota collection and open a pictured look to see its details.",
      directory: "../../Images/Collection/Inyota/",
      files: inyotaFiles
    },
    ngabo: {
      title: "Ngabo Y'isunzu",
      description: "Explore the Ngabo Y'isunzu collection. Each photo stays with its own design reference.",
      directory: "../../Images/Collection/Ngabo%20yisunzu/",
      files: ngaboFiles
    },
    isooko: {
      title: "ISOÔKO",
      description: "Explore the ISOÔKO ceremonial collection and choose the pictured look that speaks to you.",
      directory: "../../Images/Collection/Celemonial/",
      files: ["IMG_0964.JPG.jpeg", "IMG_0965.JPG.jpeg", "IMG_0966.JPG.jpeg"]
    },
    inshuti: {
      title: "Inshuti collection",
      description: "Choose a shirt or jacket, see its other views, then contact the studio about ordering.",
      directory: "../Images/Collection/Inshuti%20Shirt/",
      products: [
        { name: "Rugwiro Shirt", type: "Signature shirt", images: [
          "African prince @joby___joshua posing clean and classy in our new rugwiro shirt ,with signature i.jpg",
          "African prince @joby___joshua posing clean and classy in our new rugwiro shirt ,with signature i (1).jpg",
          "African prince @joby___joshua posing clean and classy in our new rugwiro shirt ,with signature i (2).jpg"
        ] },
        { name: "Ingabo Jacket", type: "Embroidered jacket", images: [
          "Ingabo jacket is available in the store get yours 🏹🎯🛍️#madeinrwanda🇷🇼 #jacket #.jpg",
          "Ingabo jacket is available in the store get yours 🏹🎯🛍️#madeinrwanda🇷🇼 #jacket # (1).jpg",
          "Ingabo jacket is available in the store get yours 🏹🎯🛍️#madeinrwanda🇷🇼 #jacket # (2).jpg"
        ] },
        { name: "Nshuti Shirt", type: "Heritage shirt", images: [
          "Our culture the origin of New creative ideas, stay classy in our new nshuti shirt , available  i.jpg",
          "Our culture the origin of New creative ideas, stay classy in our new nshuti shirt , available  i (1).jpg"
        ] },
        { name: "Ubumwe Jacket", type: "Statement jacket", images: [
          "Our latest ubumwe jacket its now available for order,DM us and secure yours to day ,be unique a.jpg",
          "Our latest ubumwe jacket its now available for order,DM us and secure yours to day ,be unique a (1).jpg"
        ] },
        { name: "Hanga Shirt", type: "Signature shirt", images: [
          "🏹🇷🇼Our culture the origin of New creative ideas , be unique and  stay classy in our new hanga.jpg",
          "🏹🇷🇼Our culture the origin of New creative ideas , be unique and  stay classy in our new hanga (1).jpg"
        ] }
      ]
    }
  };

  var collectionAliases = {
    "shirt-dress": "inyota",
    "layered-look": "ngabo",
    ceremonial: "isooko",
    "statement-drape": "inyota",
    "vintage-tailoring": "ngabo"
  };

  var featuredLookNames = {
    "Seer_57.JPG.jpeg": "Ngabo Tracksuit — Black",
    "Seer_54.JPG.jpeg": "Ngabo Tracksuit — Green",
    "Seer_59.JPG.jpeg": "Ngabo Tracksuit — White",
    "Seer_72.JPG.jpeg": "Ngabo T-shirt",
    "3V9A3793.jpg": "Ishema Shirt Dress",
    "3V9A3975.jpg": "Ishema Look",
    "3V9A4345.jpg": "Ishema Shirt Dress",
    "3V9A4376.jpg": "Ishema Shirt Dress",
    "3V9A4104.jpg": "Ishema Umwashi Look",
    "DSC09671.jpg": "Ishema Draped",
    "3V9A4320.jpg": "Ishema Design",
    "3V9A4255.jpg": "Ishema Design",
    "3V9A4282.jpg": "Ishema Design",
    "IMG_0964.JPG.jpeg": "Ceremonial Look 01",
    "IMG_0965.JPG.jpeg": "Ceremonial Look 02",
    "IMG_0966.JPG.jpeg": "Ceremonial Look 03"
  };

  var colors = [
    { name: "As pictured", value: "#80776b" },
    { name: "Ivory", value: "#eee9dc" },
    { name: "Burgundy", value: "#702f3c" },
    { name: "Forest green", value: "#315847" },
    { name: "Custom colour", value: "#5c5c5c" }
  ];

  function imageUrl(collection, file) {
    return collection.directory + file.split("/").map(encodeURIComponent).join("/");
  }

  function makeCard(collection, file, index) {
    var fileName = file.split("/").pop();
    var title = featuredLookNames[fileName] || "Look " + (index + 1);
    var url = imageUrl(collection, file);
    return '<article class="catalog-card">' +
      '<a class="catalog-card__image" href="?design=' + (index + 1) + '" aria-label="View ' + collection.title + " " + title + '">' +
        '<img src="' + url + '" alt="' + collection.title + ", " + title + '" loading="lazy" decoding="async">' +
      "</a>" +
      '<div class="catalog-card__body"><h3>' + title + '</h3><a class="u-line" href="?design=' + (index + 1) + '">View this look <span class="arrow">&rarr;</span></a></div>' +
    "</article>";
  }

  function renderCatalog(root, collection) {
    if (collection.products) {
      var productCards = collection.products.map(function (product, index) {
        var url = imageUrl(collection, product.images[0]);
        var link = "?design=" + (index + 1);
        return '<article class="catalog-card">' +
          '<a class="catalog-card__image" href="' + link + '" aria-label="Explore ' + product.name + '">' +
            '<img src="' + url + '" alt="' + product.name + ' worn by a UMUHETO Creative client" loading="' + (index === 0 ? "eager" : "lazy") + '" fetchpriority="' + (index === 0 ? "high" : "auto") + '" decoding="async">' +
          "</a>" +
          '<div class="catalog-card__body"><p class="card__meta">' + product.type + '</p><h3>' + product.name + '</h3><a class="u-line" href="' + link + '">Explore outfit <span class="arrow">&rarr;</span></a></div>' +
        "</article>";
      }).join("");
      root.innerHTML = '<div class="catalog-grid">' + productCards + "</div>";
      return;
    }
    var cards = collection.files.map(function (file, index) {
      return makeCard(collection, file, index);
    }).join("");

    root.innerHTML = '<div class="wrap">' +
      '<p class="collection-detail__crumb"><a href="../collections.html">Collections</a> / ' + collection.title + "</p>" +
      '<header class="catalog-intro"><p class="eyebrow">The collection</p><h1>' + collection.title + '</h1><p class="lede">' + collection.description + '</p><p class="catalog-count">' + collection.files.length + ' pictured looks</p></header>' +
      '<div class="catalog-grid">' + cards + "</div></div>";
  }

  function renderInshutiDesign(root, collection, productIndex) {
    var product = collection.products[productIndex];
    var views = product.images.map(function (file, index) {
      var url = imageUrl(collection, file);
      return '<button class="product-view" type="button" data-image="' + url + '" data-reference="' + product.name + '" aria-label="View ' + product.name + ' photo ' + (index + 1) + '" aria-pressed="' + (index === 0 ? "true" : "false") + '"><img src="' + url + '" alt="" loading="lazy" decoding="async"></button>';
    }).join("");
    var related = collection.products.map(function (other, index) {
      if (index === productIndex) return "";
      return '<article class="catalog-card"><a class="catalog-card__image" href="?design=' + (index + 1) + '" aria-label="Explore ' + other.name + '"><img src="' + imageUrl(collection, other.images[0]) + '" alt="' + other.name + '" loading="lazy" decoding="async"></a><div class="catalog-card__body"><p class="card__meta">' + other.type + '</p><h3>' + other.name + '</h3><a class="u-line" href="?design=' + (index + 1) + '">Explore outfit <span class="arrow">&rarr;</span></a></div></article>';
    }).filter(Boolean).slice(0, 3).join("");

    root.innerHTML = '<div class="wrap">' +
      '<p class="collection-detail__crumb"><a href="shop.html">Shop</a> / ' + product.name + '</p>' +
      '<div class="design-detail">' +
        '<div class="design-detail__visual"><img class="design-detail__image" src="' + imageUrl(collection, product.images[0]) + '" alt="' + product.name + ' worn by a UMUHETO Creative client" loading="eager" fetchpriority="high" decoding="async"><div class="product-views" role="group" aria-label="More views of ' + product.name + '">' + views + '</div></div>' +
        '<div class="design-detail__content"><p class="eyebrow">' + product.type + '</p><h1>' + product.name + '</h1><p class="lede">This request refers to the exact outfit shown. The studio can confirm sizing, fabric availability, and order timing.</p>' +
          '<p class="design-detail__reference">Outfit reference: Inshuti / ' + product.name + '</p>' +
          '<button class="btn btn--solid design-detail__choose" type="button">Choose this outfit</button>' +
          '<fieldset class="design-detail__colors" hidden><legend>Choose a colour</legend><p class="collection-detail__note">The studio will confirm fabric availability for your chosen colour.</p><div class="color-options">' +
            colors.map(function (color) {
              return '<label class="color-option"><input type="radio" name="color" value="' + color.name + '"><span class="color-option__swatch" style="background:' + color.value + '" aria-hidden="true"></span><span>' + color.name + "</span></label>";
            }).join("") +
          '</div></fieldset>' +
          '<a class="btn btn--solid design-detail__order" href="#" target="_blank" rel="noopener" hidden>Continue on WhatsApp <span class="arrow">&rarr;</span></a>' +
          '<p class="collection-detail__note design-detail__note" aria-live="polite">Choose this outfit, then select a colour to continue to WhatsApp.</p>' +
        "</div></div>" +
      '<section class="design-suggestions" aria-labelledby="suggestions-title"><div class="section-head"><div><p class="eyebrow">Inshuti collection</p><h2 id="suggestions-title">More outfits</h2></div></div><div class="catalog-grid catalog-grid--suggestions">' + related + "</div></section>" +
      "</div>";

    root.querySelectorAll(".product-view").forEach(function (view) {
      view.addEventListener("click", function () {
        root.querySelector(".design-detail__image").src = view.getAttribute("data-image");
        root.querySelector(".design-detail__reference").textContent = "Outfit reference: Inshuti / " + view.getAttribute("data-reference");
        root.querySelectorAll(".product-view").forEach(function (button) {
          button.setAttribute("aria-pressed", button === view ? "true" : "false");
        });
      });
    });

    var chooseButton = root.querySelector(".design-detail__choose");
    var colorFieldset = root.querySelector(".design-detail__colors");
    var orderLink = root.querySelector(".design-detail__order");
    var note = root.querySelector(".design-detail__note");
    chooseButton.addEventListener("click", function () {
      colorFieldset.hidden = false;
      chooseButton.textContent = "Outfit selected";
      chooseButton.disabled = true;
      note.textContent = "Now choose a colour to prepare your WhatsApp message.";
    });
    root.querySelectorAll('input[name="color"]').forEach(function (input) {
      input.addEventListener("change", function () {
        var message = [
          "Hello UMUHETO Creative, I would like to order an outfit.",
          "Collection: Inshuti",
          "Outfit: " + product.name,
          "Design reference: " + product.images[0],
          "Preferred colour: " + input.value,
          "Please confirm availability, sizing, and the next steps."
        ].join("\n");
        orderLink.href = "https://wa.me/250799658607?text=" + encodeURIComponent(message);
        orderLink.hidden = false;
        note.textContent = "Your selected outfit and colour are included in the WhatsApp message.";
      });
    });
  }

  function renderDesign(root, collection, designIndex) {
    var file = collection.files[designIndex];
    var fileName = file.split("/").pop();
    var title = featuredLookNames[fileName] || "Look " + (designIndex + 1);
    var url = imageUrl(collection, file);
    var related = collection.files.map(function (relatedFile, index) {
      return index === designIndex ? "" : makeCard(collection, relatedFile, index);
    }).filter(Boolean).slice(0, 6).join("");

    root.innerHTML = '<div class="wrap">' +
      '<p class="collection-detail__crumb"><a href="../collections.html">Collections</a> / <a href="./' + window.location.pathname.split("/").pop() + '">' + collection.title + '</a> / ' + title + "</p>" +
      '<div class="design-detail">' +
        '<div class="design-detail__visual"><img class="design-detail__image" src="' + url + '" alt="' + collection.title + ", " + title + '" loading="eager" fetchpriority="high" decoding="async"></div>' +
        '<div class="design-detail__content"><p class="eyebrow">' + collection.title + '</p><h1>' + title + '</h1><p class="lede">This request refers to the exact look shown here. Other designs are listed separately below.</p>' +
          '<p class="design-detail__reference">Design reference: ' + fileName + '</p>' +
          '<button class="btn btn--solid design-detail__choose" type="button">Choose this look</button>' +
          '<fieldset class="design-detail__colors" hidden><legend>Choose a colour</legend><p class="collection-detail__note">The studio will confirm fabric availability for your chosen colour.</p><div class="color-options">' +
            colors.map(function (color, index) {
              return '<label class="color-option"><input type="radio" name="color" value="' + color.name + '"><span class="color-option__swatch" style="background:' + color.value + '" aria-hidden="true"></span><span>' + color.name + "</span></label>";
            }).join("") +
          '</div></fieldset>' +
          '<a class="btn btn--solid design-detail__order" href="#" target="_blank" rel="noopener" hidden>Continue on WhatsApp <span class="arrow">&rarr;</span></a>' +
          '<p class="collection-detail__note design-detail__note" aria-live="polite">Choose this look, then select a colour to continue to WhatsApp.</p>' +
        "</div></div>" +
      '<section class="design-suggestions" aria-labelledby="suggestions-title"><div class="section-head"><div><p class="eyebrow">More from ' + collection.title + '</p><h2 id="suggestions-title">Other looks in this collection</h2></div></div><div class="catalog-grid catalog-grid--suggestions">' + related + "</div></section>" +
      "</div>";

    var chooseButton = root.querySelector(".design-detail__choose");
    var colorFieldset = root.querySelector(".design-detail__colors");
    var orderLink = root.querySelector(".design-detail__order");
    var note = root.querySelector(".design-detail__note");

    chooseButton.addEventListener("click", function () {
      colorFieldset.hidden = false;
      chooseButton.textContent = "Look selected";
      chooseButton.disabled = true;
      note.textContent = "Now choose a colour to prepare your WhatsApp message.";
    });

    root.querySelectorAll('input[name="color"]').forEach(function (input) {
      input.addEventListener("change", function () {
        var message = [
          "Hello UMUHETO Creative, I would like to order a look.",
          "Collection: " + collection.title,
          "Look: " + title,
          "Design reference: " + fileName,
          "Preferred colour: " + input.value,
          "Please confirm fabric availability and the next steps."
        ].join("\n");
        orderLink.href = "https://wa.me/250799658607?text=" + encodeURIComponent(message);
        orderLink.hidden = false;
        note.textContent = "Your selected look and colour are included in the WhatsApp message.";
      });
    });
  }

  function renderDetail() {
    var root = document.querySelector("[data-collection-detail]");
    if (!root) return;

    var requestedKey = root.getAttribute("data-collection-detail");
    var key = collections[requestedKey] ? requestedKey : collectionAliases[requestedKey];
    var collection = collections[key];
    if (!collection) return;
    document.title = collection.title + " — UMUHETO Creative";

    var requestedDesign = Number(new URLSearchParams(window.location.search).get("design"));
    if (collection.products) {
      if (Number.isInteger(requestedDesign) && requestedDesign > 0 && requestedDesign <= collection.products.length) {
        renderInshutiDesign(root, collection, requestedDesign - 1);
      } else {
        renderCatalog(root, collection);
      }
    } else if (Number.isInteger(requestedDesign) && requestedDesign > 0 && requestedDesign <= collection.files.length) {
      renderDesign(root, collection, requestedDesign - 1);
    } else {
      renderCatalog(root, collection);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderDetail);
  else renderDetail();
})();
