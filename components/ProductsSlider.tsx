"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { mockProducts } from "../lib/mockData";

export default function ProductsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    let currentScrollX = 0;
    const scrollSpeed = 10;

    const handleWheel = (e: WheelEvent) => {
      if (isDragging) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
      currentScrollX += delta;
      const maxScroll = scroller.scrollWidth - container.clientWidth;
      currentScrollX = Math.max(0, Math.min(maxScroll, currentScrollX));
      scroller.style.transform = `translateX(-${currentScrollX}px)`;
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(currentScrollX);
      container.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      currentScrollX = scrollLeft - walk;
      const maxScroll = scroller.scrollWidth - container.clientWidth;
      currentScrollX = Math.max(0, Math.min(maxScroll, currentScrollX));
      scroller.style.transform = `translateX(-${currentScrollX}px)`;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      container.style.cursor = "grab";
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      container.style.cursor = "grab";
    };

    const handleMouseEnter = () => {
      container.addEventListener("wheel", handleWheel, { passive: false });
    };

    const handleMouseLeaveContainer = () => {
      container.removeEventListener("wheel", handleWheel);
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeaveContainer);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeaveContainer);
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden cursor-grab w-full"
      style={{ height: "auto" }}
    >
      <div
        ref={scrollerRef}
        className="flex space-x-8 transition-transform duration-300 ease-out w-max"
      >
        {mockProducts.map((product) => (
          <div key={product.id} className="product-card-modern group flex-shrink-0 w-80 my-6" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center" style={{ backgroundImage: 'url(/images/Hire.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className="text-3xl">{product.icon}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">{product.title}</h3>
            <p className="mb-6 text-center text-blue-100">{product.shortDesc}</p>
            <div className="text-center">
              <Link href="/products" className="text-blue-200 hover:text-white font-medium transition-colors duration-300 group-hover:text-white">
                View Products →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
