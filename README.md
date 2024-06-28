<p align="center">
  <img src="Logo_completo_BIT_project__horizontal.svg" alt="Logo E-commerce" style="width:100%; max-width:800px;">
</p>

# Trekangle API-Backend
Este Backend de Trekangle hace parte de el Proyecto Final de el programa de Desarrollo Web en BIT, en donde se desarrolla la logica de una API rest para un E-commerce de Reserva de Experiencias turisticas unicas.

## Características de la API

- Creacion, edición y eliminación de Experiencias.
- Creacion de reservas de Experiencias.
- Registro y autenticación de usuarios.

## ⚙ Configuración local
```bash
# 1. Clonar el repositorio
git clone https://github.com/JuanesPachon/web-trekangle-server.git

# 2. Acceder a la carpeta principal del proyecto
cd web-trekangle-server

# 3. Instalar las dependencias utilizadas en el proyecto
npm install

```

## 4. Configurar las variables de entorno

Crea un archivo .env en la raíz del proyecto basándote en el archivo .env.example y completa los valores necesarios:

```bash
# Variables de entorno

PORT=3000
MONGODB_CONNECTION_STRING= //localhost:27017/base-de-datos
JWT_KEY=secret
```

## 5. Iniciar el servidor

```bash
npm start
```


## 🧱 Estructura del Proyecto

- `src/`: Contiene los archivos fuente de la API.
- `config/`: Configuraciones del proyecto, como la estructura de multer y las variables de entorno.
- `models/`: Modelos de cada entidad del proyecto.
- `routes/`: Rutas de la API.
- `controllers/`: Controladores que manejan las solicitudes HTTP.
- `middlewares/`: Middlewares para la validación y autenticación.
- `public/`: Archivos estáticos del proyecto, carpeta que se crea al cargar el primer archivo estatico.
- `utils/`: Utilidades para la API, como helpers para el Error Handling.
  
## 🛠 Tecnologías Utilizadas

- **Node.js y Express**: Plataforma y framework para el desarrollo del servidor.
- **MongoDB**: Base de datos NoSQL para almacenar experiencias y usuarios.
- **JWT (JSON Web Tokens)**: Autenticación y autorización basada en tokens.
- **Express Validator**: Validación de datos de entrada.
- **Multer**: Gestión de archivos subidos (como imágenes).
- **Supabase**: Servidor de base de datos NoSQL para almacenar los archivos subidos.