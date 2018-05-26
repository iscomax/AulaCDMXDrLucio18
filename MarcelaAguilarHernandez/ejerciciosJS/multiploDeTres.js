function multiplo3 (num) {
  if (num >= 100 && num <= 200) {
    if (num % 3 == 0) {
      return "El número " + num + " es múltiplo de 3 y está dentro del rango"
    } else {
      return "El número " + num + " no es múltiplo de 3 pero está dentro del rango"
    };
  } else {
    return "El número " + num + " no está dentro del rango"
  }
};
multiplo3(102);
