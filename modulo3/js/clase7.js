let signo = prompt("cual es tu signo?");

switch (signo) {
  case "aries":
    console.log(
      "Sería bueno que acepte los consejos que reciba de la gente que lo quiere, ya que lo ayudarán a cambiar su forma de pensar y actuar. Evite negarse."
    );
    break;
  case "tauro":
    console.log(
      "Sería bueno que aprenda y cambie la manera en que enfrenta la vida a diario. Comience a disfrutar de lo que tiene y no se haga tanto problema."
    );
    break;
  case "gémenisis":
  case "geminisis":
    console.log(
      "Si utiliza pensamientos claros y desapegados, estos le permitirán resolver rápidamente todos los problemas cotidianos que está teniendo hace días."
    );
    break;
  case "cancer":
  case "cáncer":
    console.log(
      "Intente pensar en usted. Destínese tiempo para poder terminar esa carrera que hace tiempo comenzó y por diversas situaciones no puedo finalizar."
    );
    break;

  case "leo":
    console.log(
      "Durante esta jornada obtendrá la energía necesaria para poder emprender lo que siempre quiso y no pudo. Vaya detrás del objetivo que más le interese."
    );
    break;

  case "virgo":
    console.log(
      "Lo más recomendable para esta jornada será que, cuando intente comunicarse con alguien, busque un diálogo conciliador y sin confrontar a la gente que lo rodea."
    );
    break;

  case "libra":
    console.log(
      "Seguramente en esta jornada se le presentará un conflicto en el que deberá buscar una solución inmediata. Trate de no involucrarse."
    );
    break;

  case "escorpio":
    console.log(
      "Relájese, ya que será una jornada donde su espontaneidad será bien recibida. No deje pasar el tiempo y exprese sus emociones en el momento oportuno."
    );
    break;

  case "sagitario":
    console.log(
      "Haga lo posible para desprenderse de aquello que le hace mal a su vida. Elija nuevos rumbos y vivirá una etapa de renovación interna muy enriquecedora."
    );
    break;

  case "capricornio":
    console.log(
      "Cuando deba dar una opinión sobre alguna persona, trate de censurar menos y no juzgar a los demás sin conocerlos. Abandone esa posición autoritaria que tiene."
    );
    break;

  case "acuario":
    console.log(
      "Intente conservar una sola dirección y ponga toda su energía en lo que realmente quiere. De esta forma, podrá alcanzar lo que desea con rapidez."
    );
    break;
  case "piscis":
    console.log(
      "Anímese y comience a interpretar los mensajes de sus propios sueños. Esto lo ayudará a conocerse mejor y a que sintonice con su inconsciente."
    );
    break;

  default:
    console.log("No es un signo zodiacal");
    break;
}
