import { BasePage } from "./BasePage";

export class FormPage extends BasePage {
  
  static get url() {
    return "/";
  }

  static get firstName() {
    return cy.get("#firstName");
  }

  static get lastName() {
    return cy.get("#lastName");
  }

  static get userEmail() {
    return cy.get("#userEmail");
  }

  static get genderMale() {
    return cy.get("label[for='gender-radio-1']");
  }

  static get userNumber() {
    return cy.get("#userNumber");
  }
 
  static get dobInput() {
    return cy.get("#dateOfBirthInput");
  }

  static get monthSelect() {
    return cy.get(".react-datepicker__month-select");
  }

  static get yearSelect() {
    return cy.get(".react-datepicker__year-select");
  }

  static day(dayNum) {
    return cy.get(`.react-datepicker__day--0${dayNum}:not(.react-datepicker__day--outside-month)`);
  }

  static get subjectsInput() {
    return cy.get("#subjectsInput");
  }

  static get getHobby() {
    return cy.get("label[for='hobbies-checkbox-3']");
  }
  static get uploadBtn() {
    return cy.get("#uploadPicture");
  }

  static get currentAddress() {
    return cy.get("#currentAddress");
  }

  static get stateDropdown() {
    return cy.get("#state");
  }

  static get cityDropdown() {
    return cy.get("#city");
  }

  static get submitBtn() {
    return cy.get("#submit");
  }

  static validateRow(label, value) {
    cy.get(".table-responsive").contains("td", label)
      .next().should("have.text", value);
  }

  static setDateOfBirth(day, month, year) {
    this.dobInput.click();
    this.yearSelect.select(year);
    this.monthSelect.select(month);
    this.day(day).click();
  }
}