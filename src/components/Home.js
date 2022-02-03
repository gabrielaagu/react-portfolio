import React from 'react';

export const Home = () => {
    return (
        <>

            <div id="container" class="container">
                <div class="w-form-done" id="noti">
                    <p>Muchas gracias, tu solicitud ha sido recibida</p>
                    <span id="noti__close">&times;</span>
                    <span id="slide"></span>
                </div>

                <div class="section-1">
                    <div class="container w-container"><img srcSet="https://drive.google.com/uc?id=1LvXpgr5Qgs3LKHBidsW0PeUYsRsucB1B" loading="lazy" height="64" width="64" sizes="64px" alt="" class="image" />
                        <h1 class="heading" id="bienvenida">Bienvenido a mi Portafolio✨</h1>
                        <p class="paragraph">Soy Gabriela García Uzcategui. Tengo 23 años. Soy marketer, desarrolladora web y tengo más de tres años de experiencia trabajando en atención al cliente, priorizo la usabilidad y sencillez de las interfaces para facilitar el trabajo del
                            usuario final. Me gusta trabajar en proyectos personales sobre desarrollo web y analisis de datos. Actualmente stoy mejorando mis conocimientos en JavaScript y Python🐍.</p>
                        <a href="#email-form" class="button">Contáctame</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;