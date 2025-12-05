import { useEffect, useRef, useState } from "react";

export default function useAnimation(){
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // 애니메이션 한 번만 실행
                }
            },
            {threshold: 0.3}
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [])

    return {isVisible, ref};
}