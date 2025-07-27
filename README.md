# Destinos Únicos - Landing Page

Landing page para una empresa de regalos especiales construida con React y Vite.

## Características

- Página principal con hero section y secciones de regalos
- Catálogo filtrable por categorías (Románticos, Fechas Especiales, Cumpleaños)
- Modal para ver detalles de cada regalo
- Diseño responsivo con Tailwind CSS
- Navegación entre páginas con React Router

## Tecnologías

- React 19.1.0
- Vite 7.0.4
- Tailwind CSS 4.1.11
- React Router DOM 6.30.1
- Keen Slider 6.8.6

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/daxhoDev/destinos-unicos-landing-page.git
cd destinos-unicos-landing-page

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## Scripts

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Linting del código

## Estructura

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas principales
├── assets/        # Imágenes y recursos
└── App.jsx        # Componente principal
```

## Despliegue

El proyecto incluye configuración para Vercel (`vercel.json`). Para desplegar:

1. Conectar repositorio a Vercel
2. Vercel detectará automáticamente la configuración de Vite

## Contenido

- 16 regalos con imágenes, descripciones y precios
- 3 categorías: Románticos, Fechas Especiales, Cumpleaños
- Sección de reseñas de clientes
- Información sobre la empresa
