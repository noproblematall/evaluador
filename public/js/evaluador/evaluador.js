$(document).ready((function(){var e="";$("#page_1 .start_button").click((function(){$("#page_1").addClass("d-none"),$("#page_2").removeClass("d-none")})),$("#page_2 input[type='radio']").change((function(){var e=$(this).parent().parent(),a=$("#page_2 input[type='radio']").parent().parent().parent().children().eq(2),t=$("<div></div>"),n=$("<div></div>");t.insertBefore(e),n.insertBefore(a),t.replaceWith(a),n.replaceWith(e),$(this).val()})),$("#to_page_3").click((function(){var a=$("#name").val(),t=$("#age").val();return a?($("#name").css("color","unset"),!t||isNaN(t)?($("#age").css("color","red"),$("#page_2 .error").text("Please input your age.")):($("#age").css("color","unset"),$('#page_2 input[type="radio"]:checked').val(),e=$('#page_2 input[type="radio"]:checked').siblings().filter("label").find("img.activated").attr("src"),$("#page_2").addClass("d-none"),void $("#page_3").removeClass("d-none"))):($("#name").css("color","red"),$("#page_2 .error").text("Please input your name."))}));var a={adultos:0,adolescentes:0,ninos:0,bebes:0};$("#page_3 .minus-btn").click((function(){var e=$(this).siblings().filter("input"),t=e.attr("id"),n=parseInt(e.val());if(n>0){var c=n-1;e.val(c),$("#page_3 .image-item.".concat(t," .number")).text(c),$("#page_3 .item.".concat(t," .item-value")).text(c),c>0?($("#page_3 .image-item.".concat(t)).addClass("activated"),$("#page_3 .item.".concat(t)).addClass("activated")):($("#page_3 .image-item.".concat(t)).removeClass("activated"),$("#page_3 .item.".concat(t)).removeClass("activated")),a[t]=c}})),$("#page_3 .plus-btn").click((function(){var e=$(this).siblings().filter("input"),t=e.attr("id"),n=parseInt(e.val())+1;e.val(n),$("#page_3 .image-item.".concat(t," .number")).text(n),$("#page_3 .item.".concat(t," .item-value")).text(n),$("#page_3 .image-item.".concat(t)).addClass("activated"),$("#page_3 .item.".concat(t)).addClass("activated"),a[t]=n})),$("#prev_page_2").click((function(){$("#page_2").removeClass("d-none"),$("#page_3").addClass("d-none")})),$("#to_page_4").click((function(){$("#page_3").addClass("d-none"),$("#page_4").removeClass("d-none"),$("#page_4 .title").text("Contanos sobre vos"),$("#page_4 .selected-image").attr("src",e),console.log("member",a,e)})),$("#prev_page_3").click((function(){$("#page_3").removeClass("d-none"),$("#page_4").addClass("d-none")})),$("#to_page_5").click((function(){var a=$('#page_4 input[type="radio"]:checked');if(!(a.length>0))return $("#page_4 .error").text("por favor seleccione un elemento");$("#page_4 .error").html("&nbsp;"),a.siblings().filter("label").find("p").text(),$("#page_5 .selected-image").attr("src",e),$("#page_5").removeClass("d-none"),$("#page_4").addClass("d-none")})),$("#prev_page_4").click((function(){$("#page_4").removeClass("d-none"),$("#page_5").addClass("d-none")})),$('#page_5 input[type="checkbox"]').change((function(){var e=$(this).attr("id"),a=$(this).prop("checked");"todo-5"!=e?($("#page_5 input#todo-5").prop("checked",!1),a?$("#page_5 .image-container .".concat(e)).addClass("activated"):$("#page_5 .image-container .".concat(e)).removeClass("activated")):$("#page_5 .image-container img").each((function(){$(this).removeClass("activated")})),$("#page_5 .error").html(" &nbsp;")})),$("#page_5 #todo-5").change((function(){var e=$(this).prop("checked");console.log("checked",e),e&&($('#page_5 input[type="checkbox"]').prop("checked",!1),$("#page_5 input#todo-5").prop("checked",!0))}));var t=[];$("#to_page_6").click((function(){if(!($('#page_5 input[type="checkbox"]:checked').length>0))return $("#page_5 .error").text("Por favor, seleccioná una opción");$("#page_5 .error").html("&nbsp; "),$('#page_5 input[type="checkbox"]:checked').each((function(){t.push($(this).val())})),console.log("todo",t),$("#page_6 .selected-image").attr("src",e),$("#page_6").removeClass("d-none"),$("#page_5").addClass("d-none")})),$("#prev_page_5").click((function(){$("#page_5").removeClass("d-none"),$("#page_6").addClass("d-none")})),$('#page_6 input[type="checkbox"]').change((function(){var e=$(this).attr("id"),a=$(this).prop("checked");"plan-5"!=e?($("#page_6 input#plan-5").prop("checked",!1),a?$("#page_6 .image-container .".concat(e)).addClass("activated"):$("#page_6 .image-container .".concat(e)).removeClass("activated")):$("#page_6 .image-container img").each((function(){$(this).removeClass("activated")})),$("#page_6 .error").html(" &nbsp;")})),$("#page_6 #plan-5").change((function(){var e=$(this).prop("checked");console.log("checked",e),e&&($('#page_6 input[type="checkbox"]').prop("checked",!1),$("#page_6 input#plan-5").prop("checked",!0))}));var n=[];$("#to_page_7").click((function(){if(!($('#page_6 input[type="checkbox"]:checked').length>0))return $("#page_6 .error").text("Por favor, seleccioná una opción");$("#page_6 .error").html("&nbsp; "),$('#page_6 input[type="checkbox"]:checked').each((function(){n.push($(this).val())})),console.log("plan",n),$("#page_7 .selected-image").attr("src",e);var a=[{selected:0,title:"Zurich Options",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-options-dic201.pdf"},{selected:0,title:"Zurich University",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-university-dic203.pdf"},{selected:0,title:"Zurich Invest Future",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-future-dic202.pdf"},{selected:0,title:"Zurich Invest Advance",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida/2023/zurich-invest-advanced-marzo-2023.pdf"}];$('#page_6 input[type="checkbox"]:checked').each((function(){var e=$(this).val();0==e?(a[2].selected+=1,a[3].selected+=1):1==e?(a[0].selected+=1,a[1].selected+=1):2==e?a[2].selected+=1:3==e?(a[0].selected+=1,a[2].selected+=1):4==e&&(a[0].selected+=1)})),$("#page_7 .items-container .items").html("");var t=0,c="";a.map((function(e,a){e.selected>0&&t<2&&(c+="\n                <div class='item d-flex justify-content-between align-items-center mb-3'>\n                    <div class='content'>\n                        <div class='item-title lh-1'>".concat(e.title,"</div>\n                        <p class='item-description'>").concat(e.subtitle,"</p>\n                    </div>\n                    <a href='").concat(e.btn_link,"' alt='Pdf' target='_blank' class='info'>\n                        Saber más\n                    </a>\n                </div>"),t>0&&$("#page_6 .consider-description").text("Los planes que mejor se adaptan a tu caso:"),t++)})),$("#page_7 .items-container .items").html(c),console.log("page 7",a,c),$("#page_7").removeClass("d-none"),$("#page_6").addClass("d-none")})),$("#prev_page_6").click((function(){$("#page_6").removeClass("d-none"),$("#page_7").addClass("d-none")}))}));