# Refugio Lunar Cosmetica Natural - E-commerce

E-commerce desarrollado con **React JS** como proyecto de práctica y aprendizaje. La aplicación permite visualizar productos, filtrarlos por categorías, consultar el detalle de cada producto, agregarlos al carrito y generar órdenes de compra utilizando **Firebase Firestore**.

🌐 **Demo online:** https://refugiolunarshop.vercel.app/
💻 **Repositorio:** https://github.com/ropi-rmt/3_ecommerce_react

---

## Funcionalidades

* Visualización dinámica de productos desde Firebase Firestore.
* Filtrado de productos por categorías.
* Vista de detalle de cada producto.
* Selector de cantidad según el stock disponible.
* Carrito de compras.
* Agregar productos al carrito.
* Eliminar productos del carrito.
* Cálculo del total de la compra.
* Manejo del carrito mediante Context API.
* Formulario de checkout.
* Generación de órdenes de compra.
* Almacenamiento de órdenes en Firebase Firestore.
* Carga de productos a Firebase mediante un componente específico.
* Navegación entre las diferentes secciones mediante React Router.
* Página de contacto.
* Página "Nosotros".
* Indicadores de carga durante la obtención de productos.
* Manejo de errores.
* Diseño responsive mediante CSS.
* Deploy de la aplicación en Vercel.

---

## Tecnologías utilizadas

* **React JS**
* **Vite**
* **JavaScript**
* **React Router DOM**
* **Firebase / Firestore**
* **React Icons, React Spinners**
* **CSS**
* **Vercel**

---

## Firebase & Firestore

La aplicación utiliza **Firebase Firestore** como base de datos.

Los productos del catálogo se obtienen dinámicamente desde Firestore y las órdenes generadas durante el proceso de compra también se almacenan en la base de datos.

Además, el proyecto cuenta con un componente para facilitar la carga de productos a la base de datos.

La conexión con Firebase se realiza mediante **variables de entorno**, evitando incluir la configuración directamente en el código fuente.

---

## Carrito de compras

El carrito se gestiona utilizando **Context API**, permitiendo compartir el estado del carrito entre los diferentes componentes de la aplicación sin necesidad de pasar las propiedades manualmente entre ellos.

El usuario puede:

1. Seleccionar un producto.
2. Elegir la cantidad deseada.
3. Agregarlo al carrito.
4. Visualizar los productos seleccionados.
5. Eliminar productos.
6. Consultar el total.
7. Continuar con el proceso de checkout.

---

## Checkout y órdenes

Una vez que el usuario decide finalizar la compra, puede completar el formulario de checkout.

Al confirmar la compra, se genera una orden que contiene la información correspondiente y se almacena en **Firebase Firestore**. 

Además se muestra una pantalla final de "compra exitosa" con el código de la orden, como asi tambien se deshabilita el boton de finalizar compra una vez clickeado y se vacia el carrito al confirmarse la compra exitosa.

---

## 📂 Estructura del proyecto

```text
3_ecommerce_react/
│
├── public/
│
├── src/
│   │── assets/
│   │   ├──── CSS/
│   │      ├── CartWidget.css
│   │      ├── Checkout.css
│   │      ├── EmptyCart.css
│   │      ├── Error.css
│   │      ├── Footer.css
│   │      ├── ItemCount.css
│   │      ├── ItemDetail.css
│   │      ├── ItemList.css
│   │      ├── LoadingComponent.css
│   │      └── Navbar.css
│   │
│   ├── components/
│   │   ├── CartView.jsx
│   │   ├── CartWidget.jsx
│   │   ├── Checkout.jsx
│   │   ├── Contacto.jsx
│   │   ├── EmptyCart.jsx
│   │   ├── Error.jsx
│   │   ├── Footer.jsx
│   │   ├── Item.jsx
│   │   ├── ItemCount.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── LoadingComponent.jsx
│   │   ├── Navbar.jsx
│   │   ├── Nosotros.jsx
│   │   └── UploadProducts.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   │
│   ├── service/
│   │   └── firebase.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

> La carpeta `.env` se utiliza para las variables de entorno y no se incluye en el repositorio gracias a `.gitignore`.

---

## Instalación y ejecución

Para ejecutar el proyecto de manera local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/ropi-rmt/3_ecommerce_react.git
```

### 2. Ingresar al proyecto

```bash
cd 3_ecommerce_react
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar Firebase

Crear un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias para la conexión con Firebase.

Por motivos de seguridad, las variables de entorno no se encuentran incluidas en el repositorio.

### 5. Ejecutar el proyecto

```bash
npm run dev
```

Vite proporcionará la dirección local para acceder a la aplicación desde el navegador.

---

## Deploy

La aplicación se encuentra desplegada utilizando **Vercel**.

🌐 **Aplicación online:**
https://refugiolunarshop.vercel.app/

---

## Objetivo del proyecto

Este proyecto fue realizado como parte del proceso de aprendizaje de **React JS**, con el objetivo de aplicar conceptos fundamentales del desarrollo de aplicaciones web.

Durante el desarrollo se trabajó con:

* Componentes funcionales.
* Props.
* Renderizado dinámico con `.map()`.
* Hooks como `useState` y `useEffect`.
* `useContext` y Context API.
* React Router.
* Rutas dinámicas.
* Manejo de eventos.
* Formularios.
* Manejo de estados.
* Consumo de datos desde Firebase.
* Consultas a Firestore.
* Creación de documentos en Firestore.
* Variables de entorno.
* Manejo de errores y estados de carga.
* Deploy de una aplicación React.

---

## Autor

**Rocio Mendez**

Proyecto realizado con fines educativos y de práctica en desarrollo web durante el curso de Coderhouse "React JS", el cual forma parte de la carrera de Full Stack
