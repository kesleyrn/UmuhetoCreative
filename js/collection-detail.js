(function () {
  "use strict";

  var imageRoot = "../../Images/ISHEMA%20ALL%20PHOTOS/Umuheto_Creative/";
  var collections = {
    "shirt-dress": {
      eyebrow: "Ishema collection / Signature",
      title: "Ishema Shirt Dress",
      description: "A confident everyday silhouette inspired by the graceful drape of the Umushanana. Each piece is made to order and finished around your preferred fit.",
      photos: ["3V9A3793.jpg", "3V9A3794.jpg", "3V9A3804.jpg", "3V9A3818.jpg"],
      looks: ["Classic shirt dress", "Belted shirt dress", "Soft drape shirt dress", "Longline shirt dress"]
    },
    "layered-look": {
      eyebrow: "Ishema collection / Signature",
      title: "Layered Ishema Look",
      description: "Expressive layers, considered proportions, and distinctive Ishema color. Choose a silhouette and tell us how you would like it made for you.",
      photos: ["3V9A3975.jpg", "3V9A3938.jpg", "3V9A4320.jpg", "3V9A4282.jpg"],
      looks: ["Layered occasion look", "Urumuri drape", "Flowing Ishema layers", "Sculpted layered look"]
    },
    "statement-drape": {
      eyebrow: "Ishema collection / Sculpted form",
      title: "Statement Drape",
      description: "A sculptural occasion silhouette with generous movement and soft structure. The atelier will confirm fabric choices and timing with you before the order is confirmed.",
      photos: ["3V9A4376.jpg", "3V9A4360.jpg", "3V9A4375_(2).jpg", "3V9A4345.jpg"],
      looks: ["Sculpted statement drape", "Draped Ishema silhouette", "Silk statement look", "Soft occasion drape"]
    },
    ceremonial: {
      eyebrow: "Ceremonial / Made to measure",
      title: "Ceremonial Wear",
      description: "Heritage-led looks for weddings, introductions, and meaningful family occasions. We shape every piece around your event, cultural details, and preferred fit.",
      photos: ["3V9A3950.jpg", "3V9A3775.jpg", "3V9A3741.jpg", "3V9A4201.jpg"],
      looks: ["Traditional wedding look", "Contemporary Umushanana", "Introduction ceremony look", "Modern heritage layers"],
      lookDescriptions: [
        "A graceful wedding silhouette tailored around your family traditions, ceremony details, and preferred fit.",
        "A contemporary interpretation of the Umushanana, balancing the traditional drape with a modern finish.",
        "A made-to-measure look for introduction and dowry celebrations, shaped around your cultural preferences.",
        "Expressive layers and contemporary tailoring for a distinctive, coordinated ceremonial outfit."
      ]
    },
    "vintage-tailoring": {
      eyebrow: "Made to order / Tailoring",
      title: "Vintage Tailoring",
      description: "Timeless proportions meet contemporary Rwandan craft. Choose a look and we will discuss fabric, fit, and finishing details with you directly.",
      photos: ["3V9A4315.jpg", "DSC09530.jpg", "DSC09548.jpg", "DSC09611.jpg"],
      looks: ["Vintage-inspired tailoring", "Relaxed studio cut", "Structured occasion look", "Modern heirloom silhouette"]
    },
    "custom-design": {
      eyebrow: "Bespoke / Made to measure",
      title: "Custom Design",
      description: "Bring a reference or start with an idea. Share the silhouette, occasion, and details you have in mind, and the studio will help shape a one-of-a-kind piece around you.",
      photos: ["3V9A4282.jpg", "3V9A3950.jpg", "3V9A4376.jpg", "3V9A3793.jpg"],
      looks: ["Contemporary heritage", "Ceremonial custom look", "Sculpted occasion look", "Made-to-measure everyday look"]
    }
  };

  var colors = [
    { name: "Ivory", value: "#eee9dc" },
    { name: "Ruby", value: "#8d293b" },
    { name: "Forest", value: "#315847" },
    { name: "Indigo", value: "#304c70" }
  ];

  function imageUrl(file) {
    return imageRoot + file;
  }

  function preparePhoto(photoUrl) {
    if (preparePhoto.files[photoUrl]) return Promise.resolve(preparePhoto.files[photoUrl]);
    if (preparePhoto.pending[photoUrl]) return preparePhoto.pending[photoUrl];
    if (typeof File === "undefined") return Promise.resolve(null);

    preparePhoto.pending[photoUrl] = fetch(photoUrl).then(function (response) {
      if (!response.ok) throw new Error("Unable to load the selected booking photo.");
      return response.blob();
    }).then(function (photoBlob) {
      var fileName = photoUrl.split("/").pop().split("?")[0] || "booking-reference.jpg";
      var photoFile = new File([photoBlob], fileName, { type: photoBlob.type || "image/jpeg" });
      preparePhoto.files[photoUrl] = photoFile;
      return photoFile;
    }).catch(function () {
      return null;
    }).then(function (photoFile) {
      delete preparePhoto.pending[photoUrl];
      return photoFile;
    });
    return preparePhoto.pending[photoUrl];
  }
  preparePhoto.files = Object.create(null);
  preparePhoto.pending = Object.create(null);

  function shareBooking(message, photoUrl, photoFile, status) {
    var hasShareablePhotoLink = /^https?:/.test(photoUrl);
    var messageWithPhotoLink = message + (hasShareablePhotoLink ? "\nReference photo: " + photoUrl : "");
    var whatsappUrl = "https://wa.me/250799658607?text=" + encodeURIComponent(messageWithPhotoLink);

    function openWhatsAppWithPhotoLink() {
      status.textContent = hasShareablePhotoLink
        ? "Opening WhatsApp with your booking details and a link to the selected photo. Attach the photo in WhatsApp if it is not included automatically."
        : "Opening WhatsApp with your booking details. Attach the selected photo manually in WhatsApp.";
      status.hidden = false;
      var whatsappWindow = window.open(whatsappUrl, "_blank");
      if (whatsappWindow) whatsappWindow.opener = null;
      else window.location.assign(whatsappUrl);
    }

    if (!photoFile || !navigator.share || !navigator.canShare || !navigator.canShare({ files: [photoFile] })) {
      openWhatsAppWithPhotoLink();
      return;
    }

    navigator.share({
      title: "UMUHETO Creative booking",
      text: message,
      files: [photoFile]
    }).then(function () {
      status.textContent = "Share sheet opened. Choose WhatsApp to send your booking details and selected photo.";
    }).catch(function (error) {
      if (error && error.name === "AbortError") {
        status.textContent = "Photo sharing was cancelled; no booking message was sent.";
        return;
      }
      openWhatsAppWithPhotoLink();
    });
  }

  function renderDetail() {
    var root = document.querySelector("[data-collection-detail]");
    if (!root) return;

    var collection = collections[root.getAttribute("data-collection-detail")];
    if (!collection) return;
    var params = new URLSearchParams(window.location.search);
    var requestedProduct = params.get("product");
    var requestedLook = params.get("look");
    var selectedLookIndex = requestedLook === null ? 0 : Number(requestedLook);
    if (!Number.isInteger(selectedLookIndex) || selectedLookIndex < 0 || selectedLookIndex >= collection.photos.length) selectedLookIndex = 0;

    var lookOptions = collection.photos.map(function (photo, index) {
      return '<label class="look-option"><input type="radio" name="look" value="' + collection.looks[index] + '"' + (index === selectedLookIndex ? " checked" : "") + ' data-look-image="' + imageUrl(photo) + '"><img src="' + imageUrl(photo) + '" alt="' + collection.looks[index] + '" loading="lazy" decoding="async"><span>' + collection.looks[index] + "</span>" + (collection.lookDescriptions ? '<small class="look-option__description">' + collection.lookDescriptions[index] + "</small>" : "") + "</label>";
    }).join("");

    var colorOptions = colors.map(function (color, index) {
      return '<label class="color-option"><input type="radio" name="color" value="' + color.name + '"' + (index === 0 ? " checked" : "") + '><span class="color-option__swatch" style="background:' + color.value + '" aria-hidden="true"></span><span>' + color.name + "</span></label>";
    }).join("");

    var thumbs = collection.photos.map(function (photo, index) {
      return '<button type="button" class="collection-detail__thumb' + (index === selectedLookIndex ? " is-active" : "") + '" data-photo="' + imageUrl(photo) + '" aria-label="View photo ' + (index + 1) + '"><img src="' + imageUrl(photo) + '" alt="" loading="lazy" decoding="async"></button>';
    }).join("");

    root.innerHTML = '<div class="wrap">' +
      '<p class="collection-detail__crumb"><a href="../collections.html">Collections</a> / ' + collection.title + "</p>" +
      '<div class="grid grid--2 collection-detail__layout">' +
        '<div class="collection-detail__visual"><img class="collection-detail__main-image" src="' + imageUrl(collection.photos[selectedLookIndex]) + '" alt="' + collection.title + '" fetchpriority="high" decoding="async"><div class="collection-detail__thumbs">' + thumbs + "</div></div>" +
        '<div class="collection-detail__content"><p class="eyebrow">' + collection.eyebrow + '</p><h1>' + collection.title + '</h1><p class="collection-detail__intro">' + collection.description + '</p>' +
          '<div class="collection-detail__price"><strong>Made to order</strong>Final fabric, fitting, and lead time confirmed with the studio.</div>' +
          '<div class="collection-detail__section"><h2>Choose your look</h2><div class="look-options">' + lookOptions + "</div></div>" +
          '<div class="collection-detail__section"><h2>Preferred color</h2><div class="color-options">' + colorOptions + '</div><p class="collection-detail__note">We will confirm available fabrics with you.</p></div>' +
          '<form class="booking-form" id="collection-booking-form"><h2>Request a booking</h2>' +
            '<div class="field"><label for="booking-name">Your name</label><input id="booking-name" name="name" autocomplete="name" required></div>' +
            '<div class="field"><label for="booking-phone">Phone or WhatsApp number</label><input id="booking-phone" name="phone" type="tel" autocomplete="tel" required></div>' +
            '<div class="field"><label for="booking-date">Event date, if known</label><input id="booking-date" name="eventDate" type="date"></div>' +
            '<div class="field"><label>Measurements</label><div class="booking-form__choice"><label><input type="radio" name="measurement" value="I will visit the shop for measurements" required> I will visit the studio</label><label><input type="radio" name="measurement" value="I will provide measurements remotely"> I will provide measurements later</label></div></div>' +
            '<div class="field"><label for="booking-requirements">Product requirements</label><textarea id="booking-requirements" name="requirements" rows="4" placeholder="Fabric, fit, design details, sizing, or anything else needed" required></textarea></div>' +
            '<button class="btn btn--solid booking-form__submit" type="submit">Send booking request <span class="arrow">&rarr;</span></button><p class="collection-detail__status" aria-live="polite" hidden></p>' +
          "</form></div></div></div>";

    var mainImage = root.querySelector(".collection-detail__main-image");
    root.querySelectorAll(".collection-detail__thumb").forEach(function (button) {
      button.addEventListener("click", function () {
        mainImage.src = button.getAttribute("data-photo");
        root.querySelectorAll(".collection-detail__thumb").forEach(function (thumb) { thumb.classList.remove("is-active"); });
        button.classList.add("is-active");
      });
    });

    var form = root.querySelector("#collection-booking-form");
    var submitButton = form.querySelector(".booking-form__submit");
    var status = form.querySelector(".collection-detail__status");
    var selectedPhotoUrl;
    function prepareSelectedPhoto(input) {
      selectedPhotoUrl = new URL(input.getAttribute("data-look-image"), window.location.href).href;
      if (!navigator.share || !navigator.canShare || typeof File === "undefined") return;

      submitButton.disabled = true;
      status.textContent = "Preparing the selected product photo...";
      status.hidden = false;
      preparePhoto(selectedPhotoUrl).then(function (photoFile) {
        if (selectedPhotoUrl !== new URL(input.getAttribute("data-look-image"), window.location.href).href) return;
        submitButton.disabled = false;
        if (photoFile) status.hidden = true;
        else status.textContent = "The photo could not be prepared for sharing. You can still send the booking details and attach the photo manually in WhatsApp.";
      });
    }

    root.querySelectorAll('input[name="look"]').forEach(function (input) {
      input.addEventListener("change", function () {
        mainImage.src = input.getAttribute("data-look-image");
        prepareSelectedPhoto(input);
      });
    });
    prepareSelectedPhoto(root.querySelector('input[name="look"]:checked'));

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var form = event.currentTarget;
      var values = new FormData(form);
      var selectedLookInput = root.querySelector('input[name="look"]:checked');
      var selectedLook = selectedLookInput.value;
      var selectedColor = root.querySelector('input[name="color"]:checked').value;
      selectedPhotoUrl = new URL(selectedLookInput.getAttribute("data-look-image"), window.location.href).href;
      var message = [
        "Hello UMUHETO Creative, I would like to book this design.",
        "PRODUCT",
        "Product: " + (requestedProduct || collection.title),
        "Collection: " + collection.title,
        "Selected look: " + selectedLook,
        "Preferred color: " + selectedColor,
        "CUSTOMER AND BOOKING",
        "Name: " + values.get("name"),
        "Phone or WhatsApp: " + values.get("phone"),
        "Event date: " + (values.get("eventDate") || "Not set yet"),
        "Measurement plan: " + values.get("measurement"),
        "Product requirements: " + values.get("requirements")
      ].join("\n");
      shareBooking(message, selectedPhotoUrl, preparePhoto.files[selectedPhotoUrl], status);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderDetail);
  else renderDetail();
})();
