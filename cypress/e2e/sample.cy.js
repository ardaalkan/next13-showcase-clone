import { fetchCars } from "../../utils/index";

describe("Sample Test", () => {
  it("Visits the homepage", () => {
    cy.visit("/");
    cy.wait(2000); // Sayfanın tam yüklenmesini beklemek için 2 saniye bekleme

    cy.get("h1.text-4xl.font-extrabold").should("have.text", "Car Catalogue");
  });
});


// describe("Fetch Cars", () => {
//   it("fetches cars successfully", () => {
//     cy.intercept("GET", "/api/cars", { fixture: "cars.json" }).as("fetchCars");

//     cy.visit("/");

//     cy.wait("@fetchCars").then((interception) => {
//       const { response } = interception;
//       const { body } = response;

//       expect(body).to.have.property("status", "success");
//       expect(body).to.have.property("data").to.be.an("array");
//     });
//   });

//   it("handles fetch error", () => {
//     cy.intercept("GET", "/", { statusCode: 500 }).as("fetchCars");

//     cy.visit("/");

//     cy.wait("@fetchCars").then((interception) => {
//       const { response } = interception;
//       const { body } = response;

//       expect(body).to.have.property("status", "error");
//       expect(body).to.have.property("message").to.be.a("string");
//     });
//   });
// });

// describe("Fetch Cars", () => {
//   beforeEach(() => {
//     cy.intercept("GET", "/", (req) => {
//       req.reply((res) => {
//         const cars = fetchCars(); // API'den veri çekme işlemini burada gerçekleştiriyoruz
//         res.send(cars);
//       });
//     }).as("fetchCars");
//   });

//   it("displays car cards on the homepage", () => {
//     cy.visit("/");

//     cy.wait("@fetchCars");

//     cy.get(".home__cars-wrapper CarCard").should("have.length.greaterThan", 0);
//   });
// });