import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, NotAcceptableException, UseGuards } from '@nestjs/common';
import { ArmasService } from './armas.service';
import { CreateArmaDto } from './dto/create-arma.dto';
import { UpdateArmaDto } from './dto/update-arma.dto';
import { ApiBasicAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotAcceptableResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Arma } from './dto/arma';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Armas')
@ApiBasicAuth()
@Controller('armas')
export class ArmasController {
  constructor(private readonly armasService: ArmasService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Arma creada con exito',
    type: Arma
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  create(@Body() createArmaDto: CreateArmaDto) {
    return this.armasService.create(createArmaDto);
  }

  @Get()
  @UseGuards(AuthGuard('basic'))
  @ApiOkResponse({
    description:'Armas encontrada con exito',
    type: Arma,
    isArray: true
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  findAll() {
    return this.armasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description:'Arma encontrada con exito',
    type: Arma,
    isArray: true
  })
  @ApiNotAcceptableResponse({
    description:'ID de arma invalida'
  })
  @ApiNotFoundResponse({
    description:'El arma no encontrada'
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  findOne(@Param('id') id: string) {
    return this.armasService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description:'Arma actualizada con exito',
    type: Arma,
    isArray: true
  })
  @ApiNotAcceptableResponse({
    description:'ID de arma invalida'
  })
  @ApiNotFoundResponse({
    description:'El arma no encontrada'
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  update(@Param('id') id: string, @Body() updateArmaDto: UpdateArmaDto) {
    return this.armasService.update(id, updateArmaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('basic'))
  @ApiOkResponse({
    description:'Arma eliminada con exito',
    type: Arma,
    isArray: true
  })
  @ApiNotAcceptableResponse({
    description:'ID de arma invalida'
  })
  @ApiNotFoundResponse({
    description:'El arma no encontrada'
  })
  @ApiInternalServerErrorResponse({
    description: 'Error de base de datos'
  })
  remove(@Param('id') id: string) {
    return this.armasService.remove(id);
  }
}
