use postgres;
drop DATABASE seov; 

CREATE DATABASE seov with encoding 'UTF8';
use seov;
create table alumno (
  id serial PRIMARY KEY,
  nombre varchar(50) not null,
  apellido varchar(50) not null,
  user_id INTEGER not null,
  created_on TIMESTAMP NOT NULL
);
create table carrera(
  id serial PRIMARY KEY,
  nombre varchar(50) not null,
  descripcion varchar(255) not null
);
create table tutor(
  id serial PRIMARY KEY,
  nombre varchar(50) not null,
  apellido varchar(50) not null,
  user_id INTEGER not null
);
create table seccion (
  id serial PRIMARY KEY,
  nombre varchar(50) not null,
  tutor_id INTEGER not null,
  foreign key(tutor_id) references tutor(id)
);