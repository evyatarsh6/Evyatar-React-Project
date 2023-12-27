import React, { useCallback } from "react";
import Feature from 'ol/Feature';
import { Point } from "ol/geom";
import { useSelector } from "react-redux";
import { GetMapPoints } from "../selectors";

const useMap = () => {

    const mapPoints = useSelector(GetMapPoints)

    const createPoint = useCallback((layerRef,featuresRef, coordinate, style) => {

        featuresRef.current  = new Feature({
            geometry: new Point(coordinate),
        });
        featuresRef.current.setStyle(style);
        layerRef.current.getSource().addFeature(featuresRef.current);
    },[])

    const getHoverID = useCallback((coordinate) => {

        const TODOSIDS =  Object.keys(mapPoints)

        const findTODOConditinal = (ID) => mapPoints[ID].location === coordinate
    
        const wantedPointID = TODOSIDS.find(ID => findTODOConditinal(ID))

        return wantedPointID
    }
    ,[mapPoints])

    
    return (
        {
            createPointOnMap: createPoint,
            getHoverID:getHoverID
        }
    )
}

export default useMap
