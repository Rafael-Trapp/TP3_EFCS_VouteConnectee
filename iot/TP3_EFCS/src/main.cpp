#include <Arduino.h>
#include "config.h"
#include "composants.h"

void setup() {
  Serial.begin(9600);
  initialiserComposants();
}

void loop()
{
    if (digitalRead(BOUTON_A) == LOW)
    {
        afficherEtatCoffre(false);
        afficherJumelage(true);
        positionnerServo(false);
    }

    if (digitalRead(BOUTON_B) == LOW)
    {
        afficherEtatCoffre(true);
        afficherJumelage(false);
        positionnerServo(true);
    }
}
