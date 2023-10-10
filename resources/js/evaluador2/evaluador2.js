$(document).ready(function () {
    let character = '';
    let selectedImage = '';
    let name = '';
    let age = '';

    /******** page 0  */
    $('#page_0 .box').click(function () {
        $('#page_1').removeClass('d-none');
        $('#page_0').addClass('d-none');
    });
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
    })
    $('#page_1 input[type="radio"]').change(function () {
        $('#page_1 label img.activated').removeClass('d-none')
        $('#page_1 label img.deactivated').removeClass('d-none')
        $('#page_1 label img.activated').addClass('d-none')
        let elem = $(this);
        elem.parent().siblings().filter('label').find('img.activated').removeClass('d-none')
        elem.parent().siblings().filter('label').find('img.deactivated').addClass('d-none')
    })
    /*********   page 2  ************/
    let member = {
        adultos: 0,
        adolescentes: 0,
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
    $('#page_2 .plus-btn').click(function () {
        let input_elem = $(this).siblings().filter('input');
        let input_name = input_elem.attr('id');
        let input_value = parseInt(input_elem.val());
        let val = input_value + 1;
        input_elem.val(val);
        $(`#page_2 .image-item[data-item=${input_name}] .number`).text(val);
        $(`#page_2 .item[data-item=${input_name}] .item-value`).text(val);
        $(`#page_2 .image-item[data-item=${input_name}]`).addClass('activated');
        $(`#page_2 .item[data-item=${input_name}]`).addClass('activated');
        member[input_name] = val;
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

        $('#page_3 .title').text(`¿Estás trabajando, ${name}?`);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = 'https://z-eval.s3.amazonaws.com/pers/PruebaAnimacion.gif'
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

        $('#page_4 .selected-image').attr('src', selectedImage);
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
            return $('#page_4 .error').text('por favor seleccione artículos');
        }
        $('#page_4 input[type="checkbox"]:checked').each(function () {
            todo.push($(this).val());
        });
        console.log('todo', todo);
        $('#page_5 .selected-image').attr('src', selectedImage);

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
            return $('#page_5 .error').text('por favor seleccione artículos');
        }
        $('#page_5 input[type="checkbox"]:checked').each(function () {
            plan.push($(this).val());
        });
        console.log('plan', plan);
        let selectedImage1 = selectedImage;
        if (character == 'hombre') selectedImage1 = 'https://z-eval.s3.amazonaws.com/pers/Animacion+pensando.gif'
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
        $('#page_6 .items-container .items').html('');
        let i = 0; let str = '';
        products.map((p, index) => {
            if (p.selected > 0 && i < 2) {
                str += `
                <div class='item d-flex justify-content-between align-items-center mb-3'>
                    <div class='content'>
                        <div class='item-title lh-1'>${p.title}</div>
                        <p class='item-description'>${p.subtitle}</p>
                    </div>
                    <button class='info'>
                        Saber más
                    </button>
                </div>`;
                if (i > 0) $('#page_6 .consider-description').text('Los planes que mejor se adaptan a tu caso:');
                i++;
            }
        })
        $('#page_6 .items-container .items').html(str);

        $('#page_6').removeClass('d-none');
        $('#page_5').addClass('d-none');

        $('#page_6 .item button.info').click(function () {
            console.log('show modal', $('#send_email_modal').html())
            $('#send_email_modal').modal({ backdrop: 'static' });
        })
        $('#send_email_modal_btn').on('click', function (e) {
            console.log('close btn')
            $('#send_email_modal').modal('hide');
        });
    })
    /******** page 7  */
    $('#prev_page_5').click(function () {
        $('#page_5').removeClass('d-none');
        $('#page_6').addClass('d-none');
    });
})