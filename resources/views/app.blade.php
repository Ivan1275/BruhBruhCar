<!DOCTYPE html>
<html>

<head>
    <!-- Todo el head con estilos -->
    @include('layouts.partials.head')

    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body>
    @inertia

    <!-- Bootstrap core JS-->
    @include('layouts.partials.footerscripts')

</body>

</html>