# ProyetoFinalBack

- Back Proyecto Peluqueria Canina

Cristofer Araya - Diego Rivera

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

Table "PELUQUERIA_CANINA" {
    "id_peluqueria_canina" SERIAL (pk, increment)
    "nombre_peluqueria" varchar(255) [default: NULL]
    "direccion" varchar(255)
    "telefono" INT
}

Table "USUARIO_FAVORITO" {
    "id_usuario_favorito" SERIAL (pk, increment)
    "id_peluqueria_canina" (fk)
    "id_usuario" (fk)
}

Table "USUARIO" {
    "id_usuario" SERIAL (pk, increment)
    "nombre_usuario" varchar(255) [default: NULL]
    "apellido"	varchar(255) [default: NULL]
    "nombre_mascota" varchar(255) [default: NULL]
    "email" varchar(255) [default: NULL]
}

Table "PELUQUERIA_PROFESIONAL" {
    "id_peluqueria_profesional" SERIAL (pk, increment)
    "id_peluqueria_canina" (fk)
    "id_profesional" (fk)
   
}

Table "PELUQUERIA_SERVICIO" {
    "id_peluqueria_servicio" SERIAL (pk, increment)
    "id_peluqueria_canina" (fk)
    "id_servicio" (fk) 
}

Table "RESERVAS" {
    "id_reserva" SERIAL (pk, increment)
    "id_peluqueria_canina" (fk)
    "id_servicio" (fk)
    "id_profesional" (fk)
    "id_disponibilidad" (fk)
    "estado_reserva" INT [default: NULL]
}

Table "EVALUACION"{
    "id_evaluacion" SERIAL (pk, increment)
    "id_peluqueria_canina" (fk)
    "id_servicio" (fk)
    "calificacion" INT  [default: NULL]
    "comentario" varchar(255) [default: NULL]
}

Table "PROFESIONAL"{
    "id_profesional" SERIAL (pk, increment)
    "nombre_profesional" varchar(255) [default: NULL]
    "apellido_profesional" varchar(255) [default: NULL]
}


Table "SERVICIO"{
    "id_servicio" SERIAL (pk, increment)
    "servicio" varchar(255) [default: NULL]
    "precio_servicio" varchar(255) [default: NULL]
}


Table "DISPONIBILIDAD"{
    "id_disponibilidad" SERIAL (pk, increment)
    "fecha" date [default: NULL]
    "disponible" INT [default: NULL]
}






EP:
* POST /usuarios

  
* GET /usuarios


* POST /login



Back Proyecto Peluqueria Canina


