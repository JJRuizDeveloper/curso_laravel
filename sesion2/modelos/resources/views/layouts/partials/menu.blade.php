<nav>
    <ul>
        <li><a href="{{ route('index') }}">Home</a></li>
        <li><a href="{{ route('about') }}">About</a></li>
        <li><a href="{{ route('services') }}">Services</a></li>
        <li><a href="{{ route('contact', ['name' => 'Hola']) }}">Contact</a></li>
    </ul>
</nav>
