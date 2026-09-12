/* ============================================================
   Umuheto Creative — shared behaviour
   Page transitions, scroll reveals, hero entrance, parallax,
   gallery filter + lightbox, nav, forms.
   ============================================================ */

(function () {
  "use strict";

  var doc = document;

  function ready(fn) {
    if (doc.readyState !== "loading") fn();
    else doc.addEventListener("DOMContentLoaded", fn);
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- html class helper ---------- */
  doc.documentElement.classList.remove("no-js");
  doc.documentElement.classList.add("js");

  ready(function () {

    /* ============================================================
       VEIL — cinematic page-load entrance + crossfade between pages
       ============================================================ */
    var veil = doc.querySelector(".veil");
    var wasExit = sessionStorage.getItem("umuhetoVeil") === "exit";
    sessionStorage.removeItem("umuhetoVeil");

    function drawVeilLine() {
      var line = veil && veil.querySelector(".veil__line");
      if (line) {
        void line.offsetWidth;
        line.classList.add("is-drawn");
      }
    }

    function hideVeil(delay) {
      if (!veil) return;
      setTimeout(function () {
        veil.classList.remove("is-visible");
      }, delay || 0);
    }

    function veilIntro() {
      if (!veil) return;
      if (reduceMotion) return;
      veil.classList.add("is-visible");
      if (wasExit) {
        hideVeil(160); // quick crossfade continuation
      } else {
        drawVeilLine();
        hideVeil(1150);
      }
    }

    /* cover the page instantly during crossfades so nothing flashes */
    if (wasExit && veil && !reduceMotion) {
      veil.classList.add("is-visible");
      hideVeil(120);
    } else {
      setTimeout(veilIntro, 40);
    }

    /* intercept internal page links for a soft crossfade */
    doc.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (!a) return;
      var href = (a.getAttribute("href") || "").trim();
      var isInternal =
        /\.html($|#)/.test(href) &&
        !href.startsWith("http") &&
        !href.startsWith("//") &&
        !href.startsWith("mailto:") &&
        !href.startsWith("tel:");

      if (isInternal && !e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        if (reduceMotion) { window.location.href = a.href; return; }
        sessionStorage.setItem("umuhetoVeil", "exit");
        if (veil) veil.classList.add("is-visible");
        setTimeout(function () {
          window.location.href = a.href;
        }, 560);
      }
    });

    setTimeout(veilIntro, 40);

    /* ============================================================
       HEADER — scroll state, mobile menu
       ============================================================ */
    var header = doc.querySelector(".site-header");
    var toggle = doc.querySelector(".nav-toggle");
    var menu = doc.querySelector(".mobile-menu");
    var body = doc.body;

    function onScroll() {
      var y = window.pageYOffset || 0;
      if (header) {
        header.classList.toggle("is-scrolled", y > 10);
        header.classList.toggle("is-min", y > 60);
      }
      if (progress) {
        var h = doc.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
      }
      if (heroMedia && !reduceMotion) {
        heroMedia.style.transform = "scale(1.12) translate3d(0," + y * 0.22 + "px,0)";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        toggle.classList.toggle("is-open", open);
        body.classList.toggle("no-scroll", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) {
          menu.querySelectorAll(".mobile-menu__link").forEach(function (l, i) {
            l.style.transitionDelay = (120 + i * 70) + "ms";
          });
        } else {
          menu.querySelectorAll(".mobile-menu__link").forEach(function (l) {
            l.style.transitionDelay = "0ms";
          });
        }
      });
    }

    /* ============================================================
       REVEAL ON SCROLL — staggered fade + slide
       ============================================================ */
    var revealEls = doc.querySelectorAll("[data-reveal]");

    function staggerGroup(parent) {
      if (!parent) return;
      var kids = parent.querySelectorAll(":scope > [data-reveal]");
      kids.forEach(function (el, i) {
        el.style.transitionDelay = (i * 90) + "ms";
      });
    }

    var groups = doc.querySelectorAll("[data-reveal-group]");
    groups.forEach(staggerGroup);

    if ("IntersectionObserver" in window && !reduceMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            entry.target.style.transitionDelay = "";
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

      revealEls.forEach(function (el) { io.observe(el); });

      /* process step rows use their own reveal */
      var stepObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            stepObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      doc.querySelectorAll(".step").forEach(function (s) { stepObserver.observe(s); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-in"); });
      doc.querySelectorAll(".step").forEach(function (s) { s.classList.add("is-in"); });
    }

    /* ============================================================
       HERO PARALLAX
       ============================================================ */
    var heroMedia = doc.querySelector(".hero__media");

    /* ============================================================
       SCROLL PROGRESS — a thin gold thread at the very top
       ============================================================ */
    var progress = doc.querySelector(".scroll-progress");
    if (progress) progress.style.transformOrigin = "0 50%";

    /* ============================================================
       COLLECTIONS / GALLERY FILTER
       ============================================================ */
    var filterBars = doc.querySelectorAll(".filter-bar");
    filterBars.forEach(function (bar) {
      var buttons = bar.querySelectorAll(".filter-btn");
      var grid = doc.getElementById(bar.getAttribute("data-target"));
      if (!grid) return;

      function filterTo(value) {
        var visible = [];
        grid.querySelectorAll(".card, .gallery-item").forEach(function (item) {
          if (value === "all") {
            item.classList.remove("is-hidden");
            item.classList.add("is-in");
            visible.push(item);
          } else {
            var cats = (item.getAttribute("data-cat") || "").split(" ");
            if (cats.indexOf(value) !== -1) {
              item.classList.remove("is-hidden");
              item.classList.add("is-in");
              visible.push(item);
            } else {
              item.classList.add("is-hidden");
              item.classList.remove("is-in");
            }
          }
        });
        grid.classList.add("is-filtering");
        visible.forEach(function (item, i) {
          item.style.setProperty("--fd", (i * 60) + "ms");
        });
        setTimeout(function () {
          grid.classList.remove("is-filtering");
          visible.forEach(function (item) {
            item.style.setProperty("--fd", "");
          });
        }, 700);
      }

      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          buttons.forEach(function (b) { b.classList.remove("is-active"); });
          btn.classList.add("is-active");
          filterTo(btn.getAttribute("data-filter"));
        });
      });
    });

    /* ============================================================
       LIGHTBOX
       ============================================================ */
    var lightbox = doc.querySelector(".lightbox");
    var items = Array.prototype.slice.call(doc.querySelectorAll(".gallery-item"));
    if (lightbox && items.length) {
      var stage = lightbox.querySelector(".lb-stage");
      var imgBox = lightbox.querySelector(".lb-img");
      var capTitle = lightbox.querySelector(".lb-cap strong");
      var capKind = lightbox.querySelector(".lb-cap span");
      var count = lightbox.querySelector(".lb-count");
      var idx = 0;

      function faceClass(item) {
        var face = item.querySelector(".face");
        return face ? face.className : "tone-paper";
      }
      function faceTitle(item) {
        var s = item.getAttribute("data-title") || "";
        return s;
      }
      function faceKind(item) {
        var s = item.getAttribute("data-kind") || "";
        return s;
      }

      function show(n) {
        idx = (n + items.length) % items.length;
        imgBox.className = "lb-img " + faceClass(items[idx]);
        capTitle.textContent = faceTitle(items[idx]);
        capKind.textContent = faceKind(items[idx]);
        count.textContent = (idx + 1) + " / " + items.length;
      }

      function open(n, item) {
        items = Array.prototype.slice.call(doc.querySelectorAll(".gallery-item"))
          .filter(function (el) { return !el.classList.contains("is-hidden"); });
        idx = Math.max(items.indexOf(item), 0);
        show(idx);
        lightbox.classList.add("is-open");
        body.classList.add("no-scroll");
        stage.classList.add("is-switching");
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            stage.classList.remove("is-switching");
          });
        });
      }

      function close() {
        lightbox.classList.remove("is-open");
        body.classList.remove("no-scroll");
      }

      function jump(n) {
        stage.classList.add("is-switching");
        setTimeout(function () {
          show(n);
          stage.classList.remove("is-switching");
        }, 240);
      }

      items.forEach(function (item) {
        item.addEventListener("click", function () { open(0, item); });
      });

      lightbox.querySelector(".lb-close").addEventListener("click", close);
      lightbox.querySelector(".lb-btn--prev").addEventListener("click", function () { jump(idx - 1); });
      lightbox.querySelector(".lb-btn--next").addEventListener("click", function () { jump(idx + 1); });

      doc.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("is-open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") jump(idx - 1);
        if (e.key === "ArrowRight") jump(idx + 1);
      });

      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) close();
      });
    }

    /* ============================================================
       CONTACT FORM (MVP messaging)
       ============================================================ */
    var form = doc.querySelector("#contact-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var status = doc.querySelector("#form-status");
        var name = (form.querySelector("#name") && form.querySelector("#name").value.trim()) || "";
        if (status) {
          status.textContent =
            "Thank you" + (name ? ", " + name : "") +
            ". The studio has received your interest — for now, please reach us directly on WhatsApp (+250 799 658 607) or phone (+250 786 134 003) to confirm your order.";
          status.hidden = false;
          status.classList.remove("is-in");
          void status.offsetWidth;
          status.classList.add("is-in");
        }
        form.reset();
      });
    }

    /* ============================================================
       FOOTER YEAR
       ============================================================ */
    doc.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    /* ============================================================
       BACK TO TOP
       ============================================================ */
    doc.querySelectorAll(".back-top").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  });
})();