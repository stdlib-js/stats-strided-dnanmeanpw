// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dnannsumpw@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";var n=new r(2);function d(e,s,r,d){return n[0]=0,n[1]=0,t(e,s,r,d,n,1,0),n[0]/n[1]}function i(e,t,r){return d(e,t,r,s(e,r))}e(i,"ndarray",d);export{i as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
