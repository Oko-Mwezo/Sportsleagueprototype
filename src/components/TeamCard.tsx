import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar, Users } from "lucide-react@0.487.0";
import type { Team } from "./sports-data";

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  const genderColors = {
    male: 'bg-blue-500',
    female: 'bg-pink-500',
    mixed: 'bg-purple-500'
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-all border-l-4 hover:scale-[1.02]" style={{ borderLeftColor: team.gender === 'male' ? '#3b82f6' : team.gender === 'female' ? '#ec4899' : '#a855f7' }}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="mb-2">{team.name}</h3>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{team.country}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{team.league}</span>
          </div>
        </div>
        <Badge className={`${genderColors[team.gender]} text-white`}>
          {team.gender.charAt(0).toUpperCase() + team.gender.slice(1)}
        </Badge>
      </div>
      
      {team.founded && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>Founded {team.founded}</span>
        </div>
      )}
    </Card>
  );
}
