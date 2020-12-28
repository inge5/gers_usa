export  interface Productos {
  [x: string]: any;
  producto_codigo?: string;
  producto_nombre: string;
  producto_imagen1: string;
  producto_imagen2: string;
  producto_imagen3?: string;
  producto_estado?: boolean;
  producto_promocion: boolean;
  producto_cantidad: number;
  producto_talla: string;
  producto_precio: number;
  categoria_codigo: number;
  producto_imagen4?: string;
  producto_tipoenvio: string;
  producto_descripcion: string;
  producto_valorPromocional?: number;
  producto_cuidadoprenda?: string;
  producto_politicacambio?: string
};
