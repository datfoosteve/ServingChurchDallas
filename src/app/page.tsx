

import { MovementComponent } from "@/components/hero";
import { MiracleSection } from "@/components/miracle";
import { CountdownTimer } from "@/components/countdowntimer";
import OurLocations from "@/components/ourlocations";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      
    
      <MovementComponent />
      <MiracleSection />
      <CountdownTimer />
      <OurLocations />
      
    </main>
  );
}
