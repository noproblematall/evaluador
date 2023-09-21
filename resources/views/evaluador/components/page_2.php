<section id="page_2" class="page-content animate__animated animate__fadeIn d-none">
    <div class="px-2 pb-2 zurich-logo">
        <img src="https://movilidadz.s3.amazonaws.com/Zurich+Top+Logo+Cot.png" height="25" alt="logo">
    </div>
    <div class="card mx-0 px-1 py-4">
        <div class='inner'>
            <div class='console-small-container'>
                <div class='title-container'>
                    <p class='title'>Elegí tu personaje</p>
                </div>
                <div class='character-selector-box'>
                    <div class='character-selector'>
                        <div class='col d-flex justify-content-center align-items-center'>
                            <div class='character-item'>
                                <input type='radio' name='character' id='character-hombreGrande' value='hombreGrande' />
                                <label for='character-hombreGrande'>
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Hombre+Grande+b.png' alt='Hombre Grande' class='deactivated' />
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Hombre+Grande+a.png' alt='Hombre Grande' class='activated' />
                                </label>
                            </div>
                        </div>
                        <div class='col d-flex justify-content-center align-items-center'>
                            <div class='character-item'>
                                <input type='radio' name='character' id='character-hombre' value='hombre' />
                                <label for='character-hombre'>
                                    <img src='https://z-eval.s3.amazonaws.com/pers/hombre+b.png' alt='Hombre' class='deactivated' />
                                    <img src='https://z-eval.s3.amazonaws.com/pers/hombre+a.png' alt='Hombre' class='activated' />
                                </label>
                            </div>
                        </div>
                        <div class='col d-flex justify-content-center align-items-center'>
                            <div class='character-item'>
                                <input type='radio' name='character' id='character-mujer' value='mujer' checked/>
                                <label for='character-mujer'>
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Mujer+b.png' alt='Mujer' class='deactivated' />
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Mujer+a.png' alt='Mujer' class='activated' />
                                </label>
                            </div>
                        </div>
                        <div class='col d-flex justify-content-center align-items-center'>
                            <div class='character-item'>
                                <input type='radio' name='character' id='character-nobi' value='nobi' />
                                <label for='character-nobi'>
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Nobi+b.png' alt='Nobi' class='deactivated' />
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Nobi+a.png' alt='Nobi' class='activated' />
                                </label>
                            </div>
                        </div>
                        <div class='col d-flex justify-content-center align-items-center'>
                            <div class='character-item'>
                                <input type='radio' name='character' id='character-mujerGrande' value='mujerGrande' />
                                <label for='character-mujerGrande'>
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Mujer+Grande+b.png' alt='Mujer Grande' class='deactivated' />
                                    <img src='https://z-eval.s3.amazonaws.com/pers/Mujer+Grande+a.png' alt='Mujer Grande' class='activated' />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='pt-5 pb-4 input-group d-flex justify-content-center'>
            <span>Me llamo &nbsp;&nbsp;</span>
            <input type='text' name='name' id='name' placeholder='..........' required class='name' />
            <span>&nbsp;y tengo  &nbsp;&nbsp;</span>
            <input type='text' name='age' id='age' placeholder='..' required  class='age' />
            <span>&nbsp;años.</span>
        </div>
        <div class='error text-center text-danger mb-2'>&nbsp;</div>
        <button class='continue_btn mx-auto' id='to_page_3' >Continuar</button>
    </div>
</section>