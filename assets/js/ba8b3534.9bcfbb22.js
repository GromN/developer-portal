"use strict";(self.webpackChunkdeveloper_portal_docusaurus=self.webpackChunkdeveloper_portal_docusaurus||[]).push([[2983],{50793:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var l=n(70655),u=l.__importDefault(n(67294)),a=l.__importDefault(n(84022)),r=l.__importDefault(n(24493));function c(e){var t=e.pluginId,n=e.pluginInstanceContent;return u.default.createElement("section",{style:{marginBottom:30}},u.default.createElement("code",null,t),u.default.createElement(r.default,{src:n,collapseDepth:2}))}function o(e){var t=e.pluginName,n=e.pluginContent;return u.default.createElement("section",{style:{marginBottom:60}},u.default.createElement("h3",null,t),u.default.createElement("div",null,Object.entries(n).filter((function(e){return!!e[1]})).map((function(e){var t=e[0],n=e[1];return u.default.createElement(c,{key:t,pluginId:t,pluginInstanceContent:n})}))))}t.default=function(e){var t=e.allContent;return u.default.createElement(a.default,null,u.default.createElement("h2",null,"Plugin content"),u.default.createElement("div",null,Object.entries(t).filter((function(e){var t=e[1];return Object.values(t).some((function(e){return!!e}))})).map((function(e){var t=e[0],n=e[1];return u.default.createElement(o,{key:t,pluginName:t,pluginContent:n})}))))}}}]);