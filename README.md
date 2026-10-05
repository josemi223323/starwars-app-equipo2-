# Explorador de Star Wars - Equipo X

Aplicación cliente web desarrollada en JavaScript Vanilla modular (ES Modules) para la gestión y consumo de personajes mediante la API pública SWAPI.

## Estructura del Proyecto

* `src/`: Código fuente de la aplicación frontend.
* `docs/`: Documentación técnica y guías de integración.

## Parámetros de Configuración

La configuración de la API se define en `src/config/apiConfig.js`:

| Constante | Valor | Descripción |
|---|---|---|
| `BASE_URL` | `https://swapi.py4e.com/api` | URL base de la API pública de Star Wars (SWAPI). |
| `ENDPOINTS` | `PEOPLE: /people/`, `PLANETS: /planets/`, `STARSHIPS: /starships/` | Rutas relativas para consultar personajes, planetas y naves. |
| `TIMEOUT_MS` | `5000` | Tiempo límite de espera para las solicitudes, en milisegundos. |