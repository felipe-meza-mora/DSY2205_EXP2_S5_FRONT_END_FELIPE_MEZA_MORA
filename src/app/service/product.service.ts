import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'http://localhost:8181/api/products'; // URL base del backend

  // BehaviorSubject para manejar el carrito de compras
  private cart = new BehaviorSubject<{ product: Product, quantity: number }[]>(this.getCart());
  cart$ = this.cart.asObservable();

  constructor(private http: HttpClient) {}

  // Método para verificar si existe un producto por ID
  checkProductIdExists(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${id}`);
  }

  // Método para obtener un producto por ID
  getProductById(id: string): Observable<{ product: Product }> {
    return this.http.get<{ product: Product }>(`${this.apiUrl}/${id}`);
  }

  // Método para agregar un producto
  addProduct(product: Product): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/add`, product);
  }

  // Método para actualizar un producto
  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  // Método para eliminar un producto
  deleteProduct(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }

  // Método para obtener todos los productos
  getProducts(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`${this.apiUrl}`);
  }

  // Métodos del carrito de compras

  /**
   * Agrega un producto al carrito de compras.
   * Si el producto ya existe, incrementa la cantidad.
   * @param product El producto a agregar al carrito.
   */
  addToCart(product: Product): void {
    // Implementación de ejemplo vacía
    console.log('Método addToCart llamado con producto:', product);
  }

  /**
   * Incrementa la cantidad de un producto en el carrito.
   * @param productId El ID del producto cuya cantidad se desea incrementar.
   */
  incrementQuantity(productId: number): void {
    // Implementación de ejemplo vacía
    console.log('Método incrementQuantity llamado con productId:', productId);
  }

  /**
   * Decrementa la cantidad de un producto en el carrito.
   * Si la cantidad alcanza 0, el producto se elimina del carrito.
   * @param productId El ID del producto cuya cantidad se desea decrementar.
   */
  decrementQuantity(productId: number): void {
    // Implementación de ejemplo vacía
    console.log('Método decrementQuantity llamado con productId:', productId);
  }

  /**
   * Obtiene el contenido actual del carrito de compras.
   * @returns Un arreglo con los productos y sus cantidades en el carrito.
   */
  getCart(): { product: Product, quantity: number }[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }

  /**
   * Limpia el carrito de compras.
   */
  clearCart(): void {
    console.log('Método clearCart llamado');
    // Implementación de ejemplo vacía
  }

  /**
   * Actualiza el carrito de compras y lo guarda en localStorage.
   * @param cart El nuevo estado del carrito de compras.
   */
  private updateCart(cart: { product: Product, quantity: number }[]): void {
    console.log('Método updateCart llamado con cart:', cart);
    // Implementación de ejemplo vacía
  }
}