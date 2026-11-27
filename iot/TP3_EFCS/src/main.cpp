#include <Arduino.h>
#include "config.h"
#include "composants.h"

void setup() {
  Serial.begin(115200);
  initialiserComposants();
}

void loop() {
    if (digitalRead(BOUTON_A) == LOW)
  {
      Serial.println("Bouton A");
  }

  if (digitalRead(BOUTON_B) == LOW)
  {
      Serial.println("Bouton B");
  }
}
