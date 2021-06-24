import { Component, OnInit } from '@angular/core';
import { productos } from '../../../../assets/data/json';
import { PruebaProductosService } from "../../servicios/prueba-productos/prueba-productos.service";
import { ActivatedRoute, Router } from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  listadoProductos: any;
  nameProducto: any;
  filtros: any;
  page_size: number = 5;
  page_number: number = 1;
  pages: any;
  p: number = 1;

  forma1: boolean;
  forma2: boolean;
  forma3: boolean;

  currentPage: any;
  firstPageUrl: any;
  lastPage: any;
  lastPageUrl: any;
  nextPageUrl: any;
  prevPageUrl: any;
  to: any;
  total: any;
  filtrar: any[] = [];
  filtro: any[] = [];
  listadoProductosTemp: any;
  per_page: number;
  categoria: number;

  constructor(private productosS: PruebaProductosService, private ruta: Router) {
  }

  ngOnInit(): void {
    // this.filtros = {
    //   gossen: null,
    //   ndb: null,
    //   gmc: null,
    //   dranetz: null,
    //   beckwith: null,
    //   ordenar: null,
    //   paginas: null
    // }
    this.getCategoria();
    this.paginas();
    /*this.listarForma1();
    this.listarForma2();
    this.listarForma3();*/

    this.forma1 = true;
  }

  paginas() {
    this.productosS.getListarProductosWP().then(respuesta => {
      this.page_size = respuesta.headers['x-wp-total'];
      this.paginasTotal();
      this.listarProductos();

    })
  }

  getCategoria() {
    this.categoria = this.productosS.getCategoria();
  }


  listarProductos(cantidad: number = 5, ordenarProductos: boolean = true) {
    this.per_page = cantidad;
    if (!ordenarProductos) {
      this.filtradoProductos();
    } else {
      this.productosS.getListarProductosWP().then(respuesta => {
        console.log(respuesta.data);
        this.listadoProductos = respuesta.data;
        // respuesta.headers['x-wp-totalpages']

        let colorMap = [];
        this.listadoProductos.forEach(element1 => {
          // element1.categories.filter((item, index) => {
          //   return element1.categories.indexOf(item) === index;
          // })
          // console.log(element1.categories);
          if (ordenarProductos) {
            element1.categories.forEach(element2 => {
              if (this.categoria === element2.id) {
                this.filtro.push({
                  ...element2,
                  bandera: true
                });
              } else {
                this.filtro.push({
                  ...element2,
                  bandera: false
                });
              }
            });
          }
        });
        colorMap = this.filtro.map(item => [item.id, item]);
        let colorMapArr = new Map(colorMap);
        let unicos = [...colorMapArr.values()];
        this.filtros = unicos
        for (const filtro of this.filtros) {
          if(filtro.bandera){
            this.filtradoProductos();
          }
        }
        console.log(this.filtros);

      }).catch(error => {
        console.log(error);
      });
    }

    // this.productosS.getListarProductos().then(respuesta => {
    //   console.log(respuesta);
    //   this.listadoProductos = respuesta['productos'];
    // }).catch(error => {

    // });

  }

  paginasTotal() {
    this.productosS.setPorPagina(this.page_size);
  }

  filtradoProductos() {
    this.filtrar = [];
    if (!this.listadoProductosTemp || this.listadoProductosTemp === this.listadoProductos) {
      this.listadoProductosTemp = this.listadoProductos;
    }
    this.listadoProductosTemp.forEach(element1 => {
      for (const filtro of this.filtros) {
        element1.categories.filter(marca => {
          if (filtro.bandera && filtro.id === marca.id) {
            this.filtrar.push(element1);
          }
        });
      }
    });
    if (this.filtrar.length > 0) {
      console.log(this.filtrar);
      this.listadoProductos = this.filtrar;
      // this.calcularPaginas();
    } else {
      this.listadoProductos = this.listadoProductosTemp;
      // this.calcularPaginas();
      console.log(this.listadoProductos);
    }
    // if (this.filtros.gossen ||
    //   this.filtros.beckwith ||
    //   this.filtros.dranetz ||
    //   this.filtros.gmc ||
    //   this.filtros.ndb ||
    //   this.filtros.ordenar ||
    //   this.filtros.paginas){
    //   this.productosS.postListarProductos(this.filtros).then(respuesta => {
    //     this.listadoProductos = respuesta['productos'];
    //   }).catch(error => {
    //     console.log(error);
    //   });
  }

  detalleProductos(producto, codigo) {

    this.nameProducto = producto.replace(/ /gi, '-');
    this.nameProducto = this.nameProducto.toLowerCase();

    this.nameProducto = this.nameProducto.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    this.ruta.navigateByUrl(`/colombia/detalle-productos/${codigo}/${this.nameProducto}`);
    // this.ruta.navigate(['/detalle-productos/' + codigo + '/' + this.nameProducto])
    console.log(this.nameProducto)
  }

  listarForma1() {
    this.forma1 = true;
    this.forma2 = false;
    this.forma3 = false;

  }

  listarForma2() {
    this.forma1 = false;
    this.forma2 = true;
    this.forma3 = false;

  }

  listarForma3() {
    this.forma1 = false;
    this.forma2 = false;
    this.forma3 = true;
  }

  /*
    PAGINACION
  */
  // Cambia la cantidad de productos a mostrar.
  changePaginate(value) {
    this.paginasTotal();
    this.p = 1;
    this.listarProductos(value, false);
    // this.page_size = value;
    // this.page_number = 1;
    // this.calcularPaginas();
  }

  // Calcula las paginas totales que existen.
  calcularPaginas(cantidad: number) {
    // let cant_pages = Math.ceil(this.listadoProductos.length / this.page_size);
    let cant_pages = cantidad;
    console.log(cant_pages);
    this.pages = {
      first_page: 1,
      last_page: cant_pages,
      max_pages: 20
    }
    // this.pages = cant_pages;
  }
  // Cambia de pagina.
  changePage(page, left = null, right = null) {
    if (page != null) {
      this.page_number = page;
      // ultimas 6 paginas restantes. Se le resta 5 porque no se cuenta el mismo.
      let ultimo_tramo = this.pages.last_page - 5;
      let first_page: any;
      // Si la pagina a ver es mayor o igual al ultimo tramo de paginas restantes. Se planta en el ultimo tramo.
      if (this.page_number >= ultimo_tramo) {
        first_page = ultimo_tramo;
      } else {
        first_page = this.page_number;
      }
      this.pages = {
        first_page: first_page,
        last_page: this.pages.last_page,
        max_pages: this.pages.last_page > 5 ? 5 : this.pages.last_page
      }
    }

    if (left) {
      let total_pages = Math.ceil(this.listadoProductos.length / this.page_size);
      if (this.page_number > 1 && this.page_number <= total_pages) {
        this.page_number = this.page_number - 1;
        // ultimas 6 paginas restantes. Se le resta 5 porque no se cuenta el mismo.
        let ultimo_tramo = this.pages.last_page - 5;
        let first_page: any;
        // Si la pagina a ver es mayor o igual al ultimo tramo de paginas restantes. Se planta en el ultimo tramo.
        if (this.page_number >= ultimo_tramo) {
          first_page = ultimo_tramo;
        } else {
          first_page = this.page_number;
        }

        this.pages = {
          first_page: first_page,
          last_page: this.pages.last_page,
          max_pages: this.pages.last_page > 5 ? 5 : this.pages.last_page
        }
      }
    }

    if (right) {
      let total_pages = Math.ceil(this.listadoProductos.length / this.page_size);
      if (this.page_number < total_pages) {
        this.page_number = this.page_number + 1;
        // ultimas 6 paginas restantes. Se le resta 5 porque no se cuenta el mismo.
        let ultimo_tramo = this.pages.last_page - 5;
        let first_page: any;
        // Si la pagina a ver es mayor o igual al ultimo tramo de paginas restantes. Se planta en el ultimo tramo.
        if (this.page_number >= ultimo_tramo) {
          first_page = ultimo_tramo;
        } else {
          first_page = this.page_number;
        }
        this.pages = {
          first_page: first_page,
          last_page: this.pages.last_page,
          max_pages: this.pages.last_page > 5 ? 5 : this.pages.last_page
        }

      }
    }

    // $('body, html').animate({
    //   scrollTop: '0px'
    // }, 300);
  }

}
