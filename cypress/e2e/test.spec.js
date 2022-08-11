describe("Cross origin error reproduction", () => {
    it("should not fail", () => {
        cy.visit("/")
        cy.get("a").click();
        cy.url().should("include", "cypress.io")
    })
})