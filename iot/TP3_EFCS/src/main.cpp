#include <Arduino.h>
#include "config.h"
#include "composants.h"

void setup() {
  Serial.begin(9600);
  initialiserComposants();
  afficherTirets();
}

void loop()
{
    if (digitalRead(BOUTON_A) == LOW)
    {
        afficherEtatCoffre(false);
        afficherJumelage(true);
        positionnerServo(false);
        afficherNombre(2705);
    }

    if (digitalRead(BOUTON_B) == LOW)
    {
        afficherEtatCoffre(true);
        afficherJumelage(false);
        positionnerServo(true);
        viderAfficheur();
    }
}
