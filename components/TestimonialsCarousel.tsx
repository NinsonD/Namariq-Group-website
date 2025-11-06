"use client";

import { useEffect, useRef, useState } from "react";
import { mockTestimonials } from "../lib/mockData";

export default function TestimonialsCarousel() {
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
    const scrollSpeed = 10; // Increased speed

    const handleWheel = (e: WheelEvent) => {
      if (isDragging) return;
      e.preventDefault();
      const delta = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;
      currentScrollX += delta;
      // Clamp to bounds
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
      const walk = (x - startX) * 2; // Scroll speed multiplier
      currentScrollX = scrollLeft - walk;
      // Clamp to bounds
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
    <section className="section-padding bg-gradient-to-br from-white to-blue-50">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 animate-gradient text-center">
          What Our Clients Say
        </h2>
        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab w-full"
          style={{ height: "auto" }}
        >
          <div
            ref={scrollerRef}
            className="flex space-x-8 transition-transform duration-300 ease-out w-max"
          >
            {mockTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card group flex-shrink-0 w-96 my-6">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-glow mb-4">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
