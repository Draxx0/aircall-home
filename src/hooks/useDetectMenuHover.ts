import { useEffect, useState } from "react";

const useDetectMenuHover = ({
  menuRef,
  menuContainerRef,
}: {
  menuRef: React.RefObject<HTMLLIElement>;
  menuContainerRef: React.RefObject<HTMLDivElement>;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("I ENTER ");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("I LEAVE");
    setIsHovered(false);
  };

  useEffect(() => {
    const menuElement = menuRef.current;
    const containerElement = menuContainerRef.current;

    // console.log(
    //   "triggered this menu",
    //   menuElement,
    //   "for this container",
    //   containerElement
    // );

    if (menuElement) {
      menuElement.addEventListener("mouseenter", handleMouseEnter);
      menuElement.addEventListener("mouseleave", handleMouseLeave);
    }

    if (containerElement) {
      containerElement.addEventListener("mouseenter", handleMouseEnter);
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener("mouseenter", handleMouseEnter);
        menuElement.removeEventListener("mouseleave", handleMouseLeave);
      }

      if (containerElement) {
        containerElement.removeEventListener("mouseenter", handleMouseEnter);
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [menuRef, menuContainerRef]);

  return isHovered;
};

export default useDetectMenuHover;
