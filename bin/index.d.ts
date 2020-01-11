/// <reference types="electron" />
/**
 * Connects puppeteer to the electron app. Must be called at startup before the electron app is ready.
 * @param {App} app The app imported from electron.
 * @param {puppeteer} puppeteer The imported puppeteer namespace.
 * @param {number} port Port to host the DevTools websocket connection. If none is given, we will pick an open port.
 * @returns {Promise<Browser>} An object containing the puppeteer browser, the port, and json received from DevTools.
 */
export declare const connect: (app: Electron.App, puppeteer: typeof import("puppeteer-core"), port?: number) => Promise<import("puppeteer").Browser>;
/**
 * Given a BrowserWindow, find the corresponding puppeteer Page. It is undefined if external operations
 * occur on the page whilst we are attempting to find it. A url/file must be loaded on the window for it to be found.
 * If no url is loaded, the parameter 'allowBlankNavigate' allows us to load "about:blank" first.
 * @param {Browser} browser The puppeteer browser instance obtained from calling |connect|.
 * @param {BrowserWindow} window The browser window for which we want to find the corresponding puppeteer Page.
 * @param {boolean} allowBlankNavigate If no url is loaded, allow us to load "about:blank" so that we may find the Page.
 * @returns {Promise<Page>} The page that corresponds with the BrowserWindow.
 */
export declare const getPage: (browser: import("puppeteer").Browser, window: Electron.BrowserWindow, allowBlankNavigate?: boolean) => Promise<import("puppeteer").Page>;
declare const _default: {
    connect: (app: Electron.App, puppeteer: typeof import("puppeteer-core"), port?: number) => Promise<import("puppeteer").Browser>;
    getPage: (browser: import("puppeteer").Browser, window: Electron.BrowserWindow, allowBlankNavigate?: boolean) => Promise<import("puppeteer").Page>;
};
export default _default;
