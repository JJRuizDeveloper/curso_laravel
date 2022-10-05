<nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <a class="navbar-brand" href="#"> Ejemplo Laravel</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="{{ route('index') }}">Inicio</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('about') }}">Nosotros</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('services') }}">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('contact', ['name' => 'Hola']) }}">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('comment.index') }}">Comentarios</a>
          </li>
      </ul>
    </div>
  </nav>
