
class MegjelenesView {
    #minta = [];
    #adat = [];
    constructor(szuloElem, adat, minta) {
        this.minta = minta;
        this.#adat = adat;
        this.divElem = szuloElem;
        console.log(this.divElem);

        this.#megjelenitMinta();
        this.#megjelenitAdat();

    }

    #megjelenitMinta() {
        let txt = "<ul>";
        for (let i = 0; i < this.#minta.length; i++) {
            const element = this.#minta[i];
            txt += `<li>${element} </li>`;
        }
        txt += "</ul>";
        this.divElem.append(txt);
    }

    #megjelenitAdat() {
        let txt = "<ul>";

        for (const key in this.#adat) {
            txt += `<li>${this.#adat[key].keresztNev} ${this.#adat[key].nev} ${this.#adat[key].szulEv}</li>`;
        }

        txt += "</ul>";
        this.divElem.append(txt);
    }


}
export default MegjelenesView;