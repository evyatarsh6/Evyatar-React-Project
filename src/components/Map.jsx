import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls } from 'ol/control';
import { defaults as defaultinteraction } from 'ol/interaction';
import { Overlay } from 'ol';
import PlaceIcon from '@mui/icons-material/Place';
import { toLonLat } from 'ol/proj';
import { toStringHDMS } from 'ol/coordinate';
import Feature from 'ol/Feature.js';
import Polygon from 'ol/geom/Polygon.js';
import Point from 'ol/geom/Point.js';

export const BaseMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const pointRef = useRef(null);
  const [showPoint, setShowPoint] = useState(false)

  const overlay = useMemo(
    () =>
      new Overlay({
        stopEvent: false,
        element: pointRef.current,
        autoPan: {
          animation: {
            duration: 250,
          },
        },
      }),
    []
  );

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 1,
          rotation: 0,
          minZoom: 2,
          maxZoom: 10,
        }),
        overlays: [overlay],
      });
    }
  }, [overlay]);

  const addOverlay = useCallback((coordinate) => {
    overlay.setPosition(coordinate);
  }, [overlay]);


  const handleMapClick = useCallback((evt) => {
    const coordinate = evt.coordinate;
    const hdms = toStringHDMS(toLonLat(coordinate));
    console.log(hdms)
    

const feature = new Feature({
  // geometry: new Polygon(polyCoords),
  labelPoint: new Point(parseFloat(coordinate[0]), parseFloat(coordinate[0])),
  name: 'My Label',
});

// get the polygon geometry
// const poly = feature.getGeometry();

// Render the feature as a point using the coordinates from labelPoint
feature.setGeometryName('labelPoint');

// get the point geometry
const point = feature.getGeometry();

},[]);

  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.on('click', handleMapClick);
    }
  }, [handleMapClick]);
  
  return (
    <div
      ref={mapRef}
      style={{
        margin: 0,
        width: '100%',
        fontFamily: 'sans-serif',
        height: '400px',
      }}
    > 
    <PointOverlay pointRef = {pointRef} />
    </div>
  );
};

const PointOverlay = (propPointRef) => {
  const pointRef = useRef(propPointRef)
  return <PlaceIcon id="coordinate-point" ref={pointRef} />;
};