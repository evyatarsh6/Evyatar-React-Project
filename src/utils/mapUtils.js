


//not active but if i would improve my Map functinality i should have improve those utils 


export const updateFeature = (featuresRef, updatefeature) => {
        
    featuresRef.current = updatefeature
    
}

export const updateLayer = (layerRef, updateLayer) => {
    
    layerRef.current = updateLayer
}

export const setLayers = (mapInstance, layerRef, updateLayers)  => {

    mapInstance.current.getAllLayers().clear()
    updateLayers.forEach(layer => {
        updateLayer(layerRef, layer)
        mapInstance.current.addLayer(layerRef.current);
    });
}


export const setFeatures = (layerRef, featuresRef,  updateFeatures)  => {

    layerRef.current.getFeatures().clear()
    updateFeatures.forEach(layer => {
        updateLayer(featuresRef, layer)
        layerRef.current.addFeature(featuresRef.current);
    });    
}
