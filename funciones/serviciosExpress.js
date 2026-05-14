 // ========== DATOS ==========
    const serviciosExpress = [
    {  
        id: 1,
        nombre: "Cimentación Profunda",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/cimentacion.jpg",
        descripcion: "Evaluación técnica y refuerzo estructural para grietas críticas en la base de tu construcción",
        tiempo: "2-5 días",
        precio: "Desde $5,000 MXN"
    },
    {  
        id: 2,
        nombre: "Remodelación de interiores",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/remodelacion.jpg",
        descripcion: "Transforma tus espacios con acabados modernos y funcionales, adaptados a tu estilo de vida",
        tiempo: "3-7 días",
        precio: "Desde $10,000 MXN"
    },
    {  
        id: 3,
        nombre: "Diseño de planos 3D",
        categoria: "Arquitectura",
        imagen: "img/serviciosExpress/planos.jpg",
        descripcion: "Creación de planos arquitectónicos en 3D para visualizar tu proyecto antes de construirlo",
        tiempo: "5-10 días",
        precio: "Desde $8,000 MXN"
    },
    {  
        id: 4,
        nombre: "Instalación Eléctrica",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/electrica.jpg",
        descripcion: "Instalación eléctrica segura y eficiente para tu hogar o negocio, cumpliendo con los estándares de calidad",
        tiempo: "1-3 días",
        precio: "Desde $5,000 MXN"
    },
    {  
        id: 5,
        nombre: "Pintura y acabados",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/pintura.jpg",
        descripcion: "Servicio de pintura profesional para interiores y exteriores, con acabados duraderos y de alta calidad",
        tiempo: "2-4 días",
        precio: "Desde $3,000 MXN"
    },
    {  
        id: 6,
        nombre: "Reparación de techos",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/techos.jpg",
        descripcion: "Reparación y mantenimiento de techos para garantizar su integridad estructural y resistencia",
        tiempo: "1-3 días",
        precio: "Desde $7,000 MXN"
    },
    {  
        id: 7,
        nombre: "Impermeabilización de azoteas",
        categoria: "Impermeabilización",
        imagen: "img/serviciosExpress/impermeabilizacion.jpg",
        descripcion: "Aplicación de membrana impermeabilizante para evitar filtraciones y humedad en techos y terrazas",
        tiempo: "1-2 días",
        precio: "Desde $4,500 MXN"
    },
    {  
        id: 8,
        nombre: "Instalación de pisos laminados y cerámicos",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/pisos.jpg",
        descripcion: "Colocación profesional de pisos laminados, cerámicos o porcelanatos, con nivelación incluida",
        tiempo: "2-4 días",
        precio: "Desde $6,000 MXN"
    },
    {  
        id: 9,
        nombre: "Construcción de muros de carga",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/muros.jpg",
        descripcion: "Levantamiento de muros estructurales con materiales de alta resistencia y refuerzo de acero",
        tiempo: "4-8 días",
        precio: "Desde $12,000 MXN"
    },
    {  
        id: 10,
        nombre: "Instalación de sistemas de plomería",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/plomeria.jpg",
        descripcion: "Red de agua fría y caliente, drenajes y sanitarios, con tubería de calidad y pruebas de presión",
        tiempo: "2-5 días",
        precio: "Desde $7,500 MXN"
    },
    {  
        id: 11,
        nombre: "Colocación de aires acondicionados y ventilación",
        categoria: "Instalaciones",
        imagen: "img/serviciosExpress/aireacondicionado.jpg",
        descripcion: "Instalación de minisplits, conductos y extractores, con soportes y desagües incluidos",
        tiempo: "1-2 días",
        precio: "Desde $3,500 MXN (por equipo)"
    },
    {  
        id: 12,
        nombre: "Demolición controlada de estructuras",
        categoria: "Preparación",
        imagen: "img/serviciosExpress/demolicion.jpg",
        descripcion: "Derribo seguro de muros, losas o construcciones viejas, con retiro de escombro",
        tiempo: "1-4 días",
        precio: "Desde $8,000 MXN"
    },
    {  
        id: 13,
        nombre: "Jardinería y paisajismo",
        categoria: "Exteriores",
        imagen: "img/serviciosExpress/jardineria.jpg",
        descripcion: "Diseño e implementación de jardines, riego automático, poda y colocación de pasto o plantas",
        tiempo: "3-6 días",
        precio: "Desde $6,500 MXN"
    },
    {  
        id: 14,
        nombre: "Instalación de ventanas y puertas de aluminio",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/ventanas.jpg",
        descripcion: "Colocación de marcos de aluminio, vidrio templado y herrajes, con sellado impermeable",
        tiempo: "1-3 días",
        precio: "Desde $4,000 MXN (por pieza)"
    },
    {  
        id: 15,
        nombre: "Reparación de grietas y fisuras",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/grietas.jpg",
        descripcion: "Inyección de resinas epóxicas o poliuretano y sellado fino para evitar filtraciones",
        tiempo: "1-2 días",
        precio: "Desde $3,000 MXN (por grieta)"
    },
    {  
        id: 16,
        nombre: "Construcción de losas de concreto",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/losas.jpg",
        descripcion: "Colado de losas macizas o aligeradas para entrepisos, azoteas o patios, con acero de refuerzo",
        tiempo: "5-10 días",
        precio: "Desde $15,000 MXN (por 20 m²)"
    },
    {  
        id: 17,
        nombre: "Acabados de fachadas (aplanados, estucos)",
        categoria: "Acabados",
        imagen: "img/serviciosExpress/fachadas.jpg",
        descripcion: "Aplicación de aplanado fino, texturas, estucos y pintura especial para exteriores",
        tiempo: "3-6 días",
        precio: "Desde $9,000 MXN"
    },
    {  
        id: 18,
        nombre: "Ampliación de viviendas (segundos pisos)",
        categoria: "Estructura",
        imagen: "img/serviciosExpress/ampliacion.jpg",
        descripcion: "Proyecto y construcción de niveles adicionales, incluyendo escaleras, losas y acabados básicos",
        tiempo: "15-30 días",
        precio: "Desde $85,000 MXN (por 30 m²)"
    },
    {  
        id: 19,
        nombre: "Instalación de paneles solares",
        categoria: "Energías renovables",
        imagen: "img/serviciosExpress/solares.jpg",
        descripcion: "Colocación de paneles fotovoltaicos, inversor y conexión a la red eléctrica de la vivienda",
        tiempo: "3-5 días",
        precio: "Desde $25,000 MXN (sistema básico)"
    },
    {  
        id: 20,
        nombre: "Rehabilitación de baños completos",
        categoria: "Remodelación",
        imagen: "img/serviciosExpress/banos.jpg",
        descripcion: "Cambio de azulejo, muebles, plomería, impermeabilización y accesorios en baños pequeños",
        tiempo: "4-7 días",
        precio: "Desde $14,000 MXN"
    }
];

