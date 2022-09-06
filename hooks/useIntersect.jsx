import { useEffect, useState } from "react";

const useIntersect = () => {
    const [isView, setIsView] = useState(false);
    const [node, setNode] = useState(null);

    useEffect(() =>{
        if (!node) return;

        const cachedRef = node.current;
        if (!cachedRef)  return;

        const observer = new IntersectionObserver(([entry]) => {
          setIsView(entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        }, {threshold: [0.1]});

        observer.observe(cachedRef);

        return () => observer.disconnect();
    }, [node]);

    return[isView, setNode]
}

export default useIntersect;
