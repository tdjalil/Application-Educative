// Exemple de données pour chaque matière
const subjects = {
  maths: {
    quiz: [
      {question:"5 + 7 = ?", choices:["11","12","13"], answer:"12", image:"images/maths1.png"},
      {question:"8 × 3 = ?", choices:["24","23","21"], answer:"24", image:"images/maths2.png"}
    ],
    exercises:[
      {title:"Exercice Maths 1", content:"Résous 5+7", image:"images/maths1.png"},
      {title:"Exercice Maths 2", content:"Résous 8×3", image:"images/maths2.png"}
    ],
    videos:[
      {title:"Vidéo Maths 1", src:"videos/video1.mp4"}
    ],
    bonus:[
      {title:"Mini Défi Maths", content:"Résous un calcul rapide !"}
    ]
  },
  francais: {
    quiz:[
      {question:"Synonyme de 'rapide' ?", choices:["vite","lent","gros"], answer:"vite", image:"images/fr1.png"}
    ],
    exercises:[
      {title:"Exercice Français", content:"Trouve le synonyme de 'rapide'", image:"images/fr1.png"}
    ],
    videos:[
      {title:"Vidéo Français 1", src:"videos/video2.mp4"}
    ],
    bonus:[{title:"Défi Français", content:"Complète la phrase !"}]
  }
  // Tu peux rajouter histoire, géographie, sciences…
};
