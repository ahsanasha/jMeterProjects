/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 418.0, "minX": 0.0, "maxY": 20766.0, "series": [{"data": [[0.0, 418.0], [0.1, 418.0], [0.2, 418.0], [0.3, 418.0], [0.4, 418.0], [0.5, 418.0], [0.6, 418.0], [0.7, 418.0], [0.8, 418.0], [0.9, 418.0], [1.0, 419.0], [1.1, 419.0], [1.2, 419.0], [1.3, 419.0], [1.4, 419.0], [1.5, 419.0], [1.6, 419.0], [1.7, 419.0], [1.8, 419.0], [1.9, 419.0], [2.0, 432.0], [2.1, 432.0], [2.2, 432.0], [2.3, 432.0], [2.4, 432.0], [2.5, 432.0], [2.6, 432.0], [2.7, 432.0], [2.8, 432.0], [2.9, 432.0], [3.0, 434.0], [3.1, 434.0], [3.2, 434.0], [3.3, 434.0], [3.4, 434.0], [3.5, 434.0], [3.6, 434.0], [3.7, 434.0], [3.8, 434.0], [3.9, 434.0], [4.0, 439.0], [4.1, 439.0], [4.2, 439.0], [4.3, 439.0], [4.4, 439.0], [4.5, 439.0], [4.6, 439.0], [4.7, 439.0], [4.8, 439.0], [4.9, 439.0], [5.0, 445.0], [5.1, 445.0], [5.2, 445.0], [5.3, 445.0], [5.4, 445.0], [5.5, 445.0], [5.6, 445.0], [5.7, 445.0], [5.8, 445.0], [5.9, 445.0], [6.0, 461.0], [6.1, 461.0], [6.2, 461.0], [6.3, 461.0], [6.4, 461.0], [6.5, 461.0], [6.6, 461.0], [6.7, 461.0], [6.8, 461.0], [6.9, 461.0], [7.0, 465.0], [7.1, 465.0], [7.2, 465.0], [7.3, 465.0], [7.4, 465.0], [7.5, 465.0], [7.6, 465.0], [7.7, 465.0], [7.8, 465.0], [7.9, 465.0], [8.0, 468.0], [8.1, 468.0], [8.2, 468.0], [8.3, 468.0], [8.4, 468.0], [8.5, 468.0], [8.6, 468.0], [8.7, 468.0], [8.8, 468.0], [8.9, 468.0], [9.0, 563.0], [9.1, 563.0], [9.2, 563.0], [9.3, 563.0], [9.4, 563.0], [9.5, 563.0], [9.6, 563.0], [9.7, 563.0], [9.8, 563.0], [9.9, 563.0], [10.0, 612.0], [10.1, 612.0], [10.2, 612.0], [10.3, 612.0], [10.4, 612.0], [10.5, 612.0], [10.6, 612.0], [10.7, 612.0], [10.8, 612.0], [10.9, 612.0], [11.0, 619.0], [11.1, 619.0], [11.2, 619.0], [11.3, 619.0], [11.4, 619.0], [11.5, 619.0], [11.6, 619.0], [11.7, 619.0], [11.8, 619.0], [11.9, 619.0], [12.0, 619.0], [12.1, 619.0], [12.2, 619.0], [12.3, 619.0], [12.4, 619.0], [12.5, 619.0], [12.6, 619.0], [12.7, 619.0], [12.8, 619.0], [12.9, 619.0], [13.0, 623.0], [13.1, 623.0], [13.2, 623.0], [13.3, 623.0], [13.4, 623.0], [13.5, 623.0], [13.6, 623.0], [13.7, 623.0], [13.8, 623.0], [13.9, 623.0], [14.0, 623.0], [14.1, 623.0], [14.2, 623.0], [14.3, 623.0], [14.4, 623.0], [14.5, 623.0], [14.6, 623.0], [14.7, 623.0], [14.8, 623.0], [14.9, 623.0], [15.0, 633.0], [15.1, 633.0], [15.2, 633.0], [15.3, 633.0], [15.4, 633.0], [15.5, 633.0], [15.6, 633.0], [15.7, 633.0], [15.8, 633.0], [15.9, 633.0], [16.0, 686.0], [16.1, 686.0], [16.2, 686.0], [16.3, 686.0], [16.4, 686.0], [16.5, 686.0], [16.6, 686.0], [16.7, 686.0], [16.8, 686.0], [16.9, 686.0], [17.0, 705.0], [17.1, 705.0], [17.2, 705.0], [17.3, 705.0], [17.4, 705.0], [17.5, 705.0], [17.6, 705.0], [17.7, 705.0], [17.8, 705.0], [17.9, 705.0], [18.0, 713.0], [18.1, 713.0], [18.2, 713.0], [18.3, 713.0], [18.4, 713.0], [18.5, 713.0], [18.6, 713.0], [18.7, 713.0], [18.8, 713.0], [18.9, 713.0], [19.0, 727.0], [19.1, 727.0], [19.2, 727.0], [19.3, 727.0], [19.4, 727.0], [19.5, 727.0], [19.6, 727.0], [19.7, 727.0], [19.8, 727.0], [19.9, 727.0], [20.0, 761.0], [20.1, 761.0], [20.2, 761.0], [20.3, 761.0], [20.4, 761.0], [20.5, 761.0], [20.6, 761.0], [20.7, 761.0], [20.8, 761.0], [20.9, 761.0], [21.0, 776.0], [21.1, 776.0], [21.2, 776.0], [21.3, 776.0], [21.4, 776.0], [21.5, 776.0], [21.6, 776.0], [21.7, 776.0], [21.8, 776.0], [21.9, 776.0], [22.0, 776.0], [22.1, 776.0], [22.2, 776.0], [22.3, 776.0], [22.4, 776.0], [22.5, 776.0], [22.6, 776.0], [22.7, 776.0], [22.8, 776.0], [22.9, 776.0], [23.0, 818.0], [23.1, 818.0], [23.2, 818.0], [23.3, 818.0], [23.4, 818.0], [23.5, 818.0], [23.6, 818.0], [23.7, 818.0], [23.8, 818.0], [23.9, 818.0], [24.0, 839.0], [24.1, 839.0], [24.2, 839.0], [24.3, 839.0], [24.4, 839.0], [24.5, 839.0], [24.6, 839.0], [24.7, 839.0], [24.8, 839.0], [24.9, 839.0], [25.0, 848.0], [25.1, 848.0], [25.2, 848.0], [25.3, 848.0], [25.4, 848.0], [25.5, 848.0], [25.6, 848.0], [25.7, 848.0], [25.8, 848.0], [25.9, 848.0], [26.0, 897.0], [26.1, 897.0], [26.2, 897.0], [26.3, 897.0], [26.4, 897.0], [26.5, 897.0], [26.6, 897.0], [26.7, 897.0], [26.8, 897.0], [26.9, 897.0], [27.0, 897.0], [27.1, 897.0], [27.2, 897.0], [27.3, 897.0], [27.4, 897.0], [27.5, 897.0], [27.6, 897.0], [27.7, 897.0], [27.8, 897.0], [27.9, 897.0], [28.0, 936.0], [28.1, 936.0], [28.2, 936.0], [28.3, 936.0], [28.4, 936.0], [28.5, 936.0], [28.6, 936.0], [28.7, 936.0], [28.8, 936.0], [28.9, 936.0], [29.0, 948.0], [29.1, 948.0], [29.2, 948.0], [29.3, 948.0], [29.4, 948.0], [29.5, 948.0], [29.6, 948.0], [29.7, 948.0], [29.8, 948.0], [29.9, 948.0], [30.0, 967.0], [30.1, 967.0], [30.2, 967.0], [30.3, 967.0], [30.4, 967.0], [30.5, 967.0], [30.6, 967.0], [30.7, 967.0], [30.8, 967.0], [30.9, 967.0], [31.0, 1027.0], [31.1, 1027.0], [31.2, 1027.0], [31.3, 1027.0], [31.4, 1027.0], [31.5, 1027.0], [31.6, 1027.0], [31.7, 1027.0], [31.8, 1027.0], [31.9, 1027.0], [32.0, 1076.0], [32.1, 1076.0], [32.2, 1076.0], [32.3, 1076.0], [32.4, 1076.0], [32.5, 1076.0], [32.6, 1076.0], [32.7, 1076.0], [32.8, 1076.0], [32.9, 1076.0], [33.0, 1110.0], [33.1, 1110.0], [33.2, 1110.0], [33.3, 1110.0], [33.4, 1110.0], [33.5, 1110.0], [33.6, 1110.0], [33.7, 1110.0], [33.8, 1110.0], [33.9, 1110.0], [34.0, 1137.0], [34.1, 1137.0], [34.2, 1137.0], [34.3, 1137.0], [34.4, 1137.0], [34.5, 1137.0], [34.6, 1137.0], [34.7, 1137.0], [34.8, 1137.0], [34.9, 1137.0], [35.0, 1178.0], [35.1, 1178.0], [35.2, 1178.0], [35.3, 1178.0], [35.4, 1178.0], [35.5, 1178.0], [35.6, 1178.0], [35.7, 1178.0], [35.8, 1178.0], [35.9, 1178.0], [36.0, 1179.0], [36.1, 1179.0], [36.2, 1179.0], [36.3, 1179.0], [36.4, 1179.0], [36.5, 1179.0], [36.6, 1179.0], [36.7, 1179.0], [36.8, 1179.0], [36.9, 1179.0], [37.0, 1193.0], [37.1, 1193.0], [37.2, 1193.0], [37.3, 1193.0], [37.4, 1193.0], [37.5, 1193.0], [37.6, 1193.0], [37.7, 1193.0], [37.8, 1193.0], [37.9, 1193.0], [38.0, 1381.0], [38.1, 1381.0], [38.2, 1381.0], [38.3, 1381.0], [38.4, 1381.0], [38.5, 1381.0], [38.6, 1381.0], [38.7, 1381.0], [38.8, 1381.0], [38.9, 1381.0], [39.0, 1386.0], [39.1, 1386.0], [39.2, 1386.0], [39.3, 1386.0], [39.4, 1386.0], [39.5, 1386.0], [39.6, 1386.0], [39.7, 1386.0], [39.8, 1386.0], [39.9, 1386.0], [40.0, 1390.0], [40.1, 1390.0], [40.2, 1390.0], [40.3, 1390.0], [40.4, 1390.0], [40.5, 1390.0], [40.6, 1390.0], [40.7, 1390.0], [40.8, 1390.0], [40.9, 1390.0], [41.0, 1392.0], [41.1, 1392.0], [41.2, 1392.0], [41.3, 1392.0], [41.4, 1392.0], [41.5, 1392.0], [41.6, 1392.0], [41.7, 1392.0], [41.8, 1392.0], [41.9, 1392.0], [42.0, 1405.0], [42.1, 1405.0], [42.2, 1405.0], [42.3, 1405.0], [42.4, 1405.0], [42.5, 1405.0], [42.6, 1405.0], [42.7, 1405.0], [42.8, 1405.0], [42.9, 1405.0], [43.0, 1405.0], [43.1, 1405.0], [43.2, 1405.0], [43.3, 1405.0], [43.4, 1405.0], [43.5, 1405.0], [43.6, 1405.0], [43.7, 1405.0], [43.8, 1405.0], [43.9, 1405.0], [44.0, 1414.0], [44.1, 1414.0], [44.2, 1414.0], [44.3, 1414.0], [44.4, 1414.0], [44.5, 1414.0], [44.6, 1414.0], [44.7, 1414.0], [44.8, 1414.0], [44.9, 1414.0], [45.0, 1431.0], [45.1, 1431.0], [45.2, 1431.0], [45.3, 1431.0], [45.4, 1431.0], [45.5, 1431.0], [45.6, 1431.0], [45.7, 1431.0], [45.8, 1431.0], [45.9, 1431.0], [46.0, 1432.0], [46.1, 1432.0], [46.2, 1432.0], [46.3, 1432.0], [46.4, 1432.0], [46.5, 1432.0], [46.6, 1432.0], [46.7, 1432.0], [46.8, 1432.0], [46.9, 1432.0], [47.0, 1438.0], [47.1, 1438.0], [47.2, 1438.0], [47.3, 1438.0], [47.4, 1438.0], [47.5, 1438.0], [47.6, 1438.0], [47.7, 1438.0], [47.8, 1438.0], [47.9, 1438.0], [48.0, 1469.0], [48.1, 1469.0], [48.2, 1469.0], [48.3, 1469.0], [48.4, 1469.0], [48.5, 1469.0], [48.6, 1469.0], [48.7, 1469.0], [48.8, 1469.0], [48.9, 1469.0], [49.0, 1476.0], [49.1, 1476.0], [49.2, 1476.0], [49.3, 1476.0], [49.4, 1476.0], [49.5, 1476.0], [49.6, 1476.0], [49.7, 1476.0], [49.8, 1476.0], [49.9, 1476.0], [50.0, 1477.0], [50.1, 1477.0], [50.2, 1477.0], [50.3, 1477.0], [50.4, 1477.0], [50.5, 1477.0], [50.6, 1477.0], [50.7, 1477.0], [50.8, 1477.0], [50.9, 1477.0], [51.0, 1479.0], [51.1, 1479.0], [51.2, 1479.0], [51.3, 1479.0], [51.4, 1479.0], [51.5, 1479.0], [51.6, 1479.0], [51.7, 1479.0], [51.8, 1479.0], [51.9, 1479.0], [52.0, 1528.0], [52.1, 1528.0], [52.2, 1528.0], [52.3, 1528.0], [52.4, 1528.0], [52.5, 1528.0], [52.6, 1528.0], [52.7, 1528.0], [52.8, 1528.0], [52.9, 1528.0], [53.0, 1556.0], [53.1, 1556.0], [53.2, 1556.0], [53.3, 1556.0], [53.4, 1556.0], [53.5, 1556.0], [53.6, 1556.0], [53.7, 1556.0], [53.8, 1556.0], [53.9, 1556.0], [54.0, 1569.0], [54.1, 1569.0], [54.2, 1569.0], [54.3, 1569.0], [54.4, 1569.0], [54.5, 1569.0], [54.6, 1569.0], [54.7, 1569.0], [54.8, 1569.0], [54.9, 1569.0], [55.0, 1612.0], [55.1, 1612.0], [55.2, 1612.0], [55.3, 1612.0], [55.4, 1612.0], [55.5, 1612.0], [55.6, 1612.0], [55.7, 1612.0], [55.8, 1612.0], [55.9, 1612.0], [56.0, 1622.0], [56.1, 1622.0], [56.2, 1622.0], [56.3, 1622.0], [56.4, 1622.0], [56.5, 1622.0], [56.6, 1622.0], [56.7, 1622.0], [56.8, 1622.0], [56.9, 1622.0], [57.0, 1624.0], [57.1, 1624.0], [57.2, 1624.0], [57.3, 1624.0], [57.4, 1624.0], [57.5, 1624.0], [57.6, 1624.0], [57.7, 1624.0], [57.8, 1624.0], [57.9, 1624.0], [58.0, 1656.0], [58.1, 1656.0], [58.2, 1656.0], [58.3, 1656.0], [58.4, 1656.0], [58.5, 1656.0], [58.6, 1656.0], [58.7, 1656.0], [58.8, 1656.0], [58.9, 1656.0], [59.0, 1658.0], [59.1, 1658.0], [59.2, 1658.0], [59.3, 1658.0], [59.4, 1658.0], [59.5, 1658.0], [59.6, 1658.0], [59.7, 1658.0], [59.8, 1658.0], [59.9, 1658.0], [60.0, 1676.0], [60.1, 1676.0], [60.2, 1676.0], [60.3, 1676.0], [60.4, 1676.0], [60.5, 1676.0], [60.6, 1676.0], [60.7, 1676.0], [60.8, 1676.0], [60.9, 1676.0], [61.0, 1689.0], [61.1, 1689.0], [61.2, 1689.0], [61.3, 1689.0], [61.4, 1689.0], [61.5, 1689.0], [61.6, 1689.0], [61.7, 1689.0], [61.8, 1689.0], [61.9, 1689.0], [62.0, 1711.0], [62.1, 1711.0], [62.2, 1711.0], [62.3, 1711.0], [62.4, 1711.0], [62.5, 1711.0], [62.6, 1711.0], [62.7, 1711.0], [62.8, 1711.0], [62.9, 1711.0], [63.0, 1718.0], [63.1, 1718.0], [63.2, 1718.0], [63.3, 1718.0], [63.4, 1718.0], [63.5, 1718.0], [63.6, 1718.0], [63.7, 1718.0], [63.8, 1718.0], [63.9, 1718.0], [64.0, 1831.0], [64.1, 1831.0], [64.2, 1831.0], [64.3, 1831.0], [64.4, 1831.0], [64.5, 1831.0], [64.6, 1831.0], [64.7, 1831.0], [64.8, 1831.0], [64.9, 1831.0], [65.0, 1878.0], [65.1, 1878.0], [65.2, 1878.0], [65.3, 1878.0], [65.4, 1878.0], [65.5, 1878.0], [65.6, 1878.0], [65.7, 1878.0], [65.8, 1878.0], [65.9, 1878.0], [66.0, 1906.0], [66.1, 1906.0], [66.2, 1906.0], [66.3, 1906.0], [66.4, 1906.0], [66.5, 1906.0], [66.6, 1906.0], [66.7, 1906.0], [66.8, 1906.0], [66.9, 1906.0], [67.0, 1967.0], [67.1, 1967.0], [67.2, 1967.0], [67.3, 1967.0], [67.4, 1967.0], [67.5, 1967.0], [67.6, 1967.0], [67.7, 1967.0], [67.8, 1967.0], [67.9, 1967.0], [68.0, 1968.0], [68.1, 1968.0], [68.2, 1968.0], [68.3, 1968.0], [68.4, 1968.0], [68.5, 1968.0], [68.6, 1968.0], [68.7, 1968.0], [68.8, 1968.0], [68.9, 1968.0], [69.0, 1977.0], [69.1, 1977.0], [69.2, 1977.0], [69.3, 1977.0], [69.4, 1977.0], [69.5, 1977.0], [69.6, 1977.0], [69.7, 1977.0], [69.8, 1977.0], [69.9, 1977.0], [70.0, 1978.0], [70.1, 1978.0], [70.2, 1978.0], [70.3, 1978.0], [70.4, 1978.0], [70.5, 1978.0], [70.6, 1978.0], [70.7, 1978.0], [70.8, 1978.0], [70.9, 1978.0], [71.0, 1982.0], [71.1, 1982.0], [71.2, 1982.0], [71.3, 1982.0], [71.4, 1982.0], [71.5, 1982.0], [71.6, 1982.0], [71.7, 1982.0], [71.8, 1982.0], [71.9, 1982.0], [72.0, 2042.0], [72.1, 2042.0], [72.2, 2042.0], [72.3, 2042.0], [72.4, 2042.0], [72.5, 2042.0], [72.6, 2042.0], [72.7, 2042.0], [72.8, 2042.0], [72.9, 2042.0], [73.0, 2066.0], [73.1, 2066.0], [73.2, 2066.0], [73.3, 2066.0], [73.4, 2066.0], [73.5, 2066.0], [73.6, 2066.0], [73.7, 2066.0], [73.8, 2066.0], [73.9, 2066.0], [74.0, 2178.0], [74.1, 2178.0], [74.2, 2178.0], [74.3, 2178.0], [74.4, 2178.0], [74.5, 2178.0], [74.6, 2178.0], [74.7, 2178.0], [74.8, 2178.0], [74.9, 2178.0], [75.0, 2180.0], [75.1, 2180.0], [75.2, 2180.0], [75.3, 2180.0], [75.4, 2180.0], [75.5, 2180.0], [75.6, 2180.0], [75.7, 2180.0], [75.8, 2180.0], [75.9, 2180.0], [76.0, 2272.0], [76.1, 2272.0], [76.2, 2272.0], [76.3, 2272.0], [76.4, 2272.0], [76.5, 2272.0], [76.6, 2272.0], [76.7, 2272.0], [76.8, 2272.0], [76.9, 2272.0], [77.0, 2936.0], [77.1, 2936.0], [77.2, 2936.0], [77.3, 2936.0], [77.4, 2936.0], [77.5, 2936.0], [77.6, 2936.0], [77.7, 2936.0], [77.8, 2936.0], [77.9, 2936.0], [78.0, 3003.0], [78.1, 3003.0], [78.2, 3003.0], [78.3, 3003.0], [78.4, 3003.0], [78.5, 3003.0], [78.6, 3003.0], [78.7, 3003.0], [78.8, 3003.0], [78.9, 3003.0], [79.0, 3013.0], [79.1, 3013.0], [79.2, 3013.0], [79.3, 3013.0], [79.4, 3013.0], [79.5, 3013.0], [79.6, 3013.0], [79.7, 3013.0], [79.8, 3013.0], [79.9, 3013.0], [80.0, 3017.0], [80.1, 3017.0], [80.2, 3017.0], [80.3, 3017.0], [80.4, 3017.0], [80.5, 3017.0], [80.6, 3017.0], [80.7, 3017.0], [80.8, 3017.0], [80.9, 3017.0], [81.0, 3170.0], [81.1, 3170.0], [81.2, 3170.0], [81.3, 3170.0], [81.4, 3170.0], [81.5, 3170.0], [81.6, 3170.0], [81.7, 3170.0], [81.8, 3170.0], [81.9, 3170.0], [82.0, 3225.0], [82.1, 3225.0], [82.2, 3225.0], [82.3, 3225.0], [82.4, 3225.0], [82.5, 3225.0], [82.6, 3225.0], [82.7, 3225.0], [82.8, 3225.0], [82.9, 3225.0], [83.0, 3399.0], [83.1, 3399.0], [83.2, 3399.0], [83.3, 3399.0], [83.4, 3399.0], [83.5, 3399.0], [83.6, 3399.0], [83.7, 3399.0], [83.8, 3399.0], [83.9, 3399.0], [84.0, 3533.0], [84.1, 3533.0], [84.2, 3533.0], [84.3, 3533.0], [84.4, 3533.0], [84.5, 3533.0], [84.6, 3533.0], [84.7, 3533.0], [84.8, 3533.0], [84.9, 3533.0], [85.0, 3613.0], [85.1, 3613.0], [85.2, 3613.0], [85.3, 3613.0], [85.4, 3613.0], [85.5, 3613.0], [85.6, 3613.0], [85.7, 3613.0], [85.8, 3613.0], [85.9, 3613.0], [86.0, 3812.0], [86.1, 3812.0], [86.2, 3812.0], [86.3, 3812.0], [86.4, 3812.0], [86.5, 3812.0], [86.6, 3812.0], [86.7, 3812.0], [86.8, 3812.0], [86.9, 3812.0], [87.0, 3946.0], [87.1, 3946.0], [87.2, 3946.0], [87.3, 3946.0], [87.4, 3946.0], [87.5, 3946.0], [87.6, 3946.0], [87.7, 3946.0], [87.8, 3946.0], [87.9, 3946.0], [88.0, 4244.0], [88.1, 4244.0], [88.2, 4244.0], [88.3, 4244.0], [88.4, 4244.0], [88.5, 4244.0], [88.6, 4244.0], [88.7, 4244.0], [88.8, 4244.0], [88.9, 4244.0], [89.0, 4430.0], [89.1, 4430.0], [89.2, 4430.0], [89.3, 4430.0], [89.4, 4430.0], [89.5, 4430.0], [89.6, 4430.0], [89.7, 4430.0], [89.8, 4430.0], [89.9, 4430.0], [90.0, 4754.0], [90.1, 4754.0], [90.2, 4754.0], [90.3, 4754.0], [90.4, 4754.0], [90.5, 4754.0], [90.6, 4754.0], [90.7, 4754.0], [90.8, 4754.0], [90.9, 4754.0], [91.0, 5515.0], [91.1, 5515.0], [91.2, 5515.0], [91.3, 5515.0], [91.4, 5515.0], [91.5, 5515.0], [91.6, 5515.0], [91.7, 5515.0], [91.8, 5515.0], [91.9, 5515.0], [92.0, 6444.0], [92.1, 6444.0], [92.2, 6444.0], [92.3, 6444.0], [92.4, 6444.0], [92.5, 6444.0], [92.6, 6444.0], [92.7, 6444.0], [92.8, 6444.0], [92.9, 6444.0], [93.0, 8006.0], [93.1, 8006.0], [93.2, 8006.0], [93.3, 8006.0], [93.4, 8006.0], [93.5, 8006.0], [93.6, 8006.0], [93.7, 8006.0], [93.8, 8006.0], [93.9, 8006.0], [94.0, 8115.0], [94.1, 8115.0], [94.2, 8115.0], [94.3, 8115.0], [94.4, 8115.0], [94.5, 8115.0], [94.6, 8115.0], [94.7, 8115.0], [94.8, 8115.0], [94.9, 8115.0], [95.0, 12113.0], [95.1, 12113.0], [95.2, 12113.0], [95.3, 12113.0], [95.4, 12113.0], [95.5, 12113.0], [95.6, 12113.0], [95.7, 12113.0], [95.8, 12113.0], [95.9, 12113.0], [96.0, 19490.0], [96.1, 19490.0], [96.2, 19490.0], [96.3, 19490.0], [96.4, 19490.0], [96.5, 19490.0], [96.6, 19490.0], [96.7, 19490.0], [96.8, 19490.0], [96.9, 19490.0], [97.0, 19653.0], [97.1, 19653.0], [97.2, 19653.0], [97.3, 19653.0], [97.4, 19653.0], [97.5, 19653.0], [97.6, 19653.0], [97.7, 19653.0], [97.8, 19653.0], [97.9, 19653.0], [98.0, 20217.0], [98.1, 20217.0], [98.2, 20217.0], [98.3, 20217.0], [98.4, 20217.0], [98.5, 20217.0], [98.6, 20217.0], [98.7, 20217.0], [98.8, 20217.0], [98.9, 20217.0], [99.0, 20766.0], [99.1, 20766.0], [99.2, 20766.0], [99.3, 20766.0], [99.4, 20766.0], [99.5, 20766.0], [99.6, 20766.0], [99.7, 20766.0], [99.8, 20766.0], [99.9, 20766.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 10.0, "series": [{"data": [[600.0, 7.0], [700.0, 6.0], [12100.0, 1.0], [800.0, 5.0], [900.0, 3.0], [1000.0, 2.0], [1100.0, 5.0], [19400.0, 1.0], [19600.0, 1.0], [20200.0, 1.0], [1300.0, 4.0], [20700.0, 1.0], [1400.0, 10.0], [1500.0, 3.0], [1600.0, 7.0], [1700.0, 2.0], [1800.0, 2.0], [1900.0, 6.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 1.0], [2900.0, 1.0], [3000.0, 3.0], [3100.0, 1.0], [3300.0, 1.0], [3200.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [3800.0, 1.0], [3900.0, 1.0], [4200.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [5500.0, 1.0], [400.0, 9.0], [6400.0, 1.0], [8100.0, 1.0], [500.0, 1.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 20700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 39.0, "series": [{"data": [[0.0, 9.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 38.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 39.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 14.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.685622E12, "maxY": 10.021052631578947, "series": [{"data": [[1.68562206E12, 3.0], [1.685622E12, 10.021052631578947]], "isOverall": false, "label": "bzm - Arrivals Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562206E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 848.0, "minX": 1.0, "maxY": 20766.0, "series": [{"data": [[8.0, 1398.6111111111113], [2.0, 19653.0], [9.0, 1814.0], [10.0, 1435.75], [11.0, 1428.3333333333333], [12.0, 1922.0000000000002], [3.0, 19490.0], [13.0, 2904.375], [14.0, 3182.5], [15.0, 3091.5], [16.0, 1455.0], [4.0, 12113.0], [1.0, 20217.0], [17.0, 1981.6666666666665], [18.0, 848.0], [5.0, 20766.0], [6.0, 2314.25], [7.0, 1354.9166666666667]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.67, 2647.0000000000005]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 18.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 10.916666666666666, "minX": 1.685622E12, "maxY": 2158.7, "series": [{"data": [[1.68562206E12, 107.73333333333333], [1.685622E12, 2158.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68562206E12, 10.916666666666666], [1.685622E12, 207.28333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562206E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1815.3789473684217, "minX": 1.685622E12, "maxY": 18447.8, "series": [{"data": [[1.68562206E12, 18447.8], [1.685622E12, 1815.3789473684217]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562206E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1815.2842105263162, "minX": 1.685622E12, "maxY": 18447.8, "series": [{"data": [[1.68562206E12, 18447.8], [1.685622E12, 1815.2842105263162]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562206E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1561.4315789473685, "minX": 1.685622E12, "maxY": 18199.0, "series": [{"data": [[1.68562206E12, 18199.0], [1.685622E12, 1561.4315789473685]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562206E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 418.0, "minX": 1.685622E12, "maxY": 20766.0, "series": [{"data": [[1.68562206E12, 20766.0], [1.685622E12, 8115.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68562206E12, 20766.0], [1.685622E12, 3879.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68562206E12, 20766.0], [1.685622E12, 8115.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68562206E12, 20766.0], [1.685622E12, 5324.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68562206E12, 12113.0], [1.685622E12, 418.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68562206E12, 16439.5], [1.685622E12, 1435.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562206E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1027.5, "minX": 1.0, "maxY": 19571.5, "series": [{"data": [[2.0, 1027.5], [4.0, 1206.0], [1.0, 8006.0], [9.0, 1759.0], [5.0, 1405.0], [6.0, 1431.0], [3.0, 1556.0], [7.0, 1397.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1123.5], [1.0, 19571.5], [4.0, 1413.0], [9.0, 2334.5], [6.0, 1658.0], [7.0, 2178.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1027.5, "minX": 1.0, "maxY": 19571.5, "series": [{"data": [[2.0, 1027.5], [4.0, 1206.0], [1.0, 8006.0], [9.0, 1759.0], [5.0, 1404.0], [6.0, 1431.0], [3.0, 1556.0], [7.0, 1397.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1123.5], [1.0, 19571.5], [4.0, 1412.5], [9.0, 2334.5], [6.0, 1658.0], [7.0, 2178.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.685622E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.685622E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.685622E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.685622E12, "maxY": 1.4, "series": [{"data": [[1.68562206E12, 0.03333333333333333], [1.685622E12, 1.4]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68562206E12, 0.05], [1.685622E12, 0.18333333333333332]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562206E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.685622E12, "maxY": 1.4, "series": [{"data": [[1.68562206E12, 0.03333333333333333], [1.685622E12, 1.4]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.68562206E12, 0.05], [1.685622E12, 0.18333333333333332]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562206E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.685622E12, "maxY": 1.4, "series": [{"data": [[1.68562206E12, 0.03333333333333333], [1.685622E12, 1.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68562206E12, 0.05], [1.685622E12, 0.18333333333333332]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562206E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

