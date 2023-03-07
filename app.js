

/*
document.querySelector("#switch").onclick = function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

   if(html.classList.contains("light")){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }  esse código foi substituido por Toggle

   pegar a imagem do perfil
  const img = document.querySelector("#profile img");

  se tiver não light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/img/avatar-photo/avatar-light.jpg");
    img.setAttribute(
      "alt",
      "Foto de perfil de Tone usando óculos de grau em um dia de sol."
    );

    localStorage.setItem('light', 1)
  } else {
    img.setAttribute("src", "./assets/img/avatar-photo/avatar-dark.jpg");
    img.setAttribute(
      "alt",
      "Foto de perfil de Tone usando toca e moletam na Time Squere em Nova Iork."
    );
    localStorage.setItem('light', 2)
    
  }
  
};*/

function loadTheme(){
  let lightMode = localStorage.getItem('light', 1)
  const html = document.documentElement;

  if (lightMode.contains("light", 2)){
    html.classList.toggle('light')
  } 
}
