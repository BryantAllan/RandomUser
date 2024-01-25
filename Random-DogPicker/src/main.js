import './style.css'
import { renderData1,renderData2 } from './utils/render.js'


const main = () => {
// to do Invoke render functionconsole.log("hello world");
document.querySelector("#app").innerHTML += '<h1>Hello world</h1>';

renderData2()
}
main()
