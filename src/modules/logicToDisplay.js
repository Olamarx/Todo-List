import UI from './UI.js';

export default class Logic {
    static loadUponReload = () => {
        window.addEventListener('load', UI.loadLocalStoreAndDisplayHTML())
    }

    
}