/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ./resources/js/evaluador2/evaluador2.js ***!
  \***********************************************/
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
    $("#page_0").addClass('d-none');
    $('#page_2').removeClass('d-none');
    $('#prev_page_1').addClass('d-none');
    $('#name').val(name);
    $('#age').val(age);
    $('input[name=character]').val(character);
    if (character == 'hombre') selectedImage = character_image_group_0[0];else if (character == 'mujer') selectedImage = character_image_group_0[1];else selectedImage = character_image_group_0[2];
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
  $('#to_page_2').click(function () {
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
    $('#page_2').removeClass('d-none');
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
  /*********   page 2  ************/
  var member = {
    adultos: 0,
    jovenes: 0,
    ninos: 0,
    bebes: 0
  };
  $('#page_2 .minus-btn').click(function () {
    var input_elem = $(this).siblings().filter('input');
    var input_name = input_elem.attr('id');
    var input_value = parseInt(input_elem.val());
    if (input_value > 0) {
      var val = input_value - 1;
      input_elem.val(val);
      $("#page_2 .image-item[data-item=".concat(input_name, "] .number")).text(val);
      $("#page_2 .item[data-item=".concat(input_name, "] .item-value")).text(val);
      if (val > 0) {
        $("#page_2 .image-item[data-item=".concat(input_name, "]")).addClass('activated');
        $("#page_2 .item[data-item=".concat(input_name, "]")).addClass('activated');
      } else {
        $("#page_2 .image-item[data-item=".concat(input_name, "]")).removeClass('activated');
        $("#page_2 .item[data-item=".concat(input_name, "]")).removeClass('activated');
      }
      member[input_name] = val;
    }
  });
  character_image_group_1 = ["https://z-eval.s3.amazonaws.com/pers/Hombre+Idle.gif", "https://z-eval.s3.amazonaws.com/pers/Mujer+Idle.gif", "https://z-eval.s3.amazonaws.com/pers/Nobi+Idle.gif"], character_image_group_2 = ["https://z-eval.s3.amazonaws.com/pers/Hombre+Pensando.gif", "https://z-eval.s3.amazonaws.com/pers/Mujer+Pensando.gif", "https://z-eval.s3.amazonaws.com/pers/Nobi+Pensando.gif"];
  $('#page_2 .plus-btn').click(function () {
    var input_elem = $(this).siblings().filter('input');
    var input_name = input_elem.attr('id');
    var input_value = parseInt(input_elem.val());
    if (input_value <= 7) {
      var val = input_value + 1;
      input_elem.val(val);
      $("#page_2 .image-item[data-item=".concat(input_name, "] .number")).text(val);
      $("#page_2 .item[data-item=".concat(input_name, "] .item-value")).text(val);
      $("#page_2 .image-item[data-item=".concat(input_name, "]")).addClass('activated');
      $("#page_2 .item[data-item=".concat(input_name, "]")).addClass('activated');
      member[input_name] = val;
    }
  });
  $('#page_2 .image-item').click(function () {
    var input_name = $(this).data('item');
    console.log('item', input_name);
    $("#page_2 .item[data-item=".concat(input_name, "] .plus-btn")).trigger('click');
  });
  $('#prev_page_1').click(function () {
    $('#page_1').removeClass('d-none');
    $('#page_2').addClass('d-none');
  });
  $('#to_page_3').click(function () {
    $('#page_2').addClass('d-none');
    $('#page_3').removeClass('d-none');
    $('#page_3 .title').text("Contanos sobre vos");
    $('#page_3 .todo-description').text("\xBFEst\xE1s trabajando, ".concat(name, "?"));
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_1[0];else if (character == 'mujer') selectedImage1 = character_image_group_1[1];else selectedImage1 = character_image_group_1[2];
    $('#page_3 .selected-image').attr('src', selectedImage1);
    console.log('member', member, selectedImage);
  });
  /******** page 3  */
  $('#prev_page_2').click(function () {
    $('#page_2').removeClass('d-none');
    $('#page_3').addClass('d-none');
  });
  var job = '';
  $('#to_page_4').click(function () {
    var elem = $('#page_3 input[type="radio"]:checked');
    if (elem.length > 0) {
      $('#page_3 .error').html('&nbsp;');
    } else {
      return $('#page_3 .error').text('por favor seleccione un elemento');
    }
    job = elem.val();
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_2[0];else if (character == 'mujer') selectedImage1 = character_image_group_2[1];else selectedImage1 = character_image_group_2[2];
    $('#page_4 .selected-image').attr('src', selectedImage1);
    $('#page_4').removeClass('d-none');
    $('#page_3').addClass('d-none');
    console.log('job', job);
  });
  /******** page 4  */
  $('#prev_page_3').click(function () {
    $('#page_3').removeClass('d-none');
    $('#page_4').addClass('d-none');
  });
  $('#page_4 input[type="checkbox"]').change(function () {
    var id = $(this).attr('id');
    var checked = $(this).prop('checked');
    if (id != 'todo-5') {
      $('#page_4 input#todo-5').prop('checked', false);
      if (!!checked) $("#page_4 .image-container .".concat(id)).addClass('activated');else $("#page_4 .image-container .".concat(id)).removeClass('activated');
    } else {
      $('#page_4 .image-container img').each(function () {
        $(this).removeClass('activated');
      });
    }
    $('#page_4 .error').html(' &nbsp;');
  });
  $('#page_4 #todo-5').change(function () {
    var checked = $(this).prop('checked');
    console.log('checked', checked);
    if (!!checked) {
      $('#page_4 input[type="checkbox"]').prop('checked', false);
      $('#page_4 input#todo-5').prop('checked', true);
    }
  });
  var todo = [];
  var todo_str_arr = ['Comprar un auto', 'Comprar una casa', 'Viajar todos los años', 'Emprender un proyecto', 'Generar un ahorro rentable', 'Ninguno de los anteriores'];
  $('#to_page_5').click(function () {
    todo = [];
    var elem = $('#page_4 input[type="checkbox"]:checked');
    if (elem.length > 0) {
      $('#page_4 .error').html('&nbsp; ');
    } else {
      return $('#page_4 .error').text('Por favor, seleccioná una opción');
    }
    $('#page_4 input[type="checkbox"]:checked').each(function () {
      todo.push($(this).val());
    });
    console.log('todo', todo);
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_1[0];else if (character == 'mujer') selectedImage1 = character_image_group_1[1];else selectedImage1 = character_image_group_1[2];
    $('#page_5 .selected-image').attr('src', selectedImage1);
    $('#page_5').removeClass('d-none');
    $('#page_4').addClass('d-none');
  });
  /******** page 5  */
  $('#prev_page_4').click(function () {
    $('#page_4').removeClass('d-none');
    $('#page_5').addClass('d-none');
  });
  $('#page_5 input[type="checkbox"]').change(function () {
    var id = $(this).attr('id');
    var checked = $(this).prop('checked');
    if (id != 'plan-5') {
      $('#page_5 input#plan-5').prop('checked', false);
      if (!!checked) $("#page_5 .image-container .".concat(id)).addClass('activated');else $("#page_5 .image-container .".concat(id)).removeClass('activated');
    } else {
      $('#page_5 .image-container img').each(function () {
        $(this).removeClass('activated');
      });
    }
    $('#page_5 .error').html(' &nbsp;');
  });
  $('#page_5 #plan-5').change(function () {
    var checked = $(this).prop('checked');
    console.log('checked', checked);
    if (!!checked) {
      $('#page_5 input[type="checkbox"]').prop('checked', false);
      $('#page_5 input#plan-5').prop('checked', true);
    }
  });
  var plan = [];
  var plan_str_arr = ['Rentabilizar mis ahorros', 'Educación de alto nivel para mis hijos', 'Conservar mi nivel de vida en el retiro', 'La continuidad de mi empresa o proyecto', 'Tener un fondo para emergencias', 'No tengo planes'];
  var cardImgsArr = [['https://z-eval.s3.amazonaws.com/cards/card_front_1_seg_vida.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_1_seg_vida.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_2_seg_vida_enf_grav.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_2_seg_vida_enf_grav.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_3_seg_vida_ah.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_4_seg_vida_inv.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_4_seg_vida_inv.png'], ['https://z-eval.s3.amazonaws.com/cards/card_front_5_seg_vida_enf_grav_family.gif', 'https://z-eval.s3.amazonaws.com/cards/card_back_5_seg_vida_enf_grav_family.png']];
  var selectedCardImgsArr = [];
  $('#to_page_6').click(function () {
    plan = [];
    selectedCardImgsArr = [];
    var elem = $('#page_5 input[type="checkbox"]:checked');
    if (elem.length > 0) {
      $('#page_5 .error').html('&nbsp; ');
    } else {
      return $('#page_5 .error').text('Por favor, seleccioná una opción');
    }
    $('#page_5 input[type="checkbox"]:checked').each(function () {
      plan.push($(this).val());
    });
    console.log('plan', plan);
    //select final-img        
    var character_image_group_3 = ['https://z-eval.s3.amazonaws.com/pers/Perfil+H.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+M.png', 'https://z-eval.s3.amazonaws.com/pers/Perfil+Nobi.png'];
    var selectedImage1 = selectedImage;
    if (character == 'hombre') selectedImage1 = character_image_group_3[0];else if (character == 'mujer') selectedImage1 = character_image_group_3[1];else selectedImage1 = character_image_group_3[2];
    $('#page_6 .final-img').attr('src', selectedImage1);
    $('#page_6 .subtitle:first-of-type').text("\xA1Felicitaciones ".concat(name, "!"));

    //find card images
    var temp = [];
    var flag = false;
    Object.values(member).forEach(function (val) {
      if (val > 0) flag = true;
    });
    if (!!flag && job == 1) {
      temp.push(cardImgsArr[4]);
      temp.push(cardImgsArr[2]);
    } else {
      if (!!flag) temp.push(cardImgsArr[0]);
      if (job == 1) {
        //Si, independiente/en mi negocio
        temp.push(cardImgsArr[1]);
      }
    }
    temp.push(cardImgsArr[2]);
    temp.push(cardImgsArr[3]);
    selectedCardImgsArr = temp.slice(0, 2);
    console.log('selectedCardImgsArr', selectedCardImgsArr);
    $('#page_6 .plan-esencial.card_front').attr("src", selectedCardImgsArr[0][0]);
    $('#page_6 .plan-esencial + .card_back').attr("src", selectedCardImgsArr[0][1]);
    $('#page_6 .plan-extendido.card_front').attr("src", selectedCardImgsArr[1][0]);
    $('#page_6 .plan-extendido + .card_back').attr("src", selectedCardImgsArr[1][1]);
    $('#page_14 .plan-esencial.card_front').attr("src", selectedCardImgsArr[0][0]);
    $('#page_14 .plan-esencial + .card_back').attr("src", selectedCardImgsArr[0][1]);
    $('#page_14 .plan-extendido.card_front').attr("src", selectedCardImgsArr[1][0]);
    $('#page_14 .plan-extendido + .card_back').attr("src", selectedCardImgsArr[1][1]);
    $('#page_5').addClass('d-none');
    setTimeout(function () {
      $('#page_6').removeClass('d-none');
    }, 100);
  });
  $('#page_6 #to_whatsapp').click(function () {
    $('#send_email_modal .large_title:first-child').text('Recibí esta información detallada en tu WhatsApp. Completá por favor la siguiente información.');
    $('#send_email_modal').modal({
      backdrop: 'static'
    });
  });
  $('#page_6 #to_download_result').click(function () {
    $('#send_email_modal .large_title:first-child').text('Completá por favor la siguiente información y un asesor acreditado en Zurich International Life Sucursal Argentina te contactará en breve.');
    $('#send_email_modal').modal({
      backdrop: 'static'
    });
  });
  $('#send_email_modal_btn').on('click', function (e) {
    console.log('close btn');
    $('#send_email_modal').modal('hide');
  });
  $('#prev_page_5').click(function () {
    $('#page_5').removeClass('d-none');
    $('#page_6').addClass('d-none');
  });
  $('#page_6 .flip_card').click(function () {
    $(this).toggleClass('flipped');
    $('#page_6 .selected-image ').toggleClass('opacity-0');
    $('#page_6 .flip_card img:first-child').toggleClass('opacity-0');
  });
  // $('#page_6 .flip_card').click(function() {
  //     $('#plan_card_modal').modal({ backdrop: 'static' });
  // });
  // $('#plan_card_modal .btn-regresar').click(function() {
  //     $('#plan_card_modal').modal('hide');
  // });
  $('#to_page_7').click(function () {
    window.open("https://".concat(external_url, "?character=").concat(character, "&name=").concat(name, "&age=").concat(age));
  });
});
/******/ })()
;