'use client'
import { useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMediaQuery } from "@mui/material";

const ProtocoloAccionSaludMental = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [activeTab, setActiveTab] = useState('protocolo-de-accion-en-salud-mental');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (

    <div className="row prevencion flex-column d-flex " >
      <div className="col-12" >
        <div className="card quienes-somos" style={{ padding: matches ? '0px 96px' : '120px 32px 0px', margin: '0px', border: 'none' }}>
          <div className="card-body" style={{ padding: '0px', margin: '0px' }}>
            <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginLeft: '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
              Plan de acción en salud mental
            </h3>
       
            <div className="tab-content tab-dsme-content">
              <div className={`tab-pane ${activeTab === 'protocolo-de-accion-en-salud-mental' ? 'show active' : ''}`} id="protocolo-de-accion-en-salud-mental">
                <div className="blog-content">
                  <p>
                    Este plan tiene como objetivo establecer las acciones y directrices estandarizadas que permitan realizar una respuesta adecuada consistente en identificar, contener y derivar casos de urgencia y emergencia de carácter psiquiátrico y/o psicológico ocurridos en la Universidad.
                  </p>
                  <p>
                    El documento, pone a disposición una serie de directrices y flujogramas de fácil comprensión, con el fin de facilitar las respuestas frente a sucesos de Salud Mental.
                  </p>
                  <Link href="/downloads/Plan_de_Salud_Mental_Universitaria_versión_informe.pdf" style={{ marginLeft: '0px', fontSize: '24px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
                    <FaArrowRightLong /> Ver protocolo aquí
                  </Link>
                  <img src={`${process.env.NEXT_PUBLIC_BASE_IMG}plan_accion_texto.jpg${process.env.NEXT_PUBLIC_KEY_IMG}`} alt="" width="100%" className="blog-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProtocoloAccionSaludMental;