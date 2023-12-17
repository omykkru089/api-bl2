import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('HealthCheck')
@Controller('health-check')
export class HealthCheckController {
    constructor(private readonly healthCheckService: HealthCheckService) {}

    @Get()
    @ApiOkResponse({
        description: 'Estado de la API es saludable'
    })
    @ApiInternalServerErrorResponse({
        description: 'Error interno de la API'
    })
    getHealth() {
        return this.healthCheckService.checkHealth();
    }
}
