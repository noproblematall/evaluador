<!-- <section id="page_1" class="page-content animate__animated animate__fadeIn d-none"> -->
<section id="page_2" class="page-content animate__animated animate__fadeIn d-none">
    <div class='d-flex justify-content-between align-items-center mb-4'>
        <p class='prev_link mt-2 mb-1' id='prev_page_1'>
            <span class="icon icon--arrow-long-left_24"></span>
            Regresar a la página anterior
        </p>
        <img src="https://movilidadz.s3.amazonaws.com/Zurich+Top+Logo+Cot.png" height="25" alt="logo">
    </div>
    <div class='d-flex  align-items-center'>
        <img src='https://z-eval.s3.amazonaws.com/misc/people.png' alt='img' width='18' />
        <p class='color-blue px-2'>¿Cuántas personas tenés a cargo?</p>
    </div>
    <div class='card mt-2 p-3'>
        <div class='item-selector-box d-flex justify-content-center align-items-center py-3'>
            <div data-item='bebes' class='image-item  col d-flex justify-content-between flex-column'>
                <div class='text-center number-content'>
                    <span class='number'>0</span>
                    <span>x</span>
                </div>
                <div class='image-content d-flex justify-content-center'>
                    <img class='inactivated' src='https://z-eval.s3.amazonaws.com/pers/baby+b.png' alt='Bebes' />
                    <img class='activated' src='https://z-eval.s3.amazonaws.com/pers/baby+a.png' alt='Bebes' />
                </div>
            </div>
            <div data-item='ninos' class='image-item  col d-flex justify-content-between flex-column'>
                <div class='text-center number-content'>
                    <span class='number'>0</span>
                    <span>x</span>
                </div>
                <div class='image-content d-flex justify-content-center'>
                    <img class='inactivated' src='https://z-eval.s3.amazonaws.com/pers/child+b.png' alt='Ninos' />
                    <img class='activated' src='https://z-eval.s3.amazonaws.com/pers/child+a.png' alt='Ninos' />
                </div>
            </div>
            <div data-item='jovenes' class='image-item  col d-flex justify-content-between flex-column'>
                <div class='text-center number-content'>
                    <span class='number'>0</span>
                    <span>x</span>
                </div>
                <div class='image-content d-flex justify-content-center'>
                    <img class='inactivated' src='https://z-eval.s3.amazonaws.com/pers/teen+b.png' alt='Jóvenes' />
                    <img class='activated' src='https://z-eval.s3.amazonaws.com/pers/teen+a.png' alt='Jóvenes' />
                </div>
            </div>
            <div data-item='adultos' class='image-item  col d-flex justify-content-between flex-column'>
                <div class='text-center number-content'>
                    <span class='number'>0</span>
                    <span>x</span>
                </div>
                <div class='image-content d-flex justify-content-center'>
                    <img class='inactivated' src='https://z-eval.s3.amazonaws.com/pers/Mujer+Grande+b.png' alt='Mujer+Grande' />
                    <img class='activated' src='https://z-eval.s3.amazonaws.com/pers/Mujer+Grande+a.png' alt='Mujer+Grande' />
                </div>
            </div>
        </div>
        <hr />
        <div class='items-container mt-4'>
            <div data-item='bebes'  class='item  d-flex justify-content-between align-items-center mt-1'>
                <div>
                    <div class='item-title'>Bebés</div>
                    <p class='item-description'>Hasta 2 años</p>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <input type='hidden' name='bebes' value='0' id='bebes' />
                    <div class='bebes minus-btn d-inline-block'>
                        <span class="icon icon--minus_24"></span>
                    </div>
                    <span class='bebes item-value'>0</span>
                    <div class='bebes plus-btn d-inline-block'>
                        <span class="icon icon--plus_24"></span>
                    </div>
                </div>
            </div>
            <div data-item='ninos'  class='item  d-flex justify-content-between align-items-center mt-1'>
                <div>
                    <div class='item-title'>Niños</div>
                    <p class='item-description'>2 a 11 años</p>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <input type='hidden' name='ninos' value='0' id='ninos' />
                    <div class='ninos minus-btn d-inline-block'>
                        <span class="icon icon--minus_24"></span>
                    </div>
                    <span class='ninos item-value'>0</span>
                    <div class='ninos plus-btn d-inline-block'>
                        <span class="icon icon--plus_24"></span>
                    </div>
                </div>
            </div>
            <div data-item='jovenes'  class='item  d-flex justify-content-between align-items-center mt-1'>
                <div>
                    <div class='item-title'>Jóvenes</div>
                    <p class='item-description'>12 a 25 años</p>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <input type='hidden' name='jovenes' value='0' id='jovenes' />
                    <div class='jovenes minus-btn d-inline-block'>
                        <span class="icon icon--minus_24"></span>
                    </div>
                    <span class='jovenes item-value'>0</span>
                    <div class='jovenes plus-btn d-inline-block'>
                        <span class="icon icon--plus_24"></span>
                    </div>
                </div>
            </div>
            <div data-item='adultos'  class='item adultos d-flex justify-content-between align-items-center'>
                <div>
                    <div class='item-title'>Adultos</div>
                    <p class='item-description'>26 o más años</p>
                </div>
                <div class='d-flex justify-content-center align-items-center'>
                    <input type='hidden' name='adultos' value='0' id='adultos' />
                    <div class='adultos minus-btn d-inline-block'>
                        <span class="icon icon--minus_24"></span>
                    </div>
                    <span class='adultos_value item-value'>0</span>
                    <div class='adultos plus-btn d-inline-block'>
                        <span class="icon icon--plus_24"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class='error text-center text-danger mb-2'>&nbsp;</div>
        <button class='continue_btn mx-auto mb-2' id='to_page_3'>Continuar</button>
    </div>
</section>