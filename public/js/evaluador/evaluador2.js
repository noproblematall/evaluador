$(document).ready((function(){var e="",a="",t="";$("#to_page_1").click((function(){$("#page_1").removeClass("d-none"),$("#page_0").addClass("d-none")})),setTimeout((function(){$("#page_0").click((function(){$("#page_1").removeClass("d-none"),$("#page_0").addClass("d-none")}))}),2e3),setTimeout((function(){$("#to_page_1").removeClass("hide")}),2e3),$("#to_page_2").click((function(){var o=$("#name").val(),r=$("#age").val();return character1=$('#page_1 input[type="radio"]:checked').val(),console.log("character",character1,o,r),character1?o?($("#name").parent().removeClass("has-error"),r?($("#page_1 .error").html("&nbsp;"),$("#age").parent().removeClass("has-error"),t=o,e=character1,a=$('#page_1 input[type="radio"]:checked').parent().siblings().filter("label").find("img.activated").attr("src"),$("#page_1").addClass("d-none"),$("#page_2").removeClass("d-none"),console.log("selected Image",a),void window.scrollTo({top:0,behavior:"smooth"})):($("#age").parent().addClass("has-error"),$("#page_1 .error").text("Por favor completá tus datos"))):($("#name").parent().addClass("has-error"),$("#page_1 .error").text("Por favor completá tus datos")):$("#page_1 .error").text("Por favor seleccioná un personaje")})),$('#page_1 input[type="radio"]').change((function(){$("#page_1 label img.activated").removeClass("d-none"),$("#page_1 label img.deactivated").removeClass("d-none"),$("#page_1 label img.activated").addClass("d-none");var e=$(this);e.parent().siblings().filter("label").find("img.activated").removeClass("d-none"),e.parent().siblings().filter("label").find("img.deactivated").addClass("d-none"),$("#page_1 img").css({animation:"unset"})}));var o={adultos:0,jovenes:0,ninos:0,bebes:0};$("#page_2 .minus-btn").click((function(){var e=$(this).siblings().filter("input"),a=e.attr("id"),t=parseInt(e.val());if(t>0){var r=t-1;e.val(r),$("#page_2 .image-item[data-item=".concat(a,"] .number")).text(r),$("#page_2 .item[data-item=".concat(a,"] .item-value")).text(r),r>0?($("#page_2 .image-item[data-item=".concat(a,"]")).addClass("activated"),$("#page_2 .item[data-item=".concat(a,"]")).addClass("activated")):($("#page_2 .image-item[data-item=".concat(a,"]")).removeClass("activated"),$("#page_2 .item[data-item=".concat(a,"]")).removeClass("activated")),o[a]=r}})),character_image_group_1=["https://z-eval.s3.amazonaws.com/pers/Hombre+Idle.gif","https://z-eval.s3.amazonaws.com/pers/Mujer+Idle.gif","https://z-eval.s3.amazonaws.com/pers/Nobi+Idle.gif"],character_image_group_2=["https://z-eval.s3.amazonaws.com/pers/Hombre+Pensando.gif","https://z-eval.s3.amazonaws.com/pers/Mujer+Pensando.gif","https://z-eval.s3.amazonaws.com/pers/Nobi+Pensando.gif"],$("#page_2 .plus-btn").click((function(){var e=$(this).siblings().filter("input"),a=e.attr("id"),t=parseInt(e.val());if(t<=7){var r=t+1;e.val(r),$("#page_2 .image-item[data-item=".concat(a,"] .number")).text(r),$("#page_2 .item[data-item=".concat(a,"] .item-value")).text(r),$("#page_2 .image-item[data-item=".concat(a,"]")).addClass("activated"),$("#page_2 .item[data-item=".concat(a,"]")).addClass("activated"),o[a]=r}})),$("#page_2 .image-item").click((function(){var e=$(this).data("item");console.log("item",e),$("#page_2 .item[data-item=".concat(e,"] .plus-btn")).trigger("click")})),$("#prev_page_1").click((function(){$("#page_1").removeClass("d-none"),$("#page_2").addClass("d-none")})),$("#to_page_3").click((function(){$("#page_2").addClass("d-none"),$("#page_3").removeClass("d-none"),$("#page_3 .title").text("Contanos sobre vos"),$("#page_3 .todo-description").text("¿Estás trabajando, ".concat(t));var r=a;r="hombre"==e?character_image_group_1[0]:"mujer"==e?character_image_group_1[1]:character_image_group_1[2],$("#page_3 .selected-image").attr("src",r),console.log("member",o,a)})),$("#prev_page_2").click((function(){$("#page_2").removeClass("d-none"),$("#page_3").addClass("d-none")}));var r="";$("#to_page_4").click((function(){var t=$('#page_3 input[type="radio"]:checked');if(!(t.length>0))return $("#page_3 .error").text("por favor seleccione un elemento");$("#page_3 .error").html("&nbsp;"),r=t.siblings().filter("label").find("p").text();var o=a;o="hombre"==e?character_image_group_2[0]:"mujer"==e?character_image_group_2[1]:character_image_group_2[2],$("#page_4 .selected-image").attr("src",o),$("#page_4").removeClass("d-none"),$("#page_3").addClass("d-none"),console.log("job",r)})),$("#prev_page_3").click((function(){$("#page_3").removeClass("d-none"),$("#page_4").addClass("d-none")})),$('#page_4 input[type="checkbox"]').change((function(){var e=$(this).attr("id"),a=$(this).prop("checked");"todo-5"!=e?($("#page_4 input#todo-5").prop("checked",!1),a?$("#page_4 .image-container .".concat(e)).addClass("activated"):$("#page_4 .image-container .".concat(e)).removeClass("activated")):$("#page_4 .image-container img").each((function(){$(this).removeClass("activated")})),$("#page_4 .error").html(" &nbsp;")})),$("#page_4 #todo-5").change((function(){var e=$(this).prop("checked");console.log("checked",e),e&&($('#page_4 input[type="checkbox"]').prop("checked",!1),$("#page_4 input#todo-5").prop("checked",!0))}));var n=[];$("#to_page_5").click((function(){if(!($('#page_4 input[type="checkbox"]:checked').length>0))return $("#page_4 .error").text("Por favor, seleccioná una opción");$("#page_4 .error").html("&nbsp; "),$('#page_4 input[type="checkbox"]:checked').each((function(){n.push($(this).val())})),console.log("todo",n);var t=a;t="hombre"==e?character_image_group_1[0]:"mujer"==e?character_image_group_1[1]:character_image_group_1[2],$("#page_5 .selected-image").attr("src",t),$("#page_5").removeClass("d-none"),$("#page_4").addClass("d-none")})),$("#prev_page_4").click((function(){$("#page_4").removeClass("d-none"),$("#page_5").addClass("d-none")})),$('#page_5 input[type="checkbox"]').change((function(){var e=$(this).attr("id"),a=$(this).prop("checked");"plan-5"!=e?($("#page_5 input#plan-5").prop("checked",!1),a?$("#page_5 .image-container .".concat(e)).addClass("activated"):$("#page_5 .image-container .".concat(e)).removeClass("activated")):$("#page_5 .image-container img").each((function(){$(this).removeClass("activated")})),$("#page_5 .error").html(" &nbsp;")})),$("#page_5 #plan-5").change((function(){var e=$(this).prop("checked");console.log("checked",e),e&&($('#page_5 input[type="checkbox"]').prop("checked",!1),$("#page_5 input#plan-5").prop("checked",!0))}));var c=[];$("#to_page_6").click((function(){if(!($('#page_5 input[type="checkbox"]:checked').length>0))return $("#page_5 .error").text("Por favor, seleccioná una opción");$("#page_5 .error").html("&nbsp; "),$('#page_5 input[type="checkbox"]:checked').each((function(){c.push($(this).val())})),console.log("plan",c);var t=a;t="hombre"==e?character_image_group_2[0]:"mujer"==e?character_image_group_2[1]:character_image_group_2[2],$("#page_6 .selected-image").attr("src",t);var o=[{selected:0,title:"Zurich Options",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-options-dic201.pdf"},{selected:0,title:"Zurich University",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-university-dic203.pdf"},{selected:0,title:"Zurich Invest Future",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida-2021/zurich-invest-future-dic202.pdf"},{selected:0,title:"Zurich Invest Advance",subtitle:"Seguro de vida con beneficios adicionales",btn_link:"https://www.zurich.com.ar/-/media/project/zwp/argentina/docs/vida/2023/zurich-invest-advanced-marzo-2023.pdf"}];$('#page_5 input[type="checkbox"]:checked').each((function(){var e=$(this).val();0==e?(o[2].selected+=1,o[3].selected+=1):1==e?(o[0].selected+=1,o[1].selected+=1):2==e?o[2].selected+=1:3==e?(o[0].selected+=1,o[2].selected+=1):4==e&&(o[0].selected+=1)})),$("#page_5").addClass("d-none"),setTimeout((function(){$("#page_6").removeClass("d-none")}),100)})),$("#page_6 #to_whatsapp").click((function(){$("#send_email_modal .large_title:first-child").text("Recibí esta información detallada en tu WhatsApp. Completá por favor la siguiente información."),$("#send_email_modal").modal({backdrop:"static"})})),$("#page_6 #to_contact").click((function(){$("#send_email_modal .large_title:first-child").text("Completá por favor la siguiente información y un asesor acreditado en Zurich International Life Sucursal Argentina te contactará en breve."),$("#send_email_modal").modal({backdrop:"static"})})),$("#send_email_modal_btn").on("click",(function(e){console.log("close btn"),$("#send_email_modal").modal("hide")})),$("#prev_page_5").click((function(){$("#page_5").removeClass("d-none"),$("#page_6").addClass("d-none")})),$("#page_6 .flip_card").click((function(){$(this).toggleClass("flipped"),$("#page_6 .selected-image ").toggleClass("opacity-0"),$("#page_6 .flip_card img:first-child").toggleClass("opacity-0")})),$("#to_page_7").click((function(){var t=a;t="hombre"==e?character_image_group_1[0]:"mujer"==e?character_image_group_1[1]:character_image_group_1[2],$("#page_7 .selected-image").attr("src",t),console.log("member",o,t),$("#page_7").removeClass("d-none"),$("#page_6").addClass("d-none")})),$("#prev_page_6").click((function(){$("#page_6").removeClass("d-none"),$("#page_7").addClass("d-none")}));var i=0,p=0;$('#page_7 input[type="radio"]').change((function(){$("#page_7 .error").html("&nbsp;")})),$("#to_page_8").click((function(){var t=$('#page_7 input[type="radio"]:checked');if(!(t.length>0))return $("#page_7 .error").text("Seleccionar una opción");$("#page_7 .error").html("&nbsp;"),p=parseInt(t.val());var o=a;o="hombre"==e?character_image_group_2[0]:"mujer"==e?character_image_group_2[1]:character_image_group_2[2],$("#page_8 .selected-image").attr("src",o),$("#page_8").removeClass("d-none"),$("#page_7").addClass("d-none"),console.log("horizonte_temporal_0",p)})),$("#prev_page_7").click((function(){$("#page_7").removeClass("d-none"),$("#page_8").addClass("d-none")}));var s=0;$('#page_8 input[type="radio"]').change((function(){$("#page_8 .error").html("&nbsp;")})),$("#to_page_9").click((function(){var t=$('#page_8 input[type="radio"]:checked');if(!(t.length>0))return $("#page_8 .error").text("Seleccionar una opción");$("#page_8 .error").html("&nbsp;"),s=parseInt(t.val());var o=a;o="hombre"==e?character_image_group_1[0]:"mujer"==e?character_image_group_1[1]:character_image_group_1[2],$("#page_9 .selected-image").attr("src",o),$("#page_9").removeClass("d-none"),$("#page_8").addClass("d-none"),console.log("horizonte_temporal_1",s)})),$("#prev_page_8").click((function(){$("#page_8").removeClass("d-none"),$("#page_9").addClass("d-none")}));var g=0,l=0;$('#page_9 input[type="radio"]').change((function(){$("#page_9 .error").html("&nbsp;")})),$("#to_page_10").click((function(){var t=$('#page_9 input[type="radio"]:checked');if(!(t.length>0))return $("#page_9 .error").text("Seleccionar una opción");$("#page_9 .error").html("&nbsp;"),l=parseInt(t.val());var o=a;o="hombre"==e?character_image_group_2[0]:"mujer"==e?character_image_group_2[1]:character_image_group_2[2],$("#page_10 .selected-image").attr("src",o),$("#page_10").removeClass("d-none"),$("#page_9").addClass("d-none"),console.log("tolerancia_al_riesgo_0",l)})),$("#prev_page_9").click((function(){$("#page_9").removeClass("d-none"),$("#page_10").addClass("d-none")}));var _=0;$('#page_10 input[type="radio"]').change((function(){$("#page_10 .error").html("&nbsp;")})),$("#to_page_11").click((function(){var t=$('#page_10 input[type="radio"]:checked');if(!(t.length>0))return $("#page_10 .error").text("Seleccionar una opción");$("#page_10 .error").html("&nbsp;"),_=parseInt(t.val());var o=a;o="hombre"==e?character_image_group_1[0]:"mujer"==e?character_image_group_1[1]:character_image_group_1[2],$("#page_11 .selected-image").attr("src",o),$("#page_11").removeClass("d-none"),$("#page_10").addClass("d-none"),console.log("tolerancia_al_riesgo_1",_)})),$("#prev_page_10").click((function(){$("#page_10").removeClass("d-none"),$("#page_11").addClass("d-none")}));var d=[];$('#page_11 input[type="checkbox"]').change((function(){if(!($('#page_11 input[type="checkbox"]:checked').length>0))return $("#page_11 .error").text("Por favor, seleccioná una opción");$("#page_11 .error").html("&nbsp; ")})),$("#to_page_12").click((function(){if(d=[],!($('#page_11 input[type="checkbox"]:checked').length>0))return $("#page_11 .error").text("Por favor, seleccioná una opción");$("#page_11 .error").html("&nbsp; "),$('#page_11 input[type="checkbox"]:checked').each((function(){d.push(parseInt($(this).val()))})),console.log("tolerancia_al_riesgo_2",d);var t=a;t="hombre"==e?character_image_group_2[0]:"mujer"==e?character_image_group_2[1]:character_image_group_2[2],$("#page_12 .selected-image").attr("src",t),$("#page_12").removeClass("d-none"),$("#page_11").addClass("d-none")})),$("#prev_page_11").click((function(){$("#page_11").removeClass("d-none"),$("#page_12").addClass("d-none")}));var m=0;$('#page_12 input[type="radio"]').change((function(){$("#page_12 .error").html("&nbsp;")})),$("#to_page_13").click((function(){var t=$('#page_12 input[type="radio"]:checked');if(!(t.length>0))return $("#page_12 .error").text("Seleccionar una opción");$("#page_12 .error").html("&nbsp;"),m=parseInt(t.val());var o=a;o="hombre"==e?character_image_group_1[0]:"mujer"==e?character_image_group_1[1]:character_image_group_1[2],$("#page_13 .selected-image").attr("src",o),$("#page_13").removeClass("d-none"),$("#page_12").addClass("d-none"),console.log("tolerancia_al_riesgo_3",m)})),$("#prev_page_12").click((function(){$("#page_12").removeClass("d-none"),$("#page_13").addClass("d-none")}));var u=0;$('#page_13 input[type="radio"]').change((function(){$("#page_13 .error").html("&nbsp;")})),$("#to_page_14").click((function(){var o=$('#page_13 input[type="radio"]:checked');if(!(o.length>0))return $("#page_13 .error").text("Seleccionar una opción");$("#page_13 .error").html("&nbsp;"),u=parseInt(o.val());var r=a;r="hombre"==e?character_image_group_1[0]:"mujer"==e?character_image_group_1[1]:character_image_group_1[2],$("#page_14 .selected-image").attr("src",r),$("#page_14").removeClass("d-none"),$("#page_13").addClass("d-none"),console.log("tolerancia_al_riesgo_4",u),i=p+s,console.log("horizontal_tempore",i,p,s),g=l+_+d.reduce((function(e,a){return e+a}),0)+m+u,console.log("tolerancia_al_riesgo",g,l,_,d,m,u);var n=["https://z-eval.s3.amazonaws.com/misc/1-3.png","https://z-eval.s3.amazonaws.com/misc/2-3.png","https://z-eval.s3.amazonaws.com/misc/3-3.png"];i<3?($("#page_14 .horizonte .content").text("Corto Plazo"),$("#page_14 .icon-horizonte").attr("src",n[0])):i>=3&&i<=7?($("#page_14 .horizonte .content").text("Mediano Plazo"),$("#page_14 .icon-horizonte").attr("src",n[1])):($("#page_14 .horizonte .content").text("Largo Plazo"),$("#page_14 .icon-horizonte").attr("src",n[2]));var c=["https://z-eval.s3.amazonaws.com/misc/1-5.png","https://z-eval.s3.amazonaws.com/misc/2-5.png","https://z-eval.s3.amazonaws.com/misc/3-5.png","https://z-eval.s3.amazonaws.com/misc/4-5.png","https://z-eval.s3.amazonaws.com/misc/5-5.png"];g<16?($("#page_14 .tolerancia .content").text("Conservador"),$("#page_14 .icon-tolerancia").attr("src",c[0])):g>=16&&g<=21?($("#page_14 .tolerancia .content").text("Algo Conservador"),$("#page_14 .icon-tolerancia").attr("src",c[1])):g>=22&&g<=26?($("#page_14 .tolerancia .content").text("Moderado"),$("#page_14 .icon-tolerancia").attr("src",c[2])):g>=27&&g<=31?($("#page_14 .tolerancia .content").text("Algo Arriesgado"),$("#page_14 .icon-tolerancia").attr("src",c[3])):($("#page_14 .tolerancia .content").text("Arriesgado"),$("#page_14 .icon-tolerancia").attr("src",c[4])),$("#confetti-image").removeClass("d-none"),setTimeout((function(){$("#confetti-image").addClass("d-none")}),2500),$("#page_14 .subtitle:first-of-type").text("¡Felicitaciones ".concat(t,"!"))})),$("#prev_page_13").click((function(){$("#page_13").removeClass("d-none"),$("#page_14").addClass("d-none")})),$("#page_14 #to_whatsapp").click((function(){$("#send_email_modal .large_title:first-child").text("Recibí esta información detallada en tu WhatsApp. Completá por favor la siguiente información."),$("#send_email_modal").modal({backdrop:"static"})})),$("#page_14 #to_contact").click((function(){$("#send_email_modal .large_title:first-child").text("Completá por favor la siguiente información y un asesor acreditado en Zurich International Life Sucursal Argentina te contactará en breve."),$("#send_email_modal").modal({backdrop:"static"})}))}));