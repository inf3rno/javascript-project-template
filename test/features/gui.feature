Feature: Basic DOM
  As a user of the graphic user interface
  I want to use the elements of the interface
  So I can control the library through it

  Scenario: Click on button
    Given I have a button
    When I click on the button
    Then I should trigger the click event listener