import { useState, useMemo } from "react";
import { 
  Dribbble, 
  Circle, 
  Disc, 
  Target, 
  Hexagon, 
  Zap, 
  Square,
  Menu,
  Search
} from "lucide-react@0.487.0";
import { sports, leagues, countries } from "./components/sports-data";
import { LeagueCard } from "./components/LeagueCard";
import { SportHeader } from "./components/SportHeader";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";

const iconMap: Record<string, any> = {
  Dribbble,
  Circle,
  Disc,
  Target,
  Hexagon,
  Zap,
  Square,
};

export default function App() {
  const [selectedSport, setSelectedSport] = useState(sports[0].id);
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentSport = sports.find((s) => s.id === selectedSport) || sports[0];
  const currentLeagues = leagues[selectedSport] || [];

  const filteredLeagues = useMemo(() => {
    let filtered = currentLeagues;

    // Filter by country
    if (selectedCountry !== "All Countries") {
      filtered = filtered.filter(
        (league) => league.country === selectedCountry || league.isInternational
      );
    }

    // Filter by gender
    if (selectedGender !== "all") {
      filtered = filtered.filter(
        (league) => league.gender === selectedGender || league.gender === 'mixed'
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (league) =>
          league.name.toLowerCase().includes(query) ||
          league.country.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [currentLeagues, selectedCountry, selectedGender, searchQuery]);

  const internationalLeagues = filteredLeagues.filter((l) => l.isInternational);
  const localLeagues = filteredLeagues.filter((l) => !l.isInternational);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <h2>Sports</h2>
        <p className="text-sm text-gray-500 mt-1">Select a sport to explore</p>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        {sports.map((sport) => {
          const Icon = iconMap[sport.icon];
          const isSelected = selectedSport === sport.id;
          return (
            <button
              key={sport.id}
              onClick={() => {
                setSelectedSport(sport.id);
                setSelectedCountry("All Countries");
                setSelectedGender("all");
                setSearchQuery("");
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                isSelected
                  ? "text-white shadow-md"
                  : "hover:bg-gray-100"
              }`}
              style={
                isSelected
                  ? { backgroundColor: sport.color }
                  : {}
              }
            >
              <Icon className="w-5 h-5" />
              <span>{sport.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r">
        <SidebarContent />
      </aside>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden fixed top-4 left-4 z-50">
          <Button variant="outline" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SheetTitle className="sr-only">Sports Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Select a sport to view its leagues and competitions
          </SheetDescription>
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6">
          <SportHeader sport={currentSport} />

          {/* Filters Section */}
          <div className="mb-6 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search leagues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Gender Filter Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <Tabs value={selectedGender} onValueChange={setSelectedGender} className="w-full sm:w-auto">
                <TabsList className="grid w-full grid-cols-3 sm:w-auto">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="male" className="text-blue-600 data-[state=active]:bg-blue-100">
                    Men
                  </TabsTrigger>
                  <TabsTrigger value="female" className="text-pink-600 data-[state=active]:bg-pink-100">
                    Women
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Country Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label className="text-sm whitespace-nowrap">Country:</label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="w-full sm:w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Count */}
            {filteredLeagues.length > 0 && (
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold">{filteredLeagues.length}</span> league{filteredLeagues.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>

          {/* International Leagues */}
          {internationalLeagues.length > 0 && (
            <section className="mb-8">
              <h2 className="mb-4">International Competitions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {internationalLeagues.map((league) => (
                  <LeagueCard key={league.id} league={league} />
                ))}
              </div>
            </section>
          )}

          {/* Local Leagues */}
          {localLeagues.length > 0 && (
            <section>
              <h2 className="mb-4">Local Leagues</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {localLeagues.map((league) => (
                  <LeagueCard key={league.id} league={league} />
                ))}
              </div>
            </section>
          )}

          {filteredLeagues.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No leagues found matching your filters.</p>
              <p className="text-sm mt-2">Try adjusting your search, gender, or country filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
