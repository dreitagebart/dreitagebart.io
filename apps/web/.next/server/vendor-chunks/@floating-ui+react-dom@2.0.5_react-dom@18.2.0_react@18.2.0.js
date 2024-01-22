"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@floating-ui+react-dom@2.0.5_react-dom@18.2.0_react@18.2.0";
exports.ids = ["vendor-chunks/@floating-ui+react-dom@2.0.5_react-dom@18.2.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/../../node_modules/.pnpm/@floating-ui+react-dom@2.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":
/*!**************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@floating-ui+react-dom@2.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrow: () => (/* binding */ arrow),\n/* harmony export */   autoPlacement: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement),\n/* harmony export */   autoUpdate: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoUpdate),\n/* harmony export */   computePosition: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition),\n/* harmony export */   detectOverflow: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.detectOverflow),\n/* harmony export */   flip: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip),\n/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.getOverflowAncestors),\n/* harmony export */   hide: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide),\n/* harmony export */   inline: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline),\n/* harmony export */   limitShift: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift),\n/* harmony export */   offset: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__.offset),\n/* harmony export */   platform: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.platform),\n/* harmony export */   shift: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift),\n/* harmony export */   size: () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size),\n/* harmony export */   useFloating: () => (/* binding */ useFloating)\n/* harmony export */ });\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/../../node_modules/.pnpm/@floating-ui+dom@1.5.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs\");\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/../../node_modules/.pnpm/@floating-ui+core@1.5.3/node_modules/@floating-ui/core/dist/floating-ui.core.mjs\");\n/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/dom */ \"(ssr)/../../node_modules/.pnpm/@floating-ui+utils@0.2.1/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(ssr)/../../node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"(ssr)/../../node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n\n\n\n\n\n/**\n * Provides data to position an inner element of the floating element so that it\n * appears centered to the reference element.\n * This wraps the core `arrow` middleware to allow React refs as the element.\n * @see https://floating-ui.com/docs/arrow\n */ const arrow = (options)=>{\n    function isRef(value) {\n        return ({}).hasOwnProperty.call(value, \"current\");\n    }\n    return {\n        name: \"arrow\",\n        options,\n        fn (state) {\n            const { element, padding } = typeof options === \"function\" ? options(state) : options;\n            if (element && isRef(element)) {\n                if (element.current != null) {\n                    return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n                        element: element.current,\n                        padding\n                    }).fn(state);\n                }\n                return {};\n            } else if (element) {\n                return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.arrow)({\n                    element,\n                    padding\n                }).fn(state);\n            }\n            return {};\n        }\n    };\n};\nvar index = typeof document !== \"undefined\" ? react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_3__.useEffect;\n// Fork of `fast-deep-equal` that only does the comparisons we need and compares\n// functions\nfunction deepEqual(a, b) {\n    if (a === b) {\n        return true;\n    }\n    if (typeof a !== typeof b) {\n        return false;\n    }\n    if (typeof a === \"function\" && a.toString() === b.toString()) {\n        return true;\n    }\n    let length, i, keys;\n    if (a && b && typeof a == \"object\") {\n        if (Array.isArray(a)) {\n            length = a.length;\n            if (length != b.length) return false;\n            for(i = length; i-- !== 0;){\n                if (!deepEqual(a[i], b[i])) {\n                    return false;\n                }\n            }\n            return true;\n        }\n        keys = Object.keys(a);\n        length = keys.length;\n        if (length !== Object.keys(b).length) {\n            return false;\n        }\n        for(i = length; i-- !== 0;){\n            if (!({}).hasOwnProperty.call(b, keys[i])) {\n                return false;\n            }\n        }\n        for(i = length; i-- !== 0;){\n            const key = keys[i];\n            if (key === \"_owner\" && a.$$typeof) {\n                continue;\n            }\n            if (!deepEqual(a[key], b[key])) {\n                return false;\n            }\n        }\n        return true;\n    }\n    return a !== a && b !== b;\n}\nfunction getDPR(element) {\n    if (true) {\n        return 1;\n    }\n    const win = element.ownerDocument.defaultView || window;\n    return win.devicePixelRatio || 1;\n}\nfunction roundByDPR(element, value) {\n    const dpr = getDPR(element);\n    return Math.round(value * dpr) / dpr;\n}\nfunction useLatestRef(value) {\n    const ref = react__WEBPACK_IMPORTED_MODULE_3__.useRef(value);\n    index(()=>{\n        ref.current = value;\n    });\n    return ref;\n}\n/**\n * Provides data to position a floating element.\n * @see https://floating-ui.com/docs/useFloating\n */ function useFloating(options) {\n    if (options === void 0) {\n        options = {};\n    }\n    const { placement = \"bottom\", strategy = \"absolute\", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_3__.useState({\n        x: 0,\n        y: 0,\n        strategy,\n        placement,\n        middlewareData: {},\n        isPositioned: false\n    });\n    const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_3__.useState(middleware);\n    if (!deepEqual(latestMiddleware, middleware)) {\n        setLatestMiddleware(middleware);\n    }\n    const [_reference, _setReference] = react__WEBPACK_IMPORTED_MODULE_3__.useState(null);\n    const [_floating, _setFloating] = react__WEBPACK_IMPORTED_MODULE_3__.useState(null);\n    const setReference = react__WEBPACK_IMPORTED_MODULE_3__.useCallback((node)=>{\n        if (node != referenceRef.current) {\n            referenceRef.current = node;\n            _setReference(node);\n        }\n    }, [\n        _setReference\n    ]);\n    const setFloating = react__WEBPACK_IMPORTED_MODULE_3__.useCallback((node)=>{\n        if (node !== floatingRef.current) {\n            floatingRef.current = node;\n            _setFloating(node);\n        }\n    }, [\n        _setFloating\n    ]);\n    const referenceEl = externalReference || _reference;\n    const floatingEl = externalFloating || _floating;\n    const referenceRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);\n    const floatingRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);\n    const dataRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(data);\n    const whileElementsMountedRef = useLatestRef(whileElementsMounted);\n    const platformRef = useLatestRef(platform);\n    const update = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(()=>{\n        if (!referenceRef.current || !floatingRef.current) {\n            return;\n        }\n        const config = {\n            placement,\n            strategy,\n            middleware: latestMiddleware\n        };\n        if (platformRef.current) {\n            config.platform = platformRef.current;\n        }\n        (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition)(referenceRef.current, floatingRef.current, config).then((data)=>{\n            const fullData = {\n                ...data,\n                isPositioned: true\n            };\n            if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {\n                dataRef.current = fullData;\n                react_dom__WEBPACK_IMPORTED_MODULE_4__.flushSync(()=>{\n                    setData(fullData);\n                });\n            }\n        });\n    }, [\n        latestMiddleware,\n        placement,\n        strategy,\n        platformRef\n    ]);\n    index(()=>{\n        if (open === false && dataRef.current.isPositioned) {\n            dataRef.current.isPositioned = false;\n            setData((data)=>({\n                    ...data,\n                    isPositioned: false\n                }));\n        }\n    }, [\n        open\n    ]);\n    const isMountedRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);\n    index(()=>{\n        isMountedRef.current = true;\n        return ()=>{\n            isMountedRef.current = false;\n        };\n    }, []);\n    index(()=>{\n        if (referenceEl) referenceRef.current = referenceEl;\n        if (floatingEl) floatingRef.current = floatingEl;\n        if (referenceEl && floatingEl) {\n            if (whileElementsMountedRef.current) {\n                return whileElementsMountedRef.current(referenceEl, floatingEl, update);\n            } else {\n                update();\n            }\n        }\n    }, [\n        referenceEl,\n        floatingEl,\n        update,\n        whileElementsMountedRef\n    ]);\n    const refs = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>({\n            reference: referenceRef,\n            floating: floatingRef,\n            setReference,\n            setFloating\n        }), [\n        setReference,\n        setFloating\n    ]);\n    const elements = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>({\n            reference: referenceEl,\n            floating: floatingEl\n        }), [\n        referenceEl,\n        floatingEl\n    ]);\n    const floatingStyles = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>{\n        const initialStyles = {\n            position: strategy,\n            left: 0,\n            top: 0\n        };\n        if (!elements.floating) {\n            return initialStyles;\n        }\n        const x = roundByDPR(elements.floating, data.x);\n        const y = roundByDPR(elements.floating, data.y);\n        if (transform) {\n            return {\n                ...initialStyles,\n                transform: \"translate(\" + x + \"px, \" + y + \"px)\",\n                ...getDPR(elements.floating) >= 1.5 && {\n                    willChange: \"transform\"\n                }\n            };\n        }\n        return {\n            position: strategy,\n            left: x,\n            top: y\n        };\n    }, [\n        strategy,\n        transform,\n        elements.floating,\n        data.x,\n        data.y\n    ]);\n    return react__WEBPACK_IMPORTED_MODULE_3__.useMemo(()=>({\n            ...data,\n            update,\n            refs,\n            elements,\n            floatingStyles\n        }), [\n        data,\n        update,\n        refs,\n        elements,\n        floatingStyles\n    ]);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BmbG9hdGluZy11aStyZWFjdC1kb21AMi4wLjVfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9yZWFjdC1kb20vZGlzdC9mbG9hdGluZy11aS5yZWFjdC1kb20ubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQzhHO0FBQ3BKO0FBQ29CO0FBQ2I7QUFFdEM7Ozs7O0NBS0MsR0FDRCxNQUFNQSxRQUFRbUIsQ0FBQUE7SUFDWixTQUFTQyxNQUFNQyxLQUFLO1FBQ2xCLE9BQU8sRUFBQyxHQUFFQyxjQUFjLENBQUNDLElBQUksQ0FBQ0YsT0FBTztJQUN2QztJQUNBLE9BQU87UUFDTEcsTUFBTTtRQUNOTDtRQUNBTSxJQUFHQyxLQUFLO1lBQ04sTUFBTSxFQUNKQyxPQUFPLEVBQ1BDLE9BQU8sRUFDUixHQUFHLE9BQU9ULFlBQVksYUFBYUEsUUFBUU8sU0FBU1A7WUFDckQsSUFBSVEsV0FBV1AsTUFBTU8sVUFBVTtnQkFDN0IsSUFBSUEsUUFBUUUsT0FBTyxJQUFJLE1BQU07b0JBQzNCLE9BQU81Qix1REFBT0EsQ0FBQzt3QkFDYjBCLFNBQVNBLFFBQVFFLE9BQU87d0JBQ3hCRDtvQkFDRixHQUFHSCxFQUFFLENBQUNDO2dCQUNSO2dCQUNBLE9BQU8sQ0FBQztZQUNWLE9BQU8sSUFBSUMsU0FBUztnQkFDbEIsT0FBTzFCLHVEQUFPQSxDQUFDO29CQUNiMEI7b0JBQ0FDO2dCQUNGLEdBQUdILEVBQUUsQ0FBQ0M7WUFDUjtZQUNBLE9BQU8sQ0FBQztRQUNWO0lBQ0Y7QUFDRjtBQUVBLElBQUlJLFFBQVEsT0FBT0MsYUFBYSxjQUFjZixrREFBZUEsR0FBR0MsNENBQVNBO0FBRXpFLGdGQUFnRjtBQUNoRixZQUFZO0FBQ1osU0FBU2UsVUFBVUMsQ0FBQyxFQUFFQyxDQUFDO0lBQ3JCLElBQUlELE1BQU1DLEdBQUc7UUFDWCxP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QUFDSjtRQUFjSTtLQUFZO0lBQy9CLE1BQU16QixXQUFXOUMsMENBQWEsQ0FBQyxJQUFPO1lBQ3BDK0MsV0FBVzBCO1lBQ1h4QixVQUFVeUI7UUFDWixJQUFJO1FBQUNEO1FBQWFDO0tBQVc7SUFDN0IsTUFBTVksaUJBQWlCdEYsMENBQWEsQ0FBQztRQUNuQyxNQUFNdUYsZ0JBQWdCO1lBQ3BCQyxVQUFVNUM7WUFDVjZDLE1BQU07WUFDTkMsS0FBSztRQUNQO1FBQ0EsSUFBSSxDQUFDNUMsU0FBU0csUUFBUSxFQUFFO1lBQ3RCLE9BQU9zQztRQUNUO1FBQ0EsTUFBTTlCLElBQUl0QixXQUFXVyxTQUFTRyxRQUFRLEVBQUVLLEtBQUtHLENBQUM7UUFDOUMsTUFBTUMsSUFBSXZCLFdBQVdXLFNBQVNHLFFBQVEsRUFBRUssS0FBS0ksQ0FBQztRQUM5QyxJQUFJUCxXQUFXO1lBQ2IsT0FBTztnQkFDTCxHQUFHb0MsYUFBYTtnQkFDaEJwQyxXQUFXLGVBQWVNLElBQUksU0FBU0MsSUFBSTtnQkFDM0MsR0FBSTdCLE9BQU9pQixTQUFTRyxRQUFRLEtBQUssT0FBTztvQkFDdEMwQyxZQUFZO2dCQUNkLENBQUM7WUFDSDtRQUNGO1FBQ0EsT0FBTztZQUNMSCxVQUFVNUM7WUFDVjZDLE1BQU1oQztZQUNOaUMsS0FBS2hDO1FBQ1A7SUFDRixHQUFHO1FBQUNkO1FBQVVPO1FBQVdMLFNBQVNHLFFBQVE7UUFBRUssS0FBS0csQ0FBQztRQUFFSCxLQUFLSSxDQUFDO0tBQUM7SUFDM0QsT0FBTzFELDBDQUFhLENBQUMsSUFBTztZQUMxQixHQUFHc0QsSUFBSTtZQUNQd0I7WUFDQU07WUFDQXRDO1lBQ0F3QztRQUNGLElBQUk7UUFBQ2hDO1FBQU13QjtRQUFRTTtRQUFNdEM7UUFBVXdDO0tBQWU7QUFDcEQ7QUFFOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZHJlaXRhZ2ViYXJ0L3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3JlYWN0LWRvbUAyLjAuNV9yZWFjdC1kb21AMTguMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3JlYWN0LWRvbS9kaXN0L2Zsb2F0aW5nLXVpLnJlYWN0LWRvbS5tanM/YzE0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcnJvdyBhcyBhcnJvdyQxLCBjb21wdXRlUG9zaXRpb24gfSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmV4cG9ydCB7IGF1dG9QbGFjZW1lbnQsIGF1dG9VcGRhdGUsIGNvbXB1dGVQb3NpdGlvbiwgZGV0ZWN0T3ZlcmZsb3csIGZsaXAsIGdldE92ZXJmbG93QW5jZXN0b3JzLCBoaWRlLCBpbmxpbmUsIGxpbWl0U2hpZnQsIG9mZnNldCwgcGxhdGZvcm0sIHNoaWZ0LCBzaXplIH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHNvIHRoYXQgaXRcbiAqIGFwcGVhcnMgY2VudGVyZWQgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogVGhpcyB3cmFwcyB0aGUgY29yZSBgYXJyb3dgIG1pZGRsZXdhcmUgdG8gYWxsb3cgUmVhY3QgcmVmcyBhcyB0aGUgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hcnJvd1xuICovXG5jb25zdCBhcnJvdyA9IG9wdGlvbnMgPT4ge1xuICBmdW5jdGlvbiBpc1JlZih2YWx1ZSkge1xuICAgIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY3VycmVudCcpO1xuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2Fycm93JyxcbiAgICBvcHRpb25zLFxuICAgIGZuKHN0YXRlKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHBhZGRpbmdcbiAgICAgIH0gPSB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMoc3RhdGUpIDogb3B0aW9ucztcbiAgICAgIGlmIChlbGVtZW50ICYmIGlzUmVmKGVsZW1lbnQpKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmN1cnJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBhcnJvdyQxKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQuY3VycmVudCxcbiAgICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgICB9KS5mbihzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBhcnJvdyQxKHtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIHBhZGRpbmdcbiAgICAgICAgfSkuZm4oc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBpbmRleCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5cbi8vIEZvcmsgb2YgYGZhc3QtZGVlcC1lcXVhbGAgdGhhdCBvbmx5IGRvZXMgdGhlIGNvbXBhcmlzb25zIHdlIG5lZWQgYW5kIGNvbXBhcmVzXG4vLyBmdW5jdGlvbnNcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIGEgPT09ICdmdW5jdGlvbicgJiYgYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgbGVuZ3RoLCBpLCBrZXlzO1xuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICAgIGlmICghZGVlcEVxdWFsKGFbaV0sIGJbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGlmICghe30uaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09ICdfb3duZXInICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuXG5mdW5jdGlvbiBnZXREUFIoZWxlbWVudCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBjb25zdCB3aW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICByZXR1cm4gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbn1cblxuZnVuY3Rpb24gcm91bmRCeURQUihlbGVtZW50LCB2YWx1ZSkge1xuICBjb25zdCBkcHIgPSBnZXREUFIoZWxlbWVudCk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogZHByKSAvIGRwcjtcbn1cblxuZnVuY3Rpb24gdXNlTGF0ZXN0UmVmKHZhbHVlKSB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZih2YWx1ZSk7XG4gIGluZGV4KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZjtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIHRvIHBvc2l0aW9uIGEgZmxvYXRpbmcgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy91c2VGbG9hdGluZ1xuICovXG5mdW5jdGlvbiB1c2VGbG9hdGluZyhvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIHBsYWNlbWVudCA9ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5ID0gJ2Fic29sdXRlJyxcbiAgICBtaWRkbGV3YXJlID0gW10sXG4gICAgcGxhdGZvcm0sXG4gICAgZWxlbWVudHM6IHtcbiAgICAgIHJlZmVyZW5jZTogZXh0ZXJuYWxSZWZlcmVuY2UsXG4gICAgICBmbG9hdGluZzogZXh0ZXJuYWxGbG9hdGluZ1xuICAgIH0gPSB7fSxcbiAgICB0cmFuc2Zvcm0gPSB0cnVlLFxuICAgIHdoaWxlRWxlbWVudHNNb3VudGVkLFxuICAgIG9wZW5cbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgc3RyYXRlZ3ksXG4gICAgcGxhY2VtZW50LFxuICAgIG1pZGRsZXdhcmVEYXRhOiB7fSxcbiAgICBpc1Bvc2l0aW9uZWQ6IGZhbHNlXG4gIH0pO1xuICBjb25zdCBbbGF0ZXN0TWlkZGxld2FyZSwgc2V0TGF0ZXN0TWlkZGxld2FyZV0gPSBSZWFjdC51c2VTdGF0ZShtaWRkbGV3YXJlKTtcbiAgaWYgKCFkZWVwRXF1YWwobGF0ZXN0TWlkZGxld2FyZSwgbWlkZGxld2FyZSkpIHtcbiAgICBzZXRMYXRlc3RNaWRkbGV3YXJlKG1pZGRsZXdhcmUpO1xuICB9XG4gIGNvbnN0IFtfcmVmZXJlbmNlLCBfc2V0UmVmZXJlbmNlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbX2Zsb2F0aW5nLCBfc2V0RmxvYXRpbmddID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHNldFJlZmVyZW5jZSA9IFJlYWN0LnVzZUNhbGxiYWNrKG5vZGUgPT4ge1xuICAgIGlmIChub2RlICE9IHJlZmVyZW5jZVJlZi5jdXJyZW50KSB7XG4gICAgICByZWZlcmVuY2VSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICBfc2V0UmVmZXJlbmNlKG5vZGUpO1xuICAgIH1cbiAgfSwgW19zZXRSZWZlcmVuY2VdKTtcbiAgY29uc3Qgc2V0RmxvYXRpbmcgPSBSZWFjdC51c2VDYWxsYmFjayhub2RlID0+IHtcbiAgICBpZiAobm9kZSAhPT0gZmxvYXRpbmdSZWYuY3VycmVudCkge1xuICAgICAgZmxvYXRpbmdSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICBfc2V0RmxvYXRpbmcobm9kZSk7XG4gICAgfVxuICB9LCBbX3NldEZsb2F0aW5nXSk7XG4gIGNvbnN0IHJlZmVyZW5jZUVsID0gZXh0ZXJuYWxSZWZlcmVuY2UgfHwgX3JlZmVyZW5jZTtcbiAgY29uc3QgZmxvYXRpbmdFbCA9IGV4dGVybmFsRmxvYXRpbmcgfHwgX2Zsb2F0aW5nO1xuICBjb25zdCByZWZlcmVuY2VSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGZsb2F0aW5nUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBkYXRhUmVmID0gUmVhY3QudXNlUmVmKGRhdGEpO1xuICBjb25zdCB3aGlsZUVsZW1lbnRzTW91bnRlZFJlZiA9IHVzZUxhdGVzdFJlZih3aGlsZUVsZW1lbnRzTW91bnRlZCk7XG4gIGNvbnN0IHBsYXRmb3JtUmVmID0gdXNlTGF0ZXN0UmVmKHBsYXRmb3JtKTtcbiAgY29uc3QgdXBkYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghcmVmZXJlbmNlUmVmLmN1cnJlbnQgfHwgIWZsb2F0aW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgc3RyYXRlZ3ksXG4gICAgICBtaWRkbGV3YXJlOiBsYXRlc3RNaWRkbGV3YXJlXG4gICAgfTtcbiAgICBpZiAocGxhdGZvcm1SZWYuY3VycmVudCkge1xuICAgICAgY29uZmlnLnBsYXRmb3JtID0gcGxhdGZvcm1SZWYuY3VycmVudDtcbiAgICB9XG4gICAgY29tcHV0ZVBvc2l0aW9uKHJlZmVyZW5jZVJlZi5jdXJyZW50LCBmbG9hdGluZ1JlZi5jdXJyZW50LCBjb25maWcpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaXNQb3NpdGlvbmVkOiB0cnVlXG4gICAgICB9O1xuICAgICAgaWYgKGlzTW91bnRlZFJlZi5jdXJyZW50ICYmICFkZWVwRXF1YWwoZGF0YVJlZi5jdXJyZW50LCBmdWxsRGF0YSkpIHtcbiAgICAgICAgZGF0YVJlZi5jdXJyZW50ID0gZnVsbERhdGE7XG4gICAgICAgIFJlYWN0RE9NLmZsdXNoU3luYygoKSA9PiB7XG4gICAgICAgICAgc2V0RGF0YShmdWxsRGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbbGF0ZXN0TWlkZGxld2FyZSwgcGxhY2VtZW50LCBzdHJhdGVneSwgcGxhdGZvcm1SZWZdKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIGlmIChvcGVuID09PSBmYWxzZSAmJiBkYXRhUmVmLmN1cnJlbnQuaXNQb3NpdGlvbmVkKSB7XG4gICAgICBkYXRhUmVmLmN1cnJlbnQuaXNQb3NpdGlvbmVkID0gZmFsc2U7XG4gICAgICBzZXREYXRhKGRhdGEgPT4gKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgaXNQb3NpdGlvbmVkOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwgW29wZW5dKTtcbiAgY29uc3QgaXNNb3VudGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgaW5kZXgoKCkgPT4ge1xuICAgIGlzTW91bnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIGluZGV4KCgpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlRWwpIHJlZmVyZW5jZVJlZi5jdXJyZW50ID0gcmVmZXJlbmNlRWw7XG4gICAgaWYgKGZsb2F0aW5nRWwpIGZsb2F0aW5nUmVmLmN1cnJlbnQgPSBmbG9hdGluZ0VsO1xuICAgIGlmIChyZWZlcmVuY2VFbCAmJiBmbG9hdGluZ0VsKSB7XG4gICAgICBpZiAod2hpbGVFbGVtZW50c01vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICByZXR1cm4gd2hpbGVFbGVtZW50c01vdW50ZWRSZWYuY3VycmVudChyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwgdXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3JlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCB1cGRhdGUsIHdoaWxlRWxlbWVudHNNb3VudGVkUmVmXSk7XG4gIGNvbnN0IHJlZnMgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VSZWYsXG4gICAgZmxvYXRpbmc6IGZsb2F0aW5nUmVmLFxuICAgIHNldFJlZmVyZW5jZSxcbiAgICBzZXRGbG9hdGluZ1xuICB9KSwgW3NldFJlZmVyZW5jZSwgc2V0RmxvYXRpbmddKTtcbiAgY29uc3QgZWxlbWVudHMgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VFbCxcbiAgICBmbG9hdGluZzogZmxvYXRpbmdFbFxuICB9KSwgW3JlZmVyZW5jZUVsLCBmbG9hdGluZ0VsXSk7XG4gIGNvbnN0IGZsb2F0aW5nU3R5bGVzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiBzdHJhdGVneSxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDBcbiAgICB9O1xuICAgIGlmICghZWxlbWVudHMuZmxvYXRpbmcpIHtcbiAgICAgIHJldHVybiBpbml0aWFsU3R5bGVzO1xuICAgIH1cbiAgICBjb25zdCB4ID0gcm91bmRCeURQUihlbGVtZW50cy5mbG9hdGluZywgZGF0YS54KTtcbiAgICBjb25zdCB5ID0gcm91bmRCeURQUihlbGVtZW50cy5mbG9hdGluZywgZGF0YS55KTtcbiAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbml0aWFsU3R5bGVzLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCIsXG4gICAgICAgIC4uLihnZXREUFIoZWxlbWVudHMuZmxvYXRpbmcpID49IDEuNSAmJiB7XG4gICAgICAgICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybSdcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiB4LFxuICAgICAgdG9wOiB5XG4gICAgfTtcbiAgfSwgW3N0cmF0ZWd5LCB0cmFuc2Zvcm0sIGVsZW1lbnRzLmZsb2F0aW5nLCBkYXRhLngsIGRhdGEueV0pO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIC4uLmRhdGEsXG4gICAgdXBkYXRlLFxuICAgIHJlZnMsXG4gICAgZWxlbWVudHMsXG4gICAgZmxvYXRpbmdTdHlsZXNcbiAgfSksIFtkYXRhLCB1cGRhdGUsIHJlZnMsIGVsZW1lbnRzLCBmbG9hdGluZ1N0eWxlc10pO1xufVxuXG5leHBvcnQgeyBhcnJvdywgdXNlRmxvYXRpbmcgfTtcbiJdLCJuYW1lcyI6WyJhcnJvdyIsImFycm93JDEiLCJjb21wdXRlUG9zaXRpb24iLCJhdXRvUGxhY2VtZW50IiwiYXV0b1VwZGF0ZSIsImRldGVjdE92ZXJmbG93IiwiZmxpcCIsImdldE92ZXJmbG93QW5jZXN0b3JzIiwiaGlkZSIsImlubGluZSIsImxpbWl0U2hpZnQiLCJvZmZzZXQiLCJwbGF0Zm9ybSIsInNoaWZ0Iiwic2l6ZSIsIlJlYWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiUmVhY3RET00iLCJvcHRpb25zIiwiaXNSZWYiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5hbWUiLCJmbiIsInN0YXRlIiwiZWxlbWVudCIsInBhZGRpbmciLCJjdXJyZW50IiwiaW5kZXgiLCJkb2N1bWVudCIsImRlZXBFcXVhbCIsImEiLCJiIiwidG9TdHJpbmciLCJsZW5ndGgiLCJpIiwia2V5cyIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleSIsIiQkdHlwZW9mIiwiZ2V0RFBSIiwid2luIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInJvdW5kQnlEUFIiLCJkcHIiLCJNYXRoIiwicm91bmQiLCJ1c2VMYXRlc3RSZWYiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VGbG9hdGluZyIsInBsYWNlbWVudCIsInN0cmF0ZWd5IiwibWlkZGxld2FyZSIsImVsZW1lbnRzIiwicmVmZXJlbmNlIiwiZXh0ZXJuYWxSZWZlcmVuY2UiLCJmbG9hdGluZyIsImV4dGVybmFsRmxvYXRpbmciLCJ0cmFuc2Zvcm0iLCJ3aGlsZUVsZW1lbnRzTW91bnRlZCIsIm9wZW4iLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwieCIsInkiLCJtaWRkbGV3YXJlRGF0YSIsImlzUG9zaXRpb25lZCIsImxhdGVzdE1pZGRsZXdhcmUiLCJzZXRMYXRlc3RNaWRkbGV3YXJlIiwiX3JlZmVyZW5jZSIsIl9zZXRSZWZlcmVuY2UiLCJfZmxvYXRpbmciLCJfc2V0RmxvYXRpbmciLCJzZXRSZWZlcmVuY2UiLCJ1c2VDYWxsYmFjayIsIm5vZGUiLCJyZWZlcmVuY2VSZWYiLCJzZXRGbG9hdGluZyIsImZsb2F0aW5nUmVmIiwicmVmZXJlbmNlRWwiLCJmbG9hdGluZ0VsIiwiZGF0YVJlZiIsIndoaWxlRWxlbWVudHNNb3VudGVkUmVmIiwicGxhdGZvcm1SZWYiLCJ1cGRhdGUiLCJjb25maWciLCJ0aGVuIiwiZnVsbERhdGEiLCJpc01vdW50ZWRSZWYiLCJmbHVzaFN5bmMiLCJyZWZzIiwidXNlTWVtbyIsImZsb2F0aW5nU3R5bGVzIiwiaW5pdGlhbFN0eWxlcyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsIndpbGxDaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../../node_modules/.pnpm/@floating-ui+react-dom@2.0.5_react-dom@18.2.0_react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs\n");

/***/ })

};
;