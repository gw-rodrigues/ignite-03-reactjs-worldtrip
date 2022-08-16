// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const { continent } = req.query;
  let continentData = null;

  switch (continent) {
    case "europa":
      continentData = {
        slug: "europa",
        title: "Europa",
        slogan: "O continente mais antigo.",
        image: "/banner/europe.jpeg",
      }
      break;
    case "africa":
      continentData = {
        slug: "africa",
        title: "Africa",
        slogan: "O continente selvagem.",
        image: "/banner/africa.jpeg",
      }
      break;
    case "america-norte":
      continentData = {
        slug: "america-norte",
        title: "America Norte",
        slogan: "O continente dos sonhos.",
        image: "/banner/america-nort.jpeg",
      }
      break;
    case "america-sul":
      continentData = {
        slug: "america-sul",
        title: "America Sul",
        slogan: "O continente da diversão.",
        image: "/banner/america-sul.jpeg",
      }
      break;
    case "asia":
      continentData = {
        slug: "asia",
        title: "Asia",
        slogan: "O continente das culturas.",
        image: "/banner/asia.jpeg",
      }
      break;
    case "oceania":
      continentData = {
        slug: "oceania",
        title: "Oceania",
        slogan: "O continente marítimo.",
        image: "/banner/oceania.jpeg",
      }
      break;
  }

  res.status(200).json(continentData )
}
