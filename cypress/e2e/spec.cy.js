describe("Calculator E2E", () => {
  const pressButtons = (buttons) => {
    buttons.forEach((button) => {
      cy.contains("button", button).click();
    });
  };

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("adds 5 + 3 and shows 8", () => {
    pressButtons(["5", "+", "3", "="]);
    cy.get('input[type="text"]').should("have.value", "8");
  });

  it("subtracts 10 - 4 and shows 6", () => {
    pressButtons(["1", "0", "-", "4", "="]);
    cy.get('input[type="text"]').should("have.value", "6");
  });

  it("multiplies 6 * 7 and shows 42", () => {
    pressButtons(["6", "*", "7", "="]);
    cy.get('input[type="text"]').should("have.value", "42");
  });

  it("divides 15 / 3 and shows 5", () => {
    pressButtons(["1", "5", "/", "3", "="]);
    cy.get('input[type="text"]').should("have.value", "5");
  });
});
