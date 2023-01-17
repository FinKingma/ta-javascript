Feature: Download
  
  Scenario: I can validate the content of a downloaded file
    When I download the yaml file from learning container
    Then I should be able to validate the file contains 'Dulce'