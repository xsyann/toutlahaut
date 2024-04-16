type Serie = {
  name: string;
  photos: Photo[];
};

type Photo = {
  url: string;
  description: string;
};

export const series: Serie[] = [
  { name: "Concerts", photos: [] },
  { name: "Confinements", photos: [] },
  { name: "Dans la Montagne", photos: [] },
  { name: "Dialogues aux Sommets", photos: [] },
  { name: "Jardin Extrême", photos: [] },
  { name: "Ma Charente-Maritime", photos: [] },
  { name: "Mag Project", photos: [] },
  {
    name: "Le moins est parfois le mieux",
    photos: [
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20100712__MG_1765.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20110413__MG_0109.jpg",
        description: "2",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20110413__MG_0111.jpg",
        description: "3",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20111029__MG_1784.jpg ",
        description: "4",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20111030__MG_1853.jpg",
        description: "foobar",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20111030__MG_1870.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20140223__MG_6800.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20140517_S0020129.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20140522_DSCF0134.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20140715_DSCF0259.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20141020__MG_7679.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20151003_IMG_3295.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20161029_IMG_4643.jpg",
        description: "1",
      },
      {
        url: "https://files.toutlahaut.net/p_moinsmieux/img/20170419_IMG_4931.jpg",
        description: "1",
      },
    ],
  },
  { name: "Népal", photos: [] },
  { name: "Sur l'instant", photos: [] },
  { name: "L'heure tourne", photos: [] },
];
