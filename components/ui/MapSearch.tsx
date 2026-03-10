'use client';

import { useEffect, useRef, useState } from 'react';
import type { Property } from '@/types';
import { MapPin } from 'lucide-react';

interface MapSearchProps {
  properties: Property[];
  center?: { lat: number; lng: number };
  zoom?: number;
}

function formatPrice(price: number): string {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
  if (price >= 1000) return `$${Math.round(price / 1000)}K`;
  return `$${price}`;
}

export default function MapSearch({ properties, center, zoom = 12 }: MapSearchProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  const mapCenter = center ?? {
    lat: properties[0]?.lat ?? 26.2379,
    lng: properties[0]?.lng ?? -80.1248,
  };

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      setHasToken(false);
      return;
    }
    setHasToken(true);

    if (mapRef.current || !mapContainer.current) return;

    let map: mapboxgl.Map;

    const loadMap = async () => {
      const mapboxgl = (await import('mapbox-gl')).default;
      // CSS loaded via global stylesheet or ignored in non-browser environments

      mapboxgl.accessToken = token;

      map = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [mapCenter.lng, mapCenter.lat],
        zoom,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.on('load', () => {
        setMapLoaded(true);

        properties.forEach((property) => {
          const el = document.createElement('div');
          el.className = 'mapbox-price-marker';
          el.innerHTML = `<div style="background:#2563eb;color:white;padding:4px 8px;border-radius:20px;font-size:12px;font-weight:bold;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.3);cursor:pointer;">${formatPrice(property.price)}</div>`;

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div style="padding:8px;min-width:180px;">
              <p style="font-weight:bold;font-size:14px;margin:0 0 4px;">${formatPrice(property.price)}</p>
              <p style="font-size:12px;color:#555;margin:0 0 2px;">${property.address}</p>
              <p style="font-size:11px;color:#888;margin:0 0 6px;">${property.beds}bd · ${property.baths}ba · ${property.sqft.toLocaleString()} sqft</p>
              <a href="/property/${property.id}" style="color:#2563eb;font-size:12px;font-weight:600;">View Details →</a>
            </div>`
          );

          new mapboxgl.Marker({ element: el })
            .setLngLat([property.lng, property.lat])
            .setPopup(popup)
            .addTo(map);
        });
      });

      mapRef.current = map;
    };

    loadMap().catch(console.error);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hasToken) {
    return (
      <div className="w-full h-64 sm:h-96 rounded-xl bg-gray-100 flex flex-col items-center justify-center text-gray-500 border border-gray-200">
        <MapPin className="w-12 h-12 text-gray-300 mb-3" />
        <p className="text-sm font-medium">Map Preview</p>
        <p className="text-xs text-gray-400 mt-1">
          Add NEXT_PUBLIC_MAPBOX_TOKEN to enable interactive maps
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-gray-500">
          {properties.slice(0, 4).map((p) => (
            <div key={p.id} className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 text-center">
              <p className="font-bold text-blue-600">{formatPrice(p.price)}</p>
              <p className="truncate">{p.address}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-gray-200">
      <div ref={mapContainer} className="w-full h-full" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      )}
    </div>
  );
}
