            <script>
  const productVariants = {{ product.variants | json }}
  const Unavailables = [];
  const abccc = [];
  console.log(Unavailables)
  console.log(abccc)

  const productInputs = document.querySelectorAll(".product-form__input input");

  // Loop through all input elements and populate the abccc array
  productInputs.forEach((input) => {
    abccc.push(input.value);
  });

  // Loop through all variants and populate the Unavailables array
  productVariants.forEach((variant) => {
    if (!variant.available) {
      Unavailables.push(variant.option1);
                  console.log(variant,"variant");
    }
  });

  // Filter the abccc array based on the Unavailables array
  const result = abccc.filter((value) => Unavailables.includes(value));

  // Loop through the productInputs array again and add a CSS class to matching inputs
  productInputs.forEach((input) => {
    if (result.includes(input.value)) {
      input.classList.add("unavailable");
      console.log(input);
    }
  });
</script>
