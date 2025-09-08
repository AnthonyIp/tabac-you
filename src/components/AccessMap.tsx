import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, ChevronDown, ChevronUp } from "lucide-react";
import type { Access } from "@/lib/content";
import { LeafletMap } from "./LeafletMap";

interface AccessMapProps {
  access: Access;
}

const AccessMap = ({ access }: AccessMapProps) => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getTodaySchedule = () => {
    const today = new Date().getDay();
    // Convert Sunday (0) to be last in the week
    const dayIndex = today === 0 ? 6 : today - 1;
    return access.hours[dayIndex] || access.hours[0];
  };

  const todaySchedule = getTodaySchedule();

  return (
    <section id="access" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Accès & Horaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez-nous facilement au cœur de Vert-le-Petit, nous vous accueillons tous les jours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              {/* Map Header */}
              <div className="p-6 bg-primary text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <h3 className="text-xl font-semibold">Notre localisation</h3>
                      <p className="text-primary-foreground/90 text-sm">{access.address}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMapExpanded(!isMapExpanded)}
                    className="text-primary-foreground hover:bg-primary-foreground/20 lg:hidden"
                  >
                    {isMapExpanded ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </div>
              </div>

              {/* Interactive Leaflet Map */}
              <div className={`${isMapExpanded || !isMobile ? 'block' : 'hidden'} lg:block`}>
                <LeafletMap
                  lat={access.map.lat}
                  lng={access.map.lng}
                  zoom={access.map.zoom}
                  address={access.address}
                  className="h-80"
                />
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-muted/20 flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                  onClick={() => window.open(access.links.directions, '_blank')}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Itinéraire
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(access.links.call, '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Information Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <a 
                    href={access.links.call}
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    {access.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="text-foreground">{access.address}</p>
                </div>
              </div>
            </Card>

            {/* Opening Hours */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-3 text-primary" />
                Horaires d'ouverture
              </h3>

              {/* Today's hours highlight */}
              <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">Aujourd'hui</p>
                <p className="text-lg font-semibold text-primary">
                  {todaySchedule.day} : {todaySchedule.hours}
                </p>
              </div>

              {/* All hours */}
              <div className="space-y-2">
                {access.hours.map((schedule, index) => {
                  const isToday = schedule.day === todaySchedule.day;
                  return (
                    <div 
                      key={index} 
                      className={`flex justify-between py-2 ${
                        isToday ? 'font-semibold text-primary' : 'text-foreground'
                      }`}
                    >
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccessMap;