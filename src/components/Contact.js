import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="section-6">
        <div className="container-5 w-container">
          <div className="w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="form"
            >
              <h1 className="heading-3" id="contacto">
                Si buscas ayuda con el desarrollo Frontend
              </h1>
              <p className="paragraph-5">Enviame tus comentarios</p>
              <label for="name" className="body">
                Nombre
              </label>
              <input
                type="text"
                className="text-field w-input"
                maxlength="256"
                name="name"
                data-name="Name"
                id="name"
                placeholder="Ingresa tu nombre y apellido"
              />
              <label for="phone" className="body">
                Teléfono
              </label>
              <input
                type="number"
                className="text-field w-input"
                placeholder="+34608123456"
              />
              <label for="email" className="field-label">
                Email
              </label>
              <input
                type="email"
                className="text-field-2 w-input"
                maxlength="256"
                name="email"
                data-name="Email"
                id="email"
                placeholder="Ingresa tu email"
                required=""
              />
              <label for="email-2" className="field-label-2">
                Comentarios
              </label>
              <textarea
                name="field"
                id="field"
                maxlength="5000"
                className="textarea w-input"
                placeholder="Ingresa tus comentarios"
              ></textarea>
              <input
                type="submit"
                value="Enviar"
                name="send"
                data-wait="Por favor espera..."
                className="button w-button"
              />
            </form>

            {/* Cuando algo sale mal con el Formulario */}

            <div className="w-form-fail">
              <div>
                Disculpa, algo ha ido mal, mientras se enviaba tu solicitud.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
