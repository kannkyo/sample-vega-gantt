var timeFormat = {
  "dateTime": "%Y %b %e %a %X",
  "date": "%Y/%m/%d",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["日", "月", "火", "水", "木", "金", "土"],
  "shortDays": ["日", "月", "火", "水", "木", "金", "土"],
  "months": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  "shortMonths": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
};

var width = 600;

// Assign the specification to a local variable vlSpec.
var vlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
  "description": "A simple bar chart with ranged data (aka Gantt Chart).",
  "data": {
    "url": "data.csv"
  },
  "vconcat": [{
    "width": width,
    "height": 300,
    "mark": {"type": "bar"},
    "encoding": {
      "y" : {"field": "task", "type": "ordinal"},
      "x" : {"field": "aos", "type": "temporal", "scale": {"domain": {"selection": "brush"}}},
      "x2": {"field": "los"},
      "tooltip": [
        {"field": "task", "type": "ordinal"},
        {"field": "gs", "type": "ordinal"},
        {"field": "sat", "type": "ordinal"},
        {"field": "aos", "type": "temporal"},
        {"field": "los", "type": "temporal"}
      ]
    },
    "config": {
      "timeFormat": "%Y/%m/%d %H:%M:%S.%L",
      "axisX": {
        "format": "%Y/%m/%d %H:%M:%S.%L"
      }
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
      "x" : {"field": "aos", "type": "temporal"},
      "x2": {"field": "los"}
    },
    "config": {
      "timeFormat": "%Y/%m/%d %H:%M:%S.%L",
      "axisX": {
        "format": "%Y/%m/%d %H:%M:%S.%L"
      }
    }
  }]
};
