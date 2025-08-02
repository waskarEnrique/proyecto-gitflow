Proyecto CRUD de Tareas con Git Flow
Este es un proyecto universitario para la asignatura 

Programación III, impartido por el profesor Kelyn Tejada. El objetivo principal fue desarrollar una aplicación web CRUD (Crear, Leer, Actualizar, Borrar) funcional, aplicando de manera rigurosa la metodología de trabajo 

Git Flow para el control de versiones y la gestión de ramas.

Características de la Aplicación
La aplicación es una lista de tareas simple que permite:

Crear nuevas tareas.

Leer y mostrar todas las tareas pendientes.

Actualizar el estado de una tarea (marcar como completada).

Borrar tareas de la lista.

Persistencia de datos en el navegador a través de localStorage.

Tecnologías Utilizadas
HTML5

CSS3

JavaScript (Vanilla)

Estrategia Git Flow
El núcleo de este proyecto fue la implementación de un flujo de trabajo basado en Git Flow, utilizando las siguientes ramas y convenciones:

Ramas Principales
main: Contiene el código de producción estable. Todos los cambios terminan integrados aquí.

developer: Rama de integración para las nuevas funcionalidades.

qa: Simula un entorno de pruebas de calidad (Quality Assurance).

Ramas de Trabajo
Se crearon 5 ramas para cumplir con los requisitos del proyecto, siguiendo la nomenclatura 

feature/ y hotfix/:

feature/display-tasks: Implementó la visualización inicial de las tareas.

feature/add-task: Añadió la funcionalidad para crear nuevas tareas.

feature/complete-task: Permitió marcar las tareas como completadas.

feature/delete-task: Implementó la opción de eliminar tareas.

hotfix/confirm-delete: Añadió una corrección crítica (una ventana de confirmación) directamente desde main.

Cada una de estas ramas generó 

3 Pull Requests (hacia developer, qa y main), resultando en un total de 15 Pull Requests cerrados como lo requería la asignación.


Cómo Ejecutar el Proyecto
Clona este repositorio en tu máquina local:

Bash

git clone <URL_DEL_REPOSITORIO>
Navega a la carpeta del proyecto.

Abre el archivo index.html en tu navegador web.