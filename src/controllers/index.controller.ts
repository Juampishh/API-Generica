import { Request, Response } from "express";

export function indexWelcome(req: Request, res: Response): Response {
  const htmlResponse = `
    <html>
      <head>
        <title>API Endpoints</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f7f9;
            color: #333;
          }
          .container {
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #2c3e50;
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 20px;
          }
          .endpoint {
            margin-bottom: 30px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 20px;
          }
          .endpoint h2 {
            color: #2980b9;
            font-size: 1.8em;
            margin-bottom: 10px;
          }
          .endpoint p {
            font-size: 1.2em;
            margin-bottom: 15px;
          }
          .endpoint ul {
            list-style: none;
            padding-left: 0;
          }
          .endpoint ul li {
            background-color: #ecf0f1;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
            font-size: 1.1em;
            display: flex;
            align-items: center;
          }
          .endpoint ul li code {
            background-color: #e74c3c;
            color: white;
            padding: 2px 5px;
            border-radius: 4px;
            margin-right: 10px;
          }
          footer {
            text-align: center;
            margin-top: 40px;
            font-size: 1.1em;
            color: #7f8c8d;
          }
          footer a {
            color: #2980b9;
            text-decoration: none;
          }
          footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Endpoints de la API</h1>
          
          <div class="endpoint">
            <h2>POST /auth/login</h2>
            <p>Iniciar sesión en el sistema.</p>
            <h3>Recibe:</h3>
            <ul>
              <li><code>username</code> (string): Nombre de usuario del usuario.</li>
              <li><code>password</code> (string): Contraseña del usuario.</li>
            </ul>
          </div>

          <div class="endpoint">
            <h2>POST /auth/register</h2>
            <p>Registrar un nuevo usuario.</p>
            <h3>Recibe:</h3>
            <ul>
              <li><code>type</code> (string): Tipo de usuario ("admin" o "client").</li>
              <li><code>username</code> (string): Nombre de usuario único.</li>
              <li><code>firstName</code> (string): Primer nombre del usuario.</li>
              <li><code>lastName</code> (string): Apellido del usuario.</li>
              <li><code>email</code> (string): Correo electrónico del usuario.</li>
              <li><code>password</code> (string): Contraseña del usuario.</li>
              <li><code>createdAt</code> (Date): Fecha de creación de la cuenta (opcional).</li>
            </ul>
          </div>

          <div class="endpoint">
            <h2>GET /users</h2>
            <p>Obtener la lista de usuarios registrados.</p>
          </div>

          <div class="endpoint">
            <h2>GET /users/:id</h2>
            <p>Obtener un usuario específico por su ID.</p>
          </div>

          <div class="endpoint">
            <h2>POST /users</h2>
            <p>Crear un nuevo usuario.</p>
            <h3>Recibe:</h3>
            <ul>
              <li><code>type</code> (string): Tipo de usuario ("admin" o "client").</li>
              <li><code>username</code> (string): Nombre de usuario único.</li>
              <li><code>firstName</code> (string): Primer nombre del usuario.</li>
              <li><code>lastName</code> (string): Apellido del usuario.</li>
              <li><code>email</code> (string): Correo electrónico del usuario.</li>
              <li><code>password</code> (string): Contraseña del usuario.</li>
              <li><code>created_at</code> (Date): Fecha de creación (automáticamente generada).</li>
            </ul>
          </div>

          <div class="endpoint">
            <h2>PUT /users/:id</h2>
            <p>Actualizar la información de un usuario.</p>
            <h3>Recibe:</h3>
            <ul>
              <li><code>type</code> (string): Tipo de usuario ("admin" o "client").</li>
              <li><code>username</code> (string): Nombre de usuario único.</li>
              <li><code>firstName</code> (string): Primer nombre del usuario.</li>
              <li><code>lastName</code> (string): Apellido del usuario.</li>
              <li><code>email</code> (string): Correo electrónico del usuario.</li>
              <li><code>password</code> (string): Contraseña del usuario.</li>
            </ul>
          </div>

          <div class="endpoint">
            <h2>DELETE /users/:id</h2>
            <p>Eliminar un usuario por su ID.</p>
          </div>
        </div>

        <footer>
          <p>API Documentation | <a href="https://github.com/Juampishh/API-Generica.git">View on GitHub</a></p>
        </footer>
      </body>
    </html>
  `;

  return res.send(htmlResponse);
}
