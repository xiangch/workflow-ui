import {
	Graph
} from '@antv/x6'
//自定义边
Graph.registerEdge(
	'add-edge', {
		zIndex: -1,
		attrs: {
			line: {
				strokeWidth: 2,
				stroke: '#A2B1C3',
			},
		},
	},
	true,
)
// 自定义边-条件开始连接
Graph.registerEdge(
  'switch-start-edge',
  {
    zIndex: -1,
    attrs: {
      line: {
        strokeWidth: 2,
        stroke: '#A2B1C3',
        sourceMarker: null,
        targetMarker: null,
      },
    },
  },
  true,
)
// 自定义边-条件结束连接
Graph.registerEdge(
  'switch-end-edge',
  {
    zIndex: -1,
    attrs: {
      line: {
        strokeWidth: 2,
        stroke: '#A2B1C3',
        sourceMarker: null,
        targetMarker: null,
      },
    },
  },
  true,
)