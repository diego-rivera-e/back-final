# ProyetoFinalBack

Cristofer Araya - Diego Rivera

- Back Proyecto Peluqueria Canina

Requerimientos
1. Crear un nuevo proyecto de npm e instalar todas las dependencias que necesitarás.
(1 Punto)
2. Utilizar el paquete pg para gestionar la comunicación con la base de datos
PostgreSQL.
(3 Puntos)
3. Implementar la autenticación y autorización de usuarios con JWT.
(2 Puntos)
4. Usar el paquete CORS para permitir las consultas de orígenes cruzados.
(1 Punto)
5. Utilizar middlewares para validar las credenciales o token en cabeceras en las rutas
que aplique.
(2 Puntos)
6. Realizar test de por lo menos 4 rutas de la API REST comprobando los códigos de
estados de diferentes escenarios.
(1 Punto)


BD:

CREATE DATABASE softjobs;
\c softjobs;
CREATE TABLE usuarios ( id SERIAL, email VARCHAR(50) NOT NULL, password
VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );


SELECT * FROM usuarios;

EP:
* POST /usuarios

  
* GET /usuarios


* POST /login



Back Proyecto Peluqueria Canina


