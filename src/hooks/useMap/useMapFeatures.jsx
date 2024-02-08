
import React, { useCallback} from "react";

export const useMapFeatures = () => {

    const createFeature = useCallback((layerRef,featuresRef, ID, newFeature) => {

        featuresRef.current[ID] = newFeature;
        layerRef.current.getSource().addFeature(newFeature);
    },[])

    const removeFeature = useCallback((layerRef,featuresRef, ID) => {

      const wantedFeature = featuresRef.current[ID] ;
      layerRef.current.getSource().removeFeature(wantedFeature);
    },[])


    return (
    {
        createFeature:createFeature,
        removeFeature:removeFeature
    }
    )
}