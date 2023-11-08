
class MegjelenesView {
    #minta = [];
    #adat = [];
    constructor(szuloElem, adat, minta) {
        this.minta = minta;
        this.#adat = adat;
        szuloElem.append("<div>");
        this.tablaElem = szuloElem.children("div");
        console.log(this.tablaElem);
        this.#megjelenitMinta();
    }

    #megjelenitMinta() {
        let txt = "";

        txt += "<ul>";
        for (const key in this.#minta) {
            txt += `<li>${this.#minta[key].szMegjelenes}`;
            this.#megjelenitAdat();
            txt += "</li>";
        }
        txt += "</ul>";
        this.tablaElem.append(txt);
    }

    #megjelenitAdat() {
        let txt = "";

        for (const key in this.#adat) {  
            txt +=`${this.#adat[key].keresztNev}, ${this.#adat[key].nev}, ${this.#adat[key].szulEv}`;
        }
        txt += `<span class="kesz">✔️</span> <span class="megse">❌</span><span class="torol">🗑</span>`;
       
        this.tablaElem.append(txt);
    }

    
}
export default MegjelenesView;