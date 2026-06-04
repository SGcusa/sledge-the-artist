/* ── Sledge The Artist — main.js (jQuery + vanilla JS) ── */

$(function () {

  /* ── Navbar: shrink + shadow on scroll ── */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 60) {
      $('#navbar').addClass('scrolled').css('padding-top', '10px').css('padding-bottom', '10px');
    } else {
      $('#navbar').removeClass('scrolled').css('padding-top', '').css('padding-bottom', '');
    }
  });

  /* ── Active nav link highlighting ── */
  const sections = $('section[id], footer[id]');
  $(window).on('scroll', function () {
    const scrollPos = $(this).scrollTop() + 100;
    sections.each(function () {
      const top    = $(this).offset().top;
      const bottom = top + $(this).outerHeight();
      const id     = $(this).attr('id');
      if (scrollPos >= top && scrollPos < bottom) {
        $('.nav-link').removeClass('text-cream').addClass('text-ink-100');
        $(`.nav-link[href="#${id}"]`).removeClass('text-ink-100').addClass('text-cream');
      }
    });
  });

  /* ── Mobile menu ── */
  $('#menu-toggle').on('click', function () {
    $('#mobile-menu').removeClass('hidden').css('opacity', 0).animate({ opacity: 1 }, 200);
    $('body').css('overflow', 'hidden');
  });
  function closeMobileMenu() {
    $('#mobile-menu').animate({ opacity: 0 }, 200, function () {
      $(this).addClass('hidden');
    });
    $('body').css('overflow', '');
  }
  $('#menu-close').on('click', closeMobileMenu);
  $('.mobile-nav-link').on('click', function () {
    closeMobileMenu();
    const target = $(this).attr('href');
    setTimeout(function () {
      $('html, body').animate({ scrollTop: $(target).offset().top - 72 }, 600, 'swing');
    }, 250);
    return false;
  });

  /* ── Smooth scroll for all anchor links ── */
  $('a[href^="#"]').not('.mobile-nav-link').on('click', function (e) {
    const target = $(this).attr('href');
    if (target === '#') return;
    e.preventDefault();
    $('html, body').animate({ scrollTop: $(target).offset().top - 72 }, 700, 'swing');
  });

  /* ── Gallery filter ── */
  $('#filters').on('click', '.filter-btn', function () {
    const filter = $(this).data('filter');

    // Update active button
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    // Filter items
    $('.gallery-item').each(function () {
      const category = $(this).data('category');
      if (filter === 'all' || category === filter) {
        $(this).removeClass('hidden-item');
      } else {
        $(this).addClass('hidden-item');
      }
    });
  });

  /* ── Scroll reveal ── */
  function checkReveal() {
    const windowBottom = $(window).scrollTop() + $(window).height();
    $('.reveal').each(function () {
      if ($(this).offset().top < windowBottom - 60) {
        $(this).addClass('visible');
      }
    });
  }
  // Add reveal class to target elements
  $('section').each(function () {
    $(this).find('.service-card, .step-card, .gallery-item, .cta-card').each(function (i) {
      $(this).addClass('reveal').css('transition-delay', (i * 0.08) + 's');
    });
  });
  $(window).on('scroll', checkReveal);
  checkReveal(); // run on load

  /* ── Contact form ── */
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();

    const name    = $('#f-name').val().trim();
    const message = $('#f-message').val().trim();
    const service = $('#f-service').val();

    // Basic validation
    if (!name || !message || !service) {
      $('#form-error').removeClass('hidden');
      setTimeout(() => $('#form-error').addClass('hidden'), 4000);
      return;
    }

    // Simulate send (replace with real endpoint / EmailJS / Formspree etc.)
    $('#btn-text').addClass('hidden');
    $('#btn-loading').removeClass('hidden');
    $('#submit-btn').prop('disabled', true);

    setTimeout(function () {
      $('#btn-text').removeClass('hidden');
      $('#btn-loading').addClass('hidden');
      $('#submit-btn').prop('disabled', false);
      $('#contact-form')[0].reset();
      $('#form-success').removeClass('hidden');
      setTimeout(() => $('#form-success').addClass('hidden'), 6000);

      // Open WhatsApp as fallback with pre-filled message
      const phone = '27653620916';
      const text  = encodeURIComponent(`Hi Sledge! My name is ${name}. I'm interested in a ${service} commission. ${message}`);
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }, 1200);
  });

  /* ── Image lazy loading fallback ── */
  $('img').on('error', function () {
    $(this).closest('.gallery-item, .hero-bg, .artist-img').css('background', '#1a1a1a');
    $(this).hide();
  });

  /* ── Hero counter animation ── */
  function animateCount($el, target, suffix) {
    $({ count: 0 }).animate({ count: target }, {
      duration: 1500,
      easing: 'swing',
      step: function () {
        $el.text(Math.ceil(this.count) + suffix);
      },
      complete: function () {
        $el.text(target + suffix);
      }
    });
  }

  // Trigger counters when hero stats come into view
  let countersTriggered = false;
  $(window).on('scroll', function () {
    if (countersTriggered) return;
    const statsTop = $('.hero-stats-section').offset()?.top;
    if (!statsTop) return;
    if ($(this).scrollTop() + $(this).height() > statsTop) {
      countersTriggered = true;
    }
  });

});
