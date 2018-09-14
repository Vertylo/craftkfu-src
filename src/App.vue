<template>

  <div class="app">
    <top />
    <div id="container">
      <search />
      <step />
      <shop />
    </div>

    <footer>
      {{store.txt.footer[store.lang]}}
    </footer>
  </div>

</template>

<script>
import top from "./components/Top";
import search from "./components/Search";
import step from "./components/Step";
import shop from "./components/Shop";
import { store } from "./assets/js/Store";
import data from "./assets/js/Data";
export default {
  name: "App",
  components: { top, search, step, shop },
  data() {
    return {
      crafts: store.state.list.crafts,
      lang: store.state.lang,
      store: store.state
    };
  }
  // mounted() {
  //   if (localStorage.getItem("crafts")) {
  //     JSON.parse(localStorage.getItem("crafts")).forEach(el => {
  //       store.state.list.add(data.find(x => x.id === el));
  //     });
  //   }
  // },
  // watch: {
  //   crafts() {
  //     let exportCrafts = [];
  //     this.crafts.forEach(el => {
  //       exportCrafts.push(el.id);
  //     });
  //     localStorage.setItem("crafts", JSON.stringify(exportCrafts));
  //   }
  // }
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  text-decoration: none;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

html {
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  color: #475965;
}

body {
  background: #f0f3f6;
}

.app {
  display: flex;
  min-height: 100vh;
  flex-flow: column;
}

#container {
  flex-grow: 1;
}

a,
a:active {
  color: #475965;
  outline: none;
  text-decoration: none;
}

i,
.icon {
  color: #475965;
  font-size: 1.1rem;
  transition: color 0.15s;
  margin-left: 5px;
  text-decoration: none;
}

i:hover {
  color: #53c4b8;
}

#container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}

.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-col {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

section {
  width: 400px;
  box-shadow: 1px 0 20px rgba(0, 0, 0, 0.05);
}

.section-head {
  background: #53c4b8;
  color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
}

.section-head h2 {
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.section-body {
  background: white;
  padding: 15px 10px;
}

.toolbar {
  height: 25px;
  margin-bottom: 15px;
}

footer {
  background-color: #f9f9f9;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  text-align: center;
  padding: 20px 30px;
  margin-top: 30px;
}
</style>
