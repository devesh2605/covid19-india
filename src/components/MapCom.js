import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const INDIA_TOPO_JSON = require('../common/india.topo.json');

const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937]
};

const COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
];

const DEFAULT_COLOR = '#EEE';

const geographyStyle = {
    default: {
        outline: 'none'
    },
    hover: {
        fill: '#ccc',
        transition: 'all 250ms',
        outline: 'none'
    },
    pressed: {
        outline: 'none'
    }
};

const MapCom = (props) => {
    const { title } = props;
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 'bold', color: '#6c757d' }}>{title}</p>
            </div>
            <ComposableMap
                projectionConfig={PROJECTION_CONFIG}
                projection="geoMercator"
                width={600}
                height={220}
                data-tip=""
            >
                <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const current = data.find(s => s.id === geo.id);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                                    style={geographyStyle}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    )
}

export default MapCom;
