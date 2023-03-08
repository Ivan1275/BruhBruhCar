<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Todo el head con estilos -->
    @include('layouts.partials.head')

    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead

    <style>
        body {
            background-image: url('assets/img/movi_sostenible.png'),
            linear-gradient(to bottom, #ffffff 10%, #0066ff 132%);
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
            background-size: contain;
        }
    </style>
</head>

<body>
    @inertia

    <!-- Bootstrap core JS-->
    @include('layouts.partials.footerscripts')

</body>

</html>