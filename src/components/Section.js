import React from 'react';

export const Section = () => {
    return (
        <>

            <div class="section-2">
                <div class="container w-container">
                    <h1 class="heading-3" id="educacion">Mis intereses y educación:</h1>
                    <hr />
                    <div class="columns-2 w-row">
                        <div class="column-18 w-col w-col-4">
                            <img src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg" loading="lazy" height="" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 30vw, 259.984375px" alt="imagen de desarrollo web" />
                            <h2 class="heading-2">Desarrollo web</h2>
                            <p class="paragraph-2">Me apasiona el desarrollo web, actualmente me encuentro estudiando con la fundación tomillo para perfeccionar mis habilidades en HTML, CSS y JS.</p>
                            <a href="./desarrollo.html" class="button">Ver todo</a>
                        </div>
                        <div class="column-2 w-col w-col-4">
                            <img src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 30vw, 259.984375px" alt="image de inteligencia artificial"
                                class="image-8" />
                            <h2 class="heading-2">Ciencia de datos</h2>
                            <p class="paragraph-2">Me encuentro estudiando el grado de ciencia de datos aplicada en la Universidad Oberta de Cataluña, y con la academia online Platzi.</p>
                            <a href="/" class="button">Ver todo</a>
                        </div>
                        <div class="column w-col w-col-4">
                            <img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 30vw, 259.984375px" alt="foto de marketing" class="image-9" />
                            <h2 class="heading-2">Marketing</h2>
                            <p class="paragraph-2">Estudié un grado superior en Marketing y Publicidad con el IES Alfonso VIII. He desarrollado planes de marketing digital en mi proyecto final para titularme como Técnico superior.</p>
                            <a href="/" class="button">Ver todo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section;