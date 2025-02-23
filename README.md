### Typescript setup
---------------------------------------------------------------- 
    - npm install --save-dev typescript ts-node @types/node @types/express @types/cookie-parser @types/jsonwebtoken @types/bcryptjs nodemon

    ** - copy and install - ** 

### Install Dev Dependencies
---------------------------------------------------------------- 
    - npm install --save-dev typescript ts-node @types/node @types/express @types/cookie-parser @types/jsonwebtoken @types/bcryptjs nodemon


### Initialize Prisma
----------------------------------------------------------------
    npx prisma init

    Yeh command .env aur prisma/schema.prisma file create karegi.
    prisma file ki 
    datasource db {
        provider = "mysql" //           important
        url      = env("DATABASE_URL")
    }

### Setup Database & Migrate
----------------------------------------------------------------
    ```
        npx prisma migrate dev --name init
    ```

    Yeh command database migration karegi.