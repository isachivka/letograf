#$(window).load ->
#  if $('.chart_load_titeout').length > 0
#    $('.chart_load_titeout').addClass('hide')

$(document).ready(() ->

  $('html').removeClass('no-js')
  b_top_box('.b_top_box')
  top_fixes()
  multipage()
  datepick()
  timepick()
  datetimepick()
  # checkboxes()
  $('input.ios[type="checkbox"]').iphoneStyle({ resizeContainer: false, resizeHandle: false })
  pop()
  actions()
  double_login('.double_login')
  double_login('.double_login1')
  to_top('.to_top')
)

hash_manual = false

to_top = (box) ->
  $(box).click(() ->
    $(window).scrollTop(0)
    false
  )

double_login = (lnk) ->
  $(lnk).click(() ->
    $(this).toggleClass('double_login')
    $(this).toggleClass('double_login1')
    $(this).parent().find('.double_login_input').toggleClass('hide')
    false
  )

actions = () ->
  $('.open_act').click(() ->
    pop_id = $(this).attr('href')
    $(pop_id).removeClass('hide')
    console.log(pop_id)
    false
  )
  $('.actions').each(() ->
    act = this
    $(act).find('.close_pop').click(() ->
      $(act).addClass('hide')
      false
    )
  )

pop = () ->
  $('.open_pop').click(() ->
    pop_id = $(this).attr('href')
    $(pop_id).removeClass('hide')
    if $(pop_id).hasClass('hide_wind')
      $(pop_id).removeClass('hide_wind')
      $(pop_id).parents('.wind').removeClass('wind')
    $('.top_fix').click()
    false
  )
  $('.pop').each(() ->
    pop_id = $(this).attr('id')
    $('#' + pop_id).find('.close_pop').click(() ->
      $('#' + pop_id).addClass('hide')
      $('.top_fix').click()
      false
    )
  )

datetimepick = () ->

  picks = $('.datetimepick')
  $(picks).each(() ->

    pick = this
    date = moment()
    hid = $(pick).find('input[type="hidden"]')
    p = $(pick).find('p.out')

    set = () ->
      $(pick).find('.day input').val(date.format('DD'))
      $(pick).find('.month input').val(date.format('MM'))
      $(pick).find('.year input').val(date.format('YYYY'))
      $(pick).find('.hour input').val(date.format('HH'))
      $(pick).find('.min input').val(date.format('mm'))
      $(p).html(date.format('DD.MM.YYYY HH:mm'))
      $(hid).val(date.format('DD.MM.YYYY HH:mm'))

    init = () ->
      date = moment($(hid).val(), "DD.MM.YYYY HH:mm");
      set()

    events_init = () ->
      $(pick).find('.day .add').click(() -> 
        date.add('d', 1)
        set() 
        false
      )
      $(pick).find('.day .del').click(() -> 
        date.subtract('d', 1)
        set() 
        false
      )
      $(pick).find('.month .add').click(() -> 
        date.add('M', 1)
        set() 
        false
      )
      $(pick).find('.month .del').click(() -> 
        date.subtract('M', 1)
        set() 
        false
      )
      $(pick).find('.year .add').click(() -> 
        date.add('y', 1)
        set() 
        false
      )
      $(pick).find('.year .del').click(() -> 
        date.subtract('y', 1)
        set() 
        false
      )
      $(pick).find('.hour .add').click(() -> 
        date.add('h', 1)
        set() 
        false
      )
      $(pick).find('.hour .del').click(() -> 
        date.subtract('h', 1)
        set() 
        false
      )
      $(pick).find('.min .add').click(() -> 
        date.add('m', 1)
        set() 
        false
      )
      $(pick).find('.min .del').click(() -> 
        date.subtract('m', 1)
        set() 
        false
      )

    init()
    events_init()

  );


timepick = () ->
  
  picks = $('.timepick')
  $(picks).each(() ->

    pick = this
    date = moment()
    hid = $(pick).find('input[type="hidden"]')
    p = $(pick).find('p.out')

    set = () ->
      $(pick).find('.hour input').val(date.format('HH'))
      $(pick).find('.min input').val(date.format('mm'))
      $(p).html(date.format('HH:mm'))
      $(hid).val(date.format('HH:mm'))

    init = () ->
      date = moment($(hid).val(), "HH:mm");
      set()

    events_init = () ->
      $(pick).find('.hour .add').click(() -> 
        date.add('h', 1)
        set() 
        false
      )
      $(pick).find('.hour .del').click(() -> 
        date.subtract('h', 1)
        set() 
        false
      )
      $(pick).find('.min .add').click(() -> 
        date.add('m', 1)
        set() 
        false
      )
      $(pick).find('.min .del').click(() -> 
        date.subtract('m', 1)
        set() 
        false
      )

    init()
    events_init()

  )

