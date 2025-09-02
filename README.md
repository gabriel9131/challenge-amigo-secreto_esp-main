# Amigo Secreto
Este README incluye:  
- Descripción y propósito del proyecto  
- Funcionalidades principales  
- Tecnologías utilizadas  
- Estructura de archivos  
- Instrucciones de instalación y uso  
- Posibles mejoras futuras  
- Autor y licencia
  
## Descripción
Este proyecto es una aplicación web sencilla en JavaScript que permite a los usuarios crear una lista de amigos y realizar un sorteo aleatorio para determinar quién será el "amigo secreto".  
El objetivo es practicar conceptos fundamentales de programación: variables, condicionales, funciones, arrays y manipulación del DOM.

## Funcionalidades
- **Agregar amigos:** Permite ingresar nombres mediante un campo de texto y agregarlos a una lista visible.  
- **Validación de entrada:** No se permiten nombres vacíos; si se intenta, se muestra una alerta.  
- **Visualizar lista:** Todos los nombres agregados se muestran dinámicamente en la página.  
- **Sorteo aleatorio:** Selecciona un amigo al azar de la lista y muestra el resultado en pantalla.

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript (ES6)

## Estructura del proyecto
/amigo-secreto
─ index.html # Archivo principal HTML
─ style.css # Estilos de la página
─ app.js # Lógica de JavaScript
─ README.md # Este archivo

Instalación y uso
1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/amigo-secreto.git
```
2. Abrir index.html en un navegador web.
3. Escribir los nombres de los amigos en el campo de texto y hacer clic en Añadir.
4. Una vez que la lista esté completa, hacer clic en Sortear amigo para seleccionar un amigo secreto.

## Posibles mejoras
- Evitar duplicados en la lista de amigos.
- Añadir animaciones al sorteo.
- Permitir eliminar nombres de la lista.
- Guardar la lista en el almacenamiento local del navegador (localStorage).

## Autor
Gabriel Chacón

## Licencia
Este proyecto está bajo licencia MIT.
