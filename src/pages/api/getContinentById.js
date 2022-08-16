// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const { continent } = req.query;
  let continentData = null;

  switch (continent) {
    case "europa":
      continentData = {
        slug: "europa",
        title: "Europa",
        description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
        image: "/banner-page/europe.jpeg",
        totalCountries: "50",
        totalLanguages: "60",
        totalCities: "27",
      }
      break;
    case "africa":
      continentData = {
        slug: "africa",
        title: "Africa",
        description: "A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.",
        image: "/banner-page/africa.jpeg",
        totalCountries: "55",
        totalLanguages: "22",
        totalCities: "46",
      }
      break;
    case "america-norte":
      continentData = {
        slug: "america-norte",
        title: "America Norte",
        description: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.",
        image: "/banner-page/america-nort.jpeg",
        totalCountries: "37",
        totalLanguages: "6",
        totalCities: "88",
      }
      break;
    case "america-sul":
      continentData = {
        slug: "america-sul",
        title: "America Sul",
        description: "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.",
        image: "/banner-page/america-sul.jpeg",
        totalCountries: "16",
        totalLanguages: "10",
        totalCities: "78",
      }
      break;
    case "asia":
      continentData = {
        slug: "asia",
        title: "Ásia",
        description: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
        image: "/banner-page/asia.jpeg",
        totalCountries: "50",
        totalLanguages: "100",
        totalCities: "34",
      }
      break;
    case "oceania":
      continentData = {
        slug: "oceania",
        title: "Oceânia",
        description: "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville.",
        image: "/banner-page/oceania.jpeg",
        totalCountries: "25",
        totalLanguages: "30",
        totalCities: "22",
      }
      break;
  }

  res.status(200).json(continentData )
}
