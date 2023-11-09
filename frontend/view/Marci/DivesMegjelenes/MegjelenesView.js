
class MegjelenesView {
    #adat = [];
    #leiro = [];
    constructor(szuloElem, adat, leiro) {
        this.#adat = adat;
        this.#leiro = leiro;
        console.log(this.#leiro)
        this.divElem = szuloElem;
        console.log(this.divElem);

        this.#megjelenitMinta();
        this.#megjelenitAdat();
        this.#gombok();

    }

    #megjelenitMinta() {
        let txt = "<ul>";

        for (const key in this.#leiro) {
            const element = this.#leiro[key].megjelenes;
            txt += `<li class ="egySor">${element} </li>`;
        }
        txt += "</ul>";
        this.divElem.append(txt);
    }

    #megjelenitAdat() {
        let txt = "<ul>";

        for (const key in this.#adat) {
            txt += `<li>${this.#adat[key].keresztNev} ${this.#adat[key].nev} ${this.#adat[key].szulEv}`;
            txt += `<span class="kesz">✔️</span> <span class="megse">❌</span><span class="torol">🗑</span></li>`;
        }

        txt += "</ul>";
        this.divElem.append(txt);
    }

    #gombok() {
        this.divElem.on("click", "li", (event) => {
            const sorElem = $(event.currentTarget);
            const keszElem = sorElem.find(".kesz");
            const torolElem = sorElem.find(".torol");
            const megseElem = sorElem.find(".megse");
    
            if (keszElem.is(event.target)) {
                sorElem.css("background-color", "lightgreen");
                megseElem.css("display", "inline");
                keszElem.css("display", "none");
                this.#esemenyTrigger("kesz");
            } else if (megseElem.is(event.target)) {
                sorElem.css("background-color", "white");
                megseElem.css("display", "none");
                keszElem.css("display", "inline");
                this.#esemenyTrigger("megse");
            } else if (torolElem.is(event.target)) {
                sorElem.remove();
                this.#esemenyTrigger("torol");
            }
        });
    }

    #esemenyTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev);
        window.dispatchEvent(esemeny);
    }
}





export default MegjelenesView;