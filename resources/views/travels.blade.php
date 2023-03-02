<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    @if ($travels && count($travels) > 0)
    <ul>
        @foreach ($travels as $travel)
        <li>
            <p>Chofer: {{$travel->user->name}}</p>
            <p>Origen: {{$travel->origin}}</p>
            <p>Destino: {{$travel->destination}}</p>
            <p>Fecha: {{$travel->date}}</p>
            <p>Hora: {{$travel->hour}}</p>
            <p>Asientos: {{$travel->seats}}</p>

            <form method="POST" action="/reservas/{{ $travel->id }}">
                {{ csrf_field() }}
                <input type="submit" value="Reservar">
            </form>
        </li>
        @endforeach
    </ul>
    @endif
</body>

</html>