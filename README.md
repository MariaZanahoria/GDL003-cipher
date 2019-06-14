# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.


## Definición del producto
¿Qué hace el proyecto exactamente? Es una aplicación
web, (webapp) que interactua con el usuario a través del navegador y la lógica basada en esa interacción, sirve para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

## Resumen del proyecto
La tematica es de Mensajeria secreta para parejas.
Su funcionalidad es pensada para personas de 15-45 años que desean manter conversaciones privadas completamente secretas.

Atendemos la molestia de loos usuarios por mantener sus conversaciones protegida, el usuario no tendrá que preocuparse si algun itruso usmea sus cosas, pues estaran protegidas por la codiificacion que el usuario elija.

Y a su vez la persona que reciba el mensaje tendra la tranquilidad de que podra decifrar el mensaje en cualquier momento solo usando el desplazamiento que el usuario indico enn la codificacion.

## Consideraciones generales

* El prototipo se penso con la idea original de un traductor, es por ello que solo se emplea una sola pagina.
* Para facilitar el desplazamiento del usuario en la web utilice un titulo estatico para o perder la marca del proyecto.
* La vista es basada en un traductor pero la realice mas atractiva poniendo contraste, y botones llamativos.
* Resuelve la necesidad de proteger la informacion.

### Interfaz de usuario (UI)

* El usuario puede cifrar texto en Mayusculas y Minusculas.
* El usuario puede elejir un desplazamiento (_offset_) indicando cuántas posiciones queremos que  el cifrado desplace cada caracter.
* El usuario obtendra como resultado un mensaje cifrado al ingresar el texto y dar cic en el boton de ¡Cifrar!
* El usuario puede decifrar texto en Mayudculas y Minusculas.
* El usuario puede elejir un desplazamiento (_offset_) indicando cuántas posiciones queremos que  el decifrado desplace cada caracter.
* El usuario obtendra como resultado un mensaje cifrado al ingresar el texto y dar cic en el boton de ¡Decifrar!
* Si el usuario decide usar simbolos y numeros, se coservaran en el mismo orden y se mostrara el mismo caracter.

