<template>
    <div class="chart-container" style="display: flex;">
    <div ref="skl" ></div>
    </div>
</template>
  
  <script>
  import * as d3 from "d3";
  export default {
    mounted() {
      this.drawChart();
    },
    methods: {
      drawChart() {
        const data = {
          name: "Skeleton",
          children: [
            {
              name: "Head",
              children: [
                { name: "Skull" },
                { name: "Jaw" },
                { name: "Teeth" },
                { name: "Ears" },
                { name: "Eyes" },
                { name: "Nose" },
              ],
            },
            {
              name: "Neck",
              children: [{ name: "Cervical Vertebrae" }],
            },
            {
              name: "Torso",
              children: [
                {
                  name: "Chest",
                  children: [
                    { name: "Ribs" },
                    { name: "Sternum" },
                    { name: "Breastbone" },
                  ],
                },
                {
                  name: "Abdomen",
                  children: [
                    { name: "Stomach" },
                    { name: "Intestines" },
                    { name: "Liver" },
                    { name: "Pancreas" },
                    { name: "Spleen" },
                  ],
                },
              ],
            },
            {
              name: "Arms",
              children: [
                { name: "Shoulder" },
                { name: "Upper Arm" },
                { name: "Forearm" },
                { name: "Hand" },
              ],
            },
            {
              name: "Legs",
              children: [
                { name: "Hip" },
                { name: "Thigh" },
                { name: "Knee" },
                { name: "Shin" },
                { name: "Ankle" },
                { name: "Foot" },
              ],
            },
          ],
        };
  
        const width = 400;
        const height = 380;
        const radius = Math.min(width, height) / 2-16;
        const color = d3.scaleOrdinal(d3.schemePastel1);//schemePastel1
  
        const partition = d3.partition().size([2 * Math.PI, radius]);
  
        const arc = d3
          .arc()
          .startAngle((d) => d.x0)
          .endAngle((d) => d.x1)
          .padAngle(0.01)
          .padRadius(radius / 3)
          .innerRadius((d) => d.y0)
          .outerRadius((d) => d.y1 - 1);
  
        const root = d3.hierarchy(data).sum((d) => 1);
  
        partition(root);
  
        const svg = d3
          .select(this.$refs.skl)
          .append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", `translate(${width / 2-70},${height / 2-30})`);
  
        const g = svg
          .selectAll("g")
          .data(root.descendants())
          .enter()
          .append("g");
  
        g.append("path")
          .attr("d", arc)
          .style("fill", (d) => color(d.depth))
          .on("click", (event, d) => {
            console.log(`Clicked: ${d.data.name}`);
          });
  
        g.append("text")
          .attr("transform",  (d) => `translate(${arc.centroid(d)})`)
    .attr("dy", "0.35em")
    .text((d) => d.data.name)
    .style("text-anchor", "middle")
    .style("font-size", "9px")
    .style("font-weight", "bold");
},
},
};
</script>

  