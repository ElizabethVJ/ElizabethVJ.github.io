let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#09222f;"> Estudiante de Ingenieria en Ciencia y Tecnologia de Alimentos de la UAAAN. </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
