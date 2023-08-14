(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/file-saver/dist/FileSaver.min.js
  var require_FileSaver_min = __commonJS({
    "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
      (function(a, b) {
        if ("function" == typeof define && define.amd)
          define([], b);
        else if ("undefined" != typeof exports)
          b();
        else {
          b(), a.FileSaver = { exports: {} }.exports;
        }
      })(exports, function() {
        "use strict";
        function b(a2, b2) {
          return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
        }
        function c(a2, b2, c2) {
          var d2 = new XMLHttpRequest();
          d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
            g(d2.response, b2, c2);
          }, d2.onerror = function() {
            console.error("could not download file");
          }, d2.send();
        }
        function d(a2) {
          var b2 = new XMLHttpRequest();
          b2.open("HEAD", a2, false);
          try {
            b2.send();
          } catch (a3) {
          }
          return 200 <= b2.status && 299 >= b2.status;
        }
        function e(a2) {
          try {
            a2.dispatchEvent(new MouseEvent("click"));
          } catch (c2) {
            var b2 = document.createEvent("MouseEvents");
            b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
          }
        }
        var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
        } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
          var i = f.URL || f.webkitURL, j = document.createElement("a");
          g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
            i.revokeObjectURL(j.href);
          }, 4e4), setTimeout(function() {
            e(j);
          }, 0));
        } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
          if (g2 = g2 || f2.name || "download", "string" != typeof f2)
            navigator.msSaveOrOpenBlob(b(f2, h), g2);
          else if (d(f2))
            c(f2, g2, h);
          else {
            var i = document.createElement("a");
            i.href = f2, i.target = "_blank", setTimeout(function() {
              e(i);
            });
          }
        } : function(b2, d2, e2, g2) {
          if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
            return c(b2, d2, e2);
          var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
          if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader();
            k.onloadend = function() {
              var a2 = k.result;
              a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
            }, k.readAsDataURL(b2);
          } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
            g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
              l.revokeObjectURL(m);
            }, 4e4);
          }
        });
        f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
      });
    }
  });

  // node_modules/html-to-image/es/util.js
  function resolveUrl(url, baseUrl) {
    if (url.match(/^[a-z]+:\/\//i)) {
      return url;
    }
    if (url.match(/^\/\//)) {
      return window.location.protocol + url;
    }
    if (url.match(/^[a-z]+:/i)) {
      return url;
    }
    const doc = document.implementation.createHTMLDocument();
    const base = doc.createElement("base");
    const a = doc.createElement("a");
    doc.head.appendChild(base);
    doc.body.appendChild(a);
    if (baseUrl) {
      base.href = baseUrl;
    }
    a.href = url;
    return a.href;
  }
  var uuid = (() => {
    let counter = 0;
    const random = () => (
      // eslint-disable-next-line no-bitwise
      `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
    );
    return () => {
      counter += 1;
      return `u${random()}${counter}`;
    };
  })();
  function toArray(arrayLike) {
    const arr = [];
    for (let i = 0, l = arrayLike.length; i < l; i++) {
      arr.push(arrayLike[i]);
    }
    return arr;
  }
  function px(node, styleProperty) {
    const win = node.ownerDocument.defaultView || window;
    const val = win.getComputedStyle(node).getPropertyValue(styleProperty);
    return val ? parseFloat(val.replace("px", "")) : 0;
  }
  function getNodeWidth(node) {
    const leftBorder = px(node, "border-left-width");
    const rightBorder = px(node, "border-right-width");
    return node.clientWidth + leftBorder + rightBorder;
  }
  function getNodeHeight(node) {
    const topBorder = px(node, "border-top-width");
    const bottomBorder = px(node, "border-bottom-width");
    return node.clientHeight + topBorder + bottomBorder;
  }
  function getImageSize(targetNode, options = {}) {
    const width = options.width || getNodeWidth(targetNode);
    const height = options.height || getNodeHeight(targetNode);
    return { width, height };
  }
  function getPixelRatio() {
    let ratio;
    let FINAL_PROCESS;
    try {
      FINAL_PROCESS = process;
    } catch (e) {
    }
    const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
    if (val) {
      ratio = parseInt(val, 10);
      if (Number.isNaN(ratio)) {
        ratio = 1;
      }
    }
    return ratio || window.devicePixelRatio || 1;
  }
  var canvasDimensionLimit = 16384;
  function checkCanvasDimensions(canvas) {
    if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
      if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
        if (canvas.width > canvas.height) {
          canvas.height *= canvasDimensionLimit / canvas.width;
          canvas.width = canvasDimensionLimit;
        } else {
          canvas.width *= canvasDimensionLimit / canvas.height;
          canvas.height = canvasDimensionLimit;
        }
      } else if (canvas.width > canvasDimensionLimit) {
        canvas.height *= canvasDimensionLimit / canvas.width;
        canvas.width = canvasDimensionLimit;
      } else {
        canvas.width *= canvasDimensionLimit / canvas.height;
        canvas.height = canvasDimensionLimit;
      }
    }
  }
  function canvasToBlob(canvas, options = {}) {
    if (canvas.toBlob) {
      return new Promise((resolve) => {
        canvas.toBlob(resolve, options.type ? options.type : "image/png", options.quality ? options.quality : 1);
      });
    }
    return new Promise((resolve) => {
      const binaryString = window.atob(canvas.toDataURL(options.type ? options.type : void 0, options.quality ? options.quality : void 0).split(",")[1]);
      const len = binaryString.length;
      const binaryArray = new Uint8Array(len);
      for (let i = 0; i < len; i += 1) {
        binaryArray[i] = binaryString.charCodeAt(i);
      }
      resolve(new Blob([binaryArray], {
        type: options.type ? options.type : "image/png"
      }));
    });
  }
  function createImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decode = () => resolve(img);
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.crossOrigin = "anonymous";
      img.decoding = "async";
      img.src = url;
    });
  }
  async function svgToDataURL(svg) {
    return Promise.resolve().then(() => new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then((html) => `data:image/svg+xml;charset=utf-8,${html}`);
  }
  async function nodeToDataURL(node, width, height) {
    const xmlns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(xmlns, "svg");
    const foreignObject = document.createElementNS(xmlns, "foreignObject");
    svg.setAttribute("width", `${width}`);
    svg.setAttribute("height", `${height}`);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    foreignObject.setAttribute("width", "100%");
    foreignObject.setAttribute("height", "100%");
    foreignObject.setAttribute("x", "0");
    foreignObject.setAttribute("y", "0");
    foreignObject.setAttribute("externalResourcesRequired", "true");
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg);
  }
  var isInstanceOfElement = (node, instance) => {
    if (node instanceof instance)
      return true;
    const nodePrototype = Object.getPrototypeOf(node);
    if (nodePrototype === null)
      return false;
    return nodePrototype.constructor.name === instance.name || isInstanceOfElement(nodePrototype, instance);
  };

  // node_modules/html-to-image/es/clone-pseudos.js
  function formatCSSText(style) {
    const content = style.getPropertyValue("content");
    return `${style.cssText} content: '${content.replace(/'|"/g, "")}';`;
  }
  function formatCSSProperties(style) {
    return toArray(style).map((name) => {
      const value = style.getPropertyValue(name);
      const priority = style.getPropertyPriority(name);
      return `${name}: ${value}${priority ? " !important" : ""};`;
    }).join(" ");
  }
  function getPseudoElementStyle(className, pseudo, style) {
    const selector = `.${className}:${pseudo}`;
    const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style);
    return document.createTextNode(`${selector}{${cssText}}`);
  }
  function clonePseudoElement(nativeNode, clonedNode, pseudo) {
    const style = window.getComputedStyle(nativeNode, pseudo);
    const content = style.getPropertyValue("content");
    if (content === "" || content === "none") {
      return;
    }
    const className = uuid();
    try {
      clonedNode.className = `${clonedNode.className} ${className}`;
    } catch (err) {
      return;
    }
    const styleElement = document.createElement("style");
    styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
    clonedNode.appendChild(styleElement);
  }
  function clonePseudoElements(nativeNode, clonedNode) {
    clonePseudoElement(nativeNode, clonedNode, ":before");
    clonePseudoElement(nativeNode, clonedNode, ":after");
  }

  // node_modules/html-to-image/es/mimes.js
  var WOFF = "application/font-woff";
  var JPEG = "image/jpeg";
  var mimes = {
    woff: WOFF,
    woff2: WOFF,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: JPEG,
    jpeg: JPEG,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp"
  };
  function getExtension(url) {
    const match = /\.([^./]*?)$/g.exec(url);
    return match ? match[1] : "";
  }
  function getMimeType(url) {
    const extension = getExtension(url).toLowerCase();
    return mimes[extension] || "";
  }

  // node_modules/html-to-image/es/dataurl.js
  function getContentFromDataUrl(dataURL) {
    return dataURL.split(/,/)[1];
  }
  function isDataUrl(url) {
    return url.search(/^(data:)/) !== -1;
  }
  function makeDataUrl(content, mimeType) {
    return `data:${mimeType};base64,${content}`;
  }
  async function fetchAsDataURL(url, init, process2) {
    const res = await fetch(url, init);
    if (res.status === 404) {
      throw new Error(`Resource "${res.url}" not found`);
    }
    const blob = await res.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onloadend = () => {
        try {
          resolve(process2({ res, result: reader.result }));
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsDataURL(blob);
    });
  }
  var cache = {};
  function getCacheKey(url, contentType, includeQueryParams) {
    let key = url.replace(/\?.*/, "");
    if (includeQueryParams) {
      key = url;
    }
    if (/ttf|otf|eot|woff2?/i.test(key)) {
      key = key.replace(/.*\//, "");
    }
    return contentType ? `[${contentType}]${key}` : key;
  }
  async function resourceToDataURL(resourceUrl, contentType, options) {
    const cacheKey = getCacheKey(resourceUrl, contentType, options.includeQueryParams);
    if (cache[cacheKey] != null) {
      return cache[cacheKey];
    }
    if (options.cacheBust) {
      resourceUrl += (/\?/.test(resourceUrl) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime();
    }
    let dataURL;
    try {
      const content = await fetchAsDataURL(resourceUrl, options.fetchRequestInit, ({ res, result }) => {
        if (!contentType) {
          contentType = res.headers.get("Content-Type") || "";
        }
        return getContentFromDataUrl(result);
      });
      dataURL = makeDataUrl(content, contentType);
    } catch (error) {
      dataURL = options.imagePlaceholder || "";
      let msg = `Failed to fetch resource: ${resourceUrl}`;
      if (error) {
        msg = typeof error === "string" ? error : error.message;
      }
      if (msg) {
        console.warn(msg);
      }
    }
    cache[cacheKey] = dataURL;
    return dataURL;
  }

  // node_modules/html-to-image/es/clone-node.js
  async function cloneCanvasElement(canvas) {
    const dataURL = canvas.toDataURL();
    if (dataURL === "data:,") {
      return canvas.cloneNode(false);
    }
    return createImage(dataURL);
  }
  async function cloneVideoElement(video, options) {
    if (video.currentSrc) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL2 = canvas.toDataURL();
      return createImage(dataURL2);
    }
    const poster = video.poster;
    const contentType = getMimeType(poster);
    const dataURL = await resourceToDataURL(poster, contentType, options);
    return createImage(dataURL);
  }
  async function cloneIFrameElement(iframe) {
    var _a;
    try {
      if ((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.body) {
        return await cloneNode(iframe.contentDocument.body, {}, true);
      }
    } catch (_b) {
    }
    return iframe.cloneNode(false);
  }
  async function cloneSingleNode(node, options) {
    if (isInstanceOfElement(node, HTMLCanvasElement)) {
      return cloneCanvasElement(node);
    }
    if (isInstanceOfElement(node, HTMLVideoElement)) {
      return cloneVideoElement(node, options);
    }
    if (isInstanceOfElement(node, HTMLIFrameElement)) {
      return cloneIFrameElement(node);
    }
    return node.cloneNode(false);
  }
  var isSlotElement = (node) => node.tagName != null && node.tagName.toUpperCase() === "SLOT";
  async function cloneChildren(nativeNode, clonedNode, options) {
    var _a, _b;
    let children = [];
    if (isSlotElement(nativeNode) && nativeNode.assignedNodes) {
      children = toArray(nativeNode.assignedNodes());
    } else if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && ((_a = nativeNode.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
      children = toArray(nativeNode.contentDocument.body.childNodes);
    } else {
      children = toArray(((_b = nativeNode.shadowRoot) !== null && _b !== void 0 ? _b : nativeNode).childNodes);
    }
    if (children.length === 0 || isInstanceOfElement(nativeNode, HTMLVideoElement)) {
      return clonedNode;
    }
    await children.reduce((deferred, child) => deferred.then(() => cloneNode(child, options)).then((clonedChild) => {
      if (clonedChild) {
        clonedNode.appendChild(clonedChild);
      }
    }), Promise.resolve());
    return clonedNode;
  }
  function cloneCSSStyle(nativeNode, clonedNode) {
    const targetStyle = clonedNode.style;
    if (!targetStyle) {
      return;
    }
    const sourceStyle = window.getComputedStyle(nativeNode);
    if (sourceStyle.cssText) {
      targetStyle.cssText = sourceStyle.cssText;
      targetStyle.transformOrigin = sourceStyle.transformOrigin;
    } else {
      toArray(sourceStyle).forEach((name) => {
        let value = sourceStyle.getPropertyValue(name);
        if (name === "font-size" && value.endsWith("px")) {
          const reducedFont = Math.floor(parseFloat(value.substring(0, value.length - 2))) - 0.1;
          value = `${reducedFont}px`;
        }
        if (isInstanceOfElement(nativeNode, HTMLIFrameElement) && name === "display" && value === "inline") {
          value = "block";
        }
        if (name === "d" && clonedNode.getAttribute("d")) {
          value = `path(${clonedNode.getAttribute("d")})`;
        }
        targetStyle.setProperty(name, value, sourceStyle.getPropertyPriority(name));
      });
    }
  }
  function cloneInputValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLTextAreaElement)) {
      clonedNode.innerHTML = nativeNode.value;
    }
    if (isInstanceOfElement(nativeNode, HTMLInputElement)) {
      clonedNode.setAttribute("value", nativeNode.value);
    }
  }
  function cloneSelectValue(nativeNode, clonedNode) {
    if (isInstanceOfElement(nativeNode, HTMLSelectElement)) {
      const clonedSelect = clonedNode;
      const selectedOption = Array.from(clonedSelect.children).find((child) => nativeNode.value === child.getAttribute("value"));
      if (selectedOption) {
        selectedOption.setAttribute("selected", "");
      }
    }
  }
  function decorate(nativeNode, clonedNode) {
    if (isInstanceOfElement(clonedNode, Element)) {
      cloneCSSStyle(nativeNode, clonedNode);
      clonePseudoElements(nativeNode, clonedNode);
      cloneInputValue(nativeNode, clonedNode);
      cloneSelectValue(nativeNode, clonedNode);
    }
    return clonedNode;
  }
  async function ensureSVGSymbols(clone, options) {
    const uses = clone.querySelectorAll ? clone.querySelectorAll("use") : [];
    if (uses.length === 0) {
      return clone;
    }
    const processedDefs = {};
    for (let i = 0; i < uses.length; i++) {
      const use = uses[i];
      const id = use.getAttribute("xlink:href");
      if (id) {
        const exist = clone.querySelector(id);
        const definition = document.querySelector(id);
        if (!exist && definition && !processedDefs[id]) {
          processedDefs[id] = await cloneNode(definition, options, true);
        }
      }
    }
    const nodes = Object.values(processedDefs);
    if (nodes.length) {
      const ns = "http://www.w3.org/1999/xhtml";
      const svg = document.createElementNS(ns, "svg");
      svg.setAttribute("xmlns", ns);
      svg.style.position = "absolute";
      svg.style.width = "0";
      svg.style.height = "0";
      svg.style.overflow = "hidden";
      svg.style.display = "none";
      const defs = document.createElementNS(ns, "defs");
      svg.appendChild(defs);
      for (let i = 0; i < nodes.length; i++) {
        defs.appendChild(nodes[i]);
      }
      clone.appendChild(svg);
    }
    return clone;
  }
  async function cloneNode(node, options, isRoot) {
    if (!isRoot && options.filter && !options.filter(node)) {
      return null;
    }
    return Promise.resolve(node).then((clonedNode) => cloneSingleNode(clonedNode, options)).then((clonedNode) => cloneChildren(node, clonedNode, options)).then((clonedNode) => decorate(node, clonedNode)).then((clonedNode) => ensureSVGSymbols(clonedNode, options));
  }

  // node_modules/html-to-image/es/embed-resources.js
  var URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
  var URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
  var FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  function toRegex(url) {
    const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, "g");
  }
  function parseURLs(cssText) {
    const urls = [];
    cssText.replace(URL_REGEX, (raw, quotation, url) => {
      urls.push(url);
      return raw;
    });
    return urls.filter((url) => !isDataUrl(url));
  }
  async function embed(cssText, resourceURL, baseURL, options, getContentFromUrl) {
    try {
      const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
      const contentType = getMimeType(resourceURL);
      let dataURL;
      if (getContentFromUrl) {
        const content = await getContentFromUrl(resolvedURL);
        dataURL = makeDataUrl(content, contentType);
      } else {
        dataURL = await resourceToDataURL(resolvedURL, contentType, options);
      }
      return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
    } catch (error) {
    }
    return cssText;
  }
  function filterPreferredFontFormat(str, { preferredFontFormat }) {
    return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, (match) => {
      while (true) {
        const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
        if (!format) {
          return "";
        }
        if (format === preferredFontFormat) {
          return `src: ${src};`;
        }
      }
    });
  }
  function shouldEmbed(url) {
    return url.search(URL_REGEX) !== -1;
  }
  async function embedResources(cssText, baseUrl, options) {
    if (!shouldEmbed(cssText)) {
      return cssText;
    }
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    const urls = parseURLs(filteredCSSText);
    return urls.reduce((deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText));
  }

  // node_modules/html-to-image/es/embed-images.js
  async function embedProp(propName, node, options) {
    var _a;
    const propValue = (_a = node.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue(propName);
    if (propValue) {
      const cssString = await embedResources(propValue, null, options);
      node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
      return true;
    }
    return false;
  }
  async function embedBackground(clonedNode, options) {
    if (!await embedProp("background", clonedNode, options)) {
      await embedProp("background-image", clonedNode, options);
    }
    if (!await embedProp("mask", clonedNode, options)) {
      await embedProp("mask-image", clonedNode, options);
    }
  }
  async function embedImageNode(clonedNode, options) {
    const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
    if (!(isImageElement && !isDataUrl(clonedNode.src)) && !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))) {
      return;
    }
    const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;
    const dataURL = await resourceToDataURL(url, getMimeType(url), options);
    await new Promise((resolve, reject) => {
      clonedNode.onload = resolve;
      clonedNode.onerror = reject;
      const image = clonedNode;
      if (image.decode) {
        image.decode = resolve;
      }
      if (image.loading === "lazy") {
        image.loading = "eager";
      }
      if (isImageElement) {
        clonedNode.srcset = "";
        clonedNode.src = dataURL;
      } else {
        clonedNode.href.baseVal = dataURL;
      }
    });
  }
  async function embedChildren(clonedNode, options) {
    const children = toArray(clonedNode.childNodes);
    const deferreds = children.map((child) => embedImages(child, options));
    await Promise.all(deferreds).then(() => clonedNode);
  }
  async function embedImages(clonedNode, options) {
    if (isInstanceOfElement(clonedNode, Element)) {
      await embedBackground(clonedNode, options);
      await embedImageNode(clonedNode, options);
      await embedChildren(clonedNode, options);
    }
  }

  // node_modules/html-to-image/es/apply-style.js
  function applyStyle(node, options) {
    const { style } = node;
    if (options.backgroundColor) {
      style.backgroundColor = options.backgroundColor;
    }
    if (options.width) {
      style.width = `${options.width}px`;
    }
    if (options.height) {
      style.height = `${options.height}px`;
    }
    const manual = options.style;
    if (manual != null) {
      Object.keys(manual).forEach((key) => {
        style[key] = manual[key];
      });
    }
    return node;
  }

  // node_modules/html-to-image/es/embed-webfonts.js
  var cssFetchCache = {};
  async function fetchCSS(url) {
    let cache2 = cssFetchCache[url];
    if (cache2 != null) {
      return cache2;
    }
    const res = await fetch(url);
    const cssText = await res.text();
    cache2 = { url, cssText };
    cssFetchCache[url] = cache2;
    return cache2;
  }
  async function embedFonts(data, options) {
    let cssText = data.cssText;
    const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
    const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
    const loadFonts = fontLocs.map(async (loc) => {
      let url = loc.replace(regexUrl, "$1");
      if (!url.startsWith("https://")) {
        url = new URL(url, data.url).href;
      }
      return fetchAsDataURL(url, options.fetchRequestInit, ({ result }) => {
        cssText = cssText.replace(loc, `url(${result})`);
        return [loc, result];
      });
    });
    return Promise.all(loadFonts).then(() => cssText);
  }
  function parseCSS(source) {
    if (source == null) {
      return [];
    }
    const result = [];
    const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
    let cssText = source.replace(commentsRegex, "");
    const keyframesRegex = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    while (true) {
      const matches = keyframesRegex.exec(cssText);
      if (matches === null) {
        break;
      }
      result.push(matches[0]);
    }
    cssText = cssText.replace(keyframesRegex, "");
    const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    const combinedCSSRegex = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})";
    const unifiedRegex = new RegExp(combinedCSSRegex, "gi");
    while (true) {
      let matches = importRegex.exec(cssText);
      if (matches === null) {
        matches = unifiedRegex.exec(cssText);
        if (matches === null) {
          break;
        } else {
          importRegex.lastIndex = unifiedRegex.lastIndex;
        }
      } else {
        unifiedRegex.lastIndex = importRegex.lastIndex;
      }
      result.push(matches[0]);
    }
    return result;
  }
  async function getCSSRules(styleSheets, options) {
    const ret = [];
    const deferreds = [];
    styleSheets.forEach((sheet) => {
      if ("cssRules" in sheet) {
        try {
          toArray(sheet.cssRules || []).forEach((item, index) => {
            if (item.type === CSSRule.IMPORT_RULE) {
              let importIndex = index + 1;
              const url = item.href;
              const deferred = fetchCSS(url).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
                try {
                  sheet.insertRule(rule, rule.startsWith("@import") ? importIndex += 1 : sheet.cssRules.length);
                } catch (error) {
                  console.error("Error inserting rule from remote css", {
                    rule,
                    error
                  });
                }
              })).catch((e) => {
                console.error("Error loading remote css", e.toString());
              });
              deferreds.push(deferred);
            }
          });
        } catch (e) {
          const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
          if (sheet.href != null) {
            deferreds.push(fetchCSS(sheet.href).then((metadata) => embedFonts(metadata, options)).then((cssText) => parseCSS(cssText).forEach((rule) => {
              inline.insertRule(rule, sheet.cssRules.length);
            })).catch((err) => {
              console.error("Error loading remote stylesheet", err);
            }));
          }
          console.error("Error inlining remote css file", e);
        }
      }
    });
    return Promise.all(deferreds).then(() => {
      styleSheets.forEach((sheet) => {
        if ("cssRules" in sheet) {
          try {
            toArray(sheet.cssRules || []).forEach((item) => {
              ret.push(item);
            });
          } catch (e) {
            console.error(`Error while reading CSS rules from ${sheet.href}`, e);
          }
        }
      });
      return ret;
    });
  }
  function getWebFontRules(cssRules) {
    return cssRules.filter((rule) => rule.type === CSSRule.FONT_FACE_RULE).filter((rule) => shouldEmbed(rule.style.getPropertyValue("src")));
  }
  async function parseWebFontRules(node, options) {
    if (node.ownerDocument == null) {
      throw new Error("Provided element is not within a Document");
    }
    const styleSheets = toArray(node.ownerDocument.styleSheets);
    const cssRules = await getCSSRules(styleSheets, options);
    return getWebFontRules(cssRules);
  }
  async function getWebFontCSS(node, options) {
    const rules = await parseWebFontRules(node, options);
    const cssTexts = await Promise.all(rules.map((rule) => {
      const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
      return embedResources(rule.cssText, baseUrl, options);
    }));
    return cssTexts.join("\n");
  }
  async function embedWebFonts(clonedNode, options) {
    const cssText = options.fontEmbedCSS != null ? options.fontEmbedCSS : options.skipFonts ? null : await getWebFontCSS(clonedNode, options);
    if (cssText) {
      const styleNode = document.createElement("style");
      const sytleContent = document.createTextNode(cssText);
      styleNode.appendChild(sytleContent);
      if (clonedNode.firstChild) {
        clonedNode.insertBefore(styleNode, clonedNode.firstChild);
      } else {
        clonedNode.appendChild(styleNode);
      }
    }
  }

  // node_modules/html-to-image/es/index.js
  async function toSvg(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const clonedNode = await cloneNode(node, options, true);
    await embedWebFonts(clonedNode, options);
    await embedImages(clonedNode, options);
    applyStyle(clonedNode, options);
    const datauri = await nodeToDataURL(clonedNode, width, height);
    return datauri;
  }
  async function toCanvas(node, options = {}) {
    const { width, height } = getImageSize(node, options);
    const svg = await toSvg(node, options);
    const img = await createImage(svg);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const ratio = options.pixelRatio || getPixelRatio();
    const canvasWidth = options.canvasWidth || width;
    const canvasHeight = options.canvasHeight || height;
    canvas.width = canvasWidth * ratio;
    canvas.height = canvasHeight * ratio;
    if (!options.skipAutoScale) {
      checkCanvasDimensions(canvas);
    }
    canvas.style.width = `${canvasWidth}`;
    canvas.style.height = `${canvasHeight}`;
    if (options.backgroundColor) {
      context.fillStyle = options.backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas;
  }
  async function toBlob(node, options = {}) {
    const canvas = await toCanvas(node, options);
    const blob = await canvasToBlob(canvas);
    return blob;
  }

  // js/ui.js
  var import_file_saver = __toESM(require_FileSaver_min());
  var card_data = [];
  var tsv_data = /* @__PURE__ */ new Map();
  var card_options = card_default_options();
  var ui_generate_modal_shown = false;
  function ui_generate() {
    if (card_data.length === 0) {
      alert("Your deck is empty. Please define some cards first, or load the sample deck.");
      return;
    }
    var card_html = card_pages_generate_html(card_data, card_options, tsv_data);
    var tab = window.open("output.html", "rpg-cards-output");
    if (ui_generate_modal_shown === false) {
      $("#print-modal").modal("show");
      ui_generate_modal_shown = true;
    }
    setTimeout(function() {
      tab.postMessage(card_html, "*");
    }, 500);
  }
  function ui_generate_files() {
    if (card_data.length === 0) {
      alert("Your deck is empty. Please define some cards first, or load the sample deck.");
      return;
    }
    save_element_as_file(document.getElementById("card-render-front"), ui_selected_card().title + "-front.png").catch(function(error) {
      console.error("Failed to export PNG of card front!", error);
    });
    save_element_as_file(document.getElementById("card-render-back"), ui_selected_card().title + "-back.png").catch(function(error) {
      console.error("Failed to export PNG of card back!", error);
    });
  }
  function save_element_as_file(node, fileName) {
    return toBlob(node).then(function(blob) {
      if (window.saveAs) {
        window.saveAs(blob, fileName);
      } else {
        (0, import_file_saver.saveAs)(blob, fileName);
      }
    }).catch(function(error) {
      console.error("Failed to export node to file.", error);
    });
  }
  function ui_load_sample() {
    card_data = card_data_example;
    ui_init_cards(card_data);
    ui_update_card_list();
  }
  function ui_clear_all() {
    card_data = [];
    ui_update_card_list();
  }
  function ui_load_files(evt) {
    ui_clear_all();
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
      var reader = new FileReader();
      reader.onload = function(reader2) {
        var data = JSON.parse(this.result);
        ui_add_cards(data);
      };
      reader.readAsText(f);
      ui_save_file.filename = f.name;
    }
    $("#file-load-form")[0].reset();
  }
  function ui_load_tsv(evt) {
    var reader = new FileReader();
    reader.onload = function(reader2) {
      var text = this.result;
      tsv_data = tsvToMap(text);
      ui_update_selected_card();
    };
    reader.readAsText(evt.target.files[0]);
    $("#file-loadtsv-form")[0].reset();
  }
  function ui_clear_tsv(evt) {
    tsv_data = /* @__PURE__ */ new Map();
  }
  function tsvToMap(str, delimiter = "	") {
    console.log(str);
    str = str.replaceAll("\r", "");
    var headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    var rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const map = /* @__PURE__ */ new Map();
    rows.forEach((row) => {
      if (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function(object, header, index) {
          var val = values[index];
          if (val.charAt(0) === '"' && val.charAt(val.length - 1) === '"') {
            val = val.substr(1, val.length - 2);
          }
          object[header] = val;
          return object;
        }, {});
        map.set(values[0], el);
        console.log(map.get(values[0]));
      }
    });
    return map;
  }
  function ui_init_cards(data) {
    data.forEach(function(card) {
      card_init(card);
    });
  }
  function ui_add_cards(data) {
    ui_init_cards(data);
    card_data = card_data.concat(data);
    ui_update_card_list();
  }
  function ui_add_new_card() {
    card_data.push(card_default_data());
    ui_update_card_list();
    ui_select_card_by_index(card_data.length - 1);
  }
  function ui_duplicate_card() {
    if (card_data.length > 0) {
      var old_card = ui_selected_card();
      var new_card_title = old_card.title + " (Copy)";
      if (tsv_data.size != 0) {
        var card_titles = /* @__PURE__ */ new Set();
        card_data.forEach((card) => {
          card_titles.add(card.title);
        });
        for (let [key, value] of tsv_data) {
          if (!card_titles.has(key)) {
            new_card_title = key;
            break;
          }
        }
      }
      var new_card = $.extend({}, old_card);
      card_data.push(new_card);
      new_card.title = new_card_title;
    } else {
      card_data.push(card_default_data());
    }
    ui_update_card_list();
    ui_select_card_by_index(card_data.length - 1);
  }
  function ui_select_card_by_index(index) {
    $("#selected-card").val(index);
    ui_update_selected_card();
  }
  function ui_selected_card_index() {
    return parseInt($("#selected-card").val(), 10);
  }
  function ui_selected_card() {
    return card_data[ui_selected_card_index()];
  }
  function ui_delete_card() {
    var index = ui_selected_card_index();
    card_data.splice(index, 1);
    ui_update_card_list();
    ui_select_card_by_index(Math.min(index, card_data.length - 1));
  }
  function ui_update_card_list() {
    $("#total_card_count").text("Deck contains " + card_data.length + " unique cards.");
    $("#selected-card").empty();
    for (var i = 0; i < card_data.length; ++i) {
      var card = card_data[i];
      $("#selected-card").append($("<option></option>").attr("value", i).text(ui_get_displayed_title(card)));
    }
    ui_update_selected_card();
  }
  function ui_save_file() {
    var str = JSON.stringify(card_data, null, "  ");
    var parts = [str];
    var blob = new Blob(parts, { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = $("#file-save-link")[0];
    a.href = url;
    a.download = prompt("Filename:", ui_save_file.filename);
    if (a.download) {
      ui_save_file.filename = a.download;
      a.click();
    }
    setTimeout(function() {
      URL.revokeObjectURL(url);
    }, 500);
  }
  ui_save_file.filename = "rpg_cards.json";
  function ui_update_card_options() {
    if (card_options) {
      $("#page-size").val(card_options.page_size);
      $("#page-rows").val(card_options.page_rows);
      $("#page-columns").val(card_options.page_columns);
      $("#card-arrangement").val(card_options.card_arrangement);
      $("#card-size").val(card_options.card_size);
      $("#background-color").val(card_options.background_color);
      $("#rounded-corners").val(card_options.rounded_corners);
      $("#title-icon-size").val(card_options.title_icon_size);
      $("#default-color").val(card_options.default_color);
      $("#default-icon").val(card_options.default_icon);
      $("#default-title-size").val(card_options.default_title_size);
    }
  }
  function ui_update_selected_card() {
    var card = ui_selected_card();
    if (card) {
      $("#card-title").val(card.title);
      $("#card-title-size").val(card.title_size);
      $("#card-count").val(card.count);
      $("#card-icon").val(card.icon);
      $("#card-icon-back").val(card.icon_back);
      $("#card-background").val(card.background_image);
      $("#card-background-front").val(card.background_image_front);
      $("#card-contents").val(card.contents.join("\n"));
      $("#card-tags").val(card.tags.join(", "));
      $("#card-color").val(card.color).change();
    } else {
      $("#card-title").val("");
      $("#card-title-size").val("");
      $("#card-count").val(1);
      $("#card-icon").val("");
      $("#card-icon-back").val("");
      $("#card-background").val("");
      $("#card-background-front").val("");
      $("#card-contents").val("");
      $("#card-tags").val("");
      $("#card-color").val("").change();
    }
    ui_render_selected_card();
  }
  function ui_render_selected_card() {
    var card = ui_selected_card();
    $("#preview-container").empty();
    if (card) {
      var front = card_generate_front(card, card_options, tsv_data);
      var back = card_generate_back(card, card_options, tsv_data);
      $("#preview-container").html(front + "\n" + back);
    }
    local_store_save();
  }
  function ui_open_help() {
    $("#help-modal").modal("show");
  }
  function ui_select_icon() {
    window.open("http://game-icons.net/", "_blank");
  }
  function ui_setup_color_selector() {
    $.each(card_colors, function(name, val) {
      $(".colorselector-data").append($("<option></option>").attr("value", name).attr("data-color", val).text(name));
    });
    $("#default_color_selector").colorselector({
      callback: function(value, color, title) {
        $("#default-color").val(title);
        ui_set_default_color(title);
      }
    });
    $("#card_color_selector").colorselector({
      callback: function(value, color, title) {
        $("#card-color").val(title);
        ui_set_card_color(value);
      }
    });
    $("#foreground_color_selector").colorselector({
      callback: function(value, color, title) {
        $("#foreground-color").val(title);
        ui_set_foreground_color(value);
      }
    });
    $("#background_color_selector").colorselector({
      callback: function(value, color, title) {
        $("#background-color").val(title);
        ui_set_background_color(value);
      }
    });
    $(".dropdown-colorselector").addClass("input-group-addon color-input-addon");
  }
  function ui_set_default_color(color) {
    card_options.default_color = color;
    ui_render_selected_card();
  }
  function ui_set_foreground_color(color) {
    card_options.foreground_color = color;
  }
  function ui_set_background_color(color) {
    card_options.background_color = color;
  }
  function ui_change_option() {
    var property = $(this).attr("data-option");
    var value;
    if ($(this).attr("type") === "checkbox") {
      value = $(this).is(":checked");
    } else {
      value = $(this).val();
    }
    card_options[property] = value;
    ui_render_selected_card();
  }
  function ui_get_displayed_title(card) {
    return "".concat("[", card.tags.join(), "] " + card.title);
  }
  function ui_set_displayed_title(card) {
    $("#selected-card option:selected").text(ui_get_displayed_title(card));
  }
  function ui_change_card_title() {
    var title = $("#card-title").val();
    var card = ui_selected_card();
    if (card) {
      card.title = title;
      ui_set_displayed_title(card);
      ui_render_selected_card();
    }
  }
  function ui_change_card_property() {
    var property = $(this).attr("data-property");
    var value = $(this).val();
    var card = ui_selected_card();
    if (card) {
      card[property] = value;
      ui_render_selected_card();
    }
  }
  function ui_set_card_color(value) {
    var card = ui_selected_card();
    if (card) {
      card.color = value;
      ui_render_selected_card();
    }
  }
  function ui_update_card_color_selector(color, input, selector) {
    if ($(selector + " option[value='" + color + "']").length > 0) {
      $(selector).colorselector("setValue", color);
    } else {
      $(selector).colorselector("setValue", "");
      input.val(color);
    }
  }
  function ui_change_card_color() {
    var input = $(this);
    var color = input.val();
    ui_update_card_color_selector(color, input, "#card_color_selector");
    ui_set_card_color(color);
  }
  function ui_change_default_color() {
    var input = $(this);
    var color = input.val();
    ui_update_card_color_selector(color, input, "#default_color_selector");
    ui_set_default_color(color);
  }
  function ui_change_default_icon() {
    var value = $(this).val();
    card_options.default_icon = value;
    ui_render_selected_card();
  }
  function ui_change_card_contents() {
    var value = $(this).val();
    var card = ui_selected_card();
    if (card) {
      card.contents = value.split("\n");
      ui_render_selected_card();
    }
  }
  function ui_change_card_contents_keyup() {
    clearTimeout(ui_change_card_contents_keyup.timeout);
    ui_change_card_contents_keyup.timeout = setTimeout(function() {
      $("#card-contents").trigger("change");
    }, 200);
  }
  ui_change_card_contents_keyup.timeout = null;
  function ui_change_card_tags() {
    var value = $(this).val();
    var card = ui_selected_card();
    if (card) {
      if (value.trim().length === 0) {
        card.tags = [];
      } else {
        card.tags = value.split(",").map(function(val) {
          return val.trim().toLowerCase();
        });
      }
      ui_set_displayed_title(card);
      ui_render_selected_card();
    }
  }
  function ui_change_default_title_size() {
    card_options.default_title_size = $(this).val();
    ui_render_selected_card();
  }
  function ui_change_title_icon_size() {
    card_options.title_icon_size = $(this).val();
    ui_render_selected_card();
  }
  function ui_sort() {
    $("#sort-modal").modal("show");
  }
  function ui_sort_execute() {
    $("#sort-modal").modal("hide");
    var fn_code = $("#sort-function").val();
    var fn = new Function("card_a", "card_b", fn_code);
    card_data = card_data.sort(function(card_a, card_b) {
      var result = fn(card_a, card_b);
      return result;
    });
    ui_update_card_list();
  }
  function ui_filter() {
    $("#filter-modal").modal("show");
  }
  function ui_filter_execute() {
    $("#filter-modal").modal("hide");
    var fn_code = $("#filter-function").val();
    var fn = new Function("card", fn_code);
    card_data = card_data.filter(function(card) {
      var result = fn(card);
      if (result === void 0)
        return true;
      else
        return result;
    });
    ui_update_card_list();
  }
  function ui_apply_default_color() {
    for (var i = 0; i < card_data.length; ++i) {
      card_data[i].color = card_options.default_color;
    }
    ui_render_selected_card();
  }
  function ui_apply_default_icon() {
    for (var i = 0; i < card_data.length; ++i) {
      card_data[i].icon = card_options.default_icon;
    }
    ui_render_selected_card();
  }
  function ui_apply_default_icon_back() {
    for (var i = 0; i < card_data.length; ++i) {
      card_data[i].icon_back = card_options.default_icon;
    }
    ui_render_selected_card();
  }
  function json_map_encoder(key, value) {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries())
        // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }
  function json_map_decoder(key, value) {
    if (typeof value === "object" && value !== null) {
      if (value.dataType === "Map") {
        return new Map(value.value);
      }
    }
    return value;
  }
  function local_store_save() {
    if (window.localStorage) {
      try {
        localStorage.setItem("card_data", JSON.stringify(card_data));
        localStorage.setItem("tsv_data", JSON.stringify(tsv_data, json_map_encoder));
        localStorage.setItem("card_options", JSON.stringify(card_options));
      } catch (e) {
        console.log(e);
      }
    }
  }
  function local_store_load() {
    if (window.localStorage) {
      try {
        card_data = JSON.parse(localStorage.getItem("card_data")) || card_data;
        tsv_data = JSON.parse(localStorage.getItem("tsv_data"), json_map_decoder) || /* @__PURE__ */ new Map();
        card_options = JSON.parse(localStorage.getItem("card_options")) || card_options;
      } catch (e) {
        console.log(e);
      }
    }
  }
  $(document).ready(function() {
    local_store_load();
    ui_setup_color_selector();
    $("#button-generate").click(ui_generate);
    $("#button-generate-files").click(ui_generate_files);
    $("#button-loadtsv").click(function() {
      $("#file-loadtsv").click();
    });
    $("#file-loadtsv").change(ui_load_tsv);
    $("#button-cleartsv").click(ui_clear_tsv);
    $("#button-load").click(function() {
      $("#file-load").click();
    });
    $("#file-load").change(ui_load_files);
    $("#button-clear").click(ui_clear_all);
    $("#button-load-sample").click(ui_load_sample);
    $("#button-sort").click(ui_sort);
    $("#button-filter").click(ui_filter);
    $("#button-add-card").click(ui_add_new_card);
    $("#button-duplicate-card").click(ui_duplicate_card);
    $("#button-delete-card").click(ui_delete_card);
    $("#button-help").click(ui_open_help);
    $("#button-apply-color").click(ui_apply_default_color);
    $("#button-apply-icon").click(ui_apply_default_icon);
    $("#button-apply-icon-back").click(ui_apply_default_icon_back);
    $("#selected-card").change(ui_update_selected_card);
    $("#card-title").change(ui_change_card_title);
    $("#card-title-size").change(ui_change_card_property);
    $("#card-icon").change(ui_change_card_property);
    $("#card-count").change(ui_change_card_property);
    $("#card-icon-back").change(ui_change_card_property);
    $("#card-background").change(ui_change_card_property);
    $("#card-background-front").change(ui_change_card_property);
    $("#card-color").change(ui_change_card_color);
    $("#card-contents").change(ui_change_card_contents);
    $("#card-tags").change(ui_change_card_tags);
    $("#card-contents").keyup(ui_change_card_contents_keyup);
    $("#page-size").change(ui_change_option);
    $("#page-rows").change(ui_change_option);
    $("#page-columns").change(ui_change_option);
    $("#card-arrangement").change(ui_change_option);
    $("#card-size").change(ui_change_option);
    $("#background-color").change(ui_change_option);
    $("#rounded-corners").change(ui_change_option);
    $("#title-icon-size").change(ui_change_title_icon_size);
    $("#default-color").change(ui_change_default_color);
    $("#default-icon").change(ui_change_default_icon);
    $("#default-title-size").change(ui_change_default_title_size);
    $(".icon-select-button").click(ui_select_icon);
    $("#sort-execute").click(ui_sort_execute);
    $("#filter-execute").click(ui_filter_execute);
    ui_update_card_options();
    ui_update_card_list();
  });
})();
//# sourceMappingURL=ui.js.map
