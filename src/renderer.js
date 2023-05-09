/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

const title = document.querySelector("#title");

// ipcRenderer.send("msg", () => console.log("message received"));

const setButton = document.getElementById("btn");
const form = document.getElementById("form");
const h1 = document.getElementById("h1");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let data = new FormData(e.target);
//   data = Object.fromEntries(data);
//   console.log({ data });

//   window.Bridge.sendData(data);
// });

// window.addEventListener("DOMContentLoaded", () => {});

// window.indexBridge.setCounter((event, count) => {
//   h1.innerHTML = count;
//   console.log({ ...event });
// });

// var h2 = document.createElement("h2");
// document.body.appendChild(h2);
// window.indexBridge.decreaseCounter((event, count) => {
//   console.log("ss");

//   h2.innerHTML = count;
// });
// setButton.addEventListener("click", () => {
//   window.Bridge.sendAlert();
// });

let names = window.dbApi.getNames();

console.log(window.dbApi);
