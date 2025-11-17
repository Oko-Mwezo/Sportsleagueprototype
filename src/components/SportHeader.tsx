import type { Sport } from "./sports-data";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SportHeaderProps {
  sport: Sport;
}

export function SportHeader({ sport }: SportHeaderProps) {
  return (
    <div className="relative h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
      <ImageWithFallback
        src={sport.imageUrl}
        alt={sport.name}
        className="w-full h-full object-cover"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
        style={{
          background: `linear-gradient(to top, ${sport.color}dd 0%, transparent 100%)`
        }}
      >
        <div className="p-6 text-white">
          <h1 className="text-white">{sport.name}</h1>
          <p className="text-white/90">Explore leagues and competitions</p>
        </div>
      </div>
      <div 
        className="absolute top-0 left-0 w-full h-1" 
        style={{ backgroundColor: sport.color }}
      />
    </div>
  );
}
