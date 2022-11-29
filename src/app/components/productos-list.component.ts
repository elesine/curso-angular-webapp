import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
	selector: 'productos-list',
	templateUrl: '../views/productos-list.html',
	providers: [ProductoService]
})
export class ProductosListComponent{
	public titulo: string;
	public productos: Producto[];
	public confirmado: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productoService: ProductoService
	){
		this.titulo = 'Listado de productos';
		this.confirmado = null;
    this.productos = [];
	}

	ngOnInit(){
		console.log('productos-list.component.ts cargado');
		this.getProductos();
	}

	getProductos(){
		this._productoService.getProductos().subscribe(
			result => {

				if(result.code != 200){
					console.log('RESULT',result);

				}else{
					this.productos = result.data;
          console.log('RESULT.data',result.data);
				}

			},
			error => {
				console.log(<any>error);
			}
		);
	}

	borrarConfirm(id: any){
		this.confirmado = id;
	}

	cancelarConfirm(){
		this.confirmado = null;
	}

	onDeleteProducto(id: any){
		this._productoService.deleteProducto(id).subscribe(
			response => {
				if(response.code == 200){
					this.getProductos();
				}else{
					alert('Error al borrar producto');
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
