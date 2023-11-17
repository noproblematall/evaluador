$(document).ready(function () {
    let character = '';
    let selectedImage = '';
    let name = '';
    let age = '';

    /******** page 0  */
    $('#to_page_1').click(function() {
        $('#page_1').removeClass('d-none');
        $('#page_0').addClass('d-none');        
    })
    setTimeout(() => {
        $('#page_0').click(function() {
            $('#page_1').removeClass('d-none');
            $('#page_0').addClass('d-none');        
        })
    }, 2000);
    setTimeout(() => {
        $('#to_page_1').removeClass('hide');
    }, 2000);
    /*********   page 1  ************/
    $('#to_page_2').click(function () {
        let name1 = $('#name').val();
        let age1 = $('#age').val();
        character1 = $('#page_1 input[type="radio"]:checked').val();
        console.log('character', character1, name1, age1);
        if (!character1) {
            return $('#page_1 .error').text('Por favor seleccioná un personaje')
        }
        if (!name1) {
            $('#name').parent().addClass('has-error');
            return $('#page_1 .error').text('Por favor completá tus datos')
        }
        $('#name').parent().removeClass('has-error');
        if (!age1) {
            $('#age').parent().addClass('has-error');
            return $('#page_1 .error').text('Por favor completá tus datos')
        }
        $('#page_1 .error').html('&nbsp;')
        $('#age').parent().removeClass('has-error');
        name = name1; age = age1; character = character1;
        selectedImage = $('#page_1 input[type="radio"]:checked').parent().siblings().filter('label').find('img.activated').attr('src');
        $('#page_1').addClass('d-none');
        $('#page_2').removeClass('d-none');
        console.log('selected Image', selectedImage)
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    $('#page_1 input[type="radio"]').change(function () {
        $('#page_1 label img.activated').removeClass('d-none')
        $('#page_1 label img.deactivated').removeClass('d-none')
        $('#page_1 label img.activated').addClass('d-none')
        let elem = $(this);
        elem.parent().siblings().filter('label').find('img.activated').removeClass('d-none')
        elem.parent().siblings().filter('label').find('img.deactivated').addClass('d-none')

        $('#page_1 img').css({
            'animation':'unset'
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
    });
    $('#to_page_3').click(function () {
        $('#page_2').addClass('d-none');
        $('#page_3').removeClass('d-none');

        $('#page_3 .title').text(`Contanos sobre vos`);
        $('#page_3 .todo-description').text(`¿Estás trabajando, ${name}`);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else  selectedImage1 = character_image_group_1[2];
        $('#page_3 .selected-image').attr('src', selectedImage1);
        console.log('member', member, selectedImage)
    })
    /******** page 3  */
    $('#prev_page_2').click(function () {
        $('#page_2').removeClass('d-none');
        $('#page_3').addClass('d-none');
    });
    let job = '';
    $('#to_page_4').click(function () {
        let elem = $('#page_3 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_3 .error').html('&nbsp;');
        } else {
            return $('#page_3 .error').text('por favor seleccione un elemento');
        }
        job = elem.siblings().filter('label').find('p').text();

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_2[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_2[1];
        else  selectedImage1 = character_image_group_2[2];
        $('#page_4 .selected-image').attr('src', selectedImage1);
        $('#page_4').removeClass('d-none');
        $('#page_3').addClass('d-none');
        console.log('job', job);
    })
    /******** page 4  */
    $('#prev_page_3').click(function () {
        $('#page_3').removeClass('d-none');
        $('#page_4').addClass('d-none');
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
        'generar un ahorro rentable',
        'Ninguno de los anteriores'
    ]
    $('#to_page_5').click(function () {
        let elem = $('#page_4 input[type="checkbox"]:checked');
        if (elem.length > 0) {
            $('#page_4 .error').html('&nbsp; ');
        } else {
            return $('#page_4 .error').text('Por favor, seleccioná una opción');
        }
        $('#page_4 input[type="checkbox"]:checked').each(function () {
            todo.push($(this).val());
        });
        console.log('todo', todo);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else  selectedImage1 = character_image_group_1[2];
        $('#page_5 .selected-image').attr('src', selectedImage1);

        $('#page_5').removeClass('d-none');
        $('#page_4').addClass('d-none');
    })
    /******** page 5  */
    $('#prev_page_4').click(function () {
        $('#page_4').removeClass('d-none');
        $('#page_5').addClass('d-none');
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
    $('#to_page_6').click(function () {
        let elem = $('#page_5 input[type="checkbox"]:checked');
        if (elem.length > 0) {
            $('#page_5 .error').html('&nbsp; ');
        } else {
            return $('#page_5 .error').text('Por favor, seleccioná una opción');
        }
        $('#page_5 input[type="checkbox"]:checked').each(function () {
            plan.push($(this).val());
        });
        console.log('plan', plan);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_2[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_2[1];
        else  selectedImage1 = character_image_group_2[2];
        $('#page_6 .selected-image').attr('src', selectedImage1);
        let products = [
            {
                selected: 0,
                title: 'Zurich Options',
                subtitle: 'Seguro de vida con beneficios adicionales',
                btn_link: 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-options-dic201.pdf'
            },
            {
                selected: 0,
                title: 'Zurich University',
                subtitle: 'Seguro de vida con beneficios adicionales',
                btn_link: 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-university-dic203.pdf'
            },
            {
                selected: 0,
                title: 'Zurich Invest Future',
                subtitle: 'Seguro de vida con beneficios adicionales',
                btn_link: 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-future-dic202.pdf'
            },
            {
                selected: 0,
                title: 'Zurich Invest Advance',
                subtitle: 'Seguro de vida con beneficios adicionales',
                btn_link: 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida/2023/zurich-invest-advanced-marzo-2023.pdf'
            }
        ];
        $('#page_5 input[type="checkbox"]:checked').each(function () {
            let val = $(this).val();
            if (val == 0) { products[2].selected += 1; products[3].selected += 1; }
            else if (val == 1) { products[0].selected += 1; products[1].selected += 1; }
            else if (val == 2) { products[2].selected += 1; }
            else if (val == 3) { products[0].selected += 1; products[2].selected += 1; }
            else if (val == 4) { products[0].selected += 1; }
        })

        $('#page_5').addClass('d-none');
        setTimeout(() => {            
            $('#page_6').removeClass('d-none');
        }, 100);
        // window.scrollTo(0,0);
    })
    $('#page_6 #to_whatsapp').click(function () {
        $('#send_email_modal .large_title:first-child').text('Recibí esta información detallada en tu WhatsApp. Completá por favor la siguiente información.')
        $('#send_email_modal').modal({ backdrop: 'static' });
    })
    $('#page_6 #to_contact').click(function () {
        $('#send_email_modal .large_title:first-child').text('Completá por favor la siguiente información y un asesor acreditado en Zurich International Life Sucursal Argentina te contactará en breve.')
        $('#send_email_modal').modal({ backdrop: 'static' });
    })
    $('#send_email_modal_btn').on('click', function (e) {
        console.log('close btn')
        $('#send_email_modal').modal('hide');
    });
    $('#prev_page_5').click(function () {
        $('#page_5').removeClass('d-none');
        $('#page_6').addClass('d-none');
    });
    $('#page_6 .flip_card').click(function() {
        $(this).toggleClass('flipped')
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
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else  selectedImage1 = character_image_group_1[2];
        $('#page_7 .selected-image').attr('src', selectedImage1);
        console.log('member', member, selectedImage1)
        $('#page_7').removeClass('d-none');
        $('#page_6').addClass('d-none');
    });
    /****************   page 7  */
    $('#prev_page_6').click(function () {
        $('#page_6').removeClass('d-none');
        $('#page_7').addClass('d-none');
    });
    let horizonte_temporal = 0;
    let horizonte_temporal_0 = 0;
    $('#page_7 input[type="radio"]').change(function () {        
        $('#page_7 .error').html('&nbsp;');
    });
    $('#to_page_8').click(function () {
        let elem = $('#page_7 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_7 .error').html('&nbsp;');
        } else {
            return $('#page_7 .error').text('Seleccionar una opción');
        }
        horizonte_temporal_0 = parseInt(elem.val());

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_2[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_2[1];
        else  selectedImage1 = character_image_group_2[2];
        $('#page_8 .selected-image').attr('src', selectedImage1);
        $('#page_8').removeClass('d-none');
        $('#page_7').addClass('d-none');
        console.log('horizonte_temporal_0', horizonte_temporal_0);
    })
    /******** page 8  */
    $('#prev_page_7').click(function () {
        $('#page_7').removeClass('d-none');
        $('#page_8').addClass('d-none');
    });
    let horizonte_temporal_1 = 0;
    $('#page_8 input[type="radio"]').change(function () {        
        $('#page_8 .error').html('&nbsp;');
    });
    $('#to_page_9').click(function () {
        let elem = $('#page_8 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_8 .error').html('&nbsp;');
        } else {
            return $('#page_8 .error').text('Seleccionar una opción');
        }
        horizonte_temporal_1 = parseInt(elem.val());

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else  selectedImage1 = character_image_group_1[2];
        $('#page_9 .selected-image').attr('src', selectedImage1);
        $('#page_9').removeClass('d-none');
        $('#page_8').addClass('d-none');
        console.log('horizonte_temporal_1', horizonte_temporal_1);
    })
    /******** page 9  */
    $('#prev_page_8').click(function () {
        $('#page_8').removeClass('d-none');
        $('#page_9').addClass('d-none');
    });
    let tolerancia_al_riesgo = 0;
    let tolerancia_al_riesgo_0 = 0;
    $('#page_9 input[type="radio"]').change(function () {        
        $('#page_9 .error').html('&nbsp;');
    });
    $('#to_page_10').click(function () {
        let elem = $('#page_9 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_9 .error').html('&nbsp;');
        } else {
            return $('#page_9 .error').text('Seleccionar una opción');
        }
        tolerancia_al_riesgo_0 = parseInt(elem.val());

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_2[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_2[1];
        else  selectedImage1 = character_image_group_2[2];
        $('#page_10 .selected-image').attr('src', selectedImage1);
        $('#page_10').removeClass('d-none');
        $('#page_9').addClass('d-none');
        console.log('tolerancia_al_riesgo_0', tolerancia_al_riesgo_0);
    })
    /******** page 10  */
    $('#prev_page_9').click(function () {
        $('#page_9').removeClass('d-none');
        $('#page_10').addClass('d-none');
    });
    let tolerancia_al_riesgo_1 = 0;
    $('#page_10 input[type="radio"]').change(function () {        
        $('#page_10 .error').html('&nbsp;');
    });
    $('#to_page_11').click(function () {
        let elem = $('#page_10 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_10 .error').html('&nbsp;');
        } else {
            return $('#page_10 .error').text('Seleccionar una opción');
        }
        tolerancia_al_riesgo_1 = parseInt(elem.val());

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else  selectedImage1 = character_image_group_1[2];
        $('#page_11 .selected-image').attr('src', selectedImage1);
        $('#page_11').removeClass('d-none');
        $('#page_10').addClass('d-none');
        console.log('tolerancia_al_riesgo_1', tolerancia_al_riesgo_1);
    })
    /******** page 11  */
    $('#prev_page_10').click(function () {
        $('#page_10').removeClass('d-none');
        $('#page_11').addClass('d-none');
    });
    let tolerancia_al_riesgo_2 = [];
    $('#page_11 input[type="checkbox"]').change(function () {    
        let elem = $('#page_11 input[type="checkbox"]:checked');
        if (elem.length > 0) {
            $('#page_11 .error').html('&nbsp; ');
        } else {
            return $('#page_11 .error').text('Por favor, seleccioná una opción');
        }
    });
    $('#to_page_12').click(function () {
        tolerancia_al_riesgo_2 = [];
        let elems = $('#page_11 input[type="checkbox"]:checked');
        if (elems.length > 0) {
            $('#page_11 .error').html('&nbsp; ');
        } else {
            return $('#page_11 .error').text('Por favor, seleccioná una opción');
        }
        $('#page_11 input[type="checkbox"]:checked').each(function () {
            tolerancia_al_riesgo_2.push(parseInt($(this).val()));
        });
        console.log('tolerancia_al_riesgo_2', tolerancia_al_riesgo_2);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_2[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_2[1];
        else  selectedImage1 = character_image_group_2[2];
        $('#page_12 .selected-image').attr('src', selectedImage1);

        $('#page_12').removeClass('d-none');
        $('#page_11').addClass('d-none');
    })
    /******** page 12  */
    $('#prev_page_11').click(function () {
        $('#page_11').removeClass('d-none');
        $('#page_12').addClass('d-none');
    });
    let tolerancia_al_riesgo_3 = 0;
    $('#page_12 input[type="radio"]').change(function () {        
        $('#page_12 .error').html('&nbsp;');
    });
    $('#to_page_13').click(function () {
        let elem = $('#page_12 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_12 .error').html('&nbsp;');
        } else {
            return $('#page_12 .error').text('Seleccionar una opción');
        }
        tolerancia_al_riesgo_3 = parseInt(elem.val());

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else  selectedImage1 = character_image_group_1[2];
        $('#page_13 .selected-image').attr('src', selectedImage1);
        $('#page_13').removeClass('d-none');
        $('#page_12').addClass('d-none');
        console.log('tolerancia_al_riesgo_3', tolerancia_al_riesgo_3);
    })
    /******** page 13  */
    $('#prev_page_12').click(function () {
        $('#page_12').removeClass('d-none');
        $('#page_13').addClass('d-none');
    });
    let tolerancia_al_riesgo_4 = 0;
    $('#page_13 input[type="radio"]').change(function () {        
        $('#page_13 .error').html('&nbsp;');
    });
    $('#to_page_14').click(function () {
        let elem = $('#page_13 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_13 .error').html('&nbsp;');
        } else {
            return $('#page_13 .error').text('Seleccionar una opción');
        }
        tolerancia_al_riesgo_4 = parseInt(elem.val());

        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = character_image_group_1[0];
        else if (character == 'mujer') selectedImage1 = character_image_group_1[1];
        else  selectedImage1 = character_image_group_1[2];
        $('#page_14 .selected-image').attr('src', selectedImage1);
        $('#page_14').removeClass('d-none');
        $('#page_13').addClass('d-none');
        console.log('tolerancia_al_riesgo_4', tolerancia_al_riesgo_4);
        horizonte_temporal = horizonte_temporal_0 + horizonte_temporal_1;
        console.log('horizontal_tempore', horizonte_temporal,horizonte_temporal_0, horizonte_temporal_1);
        tolerancia_al_riesgo = tolerancia_al_riesgo_0 + tolerancia_al_riesgo_1 + tolerancia_al_riesgo_2.reduce((total, num) => total + num, 0) + tolerancia_al_riesgo_3 + tolerancia_al_riesgo_4;
        console.log('tolerancia_al_riesgo', tolerancia_al_riesgo, tolerancia_al_riesgo_0, tolerancia_al_riesgo_1, tolerancia_al_riesgo_2, tolerancia_al_riesgo_3, tolerancia_al_riesgo_4);
        
        
        let icon_horizonte = [
            'https://z-eval.s3.amazonaws.com/misc/1-3.png',
            'https://z-eval.s3.amazonaws.com/misc/2-3.png',
            'https://z-eval.s3.amazonaws.com/misc/3-3.png'
        ]
        if (horizonte_temporal < 3) {
            $('#page_14 .horizonte .content').text("Corto Plazo");
            $('#page_14 .icon-horizonte').attr('src', icon_horizonte[0]);
        } else if (horizonte_temporal >= 3 && horizonte_temporal <= 7) {
            $('#page_14 .horizonte .content').text("Mediano Plazo");
            $('#page_14 .icon-horizonte').attr('src', icon_horizonte[1]);
        } else {
            $('#page_14 .horizonte .content').text("Largo Plazo");
            $('#page_14 .icon-horizonte').attr('src', icon_horizonte[2]);
        }

        let icon_tolerancia = [
            'https://z-eval.s3.amazonaws.com/misc/1-5.png',
            'https://z-eval.s3.amazonaws.com/misc/2-5.png',
            'https://z-eval.s3.amazonaws.com/misc/3-5.png',
            'https://z-eval.s3.amazonaws.com/misc/4-5.png',
            'https://z-eval.s3.amazonaws.com/misc/5-5.png'
        ]
        if (tolerancia_al_riesgo < 16) {
            $('#page_14 .tolerancia .content').text('Conservador');
            $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[0]);
        } else if (tolerancia_al_riesgo >= 16 && tolerancia_al_riesgo <= 21) {
            $('#page_14 .tolerancia .content').text('Algo Conservador');
            $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[1]);
        } else if (tolerancia_al_riesgo >= 22 && tolerancia_al_riesgo <= 26) {
            $('#page_14 .tolerancia .content').text('Moderado');
            $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[2]);
        } else if (tolerancia_al_riesgo >= 27 && tolerancia_al_riesgo <= 31) {
            $('#page_14 .tolerancia .content').text('Algo Arriesgado');
            $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[3]);
        } else {
            $('#page_14 .tolerancia .content').text('Arriesgado');
            $('#page_14 .icon-tolerancia').attr('src', icon_tolerancia[4]);
        } 

        $('#confetti-image').removeClass('d-none');
        setTimeout(() => {
            $('#confetti-image').addClass('d-none');
        }, 2500)
        $('#page_14 .subtitle:first-of-type').text(`¡Felicitaciones ${name}!`)
    })
    /******** page 14  */
    $('#prev_page_13').click(function () {
        $('#page_13').removeClass('d-none');
        $('#page_14').addClass('d-none');
    });
    $('#page_14 #to_whatsapp').click(function () {
        $('#send_email_modal .large_title:first-child').text('Recibí esta información detallada en tu WhatsApp. Completá por favor la siguiente información.')
        $('#send_email_modal').modal({ backdrop: 'static' });
    })
    $('#page_14 #to_contact').click(function () {
        $('#send_email_modal .large_title:first-child').text('Completá por favor la siguiente información y un asesor acreditado en Zurich International Life Sucursal Argentina te contactará en breve.')
        $('#send_email_modal').modal({ backdrop: 'static' });
    })
})