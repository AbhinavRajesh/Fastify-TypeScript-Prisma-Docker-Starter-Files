## Fastify, TypeScript, Prisma, Docker Start Files

### Setup

1. Clone the repository
   ```
   git clone git@github.com:AbhinavRajesh/Fastify-TypeScript-Prisma-Docker-Starterfiles.git <FOLDER_NAME>
   ```
2. Move into the directory

   ```
   cd <FOLDER_NAME>
   ```

3. Install the dependencies

   ```
   yarn
   ```

4. Install the required extensions (Would be recommended by VSCode)

   ```
   Prettier
   Eslint
   Prisma
   Triggertaskonsave
   ```

5. Install Docker from [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

### Scripts

1. Build and run

   ```
   docker-compose build web
   ```

   ```
   docker-compose rm -fs web
   ```

   ```
   docker-compose up
   ```

2. For rebuilding run

   ```
   yarn rebuild:web
   ```

3. Migrations

   ```
   yarn docker:db:migrate
   ```

4. Get postgres console

   ```
   yarn db:console
   ```

5. For checking running docker instances
   ```
   docker-compose ps
   ```
