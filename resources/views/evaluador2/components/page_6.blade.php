<section id="page_6" class="page-content animate__animated animate__fadeIn d-none">
    <!-- <section id="page_6" class="page-content animate__animated animate__fadeIn "> -->
    <div class="card-backdrop position-fixed z-1"></div>
    <div class='d-flex justify-content-between align-items-center mb-4'>
        <p class='prev_link mt-2 mb-1' id='prev_page_5'>
            <span class="icon icon--arrow-long-left_24"></span>
            Regresar a la página anterior
        </p>
        <img src="https://movilidadz.s3.amazonaws.com/Zurich+Top+Logo+Cot.png" height="25" alt="logo">
    </div>
    @if (!empty($broker_detail))
        <div class="broker-info-section row px-0 py-2 mb-4">
            <div class="col-4 text-center">
                <img src="{{ $broker_detail['broker_image'] }}" alt="broker image" width="90" />
            </div>
            <div class="col-8 text-center">
                <span class="agency-name">{{ $broker_detail['agency_name'] }}</span>
                <h5 class="broker-name">{{ $broker_detail['broker_name'] }}</h5>
                <p class="broker-legend">{{ $broker_detail['broker_legend'] }}</p>
            </div>
        </div>
    @endif

    <div class='d-flex  align-items-center'>
        <img src='https://z-eval.s3.amazonaws.com/misc/idea.png' alt='img' width='18' />
        <p class='color-blue px-2 title'>Planes que se adaptan para tu caso</p>
    </div>
    <div class='card mt-2 px-3 p-3'>
        <div class="row px-3 pt-3 pb-3">
            <div class="col-3">
                <img class="final-img col-3 w-100" src="https://z-eval.s3.amazonaws.com/pers/Perfil+H.png" />
            </div>
            <div class="col-9 d-flex flex-column justify-content-center">
                <p class='text-center mb-0 subtitle mx-3'>¡Felicitaciones!</p>
                <p class='text-center subtitle'>Completaste tu evaluación</p>
            </div>
        </div>
        <hr />
        <div class='items-container mt-2 row px-0'>
            <div class='flip_card col-6 pe-2 ps-0 pointer'>
                <img class='plan-esencial card_front' src='https://z-eval.s3.amazonaws.com/misc/plan+esencial.gif' alt='plan + esencial' />
                <img class='card_back' src='/img/card_back.png' alt='card_back' />
            </div>
            <div class='flip_card col-6 pe-0 ps-2 pointer'>
                <img class='plan-extendido card_front' src='https://z-eval.s3.amazonaws.com/misc/plan+extendido.gif' alt='plan + extendido' />
                <img class='card_back' src='/img/card_back.png' alt='card_back' />
            </div>
        </div>
        <div class='button-group my-4'>
            <button class='continue_btn mx-auto my-2' id='to_download_result'>Guardar mis resultados</button>
            <button class='continue_btn mx-auto my-2 d-flex justify-content-center align-items-center' id='to_whatsapp'>
                Quiero saber más &nbsp;
                <img src="https://z-eval.s3.amazonaws.com/WA.png" alt="whatsapp" class="col-1" />
            </button>
            <button class='continue_btn mx-auto my-2' id='to_page_7'>Conocer mi perfil inversor</button>
        </div>
    </div>
    <p class="footer-legend px-2">
        Consultá los términos y condiciones del producto ingresando a
        <a href="https://www.zurich.com.ar/es-ar/personas/vida" target="_blank">https://www.zurich.com.ar/es-ar/personas/vida</a>
    </p>
    <div class="text-center">
        <img class="col-8" src="https://z-eval.s3.amazonaws.com/Pie+SSN+evaluador.png" data-xblocker="passed" style="visibility: visible;">
    </div>
</section>