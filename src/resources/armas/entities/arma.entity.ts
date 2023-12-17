import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('ARMAS')
export class ArmaEntity {
    @PrimaryGeneratedColumn('identity')
    id: string;

    @Column('varchar', { name: 'nombre'})
    nombre: string;

    @Column('varchar', { name: 'tipo'})
    tipo: string;

    @Column('varchar', { name: 'rareza'})
    rareza: string;

    @Column('varchar', { name: 'dificultad' })
    dificultad_de_0_a_5_estrellas: string;

    @Column('varchar', { name: 'mapa'})
    mapa_de_obtencion: string;
    
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}
