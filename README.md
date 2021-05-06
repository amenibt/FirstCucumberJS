# # Framework mis en place

  
#  Où sont écrits les tests ?

Les tests sont écrits dans le repertoire src/spec/feature avec le syntaxe Gherkin
- Gherkin utilise un ensemble de mots clés spéciaux pour donner une structure et un sens aux spécifications exécutables. Gherkin permet d’écrire des scénarios de test compréhensibles par des individus non techniques. Cette approche sert deux objectifs : documenter les fonctionnalités à développer d’une part, et permettre l’automatisation des tests d’autre part.La plupart des lignes d'un document Gherkin commencent par l'un des mots clés:
  - Le “Given” mot-clé précède le texte définissant le contexte; l'état connu du système (ou condition préalable).
  - Le “When” mot-clé précède le texte définissant une action.
  - Le “Then” mot-clé précède le texte définissant le résultat de l'action sur le contexte (ou résultat attendu).
  
# Exécution des scénarios 
Cloner le projet 
git clone https://github.com/amenibt/FirstCucumberJS
 Pour l'exécution, la ligne de commande "npm test" 
 ou bien 
    
./node_modules/.bin/cucumber-js features/*.feature

- Pré-requises 
		Vérifier que vous avez déjà node et npm 
			node --version
			npm -v
        Créer un fichier 
		Initialiser votre projet et assurer que vous avez installé cucumber et selenium à partir ces lignes de commande: 
			npm init --yes
			npm install cucumber --save-dev
			npm install selenium-webdriver --save-de
        Pour le rapport Cucumber report merci d'intaller ce dernier
			npm i cucumber-html-reporter
      
      
			

# Reporting 
Les résultats de test s’affichent dans un rapport Cucumber Report nommé Rapport.html dans le dossier Target / Cucumber-reports
 Pour générer le rapport  node index.js
