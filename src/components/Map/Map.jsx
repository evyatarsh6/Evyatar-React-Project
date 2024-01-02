import React, { useCallback, useEffect, useMemo, useRef} from "react";
import {useMap} from "../../hooks/useMap";

export const BaseMap = ({ PopUpRef, currTooltip, setCurrTooltip, setHoverID}) => {
  return useMap( PopUpRef, currTooltip, setCurrTooltip, setHoverID)
};