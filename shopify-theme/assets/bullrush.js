// BullRush theme behavior: tabs, tier selection, accordion, sticky CTA, add-to-cart.
(function () {
  'use strict';

  // ---------- Promo bar countdown (real end date only, never fabricated) ----------
  var promoBar = document.querySelector('[data-bf-promo-bar]');
  if (promoBar && promoBar.dataset.end) {
    var endTime = new Date(promoBar.dataset.end).getTime();
    var countdownEl = promoBar.querySelector('[data-bf-countdown]');
    if (!isNaN(endTime) && countdownEl) {
      var tick = function () {
        var remaining = endTime - Date.now();
        if (remaining <= 0) {
          promoBar.remove();
          return;
        }
        var hours = Math.floor(remaining / 3600000);
        var minutes = Math.floor((remaining % 3600000) / 60000);
        var seconds = Math.floor((remaining % 60000) / 1000);
        var pad = function (n) { return String(n).padStart(2, '0'); };
        countdownEl.querySelector('[data-unit="hours"]').textContent = pad(hours);
        countdownEl.querySelector('[data-unit="minutes"]').textContent = pad(minutes);
        countdownEl.querySelector('[data-unit="seconds"]').textContent = pad(seconds);
      };
      tick();
      setInterval(tick, 1000);
    } else if (isNaN(endTime)) {
      promoBar.remove();
    }
  }

  // ---------- Accordion (FAQ, objections) ----------
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-bf-accordion-trigger]');
    if (!trigger) return;
    var item = trigger.closest('[data-bf-accordion-item]');
    var panel = item.querySelector('[data-bf-accordion-panel]');
    var isOpen = panel.getAttribute('data-open') === 'true';
    panel.setAttribute('data-open', String(!isOpen));
    trigger.setAttribute('aria-expanded', String(!isOpen));
  });

  // ---------- Purchase module tabs (One-Time / Subscribe & Save) ----------
  document.querySelectorAll('[data-bf-purchase]').forEach(function (root) {
    var tabs = root.querySelectorAll('[data-bf-tab]');
    var panels = root.querySelectorAll('[data-bf-tab-panel]');

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-bf-tab');
        tabs.forEach(function (t) { t.setAttribute('aria-selected', String(t === tab)); });
        panels.forEach(function (p) {
          p.setAttribute('data-active', String(p.getAttribute('data-bf-tab-panel') === target));
        });
        updateStickyCta(root);
      });
    });

    // ---------- Tier selection within each panel ----------
    root.querySelectorAll('[data-bf-tier]').forEach(function (tierBtn) {
      tierBtn.addEventListener('click', function () {
        var panel = tierBtn.closest('[data-bf-tab-panel]');
        panel.querySelectorAll('[data-bf-tier]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        tierBtn.setAttribute('aria-pressed', 'true');

        var variantId = tierBtn.getAttribute('data-variant-id');
        var sellingPlan = tierBtn.getAttribute('data-selling-plan-id') || '';
        var form = root.querySelector('[data-bf-purchase-form]');
        if (form) {
          form.querySelector('[name="id"]').value = variantId;
          var spInput = form.querySelector('[name="selling_plan"]');
          if (spInput) {
            if (sellingPlan) { spInput.value = sellingPlan; spInput.disabled = false; }
            else { spInput.value = ''; spInput.disabled = true; }
          }
        }
        updateStickyCta(root);
      });
    });

    // ---------- Add to cart ----------
    var form = root.querySelector('[data-bf-purchase-form]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var button = form.querySelector('[data-bf-add-to-cart]');
        var originalText = button ? button.textContent : '';
        if (button) { button.disabled = true; button.textContent = 'Adding…'; }

        fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        })
          .then(function (res) { if (!res.ok) throw new Error('Add to cart failed'); return res.json(); })
          .then(function () {
            refreshCartCount();
            if (button) { button.textContent = 'Added ✓'; }
            window.location.href = '/cart';
          })
          .catch(function () {
            if (button) { button.textContent = 'Something went wrong — try again'; }
          })
          .finally(function () {
            if (button) { setTimeout(function () { button.disabled = false; button.textContent = originalText; }, 2000); }
          });
      });
    }
  });

  function refreshCartCount() {
    fetch('/cart.js')
      .then(function (r) { return r.json(); })
      .then(function (cart) {
        document.querySelectorAll('[data-bf-cart-count]').forEach(function (el) {
          el.textContent = cart.item_count;
        });
      });
  }

  // ---------- Sticky mobile CTA ----------
  var stickyBar = document.querySelector('[data-bf-sticky-cta]');
  function updateStickyCta(root) {
    if (!stickyBar) return;
    var activePanel = root.querySelector('[data-bf-tab-panel][data-active="true"]');
    if (!activePanel) return;
    var selectedTier = activePanel.querySelector('[data-bf-tier][aria-pressed="true"]') || activePanel.querySelector('[data-bf-tier]');
    if (!selectedTier) return;
    var priceMain = stickyBar.querySelector('[data-bf-sticky-price]');
    var priceSub = stickyBar.querySelector('[data-bf-sticky-price-sub]');
    if (priceMain) priceMain.textContent = selectedTier.getAttribute('data-price-main') || '';
    if (priceSub) priceSub.textContent = selectedTier.getAttribute('data-price-sub') || '';
    stickyBar.querySelector('[data-bf-sticky-cta-form-target]') && stickyBar.setAttribute('data-target-variant', selectedTier.getAttribute('data-variant-id') || '');
  }

  if (stickyBar) {
    var heroEl = document.querySelector('[data-bf-hero]');
    var mainPurchase = document.querySelector('[data-bf-purchase]');
    window.addEventListener('scroll', function () {
      var thresholdEl = heroEl || mainPurchase;
      if (!thresholdEl) return;
      var pastHero = thresholdEl.getBoundingClientRect().bottom < 0;
      stickyBar.classList.toggle('is-visible', pastHero);
    }, { passive: true });

    stickyBar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-bf-sticky-cta-jump]');
      if (!btn) return;
      var target = document.querySelector(btn.getAttribute('data-bf-sticky-cta-jump'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });

    if (mainPurchase) updateStickyCta(mainPurchase);
  }

  // ---------- Mobile nav drawer ----------
  var hamburger = document.querySelector('[data-bf-hamburger]');
  var drawer = document.querySelector('[data-bf-nav-drawer]');
  var backdrop = document.querySelector('[data-bf-nav-drawer-backdrop]');
  function setDrawer(open) {
    if (!drawer) return;
    drawer.classList.toggle('is-open', open);
    if (backdrop) backdrop.classList.toggle('is-open', open);
    if (hamburger) hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      setDrawer(hamburger.getAttribute('aria-expanded') !== 'true');
    });
  }
  if (backdrop) backdrop.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('click', function (e) {
    var closeBtn = e.target.closest('[data-bf-nav-drawer-close]');
    if (closeBtn) setDrawer(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });

  // ---------- Nav drawer collapsible groups ----------
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-bf-drawer-group-trigger]');
    if (!trigger) return;
    var sublist = trigger.nextElementSibling;
    var isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    if (sublist) sublist.setAttribute('data-open', String(!isOpen));
  });

  // ---------- Scroll-reveal (progressive enhancement only) ----------
  if ('IntersectionObserver' in window) {
    var revealEls = document.querySelectorAll('.bf-reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.bf-reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Animated counters (count up once in view) ----------
  document.querySelectorAll('[data-bf-counter]').forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-bf-counter')) || 0;
    var suffix = el.getAttribute('data-bf-counter-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-bf-counter-decimals') || '0', 10);
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      el.textContent = target.toFixed(decimals) + suffix;
      return;
    }
    var done = false;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || done) return;
        done = true;
        var start = performance.now();
        var duration = 1400;
        function tick(now) {
          var progress = Math.min((now - start) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    obs.observe(el);
  });

  // ---------- Ingredient accordion (hover-expand desktop, tap-expand mobile) ----------
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-bf-ing-trigger]');
    if (!trigger) return;
    var card = trigger.closest('[data-bf-ing-card]');
    var panel = card.querySelector('[data-bf-ing-panel]');
    var isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    if (panel) panel.setAttribute('data-open', String(!isOpen));
  });

  // ---------- Tilt-hover cards (desktop pointer only, respects reduced motion) ----------
  if (!prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.bf-tilt-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'perspective(600px) rotateX(' + (py * -6) + 'deg) rotateY(' + (px * 6) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // ---------- Cursor-responsive subtle movement on hero (desktop only) ----------
  if (!prefersReducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('[data-bf-cursor-zone]').forEach(function (zone) {
      var target = zone.querySelector('.bf-cursor-parallax');
      if (!target) return;
      zone.addEventListener('mousemove', function (e) {
        var rect = zone.getBoundingClientRect();
        var mx = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
        var my = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
        target.style.setProperty('--mx', mx.toFixed(1));
        target.style.setProperty('--my', my.toFixed(1));
      });
      zone.addEventListener('mouseleave', function () {
        target.style.setProperty('--mx', 0);
        target.style.setProperty('--my', 0);
      });
    });
  }

  // ---------- Announcement bar message rotation ----------
  document.querySelectorAll('[data-bf-announce-rotator]').forEach(function (rotator) {
    var items = rotator.querySelectorAll('[data-bf-announce-item]');
    if (items.length < 2) return;
    var i = 0;
    setInterval(function () {
      items[i].setAttribute('data-active', 'false');
      i = (i + 1) % items.length;
      items[i].setAttribute('data-active', 'true');
    }, 3200);
  });

  // ---------- Free-shipping progress bar (data-threshold/data-current are in cents, matching Shopify's cart.total_price) ----------
  document.querySelectorAll('[data-bf-shipping-progress]').forEach(function (bar) {
    var threshold = parseFloat(bar.getAttribute('data-threshold')) || 0;
    var current = parseFloat(bar.getAttribute('data-current')) || 0;
    var fill = bar.querySelector('[data-bf-shipping-progress-fill]');
    var note = bar.parentElement.querySelector('[data-bf-shipping-progress-note]');
    var pct = threshold > 0 ? Math.min(100, (current / threshold) * 100) : 100;
    if (fill) fill.style.width = pct + '%';
    if (note) {
      if (current >= threshold) {
        note.textContent = note.getAttribute('data-met-text') || 'You\'ve unlocked free shipping!';
      } else {
        var remaining = ((threshold - current) / 100).toFixed(2);
        var template = note.getAttribute('data-remaining-text') || 'Add {amount} more for free shipping';
        note.textContent = template.replace('{amount}', '$' + remaining);
      }
    }
  });
})();
