$(document).ready(function () {
    let character = '';
    let selectedImage = '';
    let name = '';
    let age = '';

    $('#page_1 .start_button').click(function () {
        $('#page_1').addClass('d-none');
        $('#page_2').removeClass('d-none');
    })
    /*********   page 2  ************/
    $("#page_2 input[type='radio']").change(function () {
        let selectedElem = $(this).parent().parent();
        let mediumElem = $("#page_2 input[type='radio']").parent().parent().parent().children().eq(2);
        let temp1 = $('<div></div>');
        let temp2 = $('<div></div>');
        temp1.insertBefore(selectedElem);
        temp2.insertBefore(mediumElem);
        temp1.replaceWith(mediumElem);
        temp2.replaceWith(selectedElem);
        character = $(this).val();
    })
    $('#to_page_3').click(function () {
        let name1 = $('#name').val();
        let age1 = $('#age').val();
        if (!name1) {
            $('#name').css('color', 'red');
            return $('#page_2 .error').text('Please input your name.')
        }
        $('#name').css('color', 'unset');
        if (!age1 || isNaN(age1)) {
            $('#age').css('color', 'red');
            return $('#page_2 .error').text('Please input your age.')
        }
        $('#age').css('color', 'unset');
        name = name1; age = age1;
        character = $('#page_2 input[type="radio"]:checked').val();
        selectedImage = $('#page_2 input[type="radio"]:checked').siblings().filter('label').find('img.activated').attr('src');
        $('#page_2').addClass('d-none');
        $('#page_3').removeClass('d-none');

    })
    /*********   page 3  ************/
    let member = {
        adultos: 0,
        adolescentes: 0,
        ninos: 0,
        bebes: 0
    };
    $('#page_3 .minus-btn').click(function () {
        let input_elem = $(this).siblings().filter('input');
        let input_name = input_elem.attr('id');
        let input_value = parseInt(input_elem.val());
        if (input_value > 0) {
            let val = input_value - 1;
            input_elem.val(val);
            $(`#page_3 .image-item.${input_name} .number`).text(val);
            $(`#page_3 .item.${input_name} .item-value`).text(val);
            if (val > 0) {
                $(`#page_3 .image-item.${input_name}`).addClass('activated');
                $(`#page_3 .item.${input_name}`).addClass('activated');
            } else {
                $(`#page_3 .image-item.${input_name}`).removeClass('activated');
                $(`#page_3 .item.${input_name}`).removeClass('activated');
            }
            member[input_name] = val;
        }
    })
    $('#page_3 .plus-btn').click(function () {
        let input_elem = $(this).siblings().filter('input');
        let input_name = input_elem.attr('id');
        let input_value = parseInt(input_elem.val());
        let val = input_value + 1;
        input_elem.val(val);
        $(`#page_3 .image-item.${input_name} .number`).text(val);
        $(`#page_3 .item.${input_name} .item-value`).text(val);
        $(`#page_3 .image-item.${input_name}`).addClass('activated');
        $(`#page_3 .item.${input_name}`).addClass('activated');
        member[input_name] = val;
    })
    $('#prev_page_2').click(function () {
        $('#page_2').removeClass('d-none');
        $('#page_3').addClass('d-none');
    });
    $('#to_page_4').click(function () {
        $('#page_3').addClass('d-none');
        $('#page_4').removeClass('d-none');

        $('#page_4 .title').text(`¿Estás trabajando, ${name}?`);
        $('#page_4 .selected-image').attr('src', selectedImage);
        console.log('member', member, selectedImage)
    })
    /******** page 4  */
    $('#prev_page_3').click(function () {
        $('#page_3').removeClass('d-none');
        $('#page_4').addClass('d-none');
    });
    let job = '';
    $('#to_page_5').click(function () {
        let elem = $('#page_4 input[type="radio"]:checked');
        if (elem.length > 0) {
            $('#page_4 .error').html('&nbsp;');
        } else {
            return $('#page_4 .error').text('por favor seleccione un elemento');
        }
        job = elem.siblings().filter('label').find('p').text();

        $('#page_5 .selected-image').attr('src', selectedImage);
        $('#page_5').removeClass('d-none');
        $('#page_4').addClass('d-none');
    })
    /******** page 5  */
    $('#prev_page_4').click(function () {
        $('#page_4').removeClass('d-none');
        $('#page_5').addClass('d-none');
    });
    $('#page_5 input[type="checkbox"]').change(function(){
        let id = $(this).attr('id');
        let checked = $(this).prop('checked');
        if (id != 'todo-5') {
            $('#page_5 input#todo-5').prop('checked', false);  
            if (!!checked) $(`#page_5 .image-container .${id}`).addClass('activated');
            else $(`#page_5 .image-container .${id}`).removeClass('activated');
        } else {
            $('#page_5 .image-container img').each(function(){
                $(this).removeClass('activated');
            })          
        }       
        $('#page_5 .error').html(' &nbsp;');
    })
    $('#page_5 #todo-5').change(function(){
        let checked = $(this).prop('checked');
        console.log('checked', checked)
        if (!!checked) {
            $('#page_5 input[type="checkbox"]').prop('checked', false);
            $('#page_5 input#todo-5').prop('checked', true);
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
    $('#to_page_6').click(function () {
        let elem = $('#page_5 input[type="checkbox"]:checked');
        if (elem.length > 0) {
            $('#page_5 .error').html('&nbsp; ');
        } else {
            return $('#page_5 .error').text('por favor seleccione artículos');
        }
        $('#page_5 input[type="checkbox"]:checked').each(function(){
            todo.push($(this).val());
        });
        console.log('todo', todo);
        $('#page_6 .selected-image').attr('src', selectedImage);

        $('#page_6').removeClass('d-none');
        $('#page_5').addClass('d-none');
    })
    /******** page 5  */
    $('#prev_page_5').click(function () {
        $('#page_5').removeClass('d-none');
        $('#page_6').addClass('d-none');
    });
    $('#page_6 input[type="checkbox"]').change(function(){
        let id = $(this).attr('id');
        let checked = $(this).prop('checked');
        if (id != 'plan-5') {
            $('#page_6 input#plan-5').prop('checked', false);  
            if (!!checked) $(`#page_6 .image-container .${id}`).addClass('activated');
            else $(`#page_6 .image-container .${id}`).removeClass('activated');
        } else {
            $('#page_6 .image-container img').each(function(){
                $(this).removeClass('activated');
            })          
        }       
        $('#page_6 .error').html(' &nbsp;');
    })
    $('#page_6 #plan-5').change(function(){
        let checked = $(this).prop('checked');
        console.log('checked', checked)
        if (!!checked) {
            $('#page_6 input[type="checkbox"]').prop('checked', false);
            $('#page_6 input#plan-5').prop('checked', true);
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
    $('#to_page_7').click(function () {
        let elem = $('#page_6 input[type="checkbox"]:checked');
        if (elem.length > 0) {
            $('#page_6 .error').html('&nbsp; ');
        } else {
            return $('#page_6 .error').text('por favor seleccione artículos');
        }
        $('#page_6 input[type="checkbox"]:checked').each(function(){
            plan.push($(this).val());
        });
        console.log('plan', plan);
        $('#page_7 .selected-image').attr('src', selectedImage);
        let products = [
            {
                selected : 0,
                title : 'Zurich Options',
                subtitle : 'Seguro de vida con beneficios adicionales',
                btn_link : 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-options-dic201.pdf'
            },
            {
                selected : 0,
                title : 'Zurich University',
                subtitle : 'Seguro de vida con beneficios adicionales',
                btn_link : 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-university-dic203.pdf'
            },
            {
                selected : 0,
                title : 'Zurich Invest Future',
                subtitle : 'Seguro de vida con beneficios adicionales',
                btn_link : 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-future-dic202.pdf'
            },
            {
                selected : 0,
                title : 'Zurich Invest Advance',
                subtitle : 'Seguro de vida con beneficios adicionales',
                btn_link : 'https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida/2023/zurich-invest-advanced-marzo-2023.pdf'
            }
        ];
        $('#page_6 input[type="checkbox"]:checked').each(function(){
            let val = $(this).val();
            if (val == 0) { products[2].selected += 1;  products[3].selected += 1; }
            else if (val == 1) { products[0].selected += 1; products[1].selected += 1; }
            else if (val == 2) { products[2].selected += 1;  }
            else if (val == 3) { products[0].selected += 1; products[2].selected += 1; }
            else if (val == 4) { products[0].selected += 1; }
        })
        $('#page_7 .items-container .items').html('');
        let i = 0; let str = '';
        products.map((p, index) => {
            if (p.selected > 0 && i < 2 ) {
                str += `
                <div class='item d-flex justify-content-between align-items-center mb-3'>
                    <div class='content'>
                        <div class='item-title lh-1'>${p.title}</div>
                        <p class='item-description'>${p.subtitle}</p>
                    </div>
                    <a href='${p.btn_link}' alt='Pdf' target='_blank' class='info'>
                        Saber más
                    </a>
                </div>`;   
                if (i > 0) $('#page_6 .consider-description').text('Los planes que mejor se adaptan a tu caso:');             
                i++;
            }
        })
        $('#page_7 .items-container .items').html(str);
        console.log('page 7', products, str);

        $('#page_7').removeClass('d-none');
        $('#page_6').addClass('d-none');        
    })
    /******** page 7  */
    $('#prev_page_6').click(function () {
        $('#page_6').removeClass('d-none');
        $('#page_7').addClass('d-none');
    });
})