import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Seccion from './components/Section';
import Mosaico from './components/Mosaico';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  window.onload = () => {
    //capturamos el formulario
    let form = document.getElementById("email-form");

    //código que se ejecuta a los tres segundos de haber sido leido
    setTimeout(() => {
        console.log("hola coders");
    }, 3000);

    //escuchamos el evento submit o onsubmit (pulsar el boton de enviar)
    form.addEventListener("submit", (e) => {
        //evitamos el comportamiento por defecto
        e.preventDefault();

        //capturamos los inputs de texto
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let text = document.getElementById("field").value;

        //función para descargar el archivo
        function download(filename, text) {
            var element = document.createElement("a");
            element.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(text)
            );
            element.setAttribute("download", filename);

            element.style.display = "block";
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }

        //constrimos la variable de texto
        let tempText = `
          Emisor: ${name}, \n
          Email: ${email},\n
          Mensaje: ${text}`;

        //invocamos la funcion para descargar el archivo
        download("email.txt", tempText);

        //ahora hay que mostrar un mensaje en la pantalla, os toca hacerlo a vosotros
        document.getElementById("noti").style.display = "block";

        //para ocultar la notificacion a los 5 segundos
        setTimeout(function() {
            document.getElementById("noti").style.display = "none";
        }, 5000);
    });

    document.getElementById("noti__close").addEventListener("click", () => {
        noti.style.display = "none";
    })


    // Codigo para que cambie el Navbar usando Js

    window.onscroll = function() {
        myFunction();
    }
    console.log("window");

    var header = document.getElementById("navbar__header");
    var navTop = header.offsetTop;


    function myFunction() {
        if (window.scrollY >= 100) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

  return (
    <div className="App">
      <Header />
      <Home />
      <Seccion />
      <Mosaico />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
