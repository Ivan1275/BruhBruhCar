<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="/addtravel" method="post">
    {{ csrf_field() }}
        <p><input type="text" name="origin" id=""> Origin</p>
        <p><input type="text" name="destination" id=""> Destination</p>
        <p><input type="date" name="date" id=""> Date</p>
        <p><input type="time" name="hour" id=""> Hour</p>
        <p><input type="number" name="seats" id=""> Seats</p>
        <input type="submit" value="submit">
    </form>
</body>

</html>