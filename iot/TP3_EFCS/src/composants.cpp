#include <Arduino.h>
#include <Wire.h>
#include <TM1637Display.h>
#include <Adafruit_NeoMatrix.h>
#include <ESP32Servo.h>
#include <Adafruit_PN532.h>
#include <DHT.h>

#include "config.h"
#include "composants.h"

void initialiserComposants()
{
    // Boutons
    pinMode(BOUTON_A, INPUT_PULLUP);
    pinMode(BOUTON_B, INPUT_PULLUP);

    // DELs
    pinMode(DEL_VERTE, OUTPUT);
    pinMode(DEL_ROUGE, OUTPUT);
    pinMode(DEL_BLEUE, OUTPUT);

    // Etat initial du coffre
    digitalWrite(DEL_VERTE, HIGH);
    digitalWrite(DEL_ROUGE, LOW);
    digitalWrite(DEL_BLEUE, LOW);
}