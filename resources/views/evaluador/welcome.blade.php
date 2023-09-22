<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Evaluador">

    <title>Evaluador</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="icon" href="https://mascotaz.s3.amazonaws.com/Zurich+favicon.png">
    <link rel="apple-touch-icon" href="https://mascotaz.s3.amazonaws.com/Zurich_Apple_TI.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href="{{mix('css/app.css')}}" rel="stylesheet">
    <link href="{{asset('lib/animate.min.css')}}" rel="stylesheet">
    <link href="{{asset('lib/jquery-ui-1.12.1.custom/jquery-ui.min.css')}}" rel="stylesheet">
    <link href="{{asset('lib/zurich2.0/css/styles.min.css')}}" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body class="">
    <div class='page-container'>
        @include('evaluador.components.page_1')
        @include('evaluador.components.page_2')
        @include('evaluador.components.page_3')
        @include('evaluador.components.page_4')
        @include('evaluador.components.page_5')
        @include('evaluador.components.page_6')
        @include('evaluador.components.page_7')
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="{{asset('lib/zurich2.0/js/scripts.min.js')}}"></script>
    <script src="{{mix('js/app.js')}}"></script>
    <script src="{{asset('lib/jquery.autocomplete.min.js')}}"></script>
    <script src="{{asset('lib/jquery-ui-1.12.1.custom/jquery-ui.min.js')}}"></script>
    <script src="{{asset('lib/jquery_validate/jquery.validate.min.js')}}"></script>
    <script src="{{asset('lib/jquery_validate/additional-methods.min.js')}}"></script>
    <script src="{{asset('lib/jquery.ui.tocuh.min.js')}}"></script>
    <script src="{{asset('lib/jquery.mask.min.js')}}"></script>
    <script src="{{asset('lib/cleave.min.js')}}"></script>
    <script src="{{asset('lib/jquery.cookie.js')}}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{mix('js/evaluador/evaluador.js')}}"></script>
</body>

</html>