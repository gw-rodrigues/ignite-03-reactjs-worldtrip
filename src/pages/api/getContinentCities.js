// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { continent } = req.query;
    let continentData = null;

    switch (continent) {
      case "europa":
        continentData = [
            {
              country: "Reino Unido",
              city: "Londres",
              image: "/cities/europe/london.jpeg",
              flag: "gb",
            },
            {
              country: "França",
              city: "Paris",
              image: "/cities/europe/paris.jpeg",
              flag: "fr",
            },
            {
              country: "Itália",
              city: "Roma",
              image: "/cities/europe/roma.jpeg",
              flag: "it",
            },
            {
              country: "República Tcheca",
              city: "Praga",
              image: "/cities/europe/praga.jpeg",
              flag: "cz",
            },
            {
              country: "Holanda",
              city: "Amsterdã",
              image: "/cities/europe/amsterdam.jpeg",
              flag: "nl",
            },
          ]
        break;
      case "africa":
        continentData = [
            {
              country: "Africa Sul",
              city: "Cidade Cabo",
              image: "/cities/africa/africa-sul.jpeg",
              flag: "za",
            },
            {
              country: "Nigeria",
              city: "Abuja",
              image: "/cities/africa/nigeria.jpeg",
              flag: "ng",
            },
            {
              country: "Marrocos",
              city: "Rabat",
              image: "/cities/africa/marrocos.jpeg",
              flag: "ma",
            },
            {
              country: "Quénia",
              city: "Nairóbi",
              image: "/cities/africa/quenia.jpeg",
              flag: "ke",
            },
          ]
        break;
      case "america-norte":
        continentData = [
            {
              country: "Estados Unidos",
              city: "Nova York",
              image: "/cities/america-nort/usa.jpeg",
              flag: "us",
            },
            {
              country: "México",
              city: "Cidade México",
              image: "/cities/america-nort/mexico.jpeg",
              flag: "mx",
            },
            {
              country: "Gronelândia",
              city: "Nuuk",
              image: "/cities/america-nort/gronelandia.jpeg",
              flag: "gl",
            },
            {
              country: "Canadá",
              city: "Ottawa",
              image: "/cities/america-nort/canada.jpeg",
              flag: "ca",
            },
          ]
        break;
      case "america-sul":
        continentData = [
            {
              country: "Argentina",
              city: "Buenos Aires",
              image: "/cities/america-sul/argentina.jpeg",
              flag: "ar",
            },
            {
              country: "Colômbia",
              city: "Bogotá",
              image: "/cities/america-sul/colombia.jpeg",
              flag: "co",
            },
            {
              country: "Peru",
              city: "Lima",
              image: "/cities/america-sul/peru.jpeg",
              flag: "pe",
            },
            {
              country: "Brasil",
              city: "Brasília",
              image: "/cities/america-sul/brazil.jpeg",
              flag: "br",
            },
          ]
        break;
      case "asia":
        continentData = [
            {
              country: "China",
              city: "Pequim",
              image: "/cities/asia/china.jpeg",
              flag: "cn",
            },
            {
              country: "Índia",
              city: "Nova Delhi",
              image: "/cities/asia/india.jpeg",
              flag: "in",
            },
            {
              country: "Indonésia",
              city: "Jacarta",
              image: "/cities/asia/indonesia.jpeg",
              flag: "id",
            },
            {
              country: "Japão",
              city: "Tóquio",
              image: "/cities/asia/japan.jpeg",
              flag: "jp",
            },
          ]
        break;
      case "oceania":
        continentData = [
            {
              country: "Austrália",
              city: "Camberra",
              image: "/cities/oceania/australia.jpeg",
              flag: "au",
            },
            {
              country: "Fiji",
              city: "Suva",
              image: "/cities/oceania/fiji.jpeg",
              flag: "fj",
            },
            {
              country: "Nova Zelândia",
              city: "Wellington",
              image: "/cities/oceania/new-zeland.jpeg",
              flag: "nz",
            },
            {
              country: "Papua - Nova Guiné",
              city: "Papua - Nova Guiné",
              image: "/cities/oceania/papua.jpeg",
              flag: "pg",
            },
          ]
        break;
    }
  
    res.status(200).json(continentData )
  }
  