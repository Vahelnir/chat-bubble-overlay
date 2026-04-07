const CONFIG = {
  // indiquer le pseudo twitch de sa chaine (par exemple bipeo, ou autre)
  channel: "bipeo",

  // options de style
  style: {
    // couleur du texte des bulles de chat, accepte un mot clé, une couleur hexadecimale ou rgb au format rgb(255,255,255) ou transparente au format rgba(255,255,255,1)
    textColor: "#2061B6",
    // couleur du texte des bulles de chat, accepte un mot clé, une couleur hexadecimale ou rgb au format rgb(255,255,255) ou transparente au format rgba(255,255,255,1)
    backgroundColor: "#cde3ff",
    // rondeur de bordure, plus la valeur est elevée, plus la rondeur est intense
    borderRadius: "50px",
    // taille de la police
    fontSize: "18px",
  },

  chat: {
    // longueur maximale du cadre du chat
    maxWidth: "400px",

    // alignement du chat, accepte seulement trois valeurs : "left" | "center" | "right"
    alignment: "left",

    // delais en ms avant qu'un message disparait
    disappearDelay: 8000,
  },
};