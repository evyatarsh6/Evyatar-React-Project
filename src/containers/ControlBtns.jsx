import { useCallback, useEffect, useMemo, useRef } from 'react';
import Control from 'ol/control/Control.js';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';



export const ControlBtns = () => {
    const controlBtnsRef = useRef()
    const myControl = useMemo(() => new Control({element: ControlBtns}));


}