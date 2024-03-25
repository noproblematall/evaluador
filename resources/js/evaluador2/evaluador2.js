$(document).ready(function () {
    let selectedImage = '';
    var external_url = $('#external_url').val();
    var ref = $('#ref').val() ?? "";
    var character = $('#cus_character').val() ?? "";
    var name = $('#cus_name').val() ?? "";
    var age = $('#cus_age').val() ?? "";
    console.log('character,name,age', character, name, age);
    
    $.validator.setDefaults({
        debug: true,
        onsubmit: false,
        onfocusout: false,
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                validator.errorList[0].element.focus();
            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
        highlight: function (element, errorClass) {
            $(element).parent('.textfield').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).parent('.textfield').removeClass('has-error');
        },
    });
        
    var character_image_group_0 = [
        "https://z-eval.s3.amazonaws.com/pers/hombre+a.png",
        "https://z-eval.s3.amazonaws.com/pers/Mujer+a.png",
        "https://z-eval.s3.amazonaws.com/pers/Mujer+a.png"
    ];

    if (!!character && !!name && !!age) {
        $('#page_2').removeClass('d-none');
        $('#prev_page_1').addClass('d-none');
        $('#name').val(name);
        $('#age').val(age);
        $('input[name=character]').val(character);
        if (character == 'hombre') selectedImage = character_image_group_0[0];
        else if (character == 'mujer') selectedImage = character_image_group_0[1];
        else  selectedImage = character_image_group_0[2];
        
        $('#download_result_modal input[name=user_first_name]').val(name);
        $('#send_email_modal input[name=user_first_name]').val(name);
        
        $('#to_page_7').addClass('d-none');
    } else {        
        $("#page_0").removeClass('d-none');
    }
    /******** page 0  */
    $('#to_page_1').click(function () {
        $('#page_1').removeClass('d-none');
        $('#page_0').addClass('d-none');
    })
    setTimeout(() => {
        $('#page_0').click(function () {
            $('#page_1').removeClass('d-none');
            $('#page_0').addClass('d-none');
        })
    }, 2000);
    setTimeout(() => {
        $('#to_page_1').removeClass('hide');
    }, 500);
    /*********   page 1  ************/
    $('#to_page_2').click(function () {
        let name1 = $('#name').val();
        let age1 = $('#age').val();
        let character1 = $('#page_1 input[type="radio"]:checked').val();
        console.log('character', character1, name1, age1);
        if (!character1) {
            return $('#page_1 .error').text('Por favor seleccioná un personaje')
        }
        if (!name1) {
            $('#name').parent().addClass('has-error');
            return $('#page_1 .error').text('Por favor completá tus datos')
        }
        if (name1.length > 35) {
            return $('#page_1 .error').text('introduzca menos de 35 caracteres')
        }
        $('#name').parent().removeClass('has-error');
        if (!age1) {
            $('#age').parent().addClass('has-error');
            return $('#page_1 .error').text('Por favor completá tus datos')
        }
        if (isNaN(parseInt(age1)) || age1 <= 17 || age1 > 99) {
            $('#age').parent().addClass('has-error');
            return $('#page_1 .error').text('Ingresá una edad de 18 a 99 años')
        }
        $('#page_1 .error').html('&nbsp;')
        $('#age').parent().removeClass('has-error');
        name = name1; age = age1; character = character1;
        selectedImage = $('#page_1 input[type="radio"]:checked').parent().siblings().filter('label').find('img.activated').attr('src');
        $('#page_1').addClass('d-none');
        $('#page_2').removeClass('d-none');
        //add four dots step.
        $('.four-dots').removeClass('d-none');
        console.log('selected Image', selectedImage)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    $('#page_1 input[type="radio"]').change(function () {
        $('#page_1 label img.activated').removeClass('d-none')
        $('#page_1 label img.deactivated').removeClass('d-none')
        $('#page_1 label img.activated').addClass('d-none')
        let elem = $(this);
        elem.parent().siblings().filter('label').find('img.activated').removeClass('d-none')
        elem.parent().siblings().filter('label').find('img.deactivated').addClass('d-none')

        $('#page_1 img').css({
            'animation': 'unset'
        });
    })
    /*********   page 2  ************/
    let member = {
        adultos: 0,
        jovenes: 0,
        ninos: 0,
        bebes: 0
    };
    $('#page_2 .minus-btn').click(function () {
        let input_elem = $(this).siblings().filter('input');
        let input_name = input_elem.attr('id');
        let input_value = parseInt(input_elem.val());
        if (input_value > 0) {
            let val = input_value - 1;
            input_elem.val(val);
            $(`#page_2 .image-item[data-item=${input_name}] .number`).text(val);
            $(`#page_2 .item[data-item=${input_name}] .item-value`).text(val);
            if (val > 0) {
                $(`#page_2 .image-item[data-item=${input_name}]`).addClass('activated');
                $(`#page_2 .item[data-item=${input_name}]`).addClass('activated');
            } else {
                $(`#page_2 .image-item[data-item=${input_name}]`).removeClass('activated');
                $(`#page_2 .item[data-item=${input_name}]`).removeClass('activated');
            }
            member[input_name] = val;
        }
    })
    character_image_group_1 = [
        "https://z-eval.s3.amazonaws.com/pers/Hombre+Idle.gif",
        "https://z-eval.s3.amazonaws.com/pers/Mujer+Idle.gif",
        "https://z-eval.s3.amazonaws.com/pers/Nobi+Idle.gif"
    ],
    character_image_group_2 = [
        "https://z-eval.s3.amazonaws.com/pers/Hombre+Pensando.gif",
        "https://z-eval.s3.amazonaws.com/pers/Mujer+Pensando.gif",
        "https://z-eval.s3.amazonaws.com/pers/Nobi+Pensando.gif"
    ];

    $('#page_2 .plus-btn').click(function () {
        let input_elem = $(this).siblings().filter('input');
        let input_name = input_elem.attr('id');
        let input_value = parseInt(input_elem.val());
        if (input_value <= 7) {
            let val = input_value + 1;
            input_elem.val(val);
            $(`#page_2 .image-item[data-item=${input_name}] .number`).text(val);
            $(`#page_2 .item[data-item=${input_name}] .item-value`).text(val);
            $(`#page_2 .image-item[data-item=${input_name}]`).addClass('activated');
            $(`#page_2 .item[data-item=${input_name}]`).addClass('activated');
            member[input_name] = val;
        }
    })
    $('#page_2 .image-item').click(function () {
        let input_name = $(this).data('item');
        console.log('item', input_name)
        $(`#page_2 .item[data-item=${input_name}] .plus-btn`).trigger('click');
    })
    $('#prev_page_1').click(function () {
        $('#page_1').removeClass('d-none');
        $('#page_2').addClass('d-none');
        //hide four dots step
        $('.four-dots').addClass('d-none');
    });
    $('#to_page_3').click(function () {
        $('#page_2').addClass('d-none');
        $('#page_3').removeClass('d-none');

        $('#page_3 .title').text(`Contanos sobre vos`);
        $('#page_3 .todo-description').text(`¿Estás trabajando, ${name}?`);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else selectedImage1 = character_image_group_1[2];
        $('#page_3 .selected-image').attr('src', selectedImage1);
        //add step 2
        $('.dot-page-3').addClass('checked');
        console.log('member', member, selectedImage)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    /******** page 3  */
    $('#prev_page_2').click(function () {
        $('#page_2').removeClass('d-none');
        $('#page_3').addClass('d-none');
        //remove step 3
        $('.dot-page-3').removeClass('checked');
    });
    let job = '';
    $('#to_page_4').click(function () {
        let elem = $('#page_3 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_3 .error').html('&nbsp;');
        } else {
            return $('#page_3 .error').text('por favor seleccione un elemento');
        }
        job = elem.val();

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_2[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_2[1];
        else selectedImage1 = character_image_group_2[2];
        $('#page_4 .selected-image').attr('src', selectedImage1);
        $('#page_4').removeClass('d-none');
        $('#page_3').addClass('d-none');
        //add step 4
        $('.dot-page-4').addClass('checked');
        console.log('job', job);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    /******** page 4  */
    $('#prev_page_3').click(function () {
        $('#page_3').removeClass('d-none');
        $('#page_4').addClass('d-none');
        //add step 4
        $('.dot-page-4').removeClass('checked');
    });
    $('#page_4 input[type="checkbox"]').change(function () {
        let id = $(this).attr('id');
        let checked = $(this).prop('checked');
        if (id != 'todo-5') {
            $('#page_4 input#todo-5').prop('checked', false);
            if (!!checked) $(`#page_4 .image-container .${id}`).addClass('activated');
            else $(`#page_4 .image-container .${id}`).removeClass('activated');
        } else {
            $('#page_4 .image-container img').each(function () {
                $(this).removeClass('activated');
            })
        }
        $('#page_4 .error').html(' &nbsp;');
    })
    $('#page_4 #todo-5').change(function () {
        let checked = $(this).prop('checked');
        console.log('checked', checked)
        if (!!checked) {
            $('#page_4 input[type="checkbox"]').prop('checked', false);
            $('#page_4 input#todo-5').prop('checked', true);
        }
    })
    let todo = [];
    let todo_str_arr = [
        'Comprar un auto',
        'Comprar una casa',
        'Viajar todos los años',
        'Emprender un proyecto',
        'Generar un ahorro rentable',
        'Ninguno de los anteriores'
    ]
    $('#to_page_5').click(function () {
        todo = [];
        let elem = $('#page_4 input[type="checkbox"]:checked');
        if (elem.length > 0) {
            $('#page_4 .error').html('&nbsp; ');
        } else {
            return $('#page_4 .error').text('Por favor, seleccioná una opción');
        }
        $('#page_4 input[type="checkbox"]:checked').each(function () {
            todo.push(parseInt($(this).val()));
        });
        console.log('todo', todo);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else selectedImage1 = character_image_group_1[2];
        $('#page_5 .selected-image').attr('src', selectedImage1);

        $('#page_5').removeClass('d-none');
        $('#page_4').addClass('d-none');
        //add step 5
        $('.dot-page-5').addClass('checked');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    /******** page 5  */
    $('#prev_page_4').click(function () {
        $('#page_4').removeClass('d-none');
        $('#page_5').addClass('d-none');
        //remove step 5
        $('.dot-page-5').removeClass('checked');
    });
    $('#page_5 input[type="checkbox"]').change(function () {
        let id = $(this).attr('id');
        let checked = $(this).prop('checked');
        if (id != 'plan-5') {
            $('#page_5 input#plan-5').prop('checked', false);
            if (!!checked) $(`#page_5 .image-container .${id}`).addClass('activated');
            else $(`#page_5 .image-container .${id}`).removeClass('activated');
        } else {
            $('#page_5 .image-container img').each(function () {
                $(this).removeClass('activated');
            })
        }
        $('#page_5 .error').html(' &nbsp;');
    })
    $('#page_5 #plan-5').change(function () {
        let checked = $(this).prop('checked');
        console.log('checked', checked)
        if (!!checked) {
            $('#page_5 input[type="checkbox"]').prop('checked', false);
            $('#page_5 input#plan-5').prop('checked', true);
        }
    })
    let plan = [];
    let plan_str_arr = [
        'Rentabilizar mis ahorros',
        'Educación de alto nivel para mis hijos',
        'Conservar mi nivel de vida en el retiro',
        'La continuidad de mi empresa o proyecto',
        'Tener un fondo para emergencias',
        'No tengo planes'
    ];
    var cardImgsArr = [
        [
            'https://z-eval.s3.amazonaws.com/cards/card_front_1_seg_vida.gif',
            'https://z-eval.s3.amazonaws.com/cards/card_back_1_seg_vida.png'
        ],
        [
            'https://z-eval.s3.amazonaws.com/cards/card_front_2_seg_vida_enf_grav.gif',
            'https://z-eval.s3.amazonaws.com/cards/card_back_2_seg_vida_enf_grav.png'
        ],
        [
            'https://z-eval.s3.amazonaws.com/cards/card_front_3_seg_vida_ah.gif',
            'https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah.png'
        ],
        [
            'https://z-eval.s3.amazonaws.com/cards/card_front_4_seg_vida_inv.gif',
            'https://z-eval.s3.amazonaws.com/cards/card_back_4_seg_vida_inv.png'
        ],
        [
            'https://z-eval.s3.amazonaws.com/cards/card_front_5_seg_vida_enf_grav_family.gif',
            'https://z-eval.s3.amazonaws.com/cards/card_back_5_seg_vida_enf_grav_family.png'
        ]
    ];
    var selectedCardImgsArr = [];
    $('#to_page_6').click(function () {
        plan = [];
        selectedCardImgsArr = [];
        let elem = $('#page_5 input[type="checkbox"]:checked');
        if (elem.length > 0) {
            $('#page_5 .error').html('&nbsp; ');
        } else {
            return $('#page_5 .error').text('Por favor, seleccioná una opción');
        }
        $('#page_5 input[type="checkbox"]:checked').each(function () {
            plan.push(parseInt($(this).val()));
        });
        console.log('plan', plan);
        //select final-img        
        let character_image_group_3 = [
            'https://z-eval.s3.amazonaws.com/pers/Perfil+H.png',
            'https://z-eval.s3.amazonaws.com/pers/Perfil+M.png',
            'https://z-eval.s3.amazonaws.com/pers/Perfil+Nobi.png'
        ];
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_3[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_3[1];
        else selectedImage1 = character_image_group_3[2];
        $('#page_6 .final-img').attr('src', selectedImage1);
        $('#page_6 .subtitle:first-of-type').text(`¡Felicitaciones ${name}!`)

        //change back image of card-3
        if (todo.includes(0)) {
            $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_auto.png";
            if (todo.includes(1)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_casa_auto.png";
            else if (todo.includes(2)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_viaje_auto.png";
            else if (todo.includes(3)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_auto_proyecto.png";
            else if (todo.includes(4)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_auto.png";
        } else if (todo.includes(1)) {
            $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_casa.png";
            if (todo.includes(2)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_casa_viaje.png";
            else if (todo.includes(3)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_casa_proyecto.png";
            else if (todo.includes(4)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_casa.png";
        } else if (todo.includes(2)) {
            $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_viaje.png";
            if (todo.includes(3)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_viaje_emprender.png";
            else if (todo.includes(4)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_viaje.png";
        } else if (todo.includes(3)) {
            $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_proyecto.png";
            if (todo.includes(4)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_proyecto.png";
        } else if (todo.includes(4)) {
            $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_rentable.png";
        }
        if (todo.includes(5)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_todos.png";
        else if (todo.length > 2) {
            if (todo.includes(0) && todo.includes(1) && !todo.includes(4)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_casa_auto_otros.png";
            if (todo.includes(0) && todo.includes(2) && todo.includes(3)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_auto_viajes_otros.png";
            if (todo.includes(1) && todo.includes(2) && todo.includes(3)) $temp_img = "https://z-eval.s3.amazonaws.com/cards/card_back_3_seg_vida_ah_casa_viajes_otros.png";
        }
        cardImgsArr[2][1] = $temp_img;
        //find card images
        let temp = [];
        let flag = false;
        Object.values(member).forEach((val) => {
            if (val > 0) flag = true;
        })
        if (!!flag && job == 1) {
            temp.push(cardImgsArr[4]);
            temp.push(cardImgsArr[2]);
        } else {
            if (!!flag) temp.push(cardImgsArr[0]);
            if (job == 1) { //Si, independiente/en mi negocio
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
        $('#page_5').addClass('d-none');
        setTimeout(() => {
            $('#page_6').removeClass('d-none');
        }, 100);
        //remove four dots step
        $('.four-dots').addClass('d-none');
    })
    $('#page_6 #to_whatsapp').click(function () {
        $('#send_email_modal').modal({ backdrop: 'static' });
    })
    $('#page_6 #to_download_result').click(function () {
        $('#download_result_modal').modal({ backdrop: 'static' });
    })
    $('#send_email_modal_btn').on('click', function (e) {
        console.log('close btn')
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
        console.log('close btn1')
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

    $('#prev_page_5').click(function () {
        $('#page_5').removeClass('d-none');
        $('#page_6').addClass('d-none');
        //add four dots step
        $('.four-dots').removeClass('d-none');
    });
    $('#page_6 .flip_card').click(function () {
        $(this).toggleClass('flipped')
        $('#page_6 .selected-image ').toggleClass('opacity-0');
        $('#page_6 .flip_card img:first-child').toggleClass('opacity-0');
        $('#page_6 .card-backdrop').toggleClass('w-100 h-100');
    });
    $('#page_6 .card-backdrop').click(function () {
        $('#page_6 .flip_card').removeClass('flipped')
        $('#page_6 .selected-image ').removeClass('opacity-0');
        $('#page_6 .flip_card img:first-child').removeClass('opacity-0');
        $('#page_6 .card-backdrop').removeClass('w-100 h-100');
    });
    // $('#page_6 .flip_card').click(function() {
    //     $('#plan_card_modal').modal({ backdrop: 'static' });
    // });
    // $('#plan_card_modal .btn-regresar').click(function() {
    //     $('#plan_card_modal').modal('hide');
    // });
    $('#to_page_7').click(function () {
        window.open(`https://${external_url}?character=${character}&name=${name}&age=${age}&ref=${ref}`);
    });
    
    $('.area_code').on('focusin', function () {
        $(this).mask("0 0000");
        if ($(this).val() == '') {
            $(this).val(0);
        }
    })
    $('.area_code').on('focusout', function () {
        if ($(this).val() == 0) {
            $(this).mask("", { placeholder: "Código de area" });
        }
    })
    $('.area_code').on('input', function () {
        phone_flag = false;
        let val = $(this).val();
        if (val.charAt(0) != '0') {
            $(this).val('0' + val);
        }
    })
    $('.tel_number').on('focusin', function () {
        $(this).mask("00 00000000");
        if ($(this).val() == '') {
            $(this).val(15);
        }
    })
    $('.tel_number').on('focusout', function () {
        if ($(this).val() == 15) {
            $(this).mask("", { placeholder: "Número" });
        }
    })
    $('.tel_number').on('input', function () {
        phone_flag = false;
        let val = $(this).val();
        if (val.length < 2) {
            $(this).val(15);
        } else {
            if (val.substring(0, 2) != '15') {
                $(this).val('15' + val);
            }
        }

    })

    $('#send_email_modal, #download_result_modal').validate({
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
})