Feature: Authorization
  
  Scenario: When an existing user logs in with his credentials he lands on the dashboard
    When I login on the conference app as a user
    Then I should land on the dashboard

    Scenario: When an admin logs in with his credentials he lands on the dashboard
    When I login on the conference app as a conference manager
    Then I should land on the dashboard