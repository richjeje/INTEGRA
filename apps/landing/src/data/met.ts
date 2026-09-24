export { processes } from './catalog.js';

export const materials = [
  { id: 'a36', name: 'Acero ASTM A36', image: '/materiales/acero-a36-cutout.png', laser: '19 mm ideal · 25 mm máximo', bend: '6.75 mm a 4200 mm' },
  { id: 'inox', name: 'Inoxidable ASTM 304', image: '/materiales/inoxidable-304-cutout.png', laser: '12 mm ideal · 16 mm máximo', bend: '6.5 mm a 4200 mm' },
  { id: 'aluminio', name: 'Aluminio ASTM 6061', image: '/materiales/aluminio-6061-cutout.png', laser: '9 mm ideal · 12 mm máximo', bend: '17 mm a 4200 mm' },
  { id: 'laton', name: 'Latón C27200', image: '/materiales/laton-c27200-cutout-v2.png', laser: '7 mm ideal · 10 mm máximo' },
  { id: 'galvanizado', name: 'Acero galvanizado ASTM A653', image: '/materiales/galvanizado-a653-cutout.png', laser: '3 mm ideal · 5 mm máximo' },
];

export const profiles = [
  { name: 'Solera', image: '/perfiles/solera.png', description: 'Perfil plano para curvas continuas, aros y componentes estructurales.', review: 'Ancho, espesor, material y radio solicitado' },
  { name: 'Ángulo', image: '/perfiles/angulo.png', description: 'La posición de sus alas modifica la manera en que responde durante el rolado.', review: 'Medida de las alas, espesor, orientación y radio' },
  { name: 'PTR', image: '/perfiles/ptr.png', description: 'Sección tubular cerrada que requiere controlar la orientación y la deformación de sus paredes.', review: 'Alto, ancho, espesor de pared, material y radio' },
  { name: 'Redondo', image: '/perfiles/redondo.png', description: 'Barra sólida para arcos, aros y trayectorias curvas definidas por proyecto.', review: 'Diámetro, material, longitud y radio solicitado' },
  { name: 'Canal', image: '/perfiles/canal.png', description: 'Perfil abierto cuya viabilidad depende del sentido de curvatura y la posición de sus alas.', review: 'Peralte, ancho de alas, espesor, orientación y radio' },
];
