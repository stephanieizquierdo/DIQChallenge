# DIQChallenge

El presente challenge consiste en hacer un llamado GET de users a la API, crear los componentes correspondientes para visualizar la información y crear un buscador que filtre a medida que se escribe. Adicionalmente se agregó links para poder enviar emails, llamar si se esta en un device movil y ver en googlemaps la address con las coordenadas correspondientes. Por ultimo se agregó la opción de tener una vista nocturna.
Se supuso que los datos Name, username, email, phone, city y company son required con lo cual no habría usuarios sin dicha información.

## Ejecución

```bs
cd challenge
```

### Instalar dependencias

```bs
npm install
```

### Ejecutar proyecto

```bs
npm start
```

### Ejecutar tests
```bs
npm test
```

## Consigna

Se plantea realizar el siguiente ejercicio propuesto, utilizando la tecnología que consideres conveniente. Nuestra propuesta es utilizar ReactJS, pero si es de preferencia utilizar alguna otra tecnología, tales como AngularJS, Jquery, NodeJS, .Net, tenes total libertad de hacerlo. La idea que te sientas cómodo y creativo a la hora de realizar este ejercicio, sin un techo fijo, pero cumpliendo mínimamente los siguientes postulados:

- Hacer una petición REST a: https://jsonplaceholder.typicode.com/users
- Mostrar a los usuarios con sus datos:
- Nombre de usuario
- Username del usuario
- Email del usuario
- Ciudad donde vive
- Teléfono
- Nombre de la empresa
- La información de los usuarios a mostrar, NO debe ser visualizada como tabla, sino de otra manera que consideres adecuada.
- Agregar un único buscador para permitir filtrar por nombre, email y ciudad donde vive (a medida que se inserten caracteres, ya debe ir aplicando el filtro). 
- Debe ser responsive.

Punto adicional opcional:
- Subirlo a un repositorio y enviarnos el link.
