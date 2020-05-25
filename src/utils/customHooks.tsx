import {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
  EffectCallback,
} from "react";

interface DimensionObject {
  width: number;
  height: number;
  top: number;
  left: number;
  x: number;
  y: number;
  right: number;
  bottom: number;
}

type UseDimensionsHook = [
  (node: HTMLElement) => void,
  {} | DimensionObject,
  HTMLElement | null
];

interface UseDimensionsArgs {
  liveMeasure?: boolean;
}

function getDimensionObject(node: HTMLElement): DimensionObject {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: "x" in rect ? rect.x : (rect as DOMRect).top,
    left: "y" in rect ? rect.y : (rect as DOMRect).left,
    x: "x" in rect ? rect.x : (rect as DOMRect).left,
    y: "y" in rect ? rect.y : (rect as DOMRect).top,
    right: rect.right,
    bottom: rect.bottom,
  };
}

// copied from https://github.com/Swizec/useDimensions
export function useContainerDimensions({
  liveMeasure = true,
}: UseDimensionsArgs = {}): UseDimensionsHook {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null as HTMLElement | null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() =>
          setDimensions(getDimensionObject(node))
        );
      measure();

      if (liveMeasure) {
        window.addEventListener("resize", measure);
        window.addEventListener("scroll", measure);

        return () => {
          window.removeEventListener("resize", measure);
          window.removeEventListener("scroll", measure);
        };
      }
    }
  }, [node, liveMeasure]);

  return [ref, dimensions, node];
}

export const useMount = (callbackFn: EffectCallback) => {
  useEffect(callbackFn, []);
};
