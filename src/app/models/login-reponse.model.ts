import { empleado } from './empleado.model';

export interface LoginReponse {
  empleado: empleado;
  empleadoDocBoxId: number;
  estadoDocBox: estadoDocBox;
  status: string;
  token: string;
}

export interface estadoDocBox {
  EstadoDocBox: string;
  idEstadoDocBox: number;
}
