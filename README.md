# Projet-imc

## Contexte :

Dans l'apprentissage du JavaScript, l'objectif était d'utiliser les dom, pour manipuler les différents éléments de ma page HTML.

Pour cela, j'ai codé un site web qui calcule L'imc d'une personne.

## Cas d'utilisation :

```plantuml
@startuml Les bonnes pièces
left to right direction
:Utilisateur:
package site{
    Utilisateur--(Calculer son IMC)
    
}
@enduml
```

![CalcultonImc.png](Image/CalcultonImc.png)

Dans le cas où une personne mesure 150 cm et pèse 60Kg :

![test.PNG](Image/f1.PNG)

Elle est en surpoids

Dans le cas où une personne mesure 180 cm et pèse 70Kg :

![test.PNG](Image/f2.PNG)

Elle a une corpulence normale.