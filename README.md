# Proyecto Conecta Atlantic City

Dashboard de gestión para Atlantic City Casino, hecho con Express.js, Sequelize y Pug.

## Requisitos

- Node.js (v10+ recomendado)
- NPM
- MySQL (o una base de datos compatible con Sequelize)

## Guía de Inicio Rápido

1.  **Clonar el repositorio e instalar dependencias:**

    ```sh
    cd Proyecto-Conecta-Atlantic-City
    npm install
    ```

2.  **Configurar la base de datos:**

    - Asegúrate de que tu servidor de base de datos (ej. MySQL) esté en ejecución.
    - Edita el archivo `config/config.json` con tus credenciales en la sección `development`.

3.  **Crear, migrar y poblar la base de datos:**

    Ejecuta los siguientes comandos en orden:

    ```sh
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```

4.  **Iniciar el Servidor:**
    ```sh
    npm start
    ```
    La aplicación estará disponible en `http://localhost:3000`.

## Usuarios de Prueba

Usa los siguientes usuarios para iniciar sesión. La contraseña para todos es `password123`.

| Usuario   | Rol                       |
| :-------- | :------------------------ |
| `admin`   | Administrador de Sistemas |
| `lgomez`  | Gerencia General          |
| `cquispe` | Marketing                 |
| `jflores` | Operaciones               |
| `mtorres` | Desarrollo de Negocios    |
| `rvargas` | Gerencia de TI            |
| `srojas`  | Cliente                   |
