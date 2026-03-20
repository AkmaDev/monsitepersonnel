"use client";

const Hero = () => {
  return (
    <section className="py-14 border-b border-border/40">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Ce que je construis,{" "}
          <span className="text-gradient">ce que j&apos;apprends.</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          Des notes sur le product building, le numérique inclusif, et la
          langue fon. Pas un blog média — un carnet de bord.
        </p>
      </div>
    </section>
  );
};

export default Hero;
