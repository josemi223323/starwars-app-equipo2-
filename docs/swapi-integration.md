# Esto es Markdown 

## Documentacion en el Consumo de API externa (SWAPI), Aquitectura de Datos Json y Gestion de Errores HTTP

### EndPoints:
 - **URL**: https://swapi.py4e.com/api
 - **Recurso de Personaje**: `/people/`

 ## Respuesta para json: ##
 ### Swapi People:

    {
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.py4e.com/api/planets/1/",
	"films": [
		"https://swapi.py4e.com/api/films/2/",
		"https://swapi.py4e.com/api/films/6/",
		"https://swapi.py4e.com/api/films/3/",
		"https://swapi.py4e.com/api/films/1/",
		"https://swapi.py4e.com/api/films/7/"
	],
	"species": [
		"https://swapi.py4e.com/api/species/1/"
	],
	"vehicles": [
		"https://swapi.py4e.com/api/vehicles/14/",
		"https://swapi.py4e.com/api/vehicles/30/"
	],




## Notas: ##

    "starships": [
                "https://swapi.py4e.com/api/starships/12/",
                "https://swapi.py4e.com/api/starships/22/"
            ],

            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.py4e.com/api/people/1/
            }

## Limites de Petición (rate limiting): ##
 
    <ElicitationsGroup message="¿Quieres realizar alguna acción adicional con este archivo?">
    <Elicitation label="Crear un script para automatizar la generación del archivo" query="Escribe un script en Bash o Node.js para crear la rama Git, la carpeta y el archivo docs/swapi-integration.md automáticamente."/>
    <Elicitation label="Agregar ejemplos de peticiones en JavaScript o Python" query="Añade al documento de Markdown ejemplos de cómo consumir la API de SWAPI usando fetch en JavaScript y requests en Python."/>
    </ElicitationsGroup>




















