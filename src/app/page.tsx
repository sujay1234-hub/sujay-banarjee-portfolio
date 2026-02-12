import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main className="relative w-full">
            <ScrollyCanvas />
            <Overlay />
            <Projects />
        </main>
    );
}
