function keyMirror(keys) {
  return keys.reduce(
    function(previous, current) {
      return Object.assign(previous, { [current]: current });
    },
    {}
  );
}

module.exports = keyMirror([
  //ECMA262 Globals
  "Array",
  "ArrayBuffer",
  "Boolean",
  "constructor",
  "DataView",
  "Date",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "Error",
  "escape",
  "eval",
  "EvalError",
  "Float32Array",
  "Float64Array",
  "Function",
  "hasOwnProperty",
  "Infinity",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "isFinite",
  "isNaN",
  "isPrototypeOf",
  "JSON",
  "Map",
  "Math",
  "NaN",
  "Number",
  "Object",
  "parseFloat",
  "parseInt",
  "Promise",
  "propertyIsEnumerable",
  "Proxy",
  "RangeError",
  "ReferenceError",
  "Reflect",
  "RegExp",
  "Set",
  "String",
  "Symbol",
  "SyntaxError",
  "System",
  "toLocaleString",
  "toString",
  "TypeError",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  // "undefined",
  "unescape",
  "URIError",
  "valueOf",
  "WeakMap",
  "WeakSet",

  //Browser Globals
  // "addEventListener",
  // "alert",
  // "AnalyserNode",
  // "Animation",
  // "AnimationEffectReadOnly",
  // "AnimationEffectTiming",
  // "AnimationEffectTimingReadOnly",
  // "AnimationEvent",
  // "AnimationPlaybackEvent",
  // "AnimationTimeline",
  // "applicationCache",
  // "ApplicationCache",
  // "ApplicationCacheErrorEvent",
  // "atob",
  // "Attr",
  // "Audio",
  // "AudioBuffer",
  // "AudioBufferSourceNode",
  // "AudioContext",
  // "AudioDestinationNode",
  // "AudioListener",
  // "AudioNode",
  // "AudioParam",
  // "AudioProcessingEvent",
  // "AutocompleteErrorEvent",
  // "BarProp",
  // "BatteryManager",
  // "BeforeUnloadEvent",
  // "BiquadFilterNode",
  // "Blob",
  // "blur",
  // "btoa",
  // "Cache",
  // "caches",
  // "CacheStorage",
  // "cancelAnimationFrame",
  // "CanvasGradient",
  // "CanvasPattern",
  // "CanvasRenderingContext2D",
  // "CDATASection",
  // "ChannelMergerNode",
  // "ChannelSplitterNode",
  // "CharacterData",
  // "clearInterval",
  // "clearTimeout",
  // "clientInformation",
  // "ClientRect",
  // "ClientRectList",
  // "ClipboardEvent",
  // "close",
  // "closed",
  // "CloseEvent",
  // "Comment",
  // "CompositionEvent",
  // "confirm",
  // "console",
  // "ConvolverNode",
  // "Credential",
  // "CredentialsContainer",
  // "crypto",
  // "Crypto",
  // "CryptoKey",
  // "CSS",
  // "CSSAnimation",
  // "CSSFontFaceRule",
  // "CSSImportRule",
  // "CSSKeyframeRule",
  // "CSSKeyframesRule",
  // "CSSMediaRule",
  // "CSSPageRule",
  // "CSSRule",
  // "CSSRuleList",
  // "CSSStyleDeclaration",
  // "CSSStyleRule",
  // "CSSStyleSheet",
  // "CSSSupportsRule",
  // "CSSTransition",
  // "CSSUnknownRule",
  // "CSSViewportRule",
  // "customElements",
  // "CustomEvent",
  // "DataTransfer",
  // "DataTransferItem",
  // "DataTransferItemList",
  // "Debug",
  // "defaultStatus",
  // "defaultstatus",
  // "DelayNode",
  // "DeviceMotionEvent",
  // "DeviceOrientationEvent",
  // "devicePixelRatio",
  // "dispatchEvent",
  // "document",
  // "Document",
  // "DocumentFragment",
  // "DocumentTimeline",
  // "DocumentType",
  // "DOMError",
  // "DOMException",
  // "DOMImplementation",
  // "DOMParser",
  // "DOMSettableTokenList",
  // "DOMStringList",
  // "DOMStringMap",
  // "DOMTokenList",
  // "DragEvent",
  // "DynamicsCompressorNode",
  // "Element",
  // "ElementTimeControl",
  // "ErrorEvent",
  // "event",
  // "Event",
  // "EventSource",
  // "EventTarget",
  // "external",
  // "FederatedCredential",
  // "fetch",
  // "File",
  // "FileError",
  // "FileList",
  // "FileReader",
  // "find",
  // "focus",
  // "FocusEvent",
  // "FontFace",
  // "FormData",
  // "frameElement",
  // "frames",
  // "GainNode",
  // "Gamepad",
  // "GamepadButton",
  // "GamepadEvent",
  // "getComputedStyle",
  // "getSelection",
  // "HashChangeEvent",
  // "Headers",
  // "history",
  // "History",
  // "HTMLAllCollection",
  // "HTMLAnchorElement",
  // "HTMLAppletElement",
  // "HTMLAreaElement",
  // "HTMLAudioElement",
  // "HTMLBaseElement",
  // "HTMLBlockquoteElement",
  // "HTMLBodyElement",
  // "HTMLBRElement",
  // "HTMLButtonElement",
  // "HTMLCanvasElement",
  // "HTMLCollection",
  // "HTMLContentElement",
  // "HTMLDataListElement",
  // "HTMLDetailsElement",
  // "HTMLDialogElement",
  // "HTMLDirectoryElement",
  // "HTMLDivElement",
  // "HTMLDListElement",
  // "HTMLDocument",
  // "HTMLElement",
  // "HTMLEmbedElement",
  // "HTMLFieldSetElement",
  // "HTMLFontElement",
  // "HTMLFormControlsCollection",
  // "HTMLFormElement",
  // "HTMLFrameElement",
  // "HTMLFrameSetElement",
  // "HTMLHeadElement",
  // "HTMLHeadingElement",
  // "HTMLHRElement",
  // "HTMLHtmlElement",
  // "HTMLIFrameElement",
  // "HTMLImageElement",
  // "HTMLInputElement",
  // "HTMLIsIndexElement",
  // "HTMLKeygenElement",
  // "HTMLLabelElement",
  // "HTMLLayerElement",
  // "HTMLLegendElement",
  // "HTMLLIElement",
  // "HTMLLinkElement",
  // "HTMLMapElement",
  // "HTMLMarqueeElement",
  // "HTMLMediaElement",
  // "HTMLMenuElement",
  // "HTMLMetaElement",
  // "HTMLMeterElement",
  // "HTMLModElement",
  // "HTMLObjectElement",
  // "HTMLOListElement",
  // "HTMLOptGroupElement",
  // "HTMLOptionElement",
  // "HTMLOptionsCollection",
  // "HTMLOutputElement",
  // "HTMLParagraphElement",
  // "HTMLParamElement",
  // "HTMLPictureElement",
  // "HTMLPreElement",
  // "HTMLProgressElement",
  // "HTMLQuoteElement",
  // "HTMLScriptElement",
  // "HTMLSelectElement",
  // "HTMLShadowElement",
  // "HTMLSourceElement",
  // "HTMLSpanElement",
  // "HTMLStyleElement",
  // "HTMLTableCaptionElement",
  // "HTMLTableCellElement",
  // "HTMLTableColElement",
  // "HTMLTableElement",
  // "HTMLTableRowElement",
  // "HTMLTableSectionElement",
  // "HTMLTemplateElement",
  // "HTMLTextAreaElement",
  // "HTMLTitleElement",
  // "HTMLTrackElement",
  // "HTMLUListElement",
  // "HTMLUnknownElement",
  // "HTMLVideoElement",
  // "IDBCursor",
  // "IDBCursorWithValue",
  // "IDBDatabase",
  // "IDBEnvironment",
  // "IDBFactory",
  // "IDBIndex",
  // "IDBKeyRange",
  // "IDBObjectStore",
  // "IDBOpenDBRequest",
  // "IDBRequest",
  // "IDBTransaction",
  // "IDBVersionChangeEvent",
  // "Image",
  // "ImageBitmap",
  // "ImageData",
  // "indexedDB",
  // "innerHeight",
  // "innerWidth",
  // "InputEvent",
  // "InputMethodContext",
  // "IntersectionObserver",
  // "IntersectionObserverEntry",
  // "Intl",
  // "KeyboardEvent",
  // "KeyframeEffect",
  // "KeyframeEffectReadOnly",
  // "length",
  // "localStorage",
  // "location",
  // "Location",
  // "locationbar",
  // "matchMedia",
  // "MediaElementAudioSourceNode",
  // "MediaEncryptedEvent",
  // "MediaError",
  // "MediaKeyError",
  // "MediaKeyEvent",
  // "MediaKeyMessageEvent",
  // "MediaKeys",
  // "MediaKeySession",
  // "MediaKeyStatusMap",
  // "MediaKeySystemAccess",
  // "MediaList",
  // "MediaQueryList",
  // "MediaQueryListEvent",
  // "MediaSource",
  // "MediaStream",
  // "MediaStreamAudioDestinationNode",
  // "MediaStreamAudioSourceNode",
  // "MediaStreamEvent",
  // "MediaStreamTrack",
  // "menubar",
  // "MessageChannel",
  // "MessageEvent",
  // "MessagePort",
  // "MIDIAccess",
  // "MIDIConnectionEvent",
  // "MIDIInput",
  // "MIDIInputMap",
  // "MIDIMessageEvent",
  // "MIDIOutput",
  // "MIDIOutputMap",
  // "MIDIPort",
  // "MimeType",
  // "MimeTypeArray",
  // "MouseEvent",
  // "moveBy",
  // "moveTo",
  // "MutationEvent",
  // "MutationObserver",
  // "MutationRecord",
  // "name",
  // "NamedNodeMap",
  // "navigator",
  // "Navigator",
  // "Node",
  // "NodeFilter",
  // "NodeIterator",
  // "NodeList",
  // "Notification",
  // "OfflineAudioCompletionEvent",
  // "OfflineAudioContext",
  // "offscreenBuffering",
  // "onbeforeunload",
  // "onblur",
  // "onerror",
  // "onfocus",
  // "onload",
  // "onresize",
  // "onunload",
  // "open",
  // "openDatabase",
  // "opener",
  // "opera",
  // "Option",
  // "OscillatorNode",
  // "outerHeight",
  // "outerWidth",
  // "PageTransitionEvent",
  // "pageXOffset",
  // "pageYOffset",
  // "parent",
  // "PasswordCredential",
  // "Path2D",
  // "performance",
  // "Performance",
  // "PerformanceEntry",
  // "PerformanceMark",
  // "PerformanceMeasure",
  // "PerformanceNavigation",
  // "PerformanceResourceTiming",
  // "PerformanceTiming",
  // "PeriodicWave",
  // "Permissions",
  // "PermissionStatus",
  // "personalbar",
  // "Plugin",
  // "PluginArray",
  // "PopStateEvent",
  // "postMessage",
  // "print",
  // "ProcessingInstruction",
  // "ProgressEvent",
  // "PromiseRejectionEvent",
  // "prompt",
  // "PushManager",
  // "PushSubscription",
  // "RadioNodeList",
  // "Range",
  // "ReadableByteStream",
  // "ReadableStream",
  // "removeEventListener",
  // "Request",
  // "requestAnimationFrame",
  // "requestIdleCallback",
  // "resizeBy",
  // "resizeTo",
  // "Response",
  // "RTCIceCandidate",
  // "RTCSessionDescription",
  // "RTCPeerConnection",
  // "screen",
  // "Screen",
  // "screenLeft",
  // "ScreenOrientation",
  // "screenTop",
  // "screenX",
  // "screenY",
  // "ScriptProcessorNode",
  // "scroll",
  // "scrollbars",
  // "scrollBy",
  // "scrollTo",
  // "scrollX",
  // "scrollY",
  // "SecurityPolicyViolationEvent",
  // "Selection",
  // "self",
  // "ServiceWorker",
  // "ServiceWorkerContainer",
  // "ServiceWorkerRegistration",
  // "sessionStorage",
  // "setInterval",
  // "setTimeout",
  // "ShadowRoot",
  // "SharedKeyframeList",
  // "SharedWorker",
  // "showModalDialog",
  // "SiteBoundCredential",
  // "speechSynthesis",
  // "SpeechSynthesisEvent",
  // "SpeechSynthesisUtterance",
  // "status",
  // "statusbar",
  // "stop",
  // "Storage",
  // "StorageEvent",
  // "styleMedia",
  // "StyleSheet",
  // "StyleSheetList",
  // "SubtleCrypto",
  // "SVGAElement",
  // "SVGAltGlyphDefElement",
  // "SVGAltGlyphElement",
  // "SVGAltGlyphItemElement",
  // "SVGAngle",
  // "SVGAnimateColorElement",
  // "SVGAnimatedAngle",
  // "SVGAnimatedBoolean",
  // "SVGAnimatedEnumeration",
  // "SVGAnimatedInteger",
  // "SVGAnimatedLength",
  // "SVGAnimatedLengthList",
  // "SVGAnimatedNumber",
  // "SVGAnimatedNumberList",
  // "SVGAnimatedPathData",
  // "SVGAnimatedPoints",
  // "SVGAnimatedPreserveAspectRatio",
  // "SVGAnimatedRect",
  // "SVGAnimatedString",
  // "SVGAnimatedTransformList",
  // "SVGAnimateElement",
  // "SVGAnimateMotionElement",
  // "SVGAnimateTransformElement",
  // "SVGAnimationElement",
  // "SVGCircleElement",
  // "SVGClipPathElement",
  // "SVGColor",
  // "SVGColorProfileElement",
  // "SVGColorProfileRule",
  // "SVGComponentTransferFunctionElement",
  // "SVGCSSRule",
  // "SVGCursorElement",
  // "SVGDefsElement",
  // "SVGDescElement",
  // "SVGDiscardElement",
  // "SVGDocument",
  // "SVGElement",
  // "SVGElementInstance",
  // "SVGElementInstanceList",
  // "SVGEllipseElement",
  // "SVGEvent",
  // "SVGExternalResourcesRequired",
  // "SVGFEBlendElement",
  // "SVGFEColorMatrixElement",
  // "SVGFEComponentTransferElement",
  // "SVGFECompositeElement",
  // "SVGFEConvolveMatrixElement",
  // "SVGFEDiffuseLightingElement",
  // "SVGFEDisplacementMapElement",
  // "SVGFEDistantLightElement",
  // "SVGFEDropShadowElement",
  // "SVGFEFloodElement",
  // "SVGFEFuncAElement",
  // "SVGFEFuncBElement",
  // "SVGFEFuncGElement",
  // "SVGFEFuncRElement",
  // "SVGFEGaussianBlurElement",
  // "SVGFEImageElement",
  // "SVGFEMergeElement",
  // "SVGFEMergeNodeElement",
  // "SVGFEMorphologyElement",
  // "SVGFEOffsetElement",
  // "SVGFEPointLightElement",
  // "SVGFESpecularLightingElement",
  // "SVGFESpotLightElement",
  // "SVGFETileElement",
  // "SVGFETurbulenceElement",
  // "SVGFilterElement",
  // "SVGFilterPrimitiveStandardAttributes",
  // "SVGFitToViewBox",
  // "SVGFontElement",
  // "SVGFontFaceElement",
  // "SVGFontFaceFormatElement",
  // "SVGFontFaceNameElement",
  // "SVGFontFaceSrcElement",
  // "SVGFontFaceUriElement",
  // "SVGForeignObjectElement",
  // "SVGGElement",
  // "SVGGeometryElement",
  // "SVGGlyphElement",
  // "SVGGlyphRefElement",
  // "SVGGradientElement",
  // "SVGGraphicsElement",
  // "SVGHKernElement",
  // "SVGICCColor",
  // "SVGImageElement",
  // "SVGLangSpace",
  // "SVGLength",
  // "SVGLengthList",
  // "SVGLinearGradientElement",
  // "SVGLineElement",
  // "SVGLocatable",
  // "SVGMarkerElement",
  // "SVGMaskElement",
  // "SVGMatrix",
  // "SVGMetadataElement",
  // "SVGMissingGlyphElement",
  // "SVGMPathElement",
  // "SVGNumber",
  // "SVGNumberList",
  // "SVGPaint",
  // "SVGPathElement",
  // "SVGPathSeg",
  // "SVGPathSegArcAbs",
  // "SVGPathSegArcRel",
  // "SVGPathSegClosePath",
  // "SVGPathSegCurvetoCubicAbs",
  // "SVGPathSegCurvetoCubicRel",
  // "SVGPathSegCurvetoCubicSmoothAbs",
  // "SVGPathSegCurvetoCubicSmoothRel",
  // "SVGPathSegCurvetoQuadraticAbs",
  // "SVGPathSegCurvetoQuadraticRel",
  // "SVGPathSegCurvetoQuadraticSmoothAbs",
  // "SVGPathSegCurvetoQuadraticSmoothRel",
  // "SVGPathSegLinetoAbs",
  // "SVGPathSegLinetoHorizontalAbs",
  // "SVGPathSegLinetoHorizontalRel",
  // "SVGPathSegLinetoRel",
  // "SVGPathSegLinetoVerticalAbs",
  // "SVGPathSegLinetoVerticalRel",
  // "SVGPathSegList",
  // "SVGPathSegMovetoAbs",
  // "SVGPathSegMovetoRel",
  // "SVGPatternElement",
  // "SVGPoint",
  // "SVGPointList",
  // "SVGPolygonElement",
  // "SVGPolylineElement",
  // "SVGPreserveAspectRatio",
  // "SVGRadialGradientElement",
  // "SVGRect",
  // "SVGRectElement",
  // "SVGRenderingIntent",
  // "SVGScriptElement",
  // "SVGSetElement",
  // "SVGStopElement",
  // "SVGStringList",
  // "SVGStylable",
  // "SVGStyleElement",
  // "SVGSVGElement",
  // "SVGSwitchElement",
  // "SVGSymbolElement",
  // "SVGTests",
  // "SVGTextContentElement",
  // "SVGTextElement",
  // "SVGTextPathElement",
  // "SVGTextPositioningElement",
  // "SVGTitleElement",
  // "SVGTransform",
  // "SVGTransformable",
  // "SVGTransformList",
  // "SVGTRefElement",
  // "SVGTSpanElement",
  // "SVGUnitTypes",
  // "SVGURIReference",
  // "SVGUseElement",
  // "SVGViewElement",
  // "SVGViewSpec",
  // "SVGVKernElement",
  // "SVGZoomAndPan",
  // "SVGZoomEvent",
  // "Text",
  // "TextDecoder",
  // "TextEncoder",
  // "TextEvent",
  // "TextMetrics",
  // "TextTrack",
  // "TextTrackCue",
  // "TextTrackCueList",
  // "TextTrackList",
  // "TimeEvent",
  // "TimeRanges",
  // "toolbar",
  // "top",
  // "Touch",
  // "TouchEvent",
  // "TouchList",
  // "TrackEvent",
  // "TransitionEvent",
  // "TreeWalker",
  // "UIEvent",
  // "URL",
  // "URLSearchParams",
  // "ValidityState",
  // "VTTCue",
  // "WaveShaperNode",
  // "WebGLActiveInfo",
  // "WebGLBuffer",
  // "WebGLContextEvent",
  // "WebGLFramebuffer",
  // "WebGLProgram",
  // "WebGLRenderbuffer",
  // "WebGLRenderingContext",
  // "WebGLShader",
  // "WebGLShaderPrecisionFormat",
  // "WebGLTexture",
  // "WebGLUniformLocation",
  // "WebSocket",
  // "WheelEvent",
  // "window",
  // "Window",
  // "Worker",
  // "XDomainRequest",
  // "XMLDocument",
  // "XMLHttpRequest",
  // "XMLHttpRequestEventTarget",
  // "XMLHttpRequestProgressEvent",
  // "XMLHttpRequestUpload",
  // "XMLSerializer",
  // "XPathEvaluator",
  // "XPathException",
  // "XPathExpression",
  // "XPathNamespace",
  // "XPathNSResolver",
  // "XPathResult",
  // "XSLTProcessor",
]);