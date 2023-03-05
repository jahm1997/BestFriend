export default function validation(objeto) {
  let errors = {};

  if (!objeto.name) {
    objeto.name = "Este campo no puede estar vacío";
  }
  if (objeto.name.length > 35) {
    objeto.name = "El email no debe superar los 35 caracteres";
  }
  if (objeto.weight > 99) {
    objeto.weight = "El weight no debe superar 2 caracteres";
  }
  if (objeto.weight === 0) {
    objeto.weight = "Tu perro flota?";
  }
  if (objeto.height > 99) {
    objeto.height = "El perro no puede ser tan alto O.o";
  }
  if (!objeto.height > 0) {
    objeto.height = "estás seguro que tienes un perro?";
  }
  if (objeto.life_span > 99) {
    objeto.life_span = "Probablemente tu perro ya ha muerto";
  }
  return errors;
}
