const ruleButton = document.querySelector(".rule_btn");
const ruleContainer = document.querySelector(".rule_container");
const closeButton = document.querySelector(".close");

let isRuleBoxOpen = true;
if (isRuleBoxOpen) {
    ruleContainer.style.display = "none";//
}
ruleButton.addEventListener("click", () => {
  if (isRuleBoxOpen) {
    ruleContainer.style.display = "flex";//
  }
});
closeButton.addEventListener("click", () => {
    ruleContainer.style.display = "none";
});