# <img width=20 src="https://wallet.noku.io/app/favicon.svg"> Noku Dev Test

## Overview

Il progetto ha lo scopo di replicare l’interfaccia creata in [Figma](https://www.figma.com/file/QWCI7ctrkS33yfeiiG5Vz7/Noku-Dev-Test) di un marketplace con delle funzionalità limitate.

### Tech specifications

- Creazione di un progetto git (se il repository é privato dare accesso a [@perlets9](https://github.com/perlets9))
- Frontend: **Vue.js**
- Backend: **Node.js**
- Database: **MongoDB**

### Specifications

La grafica deve rispecchiare il progetto creato su Figma; le strutture dati possono essere anche in sola lettura, non c’é bisogno di creare le funzioni per l’acquisto, i dati possono essere inseriti a mano nel DB o hardcodati nel backend.

## Requirements

- Docker

## Installation

```sh
git clone https://github.com/tosettil-polimi/noku-dev-test.git
cd noku-dev-test/docker
cp .env.example .env 
```

Modificare il file `.env` per settare il proprio ambiente di lavoro, quindi eseguire il programma Docker.

```sh
docker-compose build
```

Configurare i file `.env` nelle cartelle del progetto `frontend` e `backend`

```sh
cd noku-dev-test/docker
docker-compose up
```

### Seeding

Per inserire i dati mock nel database, entrare nel container `backend` dunque eseguire:
```sh
yarn seed
```


## Contributors

- Lorenzo Tosetti [@tosettil-polimi](https://github.com/tosettil-polimi)

