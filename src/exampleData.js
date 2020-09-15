import { v4 as uuid } from "uuid";
import * as dayjs from "dayjs";
require("dayjs/locale/es");
dayjs.locale("es");

const dummieData = [
  {
    news_id: 1758789,
    url:
      "https://www.lanacion.com.ar/politica/buscan-impedir-cristobal-lopez-recupere-obra-publica-nid2449208",
    title:
      "Buscan impedir que Cristóbal López recupere una obra pública sospechada",
    date: 1600037319,
    source_id: 21,
    img_url: "https://bucket1.glanacion.com/anexos/fotos/70/3319670.jpg",
    reactions_count: null,
    content_views_count: null,
    bayes_category_id: null,
    source_name: "La Nacion",
    category: "Política",
    reactions: [],
  },
  {
    news_id: 1758788,
    url:
      "https://www.infobae.com/america/mexico/2020/09/13/advirtieron-riesgos-por-posible-reduccion-de-presupuesto-para-la-agencia-federal-de-aviacion-civil-en-2021-tendria-20-menos/",
    title:
      "Advirtieron riesgos por posible reducción de presupuesto para la Agencia Federal de Aviación Civil en 2021: tendría 20% menos",
    date: 1600035290,
    source_id: 9,
    img_url:
      "https://www.infobae.com/new-resizer/Nres_HAHnRbQRkRlX9F_MNYrk04=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/QJAWYUIP7NBFPB2FR3HHBFQQ2I.jpeg",
    reactions_count: null,
    content_views_count: null,
    bayes_category_id: null,
    source_name: "Infobae",
    category: null,
    reactions: [],
  },
  {
    news_id: 1758787,
    url:
      "https://www.infobae.com/america/agencias/2020/09/13/extraen-los-primeros-cuerpos-tras-derrumbe-de-mina-de-oro-en-rdc/",
    title: "Extraen los primeros cuerpos tras derrumbe de mina de oro en RDC",
    date: 1600035315,
    source_id: 9,
    img_url: null,
    reactions_count: null,
    content_views_count: null,
    bayes_category_id: null,
    source_name: "Infobae",
    category: null,
    reactions: [],
  },
  {
    news_id: 1758786,
    url:
      "https://www.infobae.com/america/agencias/2020/09/13/medias-blancas-vencen-5-2-a-tigres-y-se-llevan-la-serie/",
    title: "Medias Blancas vencen 5-2 a Tigres y se llevan la serie",
    date: 1600035336,
    source_id: 9,
    img_url: null,
    reactions_count: null,
    content_views_count: null,
    bayes_category_id: null,
    source_name: "Infobae",
    category: null,
    reactions: [],
  },
  {
    news_id: 1758785,
    url:
      "https://www.infobae.com/america/venezuela/2020/09/13/la-oposicion-al-regimen-de-maduro-denuncio-nuevas-maniobras-del-grupo-terrorista-hezbollah-para-aumentar-su-influencia-en-venezuela/",
    title:
      "La oposición al régimen de Maduro denunció nuevas maniobras del grupo terrorista Hezbollah para aumentar su influencia en Venezuela",
    date: 1600035338,
    source_id: 9,
    img_url:
      "https://www.infobae.com/new-resizer/9fqmKPMQ8fD_hbNm7557kvjDZpU=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/O73FRYKL6BFUBDJ2KYEWNYAJJA.jpg",
    reactions_count: null,
    content_views_count: null,
    bayes_category_id: 2,
    source_name: "Infobae",
    category: "Internacionales",
    reactions: [],
  },
  {
    news_id: 1758784,
    url:
      "https://www.infobae.com/america/agencias/2020/09/13/neymar-expulsado-acusa-a-alvaro-gonzalez-de-racismo/",
    title: 'Neymar, expulsado, acusa a Álvaro González de "racismo"',
    date: 1600035458,
    source_id: 9,
    img_url: null,
    reactions_count: null,
    content_views_count: null,
    bayes_category_id: null,
    source_name: "Infobae",
    category: null,
    reactions: [],
  },
  {
    news_id: 1758783,
    url:
      "https://www.infobae.com/america/agencias/2020/09/13/adolescente-mapuche-resulta-herido-en-sur-de-chile/",
    title: "Adolescente mapuche resulta herido en sur de Chile",
    date: 1600035816,
    source_id: 9,
    img_url: null,
    reactions_count: null,
    content_views_count: null,
    bayes_category_id: null,
    source_name: "Infobae",
    category: null,
    reactions: [],
  },
];

const formatNews = (news) => {
  return {
    id: uuid(),
    title: news.title,
    url: news.url,
    imgUrl: news.img_url,
    date: dayjs(news.date).format("D/MM/YYYY"),
    source: news.source_name,
    category: news.category,
  };
};

const formattedNews = dummieData.map((news) => formatNews(news));

export default formattedNews;