function mostrarServicios(lista) {
    const contenedor = document.getElementById('contenedor-grid');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';

    lista.forEach(servicio => {
        contenedor.innerHTML += `
            <div class="servicio-card">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <div style="padding: 15px;">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.categoria}</p>
                    <button onclick="verDetalles(${servicio.id})" class="cta-button">Ver Detalles</button>
                </div>
            </div>
        `;
    });
}
function verDetalles(id) {
    const servicio = serviciosExpress.find(s => s.id === id);
    const modal = document.getElementById('modalServicio');
    const contenido = document.getElementById('modal-body-content');

    contenido.innerHTML = `
        <img src="${servicio.imagen}" class="modal-detalle-img">
        <h2>${servicio.nombre}</h2>
        <p style="color:#f39c12; font-weight:bold;">${servicio.categoria}</p>
        <hr>
        <p style="margin: 20px 0; line-height: 1.6;">${servicio.descripcion}</p>
        <div class="modal-info-extra">
            <span><strong>⏱ Tiempo:</strong> ${servicio.tiempo}</span>
            <span><strong>💰 Inversión:</strong> ${servicio.precio}</span>
        </div>
        <div style="text-align:center; margin-top:20px;">
            <a href="contacto.html" class="cta-button">Ir a Contacto</a>
        </div>
    `;
    modal.style.display = "block";
}

// Inicialización 
mostrarServicios(serviciosExpress);

// Configuración del filtro
const btnFiltrar = document.getElementById('btnFiltrar');
const inputBusqueda = document.getElementById('inputBusqueda');

const filtrarServicios = () => {
    const termino = inputBusqueda.value.toLowerCase();
    const filtrados = serviciosExpress.filter(s => s.nombre.toLowerCase().includes(termino) || s.categoria.toLowerCase().includes(termino));
    mostrarServicios(filtrados);
};

if (btnFiltrar) btnFiltrar.addEventListener('click', filtrarServicios);
if (inputBusqueda) inputBusqueda.addEventListener('keypress', (e) => { if (e.key === 'Enter') filtrarServicios(); });

// Eventos para cerrar el Modal
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) closeBtn.onclick = () => document.getElementById('modalServicio').style.display = "none";

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modalServicio');
    if (modal && event.target === modal) modal.style.display = "none";
});
