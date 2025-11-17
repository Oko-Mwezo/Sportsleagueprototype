import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, User, Trophy, Calendar } from "lucide-react@0.487.0";
import type { Player } from "./sports-data";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const genderColors = {
    male: 'bg-blue-500',
    female: 'bg-pink-500'
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-all border-l-4 hover:scale-[1.02]" style={{ borderLeftColor: player.gender === 'male' ? '#3b82f6' : '#ec4899' }}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="mb-2">{player.name}</h3>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">{player.position}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <User className="w-4 h-4" />
            <span className="text-sm">{player.team}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{player.country}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <Badge className={`${genderColors[player.gender]} text-white`}>
            {player.gender.charAt(0).toUpperCase() + player.gender.slice(1)}
          </Badge>
          {player.age && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{player.age}y</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
