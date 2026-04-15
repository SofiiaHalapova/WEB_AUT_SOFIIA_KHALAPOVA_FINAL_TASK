import { FormPage } from "../PageObjects/formPage";

describe("DemoQA Automation Practice Form", () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it.only("Tools QA Form submission", () => {
    // Input all the necessary information in the text fields, buttons, etc
    FormPage.firstName.type("Sofiia");
    FormPage.lastName.type("Khalapova");
    FormPage.userEmail.type("Khalapova@test.com");
    FormPage.genderMale.click();
    FormPage.userNumber.type("1234567890");

    // Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    FormPage.setDateOfBirth("28", "February", "1930");

    // Set Subjects to Economics.
    FormPage.subjectsInput.type("Economics{enter}");

    // Set Hobbies to Music.
    FormPage.getHobby.click();

    // Upload an image of your choice.
    FormPage.uploadBtn.selectFile("cypress/fixtures/files/khalapova_test_pic.jpg");

    // Set State to NCR. Set City to Delhi.
    FormPage.currentAddress.type("Kyiv, Ukraine");
    FormPage.stateDropdown.click().contains("NCR").click();
    FormPage.cityDropdown.click().contains("Delhi").click();

    // Click Submit
    FormPage.submitBtn.click({ force: true });

    // Validate that each Labeled row contains the correct information.
    FormPage.validateRow("Student Name", "Sofiia Khalapova");
    FormPage.validateRow("Student Email", "Khalapova@test.com");
    FormPage.validateRow("Date of Birth", "28 February,1930");
    FormPage.validateRow("Subjects", "Economics");
    FormPage.validateRow("Hobbies", "Music");
    FormPage.validateRow("Address", "Kyiv, Ukraine");
    FormPage.validateRow("State and City", "NCR Delhi");
  });
});