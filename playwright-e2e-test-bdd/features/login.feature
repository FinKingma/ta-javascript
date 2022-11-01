Feature: Login

  Scenario: I can login
    Given I have opened the hotel app
    When I login with my credentials
    Then I should not see a search hotel overview