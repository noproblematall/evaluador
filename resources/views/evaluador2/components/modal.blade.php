<div class="modal" id="send_email_modal">
    <div class="modal-dialog animate__animated animate__fadeIn modal-dialog-centered">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title"><button type="button" class="" data-dismiss="modal">Cerrar</button></h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <p class="large_title mt-4">Recibí esta información detallada en tu Whatsapp, y un enlace para que vuelvas a ver esta página con tus datos cuando vos quieras.</p>
                <form action="#" id="personal_info_modal">
                    <div class="textfield  ">
                        <span class="icon icon--pencil_24_outline"></span>
                        <input id="user_first_name_modal" name="user_first_name_modal" class="textfield-control" value="" type="text" placeholder="Nombres" />
                        <label class="textfield-label" for="user_first_name"></label>
                    </div>
                    <div class="textfield   ">
                        <span class="icon icon--pencil_24_outline"></span>
                        <input id="user_last_name_modal" name="user_last_name_modal" class="textfield-control" value="" type="text" placeholder="Apellido" />
                        <label class="textfield-label" for="user_last_name"></label>
                    </div>
                    <div class="textfield   ">
                        <span class="icon icon--pencil_24_outline"></span>
                        <input id="user_email_modal" name="user_email_modal" class="textfield-control" value="" type="email" placeholder="Correo electrónico (para recibir tu póliza)" />
                        <label class="textfield-label" for="user_email"></label>
                    </div>
                    <h6>Teléfono celular</h6>
                    <div class="row">
                        <div class="col-5">
                            <div class="textfield mb-1">
                                <span class="icon icon--pencil_24_outline"></span>
                                <input id="area_code_modal" name="area_code_modal" class="textfield-control area_code" value="" type="tel" placeholder="Código de area" />
                                <label class="textfield-label" for="area_code"></label>
                            </div>
                        </div>
                        <div class="col-7">
                            <div class="textfield mb-1">
                                <span class="icon icon--pencil_24_outline"></span>
                                <input id="tel_number_modal" name="tel_number_modal" class="textfield-control tel_number" value="" type="tel" placeholder="Número" />
                                <label class="textfield-label" for="tel_number"></label>
                            </div>
                        </div>
                        <div class="col-12 mb-5">
                            <p class="phone_error color_red font_small d-none">El código de área y/o el teléfono ingresado es inválido</p>
                        </div>
                    </div>
                    <p class="large_title">
                        <span class="datos_first">Al ingresar tus datos personales a través de este sitio y presionar el botón “Continuar” estarás de acuerdo con </span>
                        <a class="datos_second" target="_blank" href="/datos-personales"> el aviso de protección de datos personales</a>
                    </p>
                    <div class="text-center mt-3">
                        <button type="button" class="btn 
                                btn--primary-custom
                                btn--sm
                                mb-5
                                " id="send_email_modal_btn">
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>