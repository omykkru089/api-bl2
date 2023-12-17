import { Connection } from "typeorm";
import { ArmaEntity } from "../entities/arma.entity";
import { Logger } from "@nestjs/common";

const logger = new Logger('ARMAS PROVIDER')

export const armasProviders = [
    {
        provide: 'ARMAS_REPOSITORY',
        useFactory: (connection: Connection) => {
            try {
                return connection.getRepository(ArmaEntity);
            } catch (error) {
                Logger.error('Error al cargar Armas Repository', error);
            }
        },
        inject: ['POSTGRES_CONNECTION']
    }
]