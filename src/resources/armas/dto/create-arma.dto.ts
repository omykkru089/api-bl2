import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class CreateArmaDto {ç
    @IsOptional()
    @ApiProperty(
        {
            required: true,
            description: 'Nombre del arma',
            example: 'Harold'
        }
    )
    nombre: string;

    @IsOptional()
    @ApiProperty(
        {
            required: true,
            description: 'Tipo del arma',
            example: 'Pistola'
        }
    )
    tipo: string;

    @IsOptional()
    @ApiProperty(
        {
            required: true,
            description: 'Rareza del arma',
            example: 'Legendaria'
        }
    ) 
    rareza: string;

    @IsOptional()
    @ApiProperty(
        {
            required: true,
            description: 'Dificultad de conseguir del arma',
            example: 'Media-Alta'
        }
    )
    dificultad_de_0_a_5_estrellas: string;

    @IsOptional()
    @ApiProperty(
        {
            required: false,
            description: 'Mapa donde se consigue del arma',
            example: 'Three Horns - Divide'
        }
    )
    mapa_de_obtencion: string;
}
