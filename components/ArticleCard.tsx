import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  image?: string | StaticImageData;
  slug?: string;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  readTime,
  date,
  featured = false,
  image,
  slug,
}: ArticleCardProps) => {
  const articleSlug =
    slug ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <Link href={`/article/${articleSlug}`}>
      <Card
        className={`group cursor-pointer transition-all duration-300 hover:shadow-premium hover:glow-subtle border-border/50 bg-card/50 backdrop-blur-sm pt-0 ${
          featured ? "md:col-span-2 md:row-span-2" : ""
        }`}
      >
        <CardContent className="p-0">
          <div
            className={`${featured ? "h-64" : "h-48"} relative overflow-hidden`}
          >
            {image ? (
              <>
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s" }}
                  className="group-hover:scale-105 rounded-t-lg"
                  sizes={
                    featured
                      ? "(min-width: 768px) 32rem, 100vw"
                      : "(min-width: 768px) 24rem, 100vw"
                  }
                  priority={featured} // optionnel, précharge l’image si featured
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              </>
            ) : (
              <>
                <div className="w-full h-full bg-gradient-to-br from-accent to-accent/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </>
            )}
            <div className="absolute bottom-4 left-4">
              <Badge variant="secondary" className="mb-2">
                {category}
              </Badge>
            </div>
          </div>

          <div className={`p-6 ${featured ? "pb-8" : ""}`}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
              <span>•</span>
              <span>{date}</span>
            </div>

            <h3
              className={`font-bold text-foreground mb-3 group-hover:text-gradient transition-colors ${
                featured ? "text-2xl leading-tight" : "text-lg"
              }`}
            >
              {title}
            </h3>

            <p
              className={`text-muted-foreground leading-relaxed ${
                featured ? "text-lg mb-4" : "text-base"
              }`}
            >
              {excerpt}
            </p>

            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              <span>Lire la suite</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
