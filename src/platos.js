// 1. Importas todas tus imágenes webp desde la carpeta assets
import smashBurger from "./assets/carta/hamburguesa.webp";
import tequenos from "./assets/carta/tequenos.webp";
import ensaladaBurrata from "./assets/carta/ensalada-burrata.webp";
import tartaQueso from "./assets/carta/tarta-queso.webp";
import brownie from "./assets/carta/brownie.webp";
import refresco from "./assets/carta/refresco.webp";
import nachos from "./assets/carta/nachos.webp";
import costillar from "./assets/carta/costilla-bbq.webp";
import tacos from "./assets/carta/tacos-pibil.webp";
import gyozas from "./assets/carta/gyozas.webp";
import cerveza from "./assets/carta/cerveza.webp";
import coulant from "./assets/carta/coulant.webp";

// 2. Las asignas directamente en el objeto (sin comillas, como variables)
export const TOCARTA_MOCK = [
	{
		id: 1,
		nombre: "Hamburguesa Smash Tech",
		precio: 12.5,
		categoria: "principales",
		descripcion:
			"Doble carne de buey madurado, queso cheddar fundido, bacon crujiente y nuestra salsa secreta.",
		imagen: smashBurger,
		alergenos: ["gluten", "lactosa"],
	},
	{
		id: 2,
		nombre: "Tequeños con Guacamole",
		precio: 8.0,
		categoria: "entrantes",
		descripcion:
			"Palitos de queso envueltos en masa crujiente acompañados de guacamole casero.",
		imagen: tequenos,
		alergenos: ["gluten", "lactosa"],
	},
	{
		id: 3,
		nombre: "Ensalada Burrata y Tomate",
		precio: 10.5,
		categoria: "entrantes",
		descripcion:
			"Burrata fresca sobre cama de tomates de la huerta, pesto de albahaca y piñones.",
		imagen: ensaladaBurrata,
		alergenos: ["lactosa", "frutos-secos"],
	},
	{
		id: 4,
		nombre: "Tarta de Queso Fluida",
		precio: 6.5,
		categoria: "postres",
		descripcion:
			"Nuestra famosa tarta de queso horneada al estilo de San Sebastián, cremosa por dentro.",
		imagen: tartaQueso,
		alergenos: ["lactosa", "huevos", "gluten"],
	},
	{
		id: 5,
		nombre: "Brownie con Helado",
		precio: 5.5,
		categoria: "postres",
		descripcion:
			"Brownie de chocolate negro entibiado, servido con una bola de helado de vainilla de Madagascar.",
		imagen: brownie,
		alergenos: ["gluten", "lactosa", "frutos-secos"],
	},
	{
		id: 6,
		nombre: "Refresco de Cola / Agua",
		precio: 2.5,
		categoria: "bebidas",
		descripcion: "Servidos bien fríos con hielo y rodaja de limón.",
		imagen: refresco,
		alergenos: [],
	},
	{
		id: 7,
		nombre: "Nachos Completos Vulcano",
		precio: 11.0,
		categoria: "entrantes",
		descripcion:
			"Totopos de maíz crujientes cubiertos de queso fundido, frijoles, jalapeños, pico de gallo y crema agria.",
		imagen: nachos,
		alergenos: ["lactosa"],
	},
	{
		id: 8,
		nombre: "Costillar BBQ Cocinado a Baja Temperatura",
		precio: 16.9,
		categoria: "principales",
		descripcion:
			"Costillas de cerdo ibérico glaseadas con nuestra salsa barbacoa casera, acompañadas de patatas gajo.",
		imagen: costillar,
		alergenos: ["gluten"],
	},
	{
		id: 9,
		nombre: "Tacos de Cochinita Pibil (3 uds)",
		precio: 9.5,
		categoria: "principales",
		descripcion:
			"Tortillas de maíz con carne de cerdo adobada en achiote, cebolla encurtida y un toque de lima.",
		imagen: tacos,
		alergenos: [],
	},
	{
		id: 10,
		nombre: "Gyoza de Pollo y Verduras (6 uds)",
		precio: 7.5,
		categoria: "entrantes",
		descripcion:
			"Empanadillas japonesas tostadas a la plancha acompañadas de salsa de soja dulce.",
		imagen: gyozas,
		alergenos: ["gluten", "soja"],
	},
	{
		id: 11,
		nombre: "Cerveza Artesana / Doble de Caña",
		precio: 3.5,
		categoria: "bebidas",
		descripcion:
			"Cerveza local bien tirada, fresquita y con el punto justo de espuma.",
		imagen: cerveza,
		alergenos: ["gluten"],
	},
	{
		id: 12,
		nombre: "Coulant de Chocolate Belga",
		precio: 6.0,
		categoria: "postres",
		descripcion:
			"Bizcocho caliente con corazón de chocolate líquido fundido, acompañado de sorbete de mandarina.",
		imagen: coulant,
		alergenos: ["gluten", "lactosa", "huevos"],
	},
];
