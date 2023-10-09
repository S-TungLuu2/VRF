import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
export default function TreeMap() {
  const data = {
    name: 'Products',
    children: [
      {
        name: 'Tài chính',
        exports: 130.1,
        children: [
          {
            name: 'VCI',
            exports: 30.1,
            color: 19,
          },
          {
            name: 'MWG',
            exports: 21.11,
            color: 5,
          },
          {
            name: 'SSI',
            exports: 25.74,
            color: 15,
          },
          {
            name: 'VPB',
            exports: 18.89,
            color: 1,
          },
          {
            name: 'VIC',
            exports: 5.84,
            color: 14,
          },
          {
            name: 'LCG',
            exports: 8,
            color: 2,
          },
        ],
      },
      {
        name: 'Công nghiệp',
        exports: 50.1,
        children: [
          {
            name: 'GEX',
            exports: 20.45,
            color: 5,
          },
          {
            name: 'HAH',
            exports: 8,
            color: 13,
          },
          {
            name: 'PVT',
            exports: 5,
            color: 12,
          },
          {
            name: 'EVG',
            exports: 20,
            color: 20,
          },
        ],
      },
    ],
  };

  const [options, setOptions] = useState<any>({
    data,
    series: [
      {
        type: 'treemap',
        labelKey: 'name',
        colorKey: 'color',
        colorDomain: [0, 10, 20],
        colorRange: ['green', 'yellow', 'red'],
        gradient: false,
        nodePadding: 0,
        nodeGap: 4,
        sizeKey: 'exports',
        tileStroke: 'white',
        tileStrokeWidth: 2,
        labelShadow: {
          enabled: false,
        },
        groupFill: 'transparent',
        title: {
          color: 'black',
          padding: 4,
        },
        subtitle: {
          color: 'black',
        },
        labels: {
          value: {
            name: '',
            formatter: (params: any) => `${params.datum.exports} tỷ`,
          },
        },
        groupStrokeWidth: 0,
        highlightGroups: true,
        highlightStyle: {
          text: {
            color: 'green',
          },
          fill: 'red',
          fillOpacity: 1,
        },
        formatter: ({ depth, highlighted }: any) => {
          if (depth < 2) {
            return {};
          }

          const stroke = highlighted ? 'black' : 'transparent';
          const fillOpacity = 0.8;
          return { stroke, fillOpacity };
        },
      },
    ],
    title: {
      text: 'TOP NN mua bán ròng trên HSX',
    },
    subtitle: {
      text: 'đơn vị tỷ VND',
    },
  });

  return <AgChartsReact options={options} />;
}
