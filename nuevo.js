document.write("cabecera <br> texto <br>");
var pelo = "tengo el pelo castaño" ;
edad = ("ahora tengo 15 años ");
document.write(edad + pelo);
var x = 16;
var y = 3;
document.write(x + y);
var edad = "Tengo " + x + " años."
document.write( "<br>" + edad);
prompt("introduce un número");
var nombre = prompt("Dime tu nombre: ");
document.write(nombre);
var x = parseInt(prompt ("Escribe un número"));
var y = parseInt(prompt("Escribe otro número"));
var resultado = x + y;
document.write("\n el resultado de sumar " + x + "+" + y + " es " + resultado);
 <!doctype html >
    <html lang="es">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>Calculadora — HTML + JS separado</title>
            <style>
                body{font - family:Arial,Helvetica,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f4f7fb}
                .calc{width:260px;background:#fff;padding:16px;border-radius:8px;box-shadow:0 6px 20px rgba(30,40,60,.08)}
                #screen{width:100%;height:48px;font-size:22px;padding:6px;text-align:right;border:1px solid #e5e9ef;border-radius:6px;margin-bottom:10px}
                .keys{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
                button{height:44px;border-radius:6px;border:0;background:#eef3fb;cursor:pointer;font-size:16px}
                button.op{background:#dfe9ff}
                button.eq{background:#c8ffd5}
            </style>
        </head>
        <body>
            <div class="calc">
                <input id="screen" value="0" disabled aria-label="pantalla">
                    <div class="keys">
                        <button onclick="press('C')">C</button>
                        <button onclick="press('back')">←</button>
                        <button class="op" onclick="press('%')">%</button>
                        <button class="op" onclick="press('/')">÷</button>

                        <button onclick="press('7')">7</button>
                        <button onclick="press('8')">8</button>
                        <button onclick="press('9')">9</button>
                        <button class="op" onclick="press('*')">×</button>

                        <button onclick="press('4')">4</button>
                        <button onclick="press('5')">5</button>
                        <button onclick="press('6')">6</button>
                        <button class="op" onclick="press('-')">−</button>

                        <button onclick="press('1')">1</button>
                        <button onclick="press('2')">2</button>
                        <button onclick="press('3')">3</button>
                        <button class="op" onclick="press('+')">+</button>

                        <button onclick="press('0')">0</button>
                        <button onclick="press('.')">.</button>
                        <button class="eq" onclick="press('=')">=</button>
                        <button onclick="press('()')">( )</button>
                    </div>
            </div>

            <!-- Lógica en archivo separado: app.js -->
            <script src="app.js"></script>
        </body>
    </html>
