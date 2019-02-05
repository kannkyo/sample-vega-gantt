var width = 600;

// Assign the specification to a local variable vlSpec.
var vlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "description": "Ganttchart Example",
  "data": {"url": "data.csv"},
  "config": {
    "timeFormat": "%Y/%m/%d %H:%M:%S.%L",
    "axisX": {
      "format": "%Y/%m/%d %H:%M:%S.%L"
    }
  },
  "vconcat": [{
    "width": width,
    "mark": {"type": "bar"},
    "encoding": {
      "tooltip": [
        {"field": "task", "type": "ordinal"},
        {"field": "gs", "type": "ordinal"},
        {"field": "sat", "type": "ordinal"},
        {"field": "aos", "type": "temporal"},
        {"field": "los", "type": "temporal"}
      ],
      "y" : {"field": "task", "type": "ordinal"},
      "x" : {
        "field": "aos",
        "type": "temporal",
        "axis": {"title": "time"},
        "scale": {"domain": {"selection": "brush"}}
      },
      "x2": {"field": "los"}
    }
  },{
    "width": width,
    "height": 60,
    "selection": {
      "brush": {"type": "interval", "encodings": ["x"]}
    },
    "mark": {"type": "bar"},
    "encoding": {
      "y" : {"field": "task", "type": "ordinal"},
      "x" : {
        "field": "aos",
        "type": "temporal",
        "axis": {"title": "time"},
      },
      "x2": {"field": "los"}
    }
  }]
};
