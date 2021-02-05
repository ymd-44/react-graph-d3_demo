import './App.css';
import React from 'react';
import { Graph } from 'react-d3-graph';
import rd3 from 'react-d3-library';
import * as d3 from "d3/dist/d3";
import myData from './data/data-graph';

const myConfig = {
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    directed: true,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    height: "100%",
    highlightDegree: 2,
    highlightOpacity: 0.6,
    linkHighlightBehavior: false,
    maxZoom: 10,
    minZoom: 0.1,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    width: "100%",
    d3: {
        alphaTarget: 0.05,
        gravity: -100,
        linkLength: 100,
        linkStrength: 1,
        disableLinkForce: false
    },
    node: {
        color: "#52C98B",
        fontColor: "black",
        fontSize: 10,
        fontWeight: "normal",
        highlightColor: "red",
        highlightFontSize: 14,
        highlightFontWeight: "bold",
        highlightStrokeColor: "#404080",
        highlightStrokeWidth: 1.5,
        labelProperty: "name",
        labelPosition: "right",
        mouseCursor: "crosshair",
        opacity: 0.9,
        renderLabel: true,
        size: 200,
        strokeColor: "none",
        strokeWidth: 1.5,
        svg: "",
        symbolType: "circle"
    },
    link: {
        color: "lightgray",
        fontColor: "black",
        fontSize: 8,
        fontWeight: "normal",
        highlightColor: "lightblue",
        highlightFontWeight: "normal",
        highlightFontSize: 8,
        labelProperty: "type",
        opacity: 1,
        renderLabel: true,
        semanticStrokeWidth: true,
        strokeWidth: 3,
        markerWidth: 6,
        markerHeight: 6,
    },
};
const RD3Component = rd3.Component;
export default class App extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            data: myData,
            d3: ''
        };
    }
    componentDidMount() {
        const node = document.createElement('div');
        node.setAttribute("id", "my_legend");
        const svg = d3.select(node).append("svg")
            .attr("width", 150)
            .attr("height", 100);
        svg.append("circle").attr("cx",20).attr("cy",30).attr("r", 6).style("fill", "#404080");
        svg.append("circle").attr("cx",20).attr("cy",60).attr("r", 6).style("fill", "#52C98B");
        // svg.append("text").attr("x", 30).attr("y", 30).text("Champ d'origine").style("font-size", "15px").attr("alignment-baseline","middle");
        // svg.append("text").attr("x", 30).attr("y", 60).text("Champ aval").style("font-size", "15px").attr("alignment-baseline","middle");
        this.setState({d3: node});
    }
  render() {
      // const reactRef = this;
     /* const onClickNode = function(nodeId) {
          let modData = { ...reactRef.state.data };
          let selectNode = modData.nodes.filter(item => {
              return item.id == nodeId;
          });
          selectNode.forEach((item) => {
              if (item.color && item.color == "red") item.color = "blue";
              else item.color = "#52C98B";
          });
          console.log(modData);
          reactRef.setState({ data: modData });

      };*/
      return (
          <div className="App">
              <div id="treeWrapper">
                  <RD3Component data={this.state.d3} />
                  <Graph
                      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                      data={this.state.data}
                      config={myConfig}
                      // onClickNode={onClickNode}
                  />
              </div>
          </div>
      );
  }

}
// export default App;
