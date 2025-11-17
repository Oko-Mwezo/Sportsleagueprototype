import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Globe, MapPin, Users } from "lucide-react@0.487.0";
import type { League } from "./sports-data";

interface LeagueCardProps {
  league: League;
}

export function LeagueCard({ league }: LeagueCardProps) {
  const getGenderBadgeColor = (gender: string) => {
    switch (gender) {
      case 'male':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      case 'female':
        return 'bg-pink-100 text-pink-700 hover:bg-pink-100';
      case 'mixed':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-100';
      default:
        return '';
    }
  };

  const getGenderLabel = (gender: string) => {
    switch (gender) {
      case 'male':
        return 'Men';
      case 'female':
        return 'Women';
      case 'mixed':
        return 'Mixed';
      default:
        return gender;
    }
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="mb-2">{league.name}</h3>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            {league.isInternational ? (
              <Globe className="w-4 h-4" />
            ) : (
              <MapPin className="w-4 h-4" />
            )}
            <span className="text-sm">{league.country}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <Badge variant={league.tier === 1 ? "default" : "secondary"}>
            Tier {league.tier}
          </Badge>
          <Badge className={getGenderBadgeColor(league.gender)}>
            {getGenderLabel(league.gender)}
          </Badge>
        </div>
      </div>
      
      {league.teams > 0 && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Users className="w-4 h-4" />
          <span>{league.teams} teams</span>
        </div>
      )}
    </Card>
  );
}
