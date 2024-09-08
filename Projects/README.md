# Submarino Interactivo 🚤

Este es un proyecto interactivo donde un submarino recorre distintos niveles de profundidad, mostrando diapositivas educativas sobre **elevadores hidráulicos** y su funcionamiento. Además, incluye un **quiz interactivo** al final del recorrido para que los usuarios puedan poner a prueba lo aprendido.

## Descripción

- El submarino interactivo permite a los usuarios descender por diferentes puntos de información.
- Cada punto presenta una **diapositiva** con contenido educativo que puede ser **modificado** según las necesidades.
- Al final del recorrido, los usuarios pueden realizar un **quiz** sobre los temas tratados.
- **Responsive Design**: El proyecto está optimizado tanto para dispositivos de escritorio como móviles, adaptando las funcionalidades según el tamaño de la pantalla.
- En la parte inferior se encuentra el **footer** con los créditos al desarrollador del proyecto. **Es obligatorio** mantener estos créditos si decides usar o modificar este proyecto.

## Funcionalidades

1. **Submarino animado**: El submarino desciende automáticamente a cada punto y muestra la diapositiva correspondiente.
2. **Diapositivas modificables**: El contenido de cada diapositiva puede ser editado fácilmente desde el archivo `index.html`.
3. **Quiz final**: Al alcanzar los 10,000 metros, los usuarios pueden participar en un quiz de 5 preguntas relacionadas con los temas vistos.
4. **Animaciones de peces**: Peces animados acompañan al submarino mientras desciende, agregando un toque visual interactivo.
5. **Optimizado para móvil y escritorio**: Se adapta automáticamente a la pantalla del dispositivo, brindando una experiencia fluida.

## Cómo usar este proyecto

### Instalación y ejecución local

1. Clona este repositorio:
    ```bash
    git clone https://github.com/mob949k/Submarino-Interactivo.git
    ```

2. Abre el archivo `index.html` en tu navegador para visualizar el proyecto.

3. Para realizar modificaciones en las diapositivas, abre el archivo `index.html` y modifica los puntos con sus respectivos `data-title` y `data-text` para cambiar el contenido de cada diapositiva.

### Personalización de las diapositivas

Cada punto se define en el archivo `index.html` de la siguiente manera:

```html
<div class="point" data-title="Título de la diapositiva" data-text="Texto que aparecerá en esta diapositiva."></div>
