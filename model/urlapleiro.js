export const urlapLeiro = {
  nev: {
    megjelenes: "Név",
    tipus: "text",
    value: "",
    placeholder: "vezetéknév",
    regex: "[A-Z][a-z]{2,15}", //pattern is lehet
    validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
  },
  szul: {
    megjelenes: "Születési év",
    tipus: "number",
    value: "2000",
    regex: {
      min: 1900,
      max: 2023,
    },
    validalas: "1000 és 2023 között kell legyen a szám!"
  },
};


export const szuloAdatok ={
  kNev:{
    szMegjelenes: "Vezetéknév",
    tipus: "text",
    value: "",
    placeholder: "Vezetéknév:",
    regex: "[A-Z][a-z]{2,15}", 
    validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
  },
  szNev:{
    szMegjelenes: "Név",
    tipus: "text",
    value: "",
    placeholder: "Név:",
    regex: "[A-Z][a-z]{2,15}", 
    validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
  },
  szulEv:{
    szMegjelenes: "Születési év",
    tipus: "number",
    value: "2000",
    regex: {
      min: 1900,
      max: 2023,
    },
    validalas: "1000 és 2023 között kell legyen a szám!"
  }

}