Feature: Todo list

  @connexionvalid
  Scenario: Sign in with valid credentiels
    Given I go to my ToDo APP
    When I add login and password
    And I click on envoyer button
    Then  task page displayed and btns shows

  @connexioninvalid
  Scenario: Sign in with invalid credentiels
    Given I go to my ToDo APP
    When I add login and password incorrect
    And I click on envoyer button
    Then  an error message shows

  @create_a_task_And_check_localstorage
  Scenario: Create a task
    When i enter the task name
    And i click on add a task btn
    Then a new task should be created successfuly and the localstorage updated
    
   @logout
   Scenario:Logout
   Given i click on logout btn
   Then connexion and ajout de tâches btns should be desactivated