<!-- <section id="page_1" class="page-content animate__animated animate__fadeIn d-none"> -->
<section id="page_1" class="page-content animate__animated animate__fadeIn">
    <div class='d-flex justify-content-between align-items-center mb-4'>
        <div> &nbsp; </div>
        <img src="https://movilidadz.s3.amazonaws.com/Zurich+Top+Logo+Cot.png" height="25" alt="logo">
    </div>
    <!-- <div class='card bg-blue d-flex justify-content-center align-items-center flex-row p-3'>
        <img class='p-1 pe-3' src='https://z-eval.s3.amazonaws.com/misc/megaphone.png' alt='Megaphone' height='90' />
        <div class='text-white ps-1'>
            <p class='plan'>¿Querés saber cuál es el plan que se adapta mejor a tus necesidades?</p>
            <p class='info w-100 px-3 py-2 text-center'>Completá esta información</p>
        </div>
    </div> -->
    <div class='d-flex  align-items-center'>
        <img src='https://z-eval.s3.amazonaws.com/misc/select.png' alt='img' width='18' />
        <p class='color-blue px-2'>Elegí tu personaje</p>
    </div>
    <div class='card mt-2'>
        <div class='character-selector  d-flex justify-content-around align-items-center'>
            <div class='col d-flex justify-content-center align-items-center position-relative h-100'>
                <div class='character-item d-flex flex-column-reverse justify-content-start h-100'>
                    <label class='radio mx-auto d-inline-block mt-3 mb-2'>
                        <input type='radio' name='character' class='radio-control' id='character-hombre' value='hombre' />
                        <span class='radio-label'></span>
                    </label>
                    <label for='character-hombre'>
                        <img src='https://z-eval.s3.amazonaws.com/pers/hombre+b.png' alt='Hombre' class='deactivated' />
                        <img src='https://z-eval.s3.amazonaws.com/pers/hombre+a.png' alt='Hombre' class='activated d-none' />
                    </label>
                </div>
                <div class='animation-container position-absolute w-100 h-100 d-flex justify-content-center align-items-center pb-4'>
                    <img src='https://z-eval.s3.amazonaws.com/pers/hombre+a.png' alt='Hombre Grande' class='animation1' />
                </div>
            </div>
            <div class='col d-flex justify-content-center align-items-center position-relative h-100'>
                <div class='character-item d-flex flex-column-reverse justify-content-start h-100'>
                    <label class='radio mx-auto d-inline-block mt-3 mb-2'>
                        <input type='radio' name='character' class='radio-control' id='character-mujer' value='mujer' />
                        <span class='radio-label'></span>
                    </label>
                    <label for='character-mujer'>
                        <img src='https://z-eval.s3.amazonaws.com/pers/Mujer+b.png' alt='Mujer' class='deactivated' />
                        <img src='https://z-eval.s3.amazonaws.com/pers/Mujer+a.png' alt='Mujer' class='activated d-none' />
                    </label>
                </div>
                <div class='animation-container position-absolute w-100 h-100 d-flex justify-content-center align-items-center pb-4'>
                    <img src='https://z-eval.s3.amazonaws.com/pers/Mujer+a.png' alt='Mujer' class='animation2' />
                </div>
            </div>
            <div class='col d-flex justify-content-center align-items-center position-relative h-100'>
                <div class='character-item d-flex flex-column-reverse justify-content-start h-100'>
                    <label class='radio mx-auto d-inline-block mt-3 mb-2'>
                        <input type='radio' name='character' class='radio-control' id='character-nobi' value='nobi' />
                        <span class='radio-label'></span>
                    </label>
                    <label for='character-nobi'>
                        <img src='https://z-eval.s3.amazonaws.com/pers/Nobi+b.png' alt='Nobi' class='deactivated' />
                        <img src='https://z-eval.s3.amazonaws.com/pers/Nobi+a.png' alt='Nobi' class='activated d-none' />
                    </label>
                </div>
                <div class='animation-container position-absolute w-100 h-100 d-flex justify-content-center align-items-center pb-4'>
                    <img src='https://z-eval.s3.amazonaws.com/pers/Nobi+a.png' alt='Nobi' class='animation3' />
                </div>
            </div>
        </div>
    </div>
    <div class='d-flex  align-items-center'>
        <img src='https://z-eval.s3.amazonaws.com/misc/pen.png' alt='img' width='20' />
        <p class='color-blue px-2'>Completá tus datos</p>
    </div>
    <div class='card p-3 mt-2'>
        <div class="textfield  ">
            <span class="icon icon--pencil_24_outline"></span>
            <input id="name" name="name" class="textfield-control" value="" type="text" placeholder="Nombre" />
            <label class="textfield-label" for="name"></label>
        </div>
        <div class="textfield  ">
            <span class="icon icon--pencil_24_outline"></span>
            <input id="age" name="age" class="textfield-control" value="" type="number" placeholder="Edad" />
            <label class="textfield-label" for="age"></label>
        </div>
        <div class='error text-center text-danger mb-2'>&nbsp;</div>
        <button class='continue_btn mx-auto mb-2' id='to_page_2'>Continuar</button>
    </div>
</section>