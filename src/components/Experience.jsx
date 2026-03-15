import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title"><span>02.</span> Dónde He Trabajado</h2>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3>Desarrollador Full Stack</h3>
                <span className="timeline-company text-gradient">Ah Cacao</span>
              </div>
              <span className="timeline-date">Enero 2025 – Diciembre 2025 | Playa del Carmen, México</span>
              <ul className="timeline-achievements">
                <li>
                  Desarrollé aplicaciones críticas para el registro y gestión de clientes utilizando <strong>C#</strong>, 
                  incluyendo un sistema de fidelización (asignación de puntos de compra) altamente escalable e integrado a nivel base de datos.
                </li>
                <li>
                  Implementé automatizaciones y <strong>Agentes Inteligentes</strong> para la atención al cliente usando <strong>Odoo 19 y n8n</strong>, 
                  diseñando flujos de trabajo avanzados que impactaron directamente en los tiempos de respuesta.
                </li>
                <li>
                  Lideré la modernización del sistema propietario implementando <strong>OWL (Odoo Web Library)</strong> y <strong>XML</strong>, 
                  llevando el proyecto completo desde la etapa de análisis y diseño hasta el despliegue en producción.
                </li>
              </ul>
              <div className="experience-tech-stack">
                <span>Odoo 18/19</span>
                <span>C#</span>
                <span>OWL / XML</span>
                <span>n8n</span>
                <span>Bases de Datos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
