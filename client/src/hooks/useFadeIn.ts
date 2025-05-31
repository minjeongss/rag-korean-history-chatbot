import { useEffect, useState } from "react";

export const useFadeIn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 마운트 후 애니메이션 트리거
    const timeout = setTimeout(() => {
      setShow(true);
    }, 10); // 아주 짧은 딜레이로 트랜지션 작동 유도

    return () => clearTimeout(timeout);
  }, []);

  return {
    show,
  };
};
