var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useRef, useState, useEffect, useMemo } from "react";
import ReactDOMServer from "react-dom/server";
import { useNavigate, NavLink, Link, useParams, Routes, Route } from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import ImageGallery from "react-image-gallery";
import { StaticRouter } from "react-router-dom/server.mjs";
function getUploadURL(path) {
  const baseURL = "https://strapi.cristina-coellen.com/api";
  const URLWithoutAPISuffix = baseURL.replace("/api", "");
  return URLWithoutAPISuffix + path;
}
function CollectionCard({ collection, onClick }) {
  return /* @__PURE__ */ jsxs("section", { className: "collection-section", onClick, children: [
    /* @__PURE__ */ jsx("div", { className: "collection-image", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: getUploadURL(collection.attributes.photos[0].file.data.attributes.formats.small.url),
        alt: collection.attributes.photos[0].caption
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "collection-info", children: [
      /* @__PURE__ */ jsx("h2", { children: collection.attributes.title }),
      /* @__PURE__ */ jsx("p", { children: collection.attributes.summary })
    ] })
  ] });
}
class ApiService {
  static buildHeaders() {
    return {
      Authorization: "Bearer 0dbf5445d3bf723965d9c1bcc1bb1f1ac179b95612fd308a1eb1a51d12fc868aa620139aa7a8ff022f66bbff6e98b2ffb4e360f5a5e48d24a2c960baa774f247acf1564b735a3e95c98b8d7d922828d7bcaf48ca3808049dcf8ba0a913d76ec32707b310b339444467ff6902404d9c337a8fa523a93593884563b40ce15affda"
    };
  }
  static async fetch(pathname, options = {}) {
    const response = await fetch(this.apiUrl + pathname, {
      headers: this.buildHeaders(),
      ...options
    });
    return response.json();
  }
  static fetchCollections() {
    return this.fetch("/collections?populate=photos.file");
  }
  static fetchCollection(id) {
    return this.fetch(`/collections/${id}?populate=photos.file`);
  }
}
__publicField(ApiService, "apiUrl", "https://strapi.cristina-coellen.com/api");
function ScrollDown() {
  return /* @__PURE__ */ jsxs("div", { className: "scroll-down", children: [
    /* @__PURE__ */ jsx("span", { className: "scroll-text", children: "Scroll to explore" }),
    /* @__PURE__ */ jsx("div", { className: "caret" }),
    /* @__PURE__ */ jsx("div", { className: "caret" }),
    /* @__PURE__ */ jsx("div", { className: "caret" })
  ] });
}
function Portfolio() {
  const background = useRef(null);
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    ApiService.fetchCollections().then((response) => {
      setCollections(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { id: "portfolio-jumbotron", ref: background, children: [
      /* @__PURE__ */ jsx(Parallax, { translateX: [5, -5], targetElement: background.current ?? void 0, children: /* @__PURE__ */ jsx("h1", { children: "Portfolio" }) }),
      /* @__PURE__ */ jsx(Parallax, { translateX: [-5, 5], targetElement: background.current ?? void 0, children: /* @__PURE__ */ jsx("h2", { children: "Cristina Coellen" }) }),
      /* @__PURE__ */ jsx(ScrollDown, {})
    ] }),
    collections.map((collection) => /* @__PURE__ */ jsx(
      CollectionCard,
      {
        collection,
        onClick: () => navigate(`/portfolio/collection/${collection.id}`)
      },
      collection.id
    ))
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsx("h1", { children: "404 - Not Found" });
}
const routes = {
  homepage: {
    title: "Cristina Coellen",
    description: "D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.",
    path: "/"
  },
  about: {
    title: "A propos",
    description: "D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.",
    path: "/about"
  },
  portfolio: {
    title: "Portfolio",
    description: "D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.",
    path: "/portfolio"
  },
  contact: {
    title: "Contact",
    description: "D’origine autrichienne, Cristina Coellen est journaliste multimédia. Elle est diplômée de l’école de journalisme de Sciences Po Paris et a travaillé pour des médias français, allemand et européens.",
    path: "/contact"
  }
};
function Header({ immersive }) {
  return /* @__PURE__ */ jsxs("nav", { id: "header", style: {
    position: immersive ? "absolute" : "relative",
    color: immersive ? "white" : "black",
    textShadow: immersive ? "0 2px 4px gray" : "none"
  }, children: [
    /* @__PURE__ */ jsx(NavLink, { to: routes.homepage.path, children: "Home" }),
    /* @__PURE__ */ jsx(NavLink, { to: routes.about.path, children: "About" }),
    /* @__PURE__ */ jsx(NavLink, { to: routes.portfolio.path, children: "Portfolio" }),
    /* @__PURE__ */ jsx(NavLink, { to: routes.contact.path, children: "Contact" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsx("p", { children: "Copyright © Cristina Coellen 2024" }),
    /* @__PURE__ */ jsx(Link, { to: "#", children: "Legal" }),
    /* @__PURE__ */ jsx(Link, { to: "#", children: "Privacy policy" })
  ] });
}
function PageLayout({ children, immersive }) {
  return /* @__PURE__ */ jsxs("div", { id: "layout", children: [
    /* @__PURE__ */ jsx(Header, { immersive }),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Title({ children }) {
  return /* @__PURE__ */ jsx("h1", { children });
}
function Homepage() {
  return /* @__PURE__ */ jsx(PageLayout, { immersive: true, children: /* @__PURE__ */ jsx("div", { id: "jumbo", children: /* @__PURE__ */ jsx(Title, { children: "Cristina Coellen" }) }) });
}
function PhotoGallery({ photos, onPhotoSelect }) {
  const images = photos.map((photo) => ({
    original: getUploadURL(photo.file.data.attributes.formats.small.url),
    thumbnail: getUploadURL(photo.file.data.attributes.formats.thumbnail.url),
    originalHeight: 400,
    thumbnailHeight: 100
  }));
  return /* @__PURE__ */ jsx("div", { style: { backgroundColor: "black" }, children: /* @__PURE__ */ jsx(ImageGallery, { items: images, showThumbnails: true, showNav: true }) });
}
function Presentation({ collection, selectedPhotoIndex }) {
  useRef(null);
  const currentPhoto = useMemo(
    () => collection == null ? void 0 : collection.attributes.photos[selectedPhotoIndex],
    [collection, selectedPhotoIndex]
  );
  console.log(currentPhoto);
  useMemo(
    () => currentPhoto ? getUploadURL(currentPhoto.file.data.attributes.formats.large.url) : void 0,
    [currentPhoto]
  );
  useMemo(
    () => currentPhoto ? currentPhoto.description : void 0,
    [currentPhoto]
  );
  useMemo(
    () => currentPhoto ? currentPhoto.location : void 0,
    [currentPhoto]
  );
  useMemo(
    () => currentPhoto ? currentPhoto.camera : void 0,
    [currentPhoto]
  );
  useMemo(
    () => currentPhoto ? currentPhoto.date : void 0,
    [currentPhoto]
  );
  return /* @__PURE__ */ jsxs("section", { className: "presentation-section", children: [
    /* @__PURE__ */ jsx("h1", { children: collection == null ? void 0 : collection.attributes.title }),
    /* @__PURE__ */ jsx("p", { id: "presentation-summary", children: collection == null ? void 0 : collection.attributes.summary })
  ] });
}
function Collection() {
  const { id } = useParams();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [collection, setCollection] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      console.error("Invalid collection id");
      navigate("/not-found", {
        replace: true
      });
      return;
    }
    ApiService.fetchCollection(parseInt(id, 10)).then((response) => {
      setCollection(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [id]);
  const onPhotoSelect = (photoIndex) => {
    setSelectedPhotoIndex(photoIndex);
    window.scrollTo(0, 0);
  };
  if (!collection)
    return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Presentation, { collection, selectedPhotoIndex }),
    /* @__PURE__ */ jsx(PhotoGallery, { photos: (collection == null ? void 0 : collection.attributes.photos) || [], onPhotoSelect })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsx(Title, { children: "Contact" }),
    /* @__PURE__ */ jsxs("div", { id: "socials", children: [
      /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/cristina-c-7357bb18a/", target: "_blank", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "48", height: "48", viewBox: "0 0 50 50", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
          }
        ) }),
        /* @__PURE__ */ jsx("br", {}),
        "LinkedIn"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "mailto:cristina.coellen@gmail.com", target: "_blank", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "48", height: "48", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "m96.875 25c0-2.4883-0.98828-4.8711-2.7461-6.6289-1.7578-1.7578-4.1406-2.7461-6.6289-2.7461h-75c-2.4883 0-4.8711 0.98828-6.6289 2.7461-1.7578 1.7578-2.7461 4.1406-2.7461 6.6289v50c0 2.4883 0.98828 4.8711 2.7461 6.6289 1.7578 1.7578 4.1406 2.7461 6.6289 2.7461h75c2.4883 0 4.8711-0.98828 6.6289-2.7461 1.7578-1.7578 2.7461-4.1406 2.7461-6.6289zm-63.23 21.504-24.27 27.211c-1.1523 1.2812-1.0508 3.2578 0.23047 4.4141 1.2852 1.1523 3.2578 1.0508 4.4141-0.23047l24.395-27.352 1.4922 1.2617c5.8281 4.9297 14.359 4.9297 20.188 0l1.4961-1.2656 24.375 27.082c1.1523 1.2812 3.1328 1.3828 4.4141 0.23047 1.2812-1.1523 1.3867-3.1328 0.23047-4.4141l-24.242-26.941 23.461-19.852c1.3164-1.1172 1.4805-3.0859 0.36719-4.4062-1.1133-1.3164-3.0859-1.4805-4.4023-0.36719l-29.73 25.156c-3.4961 2.9609-8.6172 2.9609-12.113 0l-29.73-25.156c-1.3164-1.1172-3.2891-0.94922-4.4023 0.36719-1.1172 1.3203-0.94922 3.2891 0.36719 4.4062l23.469 19.855z",
            fillRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("br", {}),
        "Email"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "https://www.instagram.com/cristina_reports/", target: "_blank", children: [
        /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "48", height: "48", viewBox: "0 0 50 50", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"
          }
        ) }),
        /* @__PURE__ */ jsx("br", {}),
        "Instagram"
      ] })
    ] })
  ] });
}
const portrait = "/assets/portrait-BmivbdbN.jpg";
function About() {
  return /* @__PURE__ */ jsxs(PageLayout, { children: [
    /* @__PURE__ */ jsx(Title, { children: "About" }),
    /* @__PURE__ */ jsxs("section", { id: "about", children: [
      /* @__PURE__ */ jsx("img", { src: portrait, alt: "portrait" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Originally from Austria, Cristina Coellen is a multimedia journalist with a lot of love for all things video. She has graduated from ",
        /* @__PURE__ */ jsx("strong", { children: "Durham University (UK)" }),
        " with an undergraduate degree in French and History and from ",
        /* @__PURE__ */ jsx("strong", { children: "Sciences Po Paris" }),
        " with a Master’s in Journalism and International Security.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "During her journalistic training, she notably worked for the German newspaper ",
        /* @__PURE__ */ jsx("strong", { children: "Frankfurter Allgemeine Zeitung" }),
        ", the video department of the French magazine ",
        /* @__PURE__ */ jsx("strong", { children: "Le Nouvel Obs" }),
        " and the evening news show of Franco-German TV channel ",
        /* @__PURE__ */ jsx("strong", { children: "ARTE" }),
        ".",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "She has also freelanced for a variety of media, among which ",
        /* @__PURE__ */ jsx("strong", { children: "Slate" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "New Eastern Europe Magazine" }),
        ", ",
        /* @__PURE__ */ jsx("strong", { children: "Vorarlberger Nachrichten" }),
        " and ",
        /* @__PURE__ */ jsx("strong", { children: "Are We Europe" }),
        ".",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "She is currently working at ",
        /* @__PURE__ */ jsx("strong", { children: "Euronews" }),
        " as a digital video producer."
      ] })
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(ParallaxProvider, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: routes.homepage.path, element: /* @__PURE__ */ jsx(Homepage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: routes.portfolio.path, element: /* @__PURE__ */ jsx(Portfolio, {}) }),
    /* @__PURE__ */ jsx(Route, { path: routes.about.path, element: /* @__PURE__ */ jsx(About, {}) }),
    /* @__PURE__ */ jsx(Route, { path: routes.contact.path, element: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/portfolio/collection/:id", element: /* @__PURE__ */ jsx(Collection, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/not-found", element: /* @__PURE__ */ jsx(NotFound, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] }) });
}
function render(url) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  return html;
}
export {
  render
};
