$(document).ready(function() {
    let character = '';
    let selectedImage = '';
    let name = '';
    let age = '';

    $('#page_1 .start_button').click(function () {
        $('#page_1').addClass('d-none');
        $('#page_2').removeClass('d-none');
    })
    /*********   page 2  ************/
    $("#page_2 input[type='radio']").change(function() {
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
    $('#to_page_3').click(function(){
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
        selectedImage = $('#page_2 input[type="radio"]:checked').siblings().filter('label').find('img.activated').attr('src');
        $('#page_2').addClass('d-none');
        $('#page_3').removeClass('d-none');

    })
    /*********   page 3  ************/
    let member = {
        adultos : 0,
        adolescentes : 0,
        ninos : 0,
        bebes : 0
    };
    $('#page_3 .minus-btn').click(function(){
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
    $('#page_3 .plus-btn').click(function(){
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
    $('#prev_page_2').click(function(){
        $('#page_2').removeClass('d-none');
        $('#page_3').addClass('d-none');
    });
    /******** page 4  */
    $('#to_page_4').click(function() {
        $('#page_3').addClass('d-none');
        $('#page_4').removeClass('d-none');

        $('#page_4 .title').text(`¿Estás trabajando, ${name}?`);
        $('#page_4 .selected-image').attr('src', selectedImage);
        console.log('member', member, selectedImage)
    })
    $('#prev_page_3').click(function(){
        $('#page_3').removeClass('d-none');
        $('#page_4').addClass('d-none');
    });
})