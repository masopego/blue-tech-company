import { ROUTES } from "../../../constants/routes";

export const MENU = [
  {
    title: "INICIO",
    link: ROUTES.BOARD,
    submenus: [],
  },
  {
    title: "ESTRATEGIA",
    link: "",
    submenus: [
      { title: "Análisis del Entorno", link: ROUTES.ENVIRONMENT },
      { title: "Análisis DAFO", link: ROUTES.DAFO },
      { title: "Marketing Estratégico", link: ROUTES.STRATEGY },
    ],
  },
  {
    title: "POLÍTICAS",
    link: "",
    submenus: [
      { title: "De Producto", link: ROUTES.PRODUCT },
      { title: "De Precio", link: ROUTES.PRICE },
      { title: "De Distribución", link: ROUTES.SUPPLY },
      { title: "De Comunicación", link: ROUTES.COMMUNICATION },
    ],
  },
  {
    title: "OPERACIONES",
    link: "",
    submenus: [
      { title: "Plan de Producción o de Operaciones", link: ROUTES.PRODUCTION },
      { title: "Prevención de Riesgos Laborales", link: ROUTES.PREVENTION },
    ],
  },
  {
    title: "SOBRE NOSOTROS",
    link: ROUTES.ABOUT_US,
    submenus: [],
  },
];
