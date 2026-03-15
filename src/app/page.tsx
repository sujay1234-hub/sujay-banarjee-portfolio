import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import FloatingNav from "@/components/FloatingNav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative w-full bg-[#0d0d0d]">
            {/* Persistent floating nav */}
            <FloatingNav />

            {/* ── 500vh Canvas + Hero Scroll Zone ──
                ScrollyCanvas provides the scroll-driven frame animation.
                Overlay provides hero text + parallax sections using sticky positioning
                (scoped to this zone), so NO text leaks into sections below. */}
            <div className="relative h-[500vh]">
                <ScrollyCanvas />
                <Overlay />
            </div>

            {/* ── Content sections — each has a solid background + z-20 ──
                These appear AFTER the 500vh canvas zone ends.
                Solid backgrounds ensure the canvas never bleeds through. */}
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}
