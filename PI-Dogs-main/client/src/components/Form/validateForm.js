export default function validation(objeto) {
  let errors = {};

  //--------------------------- NOMBRE -------------------------------------
  if (
    objeto.weightDos &&
    objeto.heightDos &&
    objeto.image &&
    objeto.weightUno &&
    objeto.heightUno &&
    objeto.life_span &&
    !objeto.name
  ) {
    errors.name = "Este campo no puede estar vacío";
  }

  if (objeto.name) {
    if (objeto.name.length < 2) {
      errors.name = "Una raza con menos de 2 caracteres seria irreconocible";
    }
    if (objeto.name.length > 20) {
      errors.name = "El nombre no debe superar los 20 caracteres";
    }
  }
  //--------------------------- PESO -------------------------------------
  if (
    !objeto.weightDos &&
    objeto.heightDos &&
    objeto.image &&
    !objeto.weightUno &&
    objeto.heightUno &&
    objeto.life_span &&
    objeto.name
  ) {
    errors.weightUno = "Este campo no puede estar vacío";
    errors.weightDos = "Este campo no puede estar vacío";
  }
  if (objeto.weightUno) {
    if (Number(objeto.weightUno) > 99) {
      errors.weightUno = "El peso no debe superar 2 caracteres";
    }
    if (Number(objeto.weightUno) < 2) {
      errors.weightUno = "no creemos que un perro pese menos de 2 kilos";
    }
  }

  if (objeto.weightDos) {
    if (Number(objeto.weightDos) > 99) {
      errors.weightDos = "El peso no debe superar 2 caracteres";
    }
    if (Number(objeto.weightDos) < 2) {
      errors.weightDos = "no creemos que un perro pese menos de 2 kilos";
    }
    if (Number(objeto.weightDos) <= Number(objeto.weightUno)) {
      errors.weightDos =
        "no es posible que el peso sea menor e igual al peso minimo";
    }
  }

  if (!objeto.weightDos && objeto.weightUno) {
    errors.weightDos = "Hace falta el peso maximo";
  }
  if (objeto.weightDos && !objeto.weightUno) {
    errors.weightDos = "Hace falta el peso minimo";
  }
  //--------------------------- ALTURA -------------------------------------
  if (
    objeto.weightDos &&
    !objeto.heightDos &&
    objeto.image &&
    objeto.weightUno &&
    !objeto.heightUno &&
    objeto.life_span &&
    objeto.name
  ) {
    errors.heightUno = "Este campo no puede estar vacío";
    errors.heightDos = "Este campo no puede estar vacío";
  }
  if (!objeto.heightDos && objeto.heightUno) {
    errors.heightDos = "hace falta la altura maxima";
  }
  if (objeto.heightDos && !objeto.heightUno) {
    errors.heightDos = "hace falta la altura minima";
  }
  if (objeto.heightUno) {
    if (Number(objeto.heightUno) > 99) {
      errors.heightUno = "es impresionante que exista un perro tan alto";
    }
    if (Number(objeto.heightUno) < 5) {
      errors.heightUno = "debe ser una altura real?";
    }
  }

  if (objeto.heightDos) {
    if (Number(objeto.heightDos) > 99) {
      errors.heightDos = "estás seguro que tienes un perro?";
    }
    if (Number(objeto.heightDos) <= Number(objeto.heightUno)) {
      errors.heightDos =
        "no es posible que la altura sea menor e igual a la altura minima";
    }
  }

  //--------------------------- AÑOS DE VIDA -------------------------------------

  if (Number(objeto.life_span) < 0.1) {
    errors.life_span = "por favor, ingresemos un promedio de edad convincente";
  }
  if (Number(objeto.life_span) > 150) {
    errors.life_span = "es probable que un animal no dure esa edad";
  }
  if (!objeto.life_span) {
    errors.life_span = "Este campo no puede estar vacío";
  }

  return errors;
}
