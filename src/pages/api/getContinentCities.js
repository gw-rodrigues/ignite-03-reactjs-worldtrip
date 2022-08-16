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
              country: "França",
              city: "Africa Sul",
              image: "/cities/europe/africa-sul.jpeg",
              flag: "fr",
            },
            {
              country: "Itália",
              city: "Nigeria",
              image: "/cities/europe/nigeria.jpeg",
              flag: "it",
            },
            {
              country: "República Tcheca",
              city: "Marrocos",
              image: "/cities/europe/marrocos.jpeg",
              flag: "cz",
            },
            {
              country: "Holanda",
              city: "Quenia",
              image: "/cities/europe/quenia.jpeg",
              flag: "nl",
            },
          ]
        break;
      case "america-norte":
        continentData = [
            {
              country: "França",
              city: "Estados Unidos",
              image: "/cities/europe/usa.jpeg",
              flag: "fr",
            },
            {
              country: "Itália",
              city: "Mexico",
              image: "/cities/europe/mexico.jpeg",
              flag: "it",
            },
            {
              country: "República Tcheca",
              city: "Gronelandia",
              image: "/cities/europe/gronelandia.jpeg",
              flag: "cz",
            },
            {
              country: "Holanda",
              city: "Canada",
              image: "/cities/europe/canada.jpeg",
              flag: "nl",
            },
          ]
        break;
      case "america-sul":
        continentData = [
            {
              country: "França",
              city: "Argentina",
              image: "/cities/europe/argentina.jpeg",
              flag: "fr",
            },
            {
              country: "Itália",
              city: "Colombia",
              image: "/cities/europe/colombia.jpeg",
              flag: "it",
            },
            {
              country: "República Tcheca",
              city: "Perú",
              image: "/cities/europe/peru.jpeg",
              flag: "cz",
            },
            {
              country: "Holanda",
              city: "Brazil",
              image: "/cities/europe/brazil.jpeg",
              flag: "nl",
            },
          ]
        break;
      case "asia":
        continentData = [
            {
              country: "França",
              city: "China",
              image: "/cities/europe/china.jpeg",
              flag: "fr",
            },
            {
              country: "Itália",
              city: "India",
              image: "/cities/europe/india.jpeg",
              flag: "it",
            },
            {
              country: "República Tcheca",
              city: "Indonesia",
              image: "/cities/europe/indonesia.jpeg",
              flag: "cz",
            },
            {
              country: "Holanda",
              city: "Japao",
              image: "/cities/europe/japan.jpeg",
              flag: "nl",
            },
          ]
        break;
      case "oceania":
        continentData = [
            {
              country: "Reino Unido",
              city: "Australia",
              image: "/cities/europe/australia.jpeg",
              flag: "gb",
            },
            {
              country: "França",
              city: "Fiji",
              image: "/cities/europe/fiji.jpeg",
              flag: "fr",
            },
            {
              country: "Itália",
              city: "Nova Zelandia",
              image: "/cities/europe/new-zeland.jpeg",
              flag: "it",
            },
            {
              country: "República Tcheca",
              city: "Papua",
              image: "/cities/europe/papua.jpeg",
              flag: "cz",
            },
          ]
        break;
    }
  
    res.status(200).json(continentData )
  }
  