import { Connection } from "typeorm";
import { Logger } from "@nestjs/common";

const logger = new Logger('HEALTH-CHECK PROVIDER');

export const databaseProviders = [
    {
        provide: 'POSTGRES_CONNECTION_STATUS',
        useFactory: (connection: Connection) => {
            try {
                return connection.isConnected;
            } catch (error) {
                Logger.error('error al verificar estado de conexion con postgres', error);
                return false;
            }
        },
        inject: ['POSTGRES_CONNECTION']
    }
]