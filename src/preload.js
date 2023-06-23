// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron");

// contextBridge.exposeInMainWorld("electronAPI", {
//   setTitle: (title) => ipcRenderer.send("set-title", title),
// });

// let sendData = (inputData) => {
//   // console.log("hello from renderer");
//   ipcRenderer.send("receive", inputData);
// };

// let sendThis = {
//   sendData: sendData,
// };

// contextBridge.exposeInMainWorld("Bridge", sendThis);

// let indexBridge = {
//   setCounter: (cb) => ipcRenderer.on("change", cb),
//   decreaseCounter: (cb) => ipcRenderer.on("dec", cb),
// };

// contextBridge.exposeInMainWorld("indexBridge", indexBridge);

// const getNames = () => {
//   return testMgr.getNames();
// };

// const sendData = (data) => {
//   return console.log(data);
// };

// const indexBridge = {
//   getNames,
//   sendData,
// };

// contextBridge.exposeInMainWorld("electron", indexBridge);
