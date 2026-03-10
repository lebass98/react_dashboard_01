import React, { useEffect, useRef } from 'react';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.css';
import 'jsvectormap/dist/maps/world';

const MapOne: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // Clean up previous instance if strict mode re-renders
        if (mapInstance.current) {
            const container = mapRef.current;
            container.innerHTML = '';
        }

        mapInstance.current = new jsVectorMap({
            selector: mapRef.current,
            map: 'world',
            zoomButtons: true,

            regionStyle: {
                initial: {
                    fill: '#D9D9D9',
                    fontFamily: 'Outfit',
                },
                hover: {
                    fillOpacity: 1,
                    fill: '#3056D3',
                },
            },

            regionLabelStyle: {
                initial: {
                    fontFamily: 'Outfit',
                    fontWeight: 'semibold',
                    fill: '#fff',
                },
                hover: {
                    cursor: 'pointer',
                },
            },
            labels: {
                regions: {
                    render(code: string) {
                        return code.split('-')[1];
                    },
                },
            },
        });

        return () => {
            const container = mapRef.current;
            if (container) container.innerHTML = '';
        };
    }, []);

    return (
        <div id="mapOne" className="mapOne map-btn h-[212px] w-full max-w-full">
            <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default MapOne;
