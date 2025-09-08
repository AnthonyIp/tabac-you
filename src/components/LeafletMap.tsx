import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface LeafletMapProps {
  lat: number;
  lng: number;
  zoom: number;
  address: string;
  className?: string;
}

export function LeafletMap({ lat, lng, zoom, address, className = "h-80" }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map with precise coordinates
    const map = L.map(mapRef.current).setView([lat, lng], zoom);
    mapInstanceRef.current = map;

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add custom marker with better positioning
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background: #22c55e;
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 4px solid white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            transform: rotate(45deg);
            color: white;
            font-weight: bold;
            font-size: 18px;
          ">📍</div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // Create marker at exact coordinates
    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    
    // Add popup with better styling
    marker.bindPopup(`
      <div style="text-align: center; padding: 12px; min-width: 200px;">
        <h3 style="margin: 0 0 8px 0; color: #22c55e; font-weight: bold; font-size: 16px;">Les Allumettes</h3>
        <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.4;">${address}</p>
        <div style="margin-top: 8px;">
          <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}', '_blank')" 
                  style="background: #22c55e; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">
            Itinéraire
          </button>
        </div>
      </div>
    `);

    // Center map on marker with slight offset for better view
    map.setView([lat, lng], zoom, { animate: true });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, zoom, address]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full ${className} rounded-lg overflow-hidden relative z-10`}
      style={{ minHeight: '320px' }}
    />
  );
}
