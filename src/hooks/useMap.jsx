import React, { useCallback, useMemo } from "react";
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
        

        const findTODOConditinal = (ID) => {

            const xvalue = Math.abs(mapPoints[ID].location[0] ) - Math.abs(coordinate[0])
            const yvalue = Math.abs(mapPoints[ID].location[1] )- Math.abs(coordinate[1])
            const xvalueContidinal = Math.abs(xvalue)<500000
            const yvalueContidinal = Math.abs(yvalue)<500000
            
              return (
                xvalueContidinal && yvalueContidinal
            )
        }

        const wantedPointID = TODOSIDS.find(findTODOConditinal)
        
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
