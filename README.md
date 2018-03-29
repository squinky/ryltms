# rustle your leaves to me softly: an asmr plant dating simulator

by Dietrich Squinkifer and Jess Marcotte

## Setup instructions

You will need the following:
- a plant with a pleasing texture (such as a succulent), planted in a pot surrounded by a ring of copper tape for grounding and with a screw stuck in the soil
- a computer with node.js installed
- an Arduino Uno-compatible board (we use a SparkFun RedBoard)
- a small breadboard
- a 1M ohm resistor
- wires
- headphones

First, connect everything up as detailed in the following images:

![hookup instructions](https://raw.githubusercontent.com/squinky/ryltms/master/rustle-hookup-instructions.png)

![hookup photo](https://raw.githubusercontent.com/squinky/ryltms/master/rustle-hookup-photo.jpg)

Then, connect your Arduino Uno-compatible board to a computer using https://create.arduino.cc/. Upload `plantsensor.ino` to the board. When you have done so, open up the serial monitor (Monitor tab) and test out the circuit by touching the plant with one hand and touching the copper wire with the other. You should see the serial monitor registering values from 1023 to 0, with values decreasing on touch.

Next, download the files in this repository. Type the following into the command line:

`node path/to/download/app.js`

(where `path/to/download` is wherever you put the files)

You should then be prompted to open `localhost:8080` in a web browser. Do that and the app should run. Test it out with the Arduino setup and make sure it works as expected.
