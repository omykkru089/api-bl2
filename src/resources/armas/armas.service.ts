import { Inject, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';
import { Repository } from 'typeorm';
import { ArmaEntity } from './entities/arma.entity';


@Injectable()
export class ArmasService {
private Logger = new Logger(ArmasService.name);

  constructor(
    @Inject('ARMAS_REPOSITORY')
    private armaRepository: Repository<ArmaEntity>,
  ) {}

  async create(createArmaDto: CreateArmaDto) {
    try {
      return await this.armaRepository.save(createArmaDto);
    } catch (error) {
      const errorMessage = 'Error al crear arma en la DB';
      this.Logger.error(errorMessage,error);
      throw new InternalServerErrorException({
        error: errorMessage
      })
    }
  }

  async findAll() {
    try {
      return await this.armaRepository.find();
    } catch (error) {
      const errorMessage = 'Error al buscar el arma en la DB';
      this.Logger.error(errorMessage,error);
      throw new InternalServerErrorException({
        error: errorMessage
      })
    }
  }

  async findOne(id: string) {
    let armaFound = null;
    try{
      armaFound = await this.armaRepository.findOne({
        where:{
          id
        }
      });
    } catch (error) {
      const errorMessage = 'Error al buscar arma en la DB';
      this.Logger.error(errorMessage,error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
    if (armaFound) {
      return armaFound;
    } else {
      throw new NotFoundException('Arma no encontrado');
    }
  }

  async update(id: string, updateArmaDto: UpdateArmaDto) {
    const armaFound = await this.findOne(id);
    try {
      await this.armaRepository.update(id, {
        ...armaFound,
        ...updateArmaDto
      })
    } catch (error) {
      const errorMessage = 'Error al actualizar el arma en la DB';
      this.Logger.error(errorMessage,error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
  }

  async remove(id: string) {
    const armaFound = await this.findOne(id);
    try{
      await this.armaRepository.remove(armaFound);
    } catch(error){
      const errorMessage = 'Error al actualizar el arma en la DB';
      this.Logger.error(errorMessage,error);
      throw new InternalServerErrorException({
        error: errorMessage
      });
    }
  }
}
