# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



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