import { ROUTES } from "../../../constants/routes";
import communicationImg from "./images/communication.jpg";
import supplyImg from "./images/supply_chain.jpg";
import priceImg from "./images/price.jpg";
import productImg from "./images/product.jpg";
import marketingImg from "./images/marketing.jpg";
import dafoImg from "./images/dafo.jpg";
import environmentImg from "./images/environment.jpg";
import aboutUsImg from "./images/idea.jpg";

export const ARTICLES = [
  {
    title: "Ideas y Promotores",
    route: ROUTES.ABOUT_US,
    image: aboutUsImg,
    description:
      "Conoce nuestra idea de negocio, quiénes somos, qué nos ha llevado a montar Blue Tech y qué nos mueve. Apostamos por la tecnología y por nuestra tierra, Almería.",
  },
  {
    title: "Análisis del Entorno",
    route: ROUTES.ENVIRONMENT,
    image: environmentImg,
    description:
      "¿Qué hay a nuestro alrededor? Blue Tech convive y se relaciona con su entorno, dinamizándolo pero también viéndose afectado por él. Analizamos el macroentorno y el microentorno.",
  },
  {
    title: "Análisis Dafo",
    route: ROUTES.DAFO,
    image: dafoImg,
    description:
      "¿Cuál es la posición de Blue Tech? Analizamos sus amenazas, oportunidades, bebilidad y fortalezas. Conocernos en profundidad es la clave del éxito del mañana.",
  },
  {
    title: "Marketing Estratégico",
    route: ROUTES.STRATEGY,
    image: marketingImg,
    description:
      "¿A quiénes vamos dirigidos? Hacemos un repaso por el perfil de nuestra clientela y conocemos nuestra ventaja diferencial respecto a nuestros competidores directos.",
  },
  {
    title: "Política de Producto",
    route: ROUTES.PRODUCT,
    image: productImg,
    description:
      "¿Qué productos ofrecemos?, ¿cuáles son sus ventajas?, ¿cómo es nuestro servicio de venta y de postventa? Conoce el trato más personal.",
  },
  {
    title: "Política de Precios",
    route: ROUTES.PRICE,
    image: priceImg,
    description:
      "¿Cuánto valen nuestro servicios y productos?, ¿ofrecemos un precio justo?, ¿cómo son nuestros precios respecto a la competencia?",
  },
  {
    title: "Política de Districión",
    route: ROUTES.SUPPLY,
    image: supplyImg,
    description:
      "¿Cuáles son los canales de districión de nuestros productos? Llegamos a nuestro cliente en cualquier momento y lugar.",
  },
  {
    title: "Política de Comunicación",
    route: ROUTES.COMMUNICATION,
    image: communicationImg,
    description:
      "¿Cómo conocerán nuestros clientes nuestros productos? Potenciamos nuestras habilidades de comunicación para ponerlas al servicio de nuestro cliente",
  },
];
