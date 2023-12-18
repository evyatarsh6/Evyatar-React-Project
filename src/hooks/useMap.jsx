import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Feature from 'ol/Feature';
import { Point } from "ol/geom";

const useMap = () => {

    const createPoint = (layerRef,featuresRef, coordinate, style) => {

        featuresRef.current  = new Feature({
            geometry: new Point(coordinate),
        });
        featuresRef.current.setStyle(style);
        layerRef.current.getSource().addFeature(featuresRef.current);
    }

    
    return (
        {createPointOnMap: createPoint}
    )
}

export default useMap
