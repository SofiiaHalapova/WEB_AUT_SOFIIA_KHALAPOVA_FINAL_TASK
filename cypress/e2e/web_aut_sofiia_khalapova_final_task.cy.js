import { PracticeFormPage } from "../PageObjects/practiceFormPage";

describe("DemoQA Automation Practice Form", () => {
  beforeEach(() => {
    PracticeFormPage.visit();
  });

  it.only("Tools QA Form submission", () => {
    // Input all the necessary information in the text fields, buttons, etc
    PracticeFormPage.firstName.type("Sofiia");
    PracticeFormPage.lastName.type("Khalapova");
    PracticeFormPage.userEmail.type("Khalapova@test.com");
    PracticeFormPage.genderMale.click();
    PracticeFormPage.userNumber.type("1234567890");

    // Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    PracticeFormPage.setDateOfBirth("28", "February", "1930");

    // Set Subjects to Economics.
    PracticeFormPage.subjectsInput.type("Economics{enter}");

    // Set Hobbies to Music.
    PracticeFormPage.getHobby.click();

    // Upload an image of your choice.
    PracticeFormPage.uploadBtn.selectFile("cypress/fixtures/files/khalapova_test_pic.jpg");

    // Set State to NCR. Set City to Delhi.
    PracticeFormPage.currentAddress.type("Kyiv, Ukraine");
    PracticeFormPage.stateDropdown.click().contains("NCR").click();
    PracticeFormPage.cityDropdown.click().contains("Delhi").click();

    // Click Submit
    PracticeFormPage.submitBtn.click({ force: true });

    // Validate that each Labeled row contains the correct information.
    PracticeFormPage.validateRow("Student Name", "Sofiia Khalapova");
    PracticeFormPage.validateRow("Student Email", "Khalapova@test.com");
    PracticeFormPage.validateRow("Date of Birth", "28 February,1930");
    PracticeFormPage.validateRow("Subjects", "Economics");
    PracticeFormPage.validateRow("Hobbies", "Music");
    PracticeFormPage.validateRow("Address", "Kyiv, Ukraine");
    PracticeFormPage.validateRow("State and City", "NCR Delhi");
  });
});