import{_ as a}from"./chunks/theme.C1Wivfv6.js";import{_ as l,o as t,c as n,a as s,W as i,v as h}from"./chunks/framework.bt3QkFQn.js";const y=JSON.parse('{"title":"Custom Namespace","description":"","frontmatter":{"title":"Custom Namespace","lang":"en-US"},"headers":[{"level":2,"title":"Custom namespace <span class=\\"vp-tag \\">2.2.0</span>","slug":"custom-namespace","link":"#custom-namespace","children":[{"level":3,"title":"Set ElConfigProvider","slug":"set-elconfigprovider","link":"#set-elconfigprovider","children":[]},{"level":3,"title":"Set Scss & Css Vars","slug":"set-scss-css-vars","link":"#set-scss-css-vars","children":[]}]}],"relativePath":"en-US/guide/namespace.md","filePath":"en-US/guide/namespace.md","lastUpdated":1734597950000}'),p={name:"en-US/guide/namespace.md"};function k(c,r,d,o,E,g){const e=a;return t(),n("div",null,[s("h2",{id:"custom-namespace",tabindex:"-1"},[i("Custom namespace "),s("span",{class:"vp-tag"},"2.2.0"),i(),s("a",{class:"header-anchor vp-link",href:"#custom-namespace","aria-label":'Permalink to "Custom namespace ^(2.2.0)"'},"​")]),s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[i("We provide a example in "),s("a",{href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noreferrer"},[i("element-plus-vite-starter"),h(e,{class:"link-icon"})]),i(". Just check it.")])]),s("p",null,[i("Default namespace is "),s("code",null,"el"),i(". In special cases, we may need to customize its namespace.")]),s("p",null,"Since we use sass to write styles, if you want to customize all namespaces. We have to assume that you already use sass."),s("p",null,[i("You must set "),s("code",null,"ElConfigProvider"),i(" and scss "),s("code",null,"$namespace"),i(" at the same time.")]),s("h3",{id:"set-elconfigprovider",tabindex:"-1"},[i("Set "),s("code",null,"ElConfigProvider"),i(),s("a",{class:"header-anchor vp-link",href:"#set-elconfigprovider","aria-label":'Permalink to "Set `ElConfigProvider`"'},"​")]),s("p",null,[i("Use "),s("code",null,"ElConfigProvider"),i(" wrap your root component.")]),s("div",{class:"language-vue vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"<!-- App.vue -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," namespace"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ep"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    <!-- ... -->")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"el-config-provider"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])]),s("h3",{id:"set-scss-css-vars",tabindex:"-1"},[i("Set Scss & Css Vars "),s("a",{class:"header-anchor vp-link",href:"#set-scss-css-vars","aria-label":'Permalink to "Set Scss & Css Vars"'},"​")]),s("p",null,[i("Create "),s("code",null,"styles/element/index.scss"),i(":")]),s("div",{class:"language-scss vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"scss"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// styles/element/index.scss")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// we can add this to custom namespace, default is 'el'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"@forward"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'element-plus/theme-chalk/src/mixins/config.scss'"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," with"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," (")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"  $namespace"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"'ep'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// ...")])])])]),s("p",null,[i("Import "),s("code",null,"styles/element/index.scss"),i(" in "),s("code",null,"vite.config.ts"),i(":")]),s("blockquote",null,[s("p",null,[i("The same is true for webpack, which needs to be set in "),s("code",null,"preprocessorOptions"),i(".")])]),s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { defineConfig } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vite'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// https://vitejs.dev/config/")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"export"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," default"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," defineConfig"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"({")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  css: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    preprocessorOptions: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      scss: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        additionalData: "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'`@use "~/styles/element/index.scss" as *;`'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  // ...")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"})")])])])]),s("p",null,"That's all.")])}const v=l(p,[["render",k]]);export{y as __pageData,v as default};
