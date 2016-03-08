Feature: Arithmetic operators
  As a user of the math lib
  I want to use the 4 basic arithmetic operators
  So I can count results with them

  Scenario: Addition of numbers
    Given I have multiple numbers
    When I add these numbers together
    Then I should get their sum as result

  Scenario: Multiplication of numbers
    Given I have multiple numbers
    When I multiply these numbers with each other
    Then I should get their product as result

  Scenario: Subtraction of numbers
    Given I have two numbers
    When I subtract the second number from the first
    Then I should get their difference as result

  Scenario: Division of numbers
    Given I have two numbers
    When I divide the first number with the second
    Then I should get their quotient as result