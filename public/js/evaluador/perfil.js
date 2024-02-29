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
  var external_url = $('#external_url').val();
  var url = new URL(window.location.href);
  // Get the 'GET' parameters
  var params = new URLSearchParams(url.search);
  // Retrieve specific parameter values
  character = params.get('character');
  name = params.get('name');
  age = params.get('age');
  console.log('character,name,age', character, name, age);
  var character_image_group_0 = ["https://z-eval.s3.amazonaws.com/pers/hombre+a.png", "https://z-eval.s3.amazonaws.com/pers/Mujer+a.png", "https://z-eval.s3.amazonaws.com/pers/Mujer+a.png"];
  if (!!character && !!name && !!age) {
    $('#page_7').removeClass('d-none');
    $('#prev_page_1').addClass('d-none');
    $('#name').val(name);
    $('#age').val(age);
    $('input[name=character]').val(character);
    if (character == 'hombre') selectedImage = character_image_group_0[0];else if (character == 'mujer') selectedImage = character_image_group_0[1];else selectedImage = character_image_group_0[2];
    $('#page_7 .selected-image').attr('src', selectedImage);
    $('#download_result_modal input[name=user_first_name]').val(name);
    $('#send_email_modal input[name=user_first_name]').val(name);
  } else {
    $("#page_0").removeClass('d-none');
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
  }, 1000);
  var character_image_group_1 = ["https://z-eval.s3.amazonaws.com/pers/Hombre+Idle.gif", "https://z-eval.s3.amazonaws.com/pers/Mujer+Idle.gif", "https://z-eval.s3.amazonaws.com/pers/Nobi+Idle.gif"];
  var character_image_group_2 = ["https://z-eval.s3.amazonaws.com/pers/Hombre+Pensando.gif", "https://z-eval.s3.amazonaws.com/pers/Mujer+Pensando.gif", "https://z-eval.s3.amazonaws.com/pers/Nobi+Pensando.gif"];
  //select final-img        
  var character_image_group_3 = ['https://z-eval.s3.amazonaws.com/pers/Perfil+H.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+M.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+Nobi.png'];
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
    if (isNaN(parseInt(age1)) || age1 <= 17 || age1 > 99) {
      $('#age').parent().addClass('has-error');
      return $('#page_1 .error').text('Ingresá una edad de 18 a 99 años');
    }
    $('#page_1 .error').html('&nbsp;');
    $('#age').parent().removeClass('has-error');
    name = name1;
    age = age1;
    character = character1;
    if (character == 'hombre') selectedImage = character_image_group_0[0];else if (character == 'mujer') selectedImage = character_image_group_0[1];else selectedImage = character_image_group_0[2];
    $('#page_1').addClass('d-none');
    $('#page_7').removeClass('d-none');
    console.log('selected Image', selectedImage);
    $('#page_7 .selected-image').attr('src', selectedImage);
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
  $('#to_page_8').click(function () {
    var elem = $('#page_7 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_7 .error').html('&nbsp;');
    } else {
      return $('#page_7 .error').text('Seleccionar una opción');
    }
    horizonte_temporal_0 = parseInt(elem.val());
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_1[0];else if (character == 'mujer') selectedImage1 = character_image_group_1[1];else selectedImage1 = character_image_group_1[2];
    $('#page_8 .selected-image').attr('src', selectedImage1);
    $('#page_8').removeClass('d-none');
    $('#page_7').addClass('d-none');
    console.log('horizonte_temporal_0', horizonte_temporal_0);
  });
  /****************   page 8  */
  $('#prev_page_7').click(function () {
    $('#page_7').removeClass('d-none');
    $('#page_8').addClass('d-none');
  });
  var horizonte_temporal_1 = 0;
  $('#page_8 input[type="radio"]').change(function () {
    $('#page_8 .error').html('&nbsp;');
  });
  $('#to_page_9').click(function () {
    var elem = $('#page_8 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_8 .error').html('&nbsp;');
    } else {
      return $('#page_8 .error').text('Seleccionar una opción');
    }
    horizonte_temporal_1 = parseInt(elem.val());
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_1[0];else if (character == 'mujer') selectedImage1 = character_image_group_1[1];else selectedImage1 = character_image_group_1[2];
    $('#page_9 .selected-image').attr('src', selectedImage1);
    $('#page_9').removeClass('d-none');
    $('#page_8').addClass('d-none');
    console.log('horizonte_temporal_1', horizonte_temporal_1);
  });
  /******** page 9  */
  $('#prev_page_8').click(function () {
    $('#page_8').removeClass('d-none');
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
    var gender = "h";
    if (character == 'hombre') {
      selectedImage1 = character_image_group_3[0];
      gender = "h";
    } else if (character == 'mujer') {
      selectedImage1 = character_image_group_3[1];
      gender = "m";
    } else {
      selectedImage1 = character_image_group_3[2];
      gender = "n";
    }
    $('#page_14 .final-img').attr('src', selectedImage1);
    $('#page_14').removeClass('d-none');
    $('#page_13').addClass('d-none');
    console.log('tolerancia_al_riesgo_4', tolerancia_al_riesgo_4);
    horizonte_temporal = horizonte_temporal_0 + horizonte_temporal_1;
    console.log('horizontal_tempore', horizonte_temporal, horizonte_temporal_0, horizonte_temporal_1);
    tolerancia_al_riesgo = tolerancia_al_riesgo_0 + tolerancia_al_riesgo_1 + tolerancia_al_riesgo_2 + tolerancia_al_riesgo_3 + tolerancia_al_riesgo_4;
    console.log('tolerancia_al_riesgo', tolerancia_al_riesgo, tolerancia_al_riesgo_0, tolerancia_al_riesgo_1, tolerancia_al_riesgo_2, tolerancia_al_riesgo_3, tolerancia_al_riesgo_4);
    if (horizonte_temporal < 3) {
      $('#page_14 .horizonte .content').text("Corto Plazo");
      $('#page_14 .horizonte img:first-child').attr('src', "https://z-eval.s3.amazonaws.com/inv/corto_plazo_on.png");
      $('#page_14 .horizonte img:nth-child(2)').attr('src', "https://z-eval.s3.amazonaws.com/inv/mediano_plazo_off.png");
      $('#page_14 .horizonte img:nth-child(3)').attr('src', "https://z-eval.s3.amazonaws.com/inv/largo_plazo_off.png");
    } else if (horizonte_temporal >= 3 && horizonte_temporal <= 7) {
      $('#page_14 .horizonte .content').text("Mediano Plazo");
      $('#page_14 .horizonte img:first-child').attr('src', "https://z-eval.s3.amazonaws.com/inv/corto_plazo_off.png");
      $('#page_14 .horizonte img:nth-child(2)').attr('src', "https://z-eval.s3.amazonaws.com/inv/mediano_plazo_on.png");
      $('#page_14 .horizonte img:nth-child(3)').attr('src', "https://z-eval.s3.amazonaws.com/inv/largo_plazo_off.png");
    } else {
      $('#page_14 .horizonte .content').text("Largo Plazo");
      $('#page_14 .horizonte img:first-child').attr('src', "https://z-eval.s3.amazonaws.com/inv/corto_plazo_off.png");
      $('#page_14 .horizonte img:nth-child(2)').attr('src', "https://z-eval.s3.amazonaws.com/inv/mediano_plazo_off.png");
      $('#page_14 .horizonte img:nth-child(3)').attr('src', "https://z-eval.s3.amazonaws.com/inv/largo_plazo_on.png");
    }
    if (tolerancia_al_riesgo < 18) {
      $('#page_14 .tolerancia .content').text('Conservador');
      $('#page_14 .tolerancia img:first-child').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_conservador_on.png"));
      $('#page_14 .tolerancia img:nth-child(2)').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_moderado_off.png"));
      $('#page_14 .tolerancia img:nth-child(3)').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_arriesgado_off.png"));
    } else if (tolerancia_al_riesgo >= 18 && tolerancia_al_riesgo <= 28) {
      $('#page_14 .tolerancia .content').text('Moderado');
      $('#page_14 .tolerancia img:first-child').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_conservador_off.png"));
      $('#page_14 .tolerancia img:nth-child(2)').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_moderado_on.png"));
      $('#page_14 .tolerancia img:nth-child(3)').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_arriesgado_off.png"));
    } else {
      $('#page_14 .tolerancia .content').text('Arriesgado');
      $('#page_14 .tolerancia img:first-child').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_conservador_off.png"));
      $('#page_14 .tolerancia img:nth-child(2)').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_moderado_off.png"));
      $('#page_14 .tolerancia img:nth-child(3)').attr('src', "https://z-eval.s3.amazonaws.com/inv/".concat(gender, "_arriesgado_on.png"));
    }
    $('#page_14 .subtitle:first-of-type').text("\xA1Felicitaciones ".concat(name, "!"));
  });
  /******** page 14  */
  $('#prev_page_13').click(function () {
    $('#page_13').removeClass('d-none');
    $('#page_14').addClass('d-none');
  });
  $('#page_14 #to_whatsapp').click(function () {
    $('#send_email_modal').modal({
      backdrop: 'static'
    });
  });
  $('#page_14 #to_download_result').click(function () {
    $('#download_result_modal').modal({
      backdrop: 'static'
    });
  });
  $('#to_page_15').click(function () {
    window.open("https://".concat(external_url, "?character=").concat(character, "&name=").concat(name, "&age=").concat(age));
  });
  $('#send_email_modal_btn').on('click', function (e) {
    console.log('close btn');
    $('#send_email_modal_form').validate({
      rules: {
        user_first_name: 'required',
        area_code: {
          required: true,
          minlength: 4,
          maxlength: 6
        },
        tel_number: {
          required: true,
          minlength: 9,
          maxlength: 11
        }
      }
    });
    if (!$('#send_email_modal_form').valid()) return;
    $('#send_email_modal').modal('hide');
  });
  $('#download_result_modal_btn').on('click', function (e) {
    console.log('close btn1');
    $('#download_result_modal_form').validate({
      rules: {
        user_first_name: 'required',
        area_code: {
          required: true,
          minlength: 4,
          maxlength: 6
        },
        tel_number: {
          required: true,
          minlength: 9,
          maxlength: 11
        }
      }
    });
    if (!$('#download_result_modal_form').valid()) return;
    $('#download_result_modal').modal('hide');
  });
});
/******/ })()
;