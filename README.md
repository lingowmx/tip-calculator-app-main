## Table of contents

- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Puntos interesantes](#puntos-interesantes)
  
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Tip Calculator 💁‍♂️](https://github.com/lingowmx/tip-calculator-app-main)
- Live Site URL: [Tip Calculator ghpages](https://lingowmx.github.io/tip-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCss](https://v3.tailwindcss.com/)

### What I learned

This was a very interesting proyect because I had the chance to use different hooks from react and start understanding the utilities of them
useMemo, useCallback


Regresar un array no es la mejor práctica en este caso. Es mejor devolver un objeto porque:

✅ Los objetos son más legibles y más fáciles de usar en el futuro.
✅ No dependes del orden de los valores al extraerlos (evita errores como el que tuviste).
✅ Si necesitas agregar más valores en el futuro, puedes hacerlo sin afectar el código existente.

🚀 Cómo mejorar tu función totalWithTip()
En lugar de devolver un array [tip, finalTotal], usa un objeto:

```jsx
const totalWithTip = () => {
  const bill = parseFloat(total);
  if (isNaN(bill) || bill <= 0) return { error: "Insert a valid number" };

  const tip = bill * (tipPorcentage / 100);
  const finalTotal = bill + tip;

  return { tip, finalTotal }; // Devuelve un objeto con nombres claros
};
```

✅ Cómo extraer los valores correctamente
En tipPerPerson() y totalPerPersonFunction(), en lugar de esto:

```jsx

const [tip] = totalWithTip();  // ❌ Mala práctica (depende del orden)
```

Haz esto:

```jsx
const { tip } = totalWithTip();  // ✅ Extrae el valor por su nombre
```
Y en totalPerPersonFunction():

```jsx
const { finalTotal } = totalWithTip();
```

🔥 Beneficios de usar un objeto en lugar de un array
Más claro: totalWithTip().tip es más intuitivo que [tip, finalTotal][0].
Más seguro: No depende del orden de los valores.
Más flexible: Si agregas más datos en el futuro, no tienes que cambiar cómo accedes a ellos.
📌 Conclusión: Sí, hay un mejor método. Usa objetos en lugar de arrays cuando devuelvas múltiples valores con significados distintos. 🚀

### Puntos interesantes
Algunos estilos dentro de los botones
tailwind styles y condicionales dentro de ellos