datepick = () ->

  picks = $('.datepick')
  $(picks).each(() ->

    pick = this
    date = moment()
    hid = $(pick).find('input[type="hidden"]')
    p = $(pick).find('p.out')

    set = () ->
      $(pick).find('.day input').val(date.format('DD'))
      $(pick).find('.month input').val(date.format('MM'))
      $(pick).find('.year input').val(date.format('YYYY'))
      $(p).html(date.format('DD.MM.YYYY'))
      $(hid).val(date.format('DD.MM.YYYY'))

    init = () ->
      date = moment($(hid).val(), "DD.MM.YYYY");
      set()

    events_init = () ->
      $(pick).find('.day .add').click(() -> 
        date.add('d', 1)
        set() 
        false
      )
      $(pick).find('.day .del').click(() -> 
        date.subtract('d', 1)
        set() 
        false
      )
      $(pick).find('.month .add').click(() -> 
        date.add('M', 1)
        set() 
        false
      )
      $(pick).find('.month .del').click(() -> 
        date.subtract('M', 1)
        set() 
        false
      )
      $(pick).find('.year .add').click(() -> 
        date.add('y', 1)
        set() 
        false
      )
      $(pick).find('.year .del').click(() -> 
        date.subtract('y', 1)
        set() 
        false
      )

    init()
    events_init()

  );

checkboxes = () ->
  checks = $('input.ios[type="checkbox"]')
  $(checks).each(() ->
    time = 300
    wrap = $(this).wrap('<div class="control_flip"></div>').parent()
    val = $(this).is(':checked')
    clas = 'off' if !val
    $('<input type="hidden" name="'+$(this).attr('name')+'" value="'+val+'" />').appendTo(wrap);
    hide = $(wrap).find('input[type="hidden"]')
    $(wrap).append('<div class="bg"></div>').append('<div class="handle"></div>').addClass(clas)
    $(this).remove()
    $(wrap).click(() ->
      val = !val
      if val
        $(this).find('.handle').animate({left: 49}, time)
        $(this).find('.bg').animate({left: -1}, time, () ->
          $(wrap).toggleClass('off')
          $(hide).attr('value', val)
        )
      else
        $(this).find('.handle').animate({left: 0}, time)
        $(this).find('.bg').animate({left: -78}, time, () ->
          $(wrap).toggleClass('off')
          $(hide).attr('value', val)
        )
    )
  )

top_fixes = () ->
  if $('.fix_fixed_box').length > 0 && $('.fix_h').length > 0
    $('.fix_h').css('height', $('.top_fix').height())
  
  $('.top_fix').click(() ->
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 25);
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 50);
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 75);
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 100);
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 125);
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 150);
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 175);
    setTimeout(() -> 
      $('.fix_h').css('height', $('.top_fix').height())
    , 201);
  )

b_top_box = (blocks) ->
  $(blocks).each(() ->
    $(this).find('.label a').click((e) ->
      e.stopPropagation()
    )
    $(this).find('.label').click(() ->
      if !$(this).parent().find('.content').hasClass('hide')
        $(this).parent().find('.content').slideUp(200).addClass('hide')
      else
        $(blocks).find('.content').slideUp(200).addClass('hide')
        $(this).parent().find('.content').slideDown(200).removeClass('hide')
    )
  )
  

multipage = () ->
  link = () ->
    $('[data-rel="multipage"]').each(() ->
      block = this
      $(this).find('a').click(() ->
        hash_manual = true
        location.hash = $(block).attr('href')
        to_a($($(block).attr('href')), $(block).attr('data-aminate'))
        false
      )
      $(this).click(() ->
        hash_manual = true
        location.hash = $(this).attr('href')
        to_a($($(this).attr('href')), $(this).attr('data-aminate'))
      )
    )
  to_a = (block, animation) ->
    $(block).addClass('to_animate').show();
    switch animation
      when 'opacity'
        $('.active_page[data-rel="page"]').animate({'opacity': 0}, 300, () ->
          $(block).removeClass('to_animate').addClass('active_page');
          $(this).hide().css('opacity', 1).removeClass('active_page');
        )
      when 'margin-left'
        $('.active_page[data-rel="page"]').css('width', $('.active_page[data-rel="page"]').width()).animate({'margin-left': '-100%'}, 300, () ->
          $(block).removeClass('to_animate').addClass('active_page');
          $(this).hide().css('width', '100%').css('margin-left', 0).removeClass('active_page');
        )
      else 
        $('.active_page[data-rel="page"]').animate({'opacity': 0}, 300, () ->
          $(block).removeClass('to_animate').addClass('active_page');
          $(this).hide().css('opacity', 1).removeClass('active_page');
        )
  init = () ->
    pages = $('[data-rel="page"]')
    hash = location.hash
    active = false
    if pages.length > 0
      if hash == ''
        active = $(pages).first()
      else
        active = $(hash)
    else
      false
    
    if active
      $(pages).hide().removeClass('active_page')
      setTimeout(() -> 
        $(active).show().addClass('active_page')
      , 30)
  
  init()
  link()
  $(window).on('hashchange', () -> 
    init() if !hash_manual
    hash_manual = false
  );