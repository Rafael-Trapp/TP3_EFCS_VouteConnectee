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
TM1637Display afficheur(CLK, DIO);

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

    // Afficheur TM1637
afficheur.setBrightness(3);
afficheur.clear();
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

void afficherNombre(int nombre)
{
    afficheur.showNumberDec(nombre, true);
}

void viderAfficheur()
{
    afficheur.clear();
}

void afficherTirets()
{
    uint8_t tirets[] = {
        SEG_G, SEG_G, SEG_G, SEG_G
    };

    afficheur.setSegments(tirets);
}