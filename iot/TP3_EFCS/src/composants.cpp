#include <Arduino.h>
#include <Wire.h>
#include <TM1637Display.h>
#include <Adafruit_NeoMatrix.h>
#include <ESP32Servo.h>
#include <Adafruit_PN532.h>
#include <DHT.h>

#include "config.h"
#include "composants.h"

Servo servo;

void initialiserComposants()
{
    // Boutons
    pinMode(BOUTON_A, INPUT_PULLUP);
    pinMode(BOUTON_B, INPUT_PULLUP);

    // DELs
    pinMode(DEL_VERTE, OUTPUT);
    pinMode(DEL_BLANCHE, OUTPUT);
    pinMode(DEL_BLEUE, OUTPUT);

    // Etat initial du coffre
    digitalWrite(DEL_VERTE, HIGH);
    digitalWrite(DEL_BLANCHE, LOW);
    digitalWrite(DEL_BLEUE, LOW);

    // Servomoteur
    servo.attach(PIN_SERVO);
    servo.write(0);
}

void afficherEtatCoffre(bool ouvert)
{
    digitalWrite(DEL_VERTE, ouvert ? HIGH : LOW);
    digitalWrite(DEL_BLANCHE, ouvert ? LOW : HIGH);
}

void afficherJumelage(bool jumele)
{
    digitalWrite(DEL_BLEUE, jumele ? HIGH : LOW);
}

void positionnerServo(bool ouvert)
{
    if (ouvert)
    {
        servo.write(0);
    }
    else
    {
        servo.write(180);
    }
}