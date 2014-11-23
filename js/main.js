// Generated by CoffeeScript 1.6.1
(function() {
  var actions, b_top_box, checkboxes, datepick, datetimepick, double_login, hash_manual, multipage, pop, timepick, to_top, top_fixes;

  $(document).ready(function() {
    $('html').removeClass('no-js');
    b_top_box('.b_top_box');
    top_fixes();
    multipage();
    datepick();
    timepick();
    datetimepick();
    $('input.ios[type="checkbox"]').iphoneStyle({
      resizeContainer: false,
      resizeHandle: false
    });
    pop();
    actions();
    double_login('.double_login');
    double_login('.double_login1');
    return to_top('.to_top');
  });

  hash_manual = false;

  to_top = function(box) {
    return $(box).click(function() {
      $(window).scrollTop(0);
      return false;
    });
  };

  double_login = function(lnk) {
    return $(lnk).click(function() {
      $(this).toggleClass('double_login');
      $(this).toggleClass('double_login1');
      $(this).parent().find('.double_login_input').toggleClass('hide');
      return false;
    });
  };

  actions = function() {
    $('.open_act').click(function() {
      var pop_id;
      pop_id = $(this).attr('href');
      $(pop_id).removeClass('hide');
      console.log(pop_id);
      return false;
    });
    return $('.actions').each(function() {
      var act;
      act = this;
      return $(act).find('.close_pop').click(function() {
        $(act).addClass('hide');
        return false;
      });
    });
  };

  pop = function() {
    $('.open_pop').click(function() {
      var pop_id;
      pop_id = $(this).attr('href');
      $(pop_id).removeClass('hide');
      if ($(pop_id).hasClass('hide_wind')) {
        $(pop_id).removeClass('hide_wind');
        $(pop_id).parents('.wind').removeClass('wind');
      }
      $('.top_fix').click();
      return false;
    });
    return $('.pop').each(function() {
      var pop_id;
      pop_id = $(this).attr('id');
      return $('#' + pop_id).find('.close_pop').click(function() {
        $('#' + pop_id).addClass('hide');
        $('.top_fix').click();
        return false;
      });
    });
  };

  datetimepick = function() {
    var picks;
    picks = $('.datetimepick');
    return $(picks).each(function() {
      var date, events_init, hid, init, p, pick, set;
      pick = this;
      date = moment();
      hid = $(pick).find('input[type="hidden"]');
      p = $(pick).find('p.out');
      set = function() {
        $(pick).find('.day input').val(date.format('DD'));
        $(pick).find('.month input').val(date.format('MM'));
        $(pick).find('.year input').val(date.format('YYYY'));
        $(pick).find('.hour input').val(date.format('HH'));
        $(pick).find('.min input').val(date.format('mm'));
        $(p).html(date.format('DD.MM.YYYY HH:mm'));
        return $(hid).val(date.format('DD.MM.YYYY HH:mm'));
      };
      init = function() {
        date = moment($(hid).val(), "DD.MM.YYYY HH:mm");
        return set();
      };
      events_init = function() {
        $(pick).find('.day .add').click(function() {
          date.add('d', 1);
          set();
          return false;
        });
        $(pick).find('.day .del').click(function() {
          date.subtract('d', 1);
          set();
          return false;
        });
        $(pick).find('.month .add').click(function() {
          date.add('M', 1);
          set();
          return false;
        });
        $(pick).find('.month .del').click(function() {
          date.subtract('M', 1);
          set();
          return false;
        });
        $(pick).find('.year .add').click(function() {
          date.add('y', 1);
          set();
          return false;
        });
        $(pick).find('.year .del').click(function() {
          date.subtract('y', 1);
          set();
          return false;
        });
        $(pick).find('.hour .add').click(function() {
          date.add('h', 1);
          set();
          return false;
        });
        $(pick).find('.hour .del').click(function() {
          date.subtract('h', 1);
          set();
          return false;
        });
        $(pick).find('.min .add').click(function() {
          date.add('m', 1);
          set();
          return false;
        });
        return $(pick).find('.min .del').click(function() {
          date.subtract('m', 1);
          set();
          return false;
        });
      };
      init();
      return events_init();
    });
  };

  timepick = function() {
    var picks;
    picks = $('.timepick');
    return $(picks).each(function() {
      var date, events_init, hid, init, p, pick, set;
      pick = this;
      date = moment();
      hid = $(pick).find('input[type="hidden"]');
      p = $(pick).find('p.out');
      set = function() {
        $(pick).find('.hour input').val(date.format('HH'));
        $(pick).find('.min input').val(date.format('mm'));
        $(p).html(date.format('HH:mm'));
        return $(hid).val(date.format('HH:mm'));
      };
      init = function() {
        date = moment($(hid).val(), "HH:mm");
        return set();
      };
      events_init = function() {
        $(pick).find('.hour .add').click(function() {
          date.add('h', 1);
          set();
          return false;
        });
        $(pick).find('.hour .del').click(function() {
          date.subtract('h', 1);
          set();
          return false;
        });
        $(pick).find('.min .add').click(function() {
          date.add('m', 1);
          set();
          return false;
        });
        return $(pick).find('.min .del').click(function() {
          date.subtract('m', 1);
          set();
          return false;
        });
      };
      init();
      return events_init();
    });
  };

  datepick = function() {
    var picks;
    picks = $('.datepick');
    return $(picks).each(function() {
      var date, events_init, hid, init, p, pick, set;
      pick = this;
      date = moment();
      hid = $(pick).find('input[type="hidden"]');
      p = $(pick).find('p.out');
      set = function() {
        $(pick).find('.day input').val(date.format('DD'));
        $(pick).find('.month input').val(date.format('MM'));
        $(pick).find('.year input').val(date.format('YYYY'));
        $(p).html(date.format('DD.MM.YYYY'));
        return $(hid).val(date.format('DD.MM.YYYY'));
      };
      init = function() {
        date = moment($(hid).val(), "DD.MM.YYYY");
        return set();
      };
      events_init = function() {
        $(pick).find('.day .add').click(function() {
          date.add('d', 1);
          set();
          return false;
        });
        $(pick).find('.day .del').click(function() {
          date.subtract('d', 1);
          set();
          return false;
        });
        $(pick).find('.month .add').click(function() {
          date.add('M', 1);
          set();
          return false;
        });
        $(pick).find('.month .del').click(function() {
          date.subtract('M', 1);
          set();
          return false;
        });
        $(pick).find('.year .add').click(function() {
          date.add('y', 1);
          set();
          return false;
        });
        return $(pick).find('.year .del').click(function() {
          date.subtract('y', 1);
          set();
          return false;
        });
      };
      init();
      return events_init();
    });
  };

  checkboxes = function() {
    var checks;
    checks = $('input.ios[type="checkbox"]');
    return $(checks).each(function() {
      var clas, hide, time, val, wrap;
      time = 300;
      wrap = $(this).wrap('<div class="control_flip"></div>').parent();
      val = $(this).is(':checked');
      if (!val) {
        clas = 'off';
      }
      $('<input type="hidden" name="' + $(this).attr('name') + '" value="' + val + '" />').appendTo(wrap);
      hide = $(wrap).find('input[type="hidden"]');
      $(wrap).append('<div class="bg"></div>').append('<div class="handle"></div>').addClass(clas);
      $(this).remove();
      return $(wrap).click(function() {
        val = !val;
        if (val) {
          $(this).find('.handle').animate({
            left: 49
          }, time);
          return $(this).find('.bg').animate({
            left: -1
          }, time, function() {
            $(wrap).toggleClass('off');
            return $(hide).attr('value', val);
          });
        } else {
          $(this).find('.handle').animate({
            left: 0
          }, time);
          return $(this).find('.bg').animate({
            left: -78
          }, time, function() {
            $(wrap).toggleClass('off');
            return $(hide).attr('value', val);
          });
        }
      });
    });
  };

  top_fixes = function() {
    if ($('.fix_fixed_box').length > 0 && $('.fix_h').length > 0) {
      $('.fix_h').css('height', $('.top_fix').height());
    }
    return $('.top_fix').click(function() {
      setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 25);
      setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 50);
      setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 75);
      setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 100);
      setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 125);
      setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 150);
      setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 175);
      return setTimeout(function() {
        return $('.fix_h').css('height', $('.top_fix').height());
      }, 201);
    });
  };

  b_top_box = function(blocks) {
    return $(blocks).each(function() {
      $(this).find('.label a').click(function(e) {
        return e.stopPropagation();
      });
      return $(this).find('.label').click(function() {
        if (!$(this).parent().find('.content').hasClass('hide')) {
          return $(this).parent().find('.content').slideUp(200).addClass('hide');
        } else {
          $(blocks).find('.content').slideUp(200).addClass('hide');
          return $(this).parent().find('.content').slideDown(200).removeClass('hide');
        }
      });
    });
  };

  multipage = function() {
    var init, link, to_a;
    link = function() {
      return $('[data-rel="multipage"]').each(function() {
        var block;
        block = this;
        $(this).find('a').click(function() {
          hash_manual = true;
          location.hash = $(block).attr('href');
          to_a($($(block).attr('href')), $(block).attr('data-aminate'));
          return false;
        });
        return $(this).click(function() {
          hash_manual = true;
          location.hash = $(this).attr('href');
          return to_a($($(this).attr('href')), $(this).attr('data-aminate'));
        });
      });
    };
    to_a = function(block, animation) {
      $(block).addClass('to_animate').show();
      switch (animation) {
        case 'opacity':
          return $('.active_page[data-rel="page"]').animate({
            'opacity': 0
          }, 300, function() {
            $(block).removeClass('to_animate').addClass('active_page');
            return $(this).hide().css('opacity', 1).removeClass('active_page');
          });
        case 'margin-left':
          return $('.active_page[data-rel="page"]').css('width', $('.active_page[data-rel="page"]').width()).animate({
            'margin-left': '-100%'
          }, 300, function() {
            $(block).removeClass('to_animate').addClass('active_page');
            return $(this).hide().css('width', '100%').css('margin-left', 0).removeClass('active_page');
          });
        default:
          return $('.active_page[data-rel="page"]').animate({
            'opacity': 0
          }, 300, function() {
            $(block).removeClass('to_animate').addClass('active_page');
            return $(this).hide().css('opacity', 1).removeClass('active_page');
          });
      }
    };
    init = function() {
      var active, hash, pages;
      pages = $('[data-rel="page"]');
      hash = location.hash;
      active = false;
      if (pages.length > 0) {
        if (hash === '') {
          active = $(pages).first();
        } else {
          active = $(hash);
        }
      } else {
        false;
      }
      if (active) {
        $(pages).hide().removeClass('active_page');
        return setTimeout(function() {
          return $(active).show().addClass('active_page');
        }, 30);
      }
    };
    init();
    link();
    return $(window).on('hashchange', function() {
      if (!hash_manual) {
        init();
      }
      return hash_manual = false;
    });
  };

}).call(this);
