# API de Gestión de Usuarios

Bienvenido a la API de Gestión de Usuarios. Esta API permite manejar el registro, autenticación y gestión de usuarios. Está diseñada con **Node.js**, **Express**, y utiliza **TypeScript** para garantizar tipos seguros y consistentes en el código.

## Endpoints

### 1. **Autenticación**

#### **POST** `/auth/login`

Este endpoint permite iniciar sesión a los usuarios registrados.

- **Parámetros**:
  - `username` (string, requerido): Nombre de usuario del usuario.
  - `password` (string, requerido): Contraseña del usuario.

- **Ejemplo de cuerpo de petición**:

  ```json
  {
    "username": "juampi",
    "password": "mysecurepassword"
  }
