## Developer Tools 

### Run Postgres and PGAdmin
```
docker-compose up -d
```

### Stop docker
```
docker-compose stop
```

### Remove docker container
```
docker-compose down
```

### Remove volume / data from PG (reset)
```
docker-compose down -v
```

### .env
Name docker project:
```
COMPOSE_PROJECT_NAME=life-organizer 
```

#### Postgres

- Running on: localhost:5432
- username: postgres
- password: changeme


#### PgAdmin
- Running on: http://localhost:5050
- username: pgadmin4@pgadmin.org
- password: admin

## How to use pgAdmin
- Right click `server`, create `new server`

### local development
- in Connection tab
    - host name/ address: postgres
    - maintenance db: postgres
    - port: 5432 (always for pg)
    - username: postgres
    - password: changeme

### Hosted db
- fill in corresponding values in `.env` for DATABASE_URL='postgres://username:password@hostname:5432/maintenancedb'

- in Connection tab
    - host name/ address
    - maintenance db
    - port: 5432 (always for pg)
    - username
    - password

advanced settings, filter to only show `maintenancedb` value
