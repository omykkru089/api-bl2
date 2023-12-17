import { ApiProperty } from "@nestjs/swagger";

export class Arma{
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    nombre: string;
    
    @ApiProperty()
    tipo: string;
    
    @ApiProperty()
    rareza: string;
    
    @ApiProperty()
    dificultad_de_0_a_5_estrellas: string;

    @ApiProperty()
    mapa_de_obtencion: string;
        
    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}