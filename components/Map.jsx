"use client";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
  } from "react-simple-maps";
  
  const Map = () => {
    return (
        <ComposableMap
        projectionConfig={{
            rotate: [80, 0, 0],
            scale: 140
            }}
            zoomEnabled={false}
            dragEnabled={false}
            style={{
                width: "100%",
                height: "auto",
                pointerEvents: "none" // Desactivar eventos de interacción
              }}
        >
            
        <Geographies geography="/features.json"
        fill="transparent"
        stroke="#FFFFFF"
        strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
        subject={[-90.51327, 14.63491]} // Coordenadas de Ciudad de Guatemala
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white" fontFamily="hooey">
          {"I'm here"}
        </text>
      </Annotation>
      </ComposableMap>
    );
  };
  
  export default Map;

