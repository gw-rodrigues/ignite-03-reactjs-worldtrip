// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      slug: "europa",
      title: "Europa",
      slogan: "O continente mais antigo.",
      image: "/banner/europe.jpeg",
    },
    {
      slug: "africa",
      title: "Africa",
      slogan: "O continente selvagem.",
      image: "/banner/africa.jpeg",
    },
    {
      slug: "america-norte",
      title: "America Norte",
      slogan: "O continente dos sonhos.",
      image: "/banner/america-nort.jpeg",
    },
    {
      slug: "america-sul",
      title: "America Sul",
      slogan: "O continente da diversão.",
      image: "/banner/america-sul.jpeg",
    },
    {
      slug: "asia",
      title: "Ásia",
      slogan: "O continente das culturas.",
      image: "/banner/asia.jpeg",
    },
    {
      slug: "oceania",
      title: "Oceânia",
      slogan: "O continente marítimo.",
      image: "/banner/oceania.jpeg",
    },
  ])
}
