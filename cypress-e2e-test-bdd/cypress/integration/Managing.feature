Feature: Managing the conference
  As a conference organizer
  I want to be able to create new conferences
  So that speakers and attendees know what kind of talks are expected and when

  Scenario: The conference manager can create new conferences
    Given I login on the conference app as a conference manager
    When I create a conference 'My conference 01' with default data
    Then I should be able to view conferece 'My conference 01'

  Scenario: The conference must be between 8 and 22
    Given I login on the conference app as a conference manager
    When I create a new conference
    Then I should not be able to select a start time before 8
    And I should not be able to select an end time after 22