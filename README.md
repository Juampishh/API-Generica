# API Endpoints

## Authentication

### POST /auth/login
Inicia sesión en el sistema.

**Recibe:**
- **username** (string): Nombre de usuario del usuario.
- **password** (string): Contraseña del usuario.

---

### POST /auth/register
Registra un nuevo usuario.

**Recibe:**
- **type** (string): Tipo de usuario ("admin" o "client").
- **username** (string): Nombre de usuario único.
- **firstName** (string): Primer nombre del usuario.
- **lastName** (string): Apellido del usuario.
- **email** (string): Correo electrónico del usuario.
- **password** (string): Contraseña del usuario.
- **createdAt** (Date, opcional): Fecha de creación de la cuenta.

---

## Users

### GET /users
Obtener la lista de usuarios registrados.

---

### GET /users/:id
Obtener un usuario específico por su ID.

---

### POST /users
Crear un nuevo usuario.

**Recibe:**
- **type** (string): Tipo de usuario ("admin" o "client").
- **username** (string): Nombre de usuario único.
- **firstName** (string): Primer nombre del usuario.
- **lastName** (string): Apellido del usuario.
- **email** (string): Correo electrónico del usuario.
- **password** (string): Contraseña del usuario.
- **created_at** (Date, automáticamente generado): Fecha de creación.

---

### PUT /users/:id
Actualizar la información de un usuario.

**Recibe:**
- **type** (string): Tipo de usuario ("admin" o "client").
- **username** (string): Nombre de usuario único.
- **firstName** (string): Primer nombre del usuario.
- **lastName** (string): Apellido del usuario.
- **email** (string): Correo electrónico del usuario.
- **password** (string): Contraseña del usuario.

---

### DELETE /users/:id
Eliminar un usuario por su ID.
