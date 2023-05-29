const nome = prompt("Qual o seu nome nobre aventureiro?");
const body = document.querySelector("#background");
const card = document.querySelector(".card");

const classes = [
  {
    id: 1,
    nome: "Bárbaro",
    img: "./assets/img/classe/barbaro.jpg",
  },
  {
    id: 2,
    nome: "Bardo",
    img: "./assets/img/classe/bordo.png",
  },
  {
    id: 3,
    nome: "Clérigo",
    img: "./assets/img/classe/clerigo.jpg",
  },
  {
    id: 4,
    nome: "Druida",
    img: "./assets/img/classe/druid.jpg",
  },
  {
    id: 5,
    nome: "Guerreiro",
    img: "./assets/img/classe/guerreiro.jpg",
  },
  {
    id: 6,
    nome: "Ladino",
    img: "./assets/img/classe/ladino.jpg",
  },
  {
    id: 7,
    nome: "Mago",
    img: "./assets/img/classe/mago.jpg",
  },
  {
    id: 8,
    nome: "Paladino",
    img: "./assets/img/classe/paladino.jpg",
  },
  {
    id: 9,
    nome: "Arqueiro",
    img: "./assets/img/classe/arqueiro.jpg",
  },
  {
    id: 10,
    nome: "Hunter",
    img: "./assets/img/classe/hunter.jpg",
  },
  {
    id: 11,
    nome: "Monge",
    img: "./assets/img/classe/monge.jpg",
  },
  {
    id: 12,
    nome: "Patrulheiro",
    img: "./assets/img/classe/patrulheiro.jpg",
  },
  {
    id: 13,
    nome: "Bruxo",
    img: "./assets/img/classe/bruxo.jpg",
  },
];

const regioes = [
  {
    id: 1,
    nome: "Vale das Brumas",
    imagem: "./assets/img/regioes/valeDasBrumas.jpg",
    clima: "Temperado",
    vegetacao: "Floresta temperada",
    biomas: ["Floresta de Coníferas", "Pântano"],
    montanhoso: false,
    rios: true,
    mares: false,
    criaturas: [
      "Lobo do Pântano",
      "Manticora",
      "Troglodita do Pântano",
      "Fada Selvagem",
    ],
  },
  {
    id: 2,
    nome: "Cavernas Abissais",
    imagem: "./assets/img/regioes/cavernasAbssais.jpg",
    clima: "Subterrâneo",
    vegetacao: "N/A",
    bioma: ["caverna", "abismo"],
    montanhoso: false,
    rios: false,
    mares: true,
    criaturas: [
      "Gigante das profundezas",
      "Kraken",
      "Golem de Pedra",
      "Draugr",
      "Esqueleto",
      "Formiga Atômica",
    ],
  },
  {
    id: 3,
    nome: "Terras Flamejantes",
    imagem: "./assets/img/regioes/terrasFlamejantes.jpg",
    clima: "Quente",
    vegetacao: "Deserto",
    bioma: ["Deserto Arenoso", "Vulcão"],
    montanhoso: false,
    rios: false,
    mares: false,
    criaturas: [
      "Elemental de Fogo",
      "Escorpião flamejante",
      "Fenix",
      "Dragão de Obsidiana",
      "Motoqueiro Fantasma",
      "Demonio de fogo",
    ],
  },
  {
    id: 4,
    nome: "Mares de Arghazi",
    imagem: "./assets/img/regioes/maresDeArghazi.jpg",
    clima: "Tropical",
    vegetacao: "Mangue",
    bioma: ["Oceano", "Ilhas"],
    montanhoso: false,
    rios: false,
    mares: true,
    criaturas: [
      "Sereias",
      "Polvo Gigante",
      "Kraken Selvagem",
      "Tritão",
      "Piratas Zumbi",
      "Leviatan",
    ],
  },
  {
    id: 5,
    nome: "Planicie dos ventos",
    imagem: "./assets/img/regioes/planicieDosVentos.jpg",
    clima: "Temperado",
    vegetacao: "Estepe",
    bioma: ["Planície", "Montanhas"],
    montanhoso: true,
    rios: true,
    mares: false,
    criaturas: [
      "Harpia",
      "Minotauros",
      "Centauros",
      "Cavaleiro dos ventos",
      "Pterodáctilo Elemental",
      "Lorde Hámeno",
    ],
  },
  {
    id: 6,
    nome: "Floresta dos Esquecidos",
    imagem: "./assets/img/regioes/florestaDosEsquecidos.jpg",
    clima: "Nevoa",
    vegetacao: "Pantâno",
    bioma: ["Ruínas", "Rios"],
    montanhoso: true,
    rios: true,
    mares: false,
    criaturas: [
      "Raptores",
      "Reptilianos",
      "Zumbies",
      "Múmia",
      "Almas Esquecidas",
      "Anfísbena",
      "Meduza",
    ],
  },
];

const classeSelecionada = classes[Math.floor(Math.random() * classes.length)];



const personagem = {
  nome: nome,
  classeNome: classeSelecionada.nome,
  classeImg: classeSelecionada.img,
  nivel: 1,
  atributos: {
    forca: Math.floor(Math.random() * 100) + 1,
    destreza: Math.floor(Math.random() * 100) + 1,
    constituicao: Math.floor(Math.random() * 100) + 1,
    inteligencia: Math.floor(Math.random() * 100) + 1,
    sabedoria: Math.floor(Math.random() * 100) + 1,
  },
  regiao: regioes[Math.floor(Math.random() * regioes.length)],
};

//add a imagem das classes
card.innerHTML += `<li class ="semPonto"><img class = "personagem" src = "${personagem.classeImg}" alt= "${personagem.classeNome}"><li>`;
card.innerHTML += `<li > Nome do Personagem: ${personagem.nome}</li>`
card.innerHTML += `<li class ="comPonto"> Classe: ${personagem.classeNome}</li>`;
card.innerHTML += `<li> Nível: ${personagem.nivel}</li>`;

for (let atributo in personagem.atributos) {
  card.innerHTML += `<li>${atributo}: ${personagem.atributos[atributo]} </li>`
}

card.innerHTML +=  `<li> Regiao: (${personagem.regiao.nome} </li>) `


body.style.backgroundImage = ` url('${personagem.regiao.imagem}')`;





