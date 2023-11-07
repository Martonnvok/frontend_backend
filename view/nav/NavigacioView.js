class NavigacioView {
    #adat = {};
    constructor(szuloElem, adat) {
        this.navElem = szuloElem.children("nav");
        this.#adat = adat;
        
        this.nav();
        console.log(this.navElem);

    }

    nav() {
        let txt = "";
        for (const key in this.#adat) {
            txt += `<a href="${this.#adat[key].href}">${this.#adat[key].nev}</a>`;

        }
        this.navElem.append(txt);
    }

}
export default NavigacioView;