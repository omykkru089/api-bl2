import { Logger } from "@nestjs/common";
import mongoose from "mongoose";
import { ArmaEntity } from "src/resources/armas/entities/arma.entity";
import { createConnection } from "typeorm";

const logger = new Logger('DATABASE PROVIDER');

export const databaseProviders = [
    {
        provide: 'POSTGRES_CONNECTION',
        useFactory: () =>
            createConnection({
                type: 'postgres',
                host: process.env.POSTGRES_DATABASE_HOST,
                port: Number(process.env.DATABASE_PORT_POSTGRES) || 5432,
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                entities: [
                    ArmaEntity
                ],
                synchronize: process.env.NODE_ENV === 'development' ? true : false,
            })
            .then(connection => {
                Logger.debug('conexion con postgres exitosa!');
                return connection
            })
            .catch(error => {
                Logger.error('error al conectar por postgres', error);
            }),
    },
    {
        provide: 'MONGODB_CONNECTION',
        useFactory: () =>
            mongoose
            .connect(
                `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.MONGO_DATABASE_HOST}:${process.env.DATABASE_PORT_MONGODB || 27017}/${process.env.DATABASE_NAME}`,
            )
            .then((connection) => {
                Logger.debug('conexion con mongodb exitosa!');
                return connection;
            })
            .catch((error) => {
                Logger.error('error al conectar por mongodb', error);
            }),
    }
]