/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/js/perfil/perfil.js ***!
  \***************************************/
$(document).ready(function () {
  var character = '';
  var selectedImage = '';
  var name = '';
  var age = '';
  var url = new URL(window.location.href);
  // Get the 'GET' parameters
  var params = new URLSearchParams(url.search);
  // Retrieve specific parameter values
  character = params.get('character');
  name = params.get('name');
  age = params.get('age');
  console.log('character,name,age', character, name, age);
  if (!!character && !!name && !!age) {
    $("#page_0").addClass('d-none');
    $('#page_7').removeClass('d-none');
    $('#prev_page_1').addClass('d-none');
  }

  /******** page 0  */
  $('#to_page_1').click(function () {
    $('#page_1').removeClass('d-none');
    $('#page_0').addClass('d-none');
  });
  setTimeout(function () {
    $('#page_0').click(function () {
      $('#page_1').removeClass('d-none');
      $('#page_0').addClass('d-none');
    });
  }, 2000);
  setTimeout(function () {
    $('#to_page_1').removeClass('hide');
  }, 2000);
  /*********   page 1  ************/
  $('#to_page_7').click(function () {
    var name1 = $('#name').val();
    var age1 = $('#age').val();
    var character1 = $('#page_1 input[type="radio"]:checked').val();
    console.log('character', character1, name1, age1);
    if (!character1) {
      return $('#page_1 .error').text('Por favor seleccioná un personaje');
    }
    if (!name1) {
      $('#name').parent().addClass('has-error');
      return $('#page_1 .error').text('Por favor completá tus datos');
    }
    $('#name').parent().removeClass('has-error');
    if (!age1) {
      $('#age').parent().addClass('has-error');
      return $('#page_1 .error').text('Por favor completá tus datos');
    }
    if (isNaN(parseInt(age1)) || age1 <= 0 || age1 > 99) {
      $('#age').parent().addClass('has-error');
      return $('#page_1 .error').text('Por favor completá tus datos');
    }
    $('#page_1 .error').html('&nbsp;');
    $('#age').parent().removeClass('has-error');
    name = name1;
    age = age1;
    character = character1;
    selectedImage = $('#page_1 input[type="radio"]:checked').parent().siblings().filter('label').find('img.activated').attr('src');
    $('#page_1').addClass('d-none');
    $('#page_7').removeClass('d-none');
    console.log('selected Image', selectedImage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  $('#page_1 input[type="radio"]').change(function () {
    $('#page_1 label img.activated').removeClass('d-none');
    $('#page_1 label img.deactivated').removeClass('d-none');
    $('#page_1 label img.activated').addClass('d-none');
    var elem = $(this);
    elem.parent().siblings().filter('label').find('img.activated').removeClass('d-none');
    elem.parent().siblings().filter('label').find('img.deactivated').addClass('d-none');
    $('#page_1 img').css({
      'animation': 'unset'
    });
  });
  var character_image_group_1 = ["https://z-eval.s3.amazonaws.com/pers/Hombre+Idle.gif", "https://z-eval.s3.amazonaws.com/pers/Mujer+Idle.gif", "https://z-eval.s3.amazonaws.com/pers/Nobi+Idle.gif"];
  var character_image_group_2 = ["https://z-eval.s3.amazonaws.com/pers/Hombre+Pensando.gif", "https://z-eval.s3.amazonaws.com/pers/Mujer+Pensando.gif", "https://z-eval.s3.amazonaws.com/pers/Nobi+Pensando.gif"];
  //select final-img        
  var character_image_group_3 = ['https://z-eval.s3.amazonaws.com/pers/Perfil+H.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+M.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+Nobi.png'];
  var cardImgsArr = [['https://z-eval.s3.amazonaws.com/cards/card_front_1_seg_vida.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_1_seg_vida.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_2_seg_vida_enf_grav.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_2_seg_vida_enf_grav.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_3_seg_vida_ah.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_4_seg_vida_inv.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_4_seg_vida_inv.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_5_seg_vida_enf_grav_family.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_5_seg_vida_enf_grav_family.png']];
  var selectedCardImgsArr = [];
  /****************   page 7  */
  $('#prev_page_1').click(function () {
    $('#page_1').removeClass('d-none');
    $('#page_7').addClass('d-none');
  });
  var horizonte_temporal = 0;
  var horizonte_temporal_0 = 0;
  $('#page_7 input[type="radio"]').change(function () {
    $('#page_7 .error').html('&nbsp;');
  });
  $('#to_page_9').click(function () {
    var elem = $('#page_7 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_7 .error').html('&nbsp;');
    } else {
      return $('#page_7 .error').text('Seleccionar una opción');
    }
    horizonte_temporal_0 = parseInt(elem.val());
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_1[0];else if (character == 'mujer') selectedImage1 = character_image_group_1[1];else selectedImage1 = character_image_group_1[2];
    $('#page_9 .selected-image').attr('src', selectedImage1);
    $('#page_9').removeClass('d-none');
    $('#page_7').addClass('d-none');
    console.log('horizonte_temporal_0', horizonte_temporal_0);
  });
  /******** page 9  */
  $('#prev_page_7').click(function () {
    $('#page_7').removeClass('d-none');
    $('#page_9').addClass('d-none');
  });
  var tolerancia_al_riesgo = 0;
  var tolerancia_al_riesgo_0 = 0;
  $('#page_9 input[type="radio"]').change(function () {
    $('#page_9 .error').html('&nbsp;');
  });
  $('#page_9 input[type="radio"]').on('change', function () {
    elem = $('#page_9 input[type="radio"]:checked');
    var val = elem.val();
    $('#page_9 .item-img').removeClass('selected-item');
    if (val == 0) $('#page_9 .item-img:nth-of-type(1)').addClass('selected-item');else if (val == 2) $('#page_9 .item-img:nth-of-type(2)').addClass('selected-item');else if (val == 4) $('#page_9 .item-img:nth-of-type(3)').addClass('selected-item');else $('#page_9 .item-img:nth-of-type(4)').addClass('selected-item');
  });
  $('#to_page_10').click(function () {
    var elem = $('#page_9 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_9 .error').html('&nbsp;');
    } else {
      return $('#page_9 .error').text('Seleccionar una opción');
    }
    tolerancia_al_riesgo_0 = parseInt(elem.val());
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_2[0];else if (character == 'mujer') selectedImage1 = character_image_group_2[1];else selectedImage1 = character_image_group_2[2];
    $('#page_10 .selected-image').attr('src', selectedImage1);
    $('#page_10').removeClass('d-none');
    $('#page_9').addClass('d-none');
    console.log('tolerancia_al_riesgo_0', tolerancia_al_riesgo_0);
  });
  /******** page 10  */
  $('#prev_page_9').click(function () {
    $('#page_9').removeClass('d-none');
    $('#page_10').addClass('d-none');
  });
  var tolerancia_al_riesgo_1 = 0;
  $('#page_10 input[type="radio"]').change(function () {
    $('#page_10 .error').html('&nbsp;');
  });
  $('#page_10 input[type="radio"]').on('change', function () {
    elem = $('#page_10 input[type="radio"]:checked');
    var val = elem.val();
    $('#page_10 .item-img').removeClass('selected-item');
    if (val == 0) $('#page_10 .item-img:nth-of-type(1)').addClass('selected-item');else if (val == 4) $('#page_10 .item-img:nth-of-type(2)').addClass('selected-item');else $('#page_10 .item-img:nth-of-type(3)').addClass('selected-item');
  });
  $('#to_page_11').click(function () {
    var elem = $('#page_10 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_10 .error').html('&nbsp;');
    } else {
      return $('#page_10 .error').text('Seleccionar una opción');
    }
    tolerancia_al_riesgo_1 = parseInt(elem.val());
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_1[0];else if (character == 'mujer') selectedImage1 = character_image_group_1[1];else selectedImage1 = character_image_group_1[2];
    $('#page_11 .selected-image').attr('src', selectedImage1);
    $('#page_11').removeClass('d-none');
    $('#page_10').addClass('d-none');
    console.log('tolerancia_al_riesgo_1', tolerancia_al_riesgo_1);
  });
  /******** page 11  */
  $('#prev_page_10').click(function () {
    $('#page_10').removeClass('d-none');
    $('#page_11').addClass('d-none');
  });
  var tolerancia_al_riesgo_2 = 0;
  $('#page_11 input[type="radio"]').change(function () {
    var elem = $('#page_11 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_11 .error').html('&nbsp; ');
    } else {
      return $('#page_11 .error').text('Por favor, seleccioná una opción');
    }
  });
  $('#to_page_12').click(function () {
    tolerancia_al_riesgo_2 = 0;
    var elem = $('#page_11 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_11 .error').html('&nbsp; ');
    } else {
      return $('#page_11 .error').text('Por favor, seleccioná una opción');
    }
    tolerancia_al_riesgo_2 = parseInt(elem.val());
    console.log('tolerancia_al_riesgo_2', tolerancia_al_riesgo_2);
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_2[0];else if (character == 'mujer') selectedImage1 = character_image_group_2[1];else selectedImage1 = character_image_group_2[2];
    $('#page_12 .selected-image').attr('src', selectedImage1);
    $('#page_12').removeClass('d-none');
    $('#page_11').addClass('d-none');
  });
  /******** page 12  */
  $('#prev_page_11').click(function () {
    $('#page_11').removeClass('d-none');
    $('#page_12').addClass('d-none');
  });
  var tolerancia_al_riesgo_3 = 0;
  $('#page_12 input[type="radio"]').change(function () {
    $('#page_12 .error').html('&nbsp;');
  });
  $('#to_page_13').click(function () {
    var elem = $('#page_12 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_12 .error').html('&nbsp;');
    } else {
      return $('#page_12 .error').text('Seleccionar una opción');
    }
    tolerancia_al_riesgo_3 = parseInt(elem.val());
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_1[0];else if (character == 'mujer') selectedImage1 = character_image_group_1[1];else selectedImage1 = character_image_group_1[2];
    $('#page_13 .selected-image').attr('src', selectedImage1);
    $('#page_13').removeClass('d-none');
    $('#page_12').addClass('d-none');
    console.log('tolerancia_al_riesgo_3', tolerancia_al_riesgo_3);
  });
  /******** page 13  */
  $('#prev_page_12').click(function () {
    $('#page_12').removeClass('d-none');
    $('#page_13').addClass('d-none');
  });
  var tolerancia_al_riesgo_4 = 0;
  $('#page_13 input[type="radio"]').change(function () {
    $('#page_13 .error').html('&nbsp;');
  });
  var first_card_images = ['https://z-eval.s3.amazonaws.com/cards/Arriesgado.png', 'https://z-eval.s3.amazonaws.com/cards/Algo+arriesgado.png', 'https://z-eval.s3.amazonaws.com/cards/Moderado.png', 'https://z-eval.s3.amazonaws.com/cards/Algo+conservador.png', 'https://z-eval.s3.amazonaws.com/cards/Conservador.png'];
  var second_card_images = ['https://z-eval.s3.amazonaws.com/cards/Corto+plazo.png', 'https://z-eval.s3.amazonaws.com/cards/Mediano+plazo.png', 'https://z-eval.s3.amazonaws.com/cards/Largo+plazo.png'];
  $('#to_page_14').click(function () {
    var elem = $('#page_13 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_13 .error').html('&nbsp;');
    } else {
      return $('#page_13 .error').text('Seleccionar una opción');
    }
    tolerancia_al_riesgo_4 = parseInt(elem.val());
    var character_image_group_3 = ['https://z-eval.s3.amazonaws.com/pers/Perfil+H.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+M.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+Nobi.png'];
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_3[0];else if (character == 'mujer') selectedImage1 = character_image_group_3[1];else selectedImage1 = character_image_group_3[2];
    $('#page_14 .final-img').attr('src', selectedImage1);
    $('#page_14').removeClass('d-none');
    $('#page_13').addClass('d-none');
    console.log('tolerancia_al_riesgo_4', tolerancia_al_riesgo_4);
    horizonte_temporal = horizonte_temporal_0;
    console.log('horizontal_tempore', horizonte_temporal, horizonte_temporal_0);
    tolerancia_al_riesgo = tolerancia_al_riesgo_0 + tolerancia_al_riesgo_1 + tolerancia_al_riesgo_2 + tolerancia_al_riesgo_3 + tolerancia_al_riesgo_4;
    console.log('tolerancia_al_riesgo', tolerancia_al_riesgo, tolerancia_al_riesgo_0, tolerancia_al_riesgo_1, tolerancia_al_riesgo_2, tolerancia_al_riesgo_3, tolerancia_al_riesgo_4);
    var icon_horizonte = ['https://z-eval.s3.amazonaws.com/misc/1-3.png', 'https://z-eval.s3.amazonaws.com/misc/2-3.png', 'https://z-eval.s3.amazonaws.com/misc/3-3.png'];
    if (horizonte_temporal < 3) {
      $('#page_14 .horizonte .content').text("Corto Plazo");
      $('#page_14 .icon-horizonte').attr('src', icon_horizonte[0]);
      $('#page_14 .plan-horizonte.card_front').attr("src", second_card_images[0]);
    } else if (horizonte_temporal >= 3 && horizonte_temporal <= 7) {
      $('#page_14 .horizonte .content').text("Mediano Plazo");
      $('#page_14 .icon-horizonte').attr('src', icon_horizonte[1]);
      $('#page_14 .plan-horizonte.card_front').attr("src", second_card_images[1]);
    } else {
      $('#page_14 .horizonte .content').text("Largo Plazo");
      $('#page_14 .icon-horizonte').attr('src', icon_horizonte[2]);
      $('#page_14 .plan-horizonte.card_front').attr("src", second_card_images[2]);
    }
    var icon_tolerancia = ['https://z-eval.s3.amazonaws.com/misc/1-5.png', 'https://z-eval.s3.amazonaws.com/misc/2-5.png', 'https://z-eval.s3.amazonaws.com/misc/3-5.png', 'https://z-eval.s3.amazonaws.com/misc/4-5.png', 'https://z-eval.s3.amazonaws.com/misc/5-5.png'];
    if (tolerancia_al_riesgo < 16) {
      $('#page_14 .tolerancia .content').text('Conservador');
      $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[0]);
      $('#page_14 .plan-tolerancia.card_front').attr("src", first_card_images[4]);
    } else if (tolerancia_al_riesgo >= 16 && tolerancia_al_riesgo <= 21) {
      $('#page_14 .tolerancia .content').text('Algo Conservador');
      $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[1]);
      $('#page_14 .plan-tolerancia.card_front').attr("src", first_card_images[3]);
    } else if (tolerancia_al_riesgo >= 22 && tolerancia_al_riesgo <= 26) {
      $('#page_14 .tolerancia .content').text('Moderado');
      $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[2]);
      $('#page_14 .plan-tolerancia.card_front').attr("src", first_card_images[2]);
    } else if (tolerancia_al_riesgo >= 27 && tolerancia_al_riesgo <= 31) {
      $('#page_14 .tolerancia .content').text('Algo Arriesgado');
      $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[3]);
      $('#page_14 .plan-tolerancia.card_front').attr("src", first_card_images[1]);
    } else {
      $('#page_14 .tolerancia .content').text('Arriesgado');
      $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[4]);
      $('#page_14 .plan-tolerancia.card_front').attr("src", first_card_images[0]);
    }
    $('#page_14 .subtitle:first-of-type').text("\xA1Felicitaciones ".concat(name, "!"));
  });
  /******** page 14  */
  $('#prev_page_13').click(function () {
    $('#page_13').removeClass('d-none');
    $('#page_14').addClass('d-none');
  });
  $('#page_14 #to_whatsapp').click(function () {
    $('#send_email_modal .large_title:first-child').text('Recibí esta información detallada en tu WhatsApp. Completá por favor la siguiente información.');
    $('#send_email_modal').modal({
      backdrop: 'static'
    });
  });
  $('#page_14 #to_download_result').click(function () {
    $('#send_email_modal .large_title:first-child').text('Completá por favor la siguiente información y un asesor acreditado en Zurich International Life Sucursal Argentina te contactará en breve.');
    $('#send_email_modal').modal({
      backdrop: 'static'
    });
  });
});
/******/ })()
;