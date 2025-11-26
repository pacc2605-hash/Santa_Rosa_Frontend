async function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;  // 🔥 corregido

    const respuesta = await fetch("https://santa-rosa.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, contrasena })  // 🔥 ahora concuerda
    });

    const data = await respuesta.json();

    if (data.success === true) {   // 🔥 tu backend usa "success" no "exito"
        window.location.href = "principal.html";
    } else {
        document.getElementById("mensajeError").style.display = "block";
    }
}