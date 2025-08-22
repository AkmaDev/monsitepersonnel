// "use client";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// const heroImage = "/hero-africa-insights.jpg";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden h-screen flex items-center justify-center">
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />
//       <div
//         className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       />

//       <div className="container mx-auto px-6 relative z-10 max-w-4xl">
//         <div className="text-center space-y-8">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
//             Décryptage stratégique
//             <span className="block text-gradient mt-2">
//               de l&apos;Afrique moderne
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
//             Chaque semaine, recevez une analyse stratégique premium sur les
//             entreprises tech, les politiques publiques et les enjeux émergents
//             qui façonnent le continent.
//           </p>

//           <div className="max-w-lg mx-auto">
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
//               <input
//                 type="email"
//                 placeholder="votre@email.com"
//                 className="w-full sm:flex-1 px-5 py-4 rounded-lg bg-background/90 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm"
//               />
//               <Button size="lg" className="group w-full sm:w-auto px-8 py-4">
//                 S&apos;abonner
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>

//             <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
//               {["Gratuit", "Hebdomadaire", "Premium"].map((item, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <div className="w-1.5 h-1.5 rounded-full bg-primary" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             {[
//               { label: "Analyses publiées", value: "500+" },
//               { label: "Lecteurs engagés", value: "15k+" },
//               { label: "Pays couverts", value: "54" },
//             ].map(({ label, value }, i) => (
//               <div key={i}>
//                 <div className="text-3xl font-bold text-gradient mb-2">
//                   {value}
//                 </div>
//                 <div className="text-muted-foreground">{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-6 py-4 relative z-10 max-w-4xl">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Décryptage stratégique
            <span className="block text-gradient mt-2">
              de l&apos;Afrique moderne
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Chaque semaine, recevez une analyse stratégique premium sur les
            entreprises tech, les politiques publiques et les enjeux émergents
            qui façonnent le continent.
          </p>

          {/* Newsletter CTA */}
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full sm:flex-1 px-5 py-2.5 rounded-lg bg-background/90 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-sm"
              />
              <Button size="lg" className="group w-full sm:w-auto ">
                S&apos;abonner
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Hebdomadaire</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Premium</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 text-center">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Analyses publiées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">15k+</div>
              <div className="text-muted-foreground">Lecteurs engagés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">54</div>
              <div className="text-muted-foreground">Pays couverts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
