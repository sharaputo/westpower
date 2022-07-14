// Burger menu open & close
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("_active");
    menu.classList.toggle("_active");

    // Lock body scroll
    if (burger.classList.contains("_active")) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = null;
      document.body.style.height = null;
    }
  });
}

// Inputs save & edit handle
const editInputs = document.querySelectorAll(".wp-form__action");

if (editInputs.length > 0) {
  for (let i = 0; i < editInputs.length; i++) {
    const editInput = editInputs[i];
    const input = editInput.previousElementSibling;
    const label = editInput.querySelector(".label");

    editInput.addEventListener("click", () => {
      if (editInput.classList.contains("edit")) {
        input.removeAttribute("disabled");
        input.focus();
        input.select();
        saveData();
      } else {
        editData();
      }
    });

    function saveData() {
      input.addEventListener("input", () => {
        editInput.classList.remove("edit");
        editInput.classList.add("save");
        label.innerHTML = "сохранить";
      });
    }

    function editData() {
      input.setAttribute("disabled", "");
      editInput.classList.remove("save");
      editInput.classList.add("edit");
      label.innerHTML = "изменить";
    }
  }
}

// Input masks
const phone01 = document.getElementById("phone01");
const phone02 = document.getElementById("phone02");
const maskOptions = {
  mask: "+{7}(000)000-00-00",
};
const mask01 = IMask(phone01, maskOptions);
const mask02 = IMask(phone02, maskOptions);

// Custom select choice
const customSelect = document.getElementById("select_btn");
const discountForm = document.getElementById("discount_form");

if (customSelect) {
  customSelect.addEventListener("click", () => {
    customSelect.classList.toggle("_active");
    discountForm.classList.toggle("_active");
  });
}
