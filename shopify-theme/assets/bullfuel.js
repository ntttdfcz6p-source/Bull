// BullFuel theme behavior: tabs, tier selection, accordion, sticky CTA, add-to-cart.
(function () {
  'use strict';

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
})();
