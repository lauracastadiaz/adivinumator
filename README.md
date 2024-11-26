# 🎯 Adivinumator - Juego de Adivinanzas

¡Bienvenido a Adivinador, un juego simple y divertido en React! El objetivo del juego es adivinar el número generado aleatoriamente por la máquina dentro de un rango definido.

## 🚀 Características

- ✅ Generación automática de un número aleatorio dentro de un rango configurable.
- ✅ Interfaz interactiva para que el usuario elija un número y vea si adivina.
- ✅ Retroalimentación inmediata al usuario mediante alertas.
- ✅ Actualización automática del número objetivo tras cada intento.

### 🛠️ Tecnologías utilizadas

- React - Biblioteca para construir interfaces de usuario.
- JavaScript (ES6+) - Para la lógica del juego.
- HTML5 y CSS3 - Para la estructura y el diseño básico.

### 🖥️ Cómo ejecutar el proyecto

Sigue los pasos para ejecutar el proyecto en tu máquina local:

1. Clonar el repositorio
`git clone <URL_DE_TU_REPOSITORIO>`
`cd <NOMBRE_DEL_PROYECTO>`
2. Instalar dependencias
Asegúrate de tener Node.js instalado, luego ejecuta:
**npm install**
3. Iniciar el servidor de desarrollo
Ejecuta el siguiente comando para iniciar el servidor:
**npm start**
El proyecto se abrirá automáticamente en tu navegador en la dirección:`http://localhost:3000.`

### 🧩 Estructura del proyecto

├── src/
│   ├── components/
│   │   └── Adivinador.js    # Componente principal del juego
│   ├── App.js               # Punto de entrada del componente raíz
│   ├── index.js             # Renderizado en el DOM
│   └── styles.css           # Estilos personalizados (si aplica)
├── public/
│   ├── index.html           # HTML principal
│   └── ...
├── package.json             # Configuración del proyecto y dependencias
└── README.md                # Documentación del proyecto

### 🕹️ Cómo jugar

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

1. Elige un número en el rango permitido (por defecto entre 1 y 10).
2. Presiona el botón "Adivinar".
3. El programa comparará tu número con el generado aleatoriamente por la máquina:
 - Si aciertas, ¡verás un mensaje de felicitación!
 - Si fallas, se te mostrará el número correcto.
4. Inténtalo de nuevo con un nuevo número generado automáticamente.

## ✨ Personalización

Puedes personalizar el rango del juego modificando la propiedad props.limite en el componente Adivinador:

```javascript
<Adivinador limite={10} />
```


### 🐛 Contribuir

- Si encuentras un error o tienes ideas para mejorar este proyecto:
- Abre un issue.
- Envía un pull request con tus cambios.

### 📄 Licencia

Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo.

### 🙌 Autor

Desarrollado con ❤️ por Laura Castaño (laucdevs)
