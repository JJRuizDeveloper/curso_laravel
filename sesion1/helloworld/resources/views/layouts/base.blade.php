<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @yield('styles')
</head>
<body>
    @include('layouts.partials.menu')
    <main class="container">
        @yield('content')
    </main>
    @yield('javascript')
</body>
</html>
