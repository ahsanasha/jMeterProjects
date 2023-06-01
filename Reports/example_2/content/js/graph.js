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
        data: {"result": {"minY": 416.0, "minX": 0.0, "maxY": 12152.0, "series": [{"data": [[0.0, 416.0], [0.1, 416.0], [0.2, 416.0], [0.3, 416.0], [0.4, 416.0], [0.5, 416.0], [0.6, 416.0], [0.7, 416.0], [0.8, 416.0], [0.9, 416.0], [1.0, 416.0], [1.1, 418.0], [1.2, 418.0], [1.3, 418.0], [1.4, 418.0], [1.5, 418.0], [1.6, 418.0], [1.7, 418.0], [1.8, 418.0], [1.9, 418.0], [2.0, 418.0], [2.1, 423.0], [2.2, 423.0], [2.3, 423.0], [2.4, 423.0], [2.5, 423.0], [2.6, 423.0], [2.7, 423.0], [2.8, 423.0], [2.9, 423.0], [3.0, 423.0], [3.1, 431.0], [3.2, 431.0], [3.3, 431.0], [3.4, 431.0], [3.5, 431.0], [3.6, 431.0], [3.7, 431.0], [3.8, 431.0], [3.9, 431.0], [4.0, 431.0], [4.1, 436.0], [4.2, 436.0], [4.3, 436.0], [4.4, 436.0], [4.5, 436.0], [4.6, 436.0], [4.7, 436.0], [4.8, 436.0], [4.9, 436.0], [5.0, 436.0], [5.1, 439.0], [5.2, 439.0], [5.3, 439.0], [5.4, 439.0], [5.5, 439.0], [5.6, 439.0], [5.7, 439.0], [5.8, 439.0], [5.9, 439.0], [6.0, 439.0], [6.1, 459.0], [6.2, 459.0], [6.3, 459.0], [6.4, 459.0], [6.5, 459.0], [6.6, 459.0], [6.7, 459.0], [6.8, 459.0], [6.9, 459.0], [7.0, 459.0], [7.1, 462.0], [7.2, 462.0], [7.3, 462.0], [7.4, 462.0], [7.5, 462.0], [7.6, 462.0], [7.7, 462.0], [7.8, 462.0], [7.9, 462.0], [8.0, 462.0], [8.1, 467.0], [8.2, 467.0], [8.3, 467.0], [8.4, 467.0], [8.5, 467.0], [8.6, 467.0], [8.7, 467.0], [8.8, 467.0], [8.9, 467.0], [9.0, 467.0], [9.1, 469.0], [9.2, 469.0], [9.3, 469.0], [9.4, 469.0], [9.5, 469.0], [9.6, 469.0], [9.7, 469.0], [9.8, 469.0], [9.9, 469.0], [10.0, 469.0], [10.1, 469.0], [10.2, 501.0], [10.3, 501.0], [10.4, 501.0], [10.5, 501.0], [10.6, 501.0], [10.7, 501.0], [10.8, 501.0], [10.9, 501.0], [11.0, 501.0], [11.1, 501.0], [11.2, 506.0], [11.3, 506.0], [11.4, 506.0], [11.5, 506.0], [11.6, 506.0], [11.7, 506.0], [11.8, 506.0], [11.9, 506.0], [12.0, 506.0], [12.1, 506.0], [12.2, 523.0], [12.3, 523.0], [12.4, 523.0], [12.5, 523.0], [12.6, 523.0], [12.7, 523.0], [12.8, 523.0], [12.9, 523.0], [13.0, 523.0], [13.1, 523.0], [13.2, 544.0], [13.3, 544.0], [13.4, 544.0], [13.5, 544.0], [13.6, 544.0], [13.7, 544.0], [13.8, 544.0], [13.9, 544.0], [14.0, 544.0], [14.1, 544.0], [14.2, 553.0], [14.3, 553.0], [14.4, 553.0], [14.5, 553.0], [14.6, 553.0], [14.7, 553.0], [14.8, 553.0], [14.9, 553.0], [15.0, 553.0], [15.1, 553.0], [15.2, 727.0], [15.3, 727.0], [15.4, 727.0], [15.5, 727.0], [15.6, 727.0], [15.7, 727.0], [15.8, 727.0], [15.9, 727.0], [16.0, 727.0], [16.1, 727.0], [16.2, 732.0], [16.3, 732.0], [16.4, 732.0], [16.5, 732.0], [16.6, 732.0], [16.7, 732.0], [16.8, 732.0], [16.9, 732.0], [17.0, 732.0], [17.1, 732.0], [17.2, 750.0], [17.3, 750.0], [17.4, 750.0], [17.5, 750.0], [17.6, 750.0], [17.7, 750.0], [17.8, 750.0], [17.9, 750.0], [18.0, 750.0], [18.1, 750.0], [18.2, 787.0], [18.3, 787.0], [18.4, 787.0], [18.5, 787.0], [18.6, 787.0], [18.7, 787.0], [18.8, 787.0], [18.9, 787.0], [19.0, 787.0], [19.1, 787.0], [19.2, 787.0], [19.3, 787.0], [19.4, 787.0], [19.5, 787.0], [19.6, 787.0], [19.7, 787.0], [19.8, 787.0], [19.9, 787.0], [20.0, 787.0], [20.1, 787.0], [20.2, 787.0], [20.3, 789.0], [20.4, 789.0], [20.5, 789.0], [20.6, 789.0], [20.7, 789.0], [20.8, 789.0], [20.9, 789.0], [21.0, 789.0], [21.1, 789.0], [21.2, 789.0], [21.3, 810.0], [21.4, 810.0], [21.5, 810.0], [21.6, 810.0], [21.7, 810.0], [21.8, 810.0], [21.9, 810.0], [22.0, 810.0], [22.1, 810.0], [22.2, 810.0], [22.3, 850.0], [22.4, 850.0], [22.5, 850.0], [22.6, 850.0], [22.7, 850.0], [22.8, 850.0], [22.9, 850.0], [23.0, 850.0], [23.1, 850.0], [23.2, 850.0], [23.3, 850.0], [23.4, 850.0], [23.5, 850.0], [23.6, 850.0], [23.7, 850.0], [23.8, 850.0], [23.9, 850.0], [24.0, 850.0], [24.1, 850.0], [24.2, 850.0], [24.3, 860.0], [24.4, 860.0], [24.5, 860.0], [24.6, 860.0], [24.7, 860.0], [24.8, 860.0], [24.9, 860.0], [25.0, 860.0], [25.1, 860.0], [25.2, 860.0], [25.3, 882.0], [25.4, 882.0], [25.5, 882.0], [25.6, 882.0], [25.7, 882.0], [25.8, 882.0], [25.9, 882.0], [26.0, 882.0], [26.1, 882.0], [26.2, 882.0], [26.3, 890.0], [26.4, 890.0], [26.5, 890.0], [26.6, 890.0], [26.7, 890.0], [26.8, 890.0], [26.9, 890.0], [27.0, 890.0], [27.1, 890.0], [27.2, 890.0], [27.3, 900.0], [27.4, 900.0], [27.5, 900.0], [27.6, 900.0], [27.7, 900.0], [27.8, 900.0], [27.9, 900.0], [28.0, 900.0], [28.1, 900.0], [28.2, 900.0], [28.3, 901.0], [28.4, 901.0], [28.5, 901.0], [28.6, 901.0], [28.7, 901.0], [28.8, 901.0], [28.9, 901.0], [29.0, 901.0], [29.1, 901.0], [29.2, 901.0], [29.3, 911.0], [29.4, 911.0], [29.5, 911.0], [29.6, 911.0], [29.7, 911.0], [29.8, 911.0], [29.9, 911.0], [30.0, 911.0], [30.1, 911.0], [30.2, 911.0], [30.3, 911.0], [30.4, 927.0], [30.5, 927.0], [30.6, 927.0], [30.7, 927.0], [30.8, 927.0], [30.9, 927.0], [31.0, 927.0], [31.1, 927.0], [31.2, 927.0], [31.3, 927.0], [31.4, 933.0], [31.5, 933.0], [31.6, 933.0], [31.7, 933.0], [31.8, 933.0], [31.9, 933.0], [32.0, 933.0], [32.1, 933.0], [32.2, 933.0], [32.3, 933.0], [32.4, 937.0], [32.5, 937.0], [32.6, 937.0], [32.7, 937.0], [32.8, 937.0], [32.9, 937.0], [33.0, 937.0], [33.1, 937.0], [33.2, 937.0], [33.3, 937.0], [33.4, 966.0], [33.5, 966.0], [33.6, 966.0], [33.7, 966.0], [33.8, 966.0], [33.9, 966.0], [34.0, 966.0], [34.1, 966.0], [34.2, 966.0], [34.3, 966.0], [34.4, 994.0], [34.5, 994.0], [34.6, 994.0], [34.7, 994.0], [34.8, 994.0], [34.9, 994.0], [35.0, 994.0], [35.1, 994.0], [35.2, 994.0], [35.3, 994.0], [35.4, 997.0], [35.5, 997.0], [35.6, 997.0], [35.7, 997.0], [35.8, 997.0], [35.9, 997.0], [36.0, 997.0], [36.1, 997.0], [36.2, 997.0], [36.3, 997.0], [36.4, 1030.0], [36.5, 1030.0], [36.6, 1030.0], [36.7, 1030.0], [36.8, 1030.0], [36.9, 1030.0], [37.0, 1030.0], [37.1, 1030.0], [37.2, 1030.0], [37.3, 1030.0], [37.4, 1040.0], [37.5, 1040.0], [37.6, 1040.0], [37.7, 1040.0], [37.8, 1040.0], [37.9, 1040.0], [38.0, 1040.0], [38.1, 1040.0], [38.2, 1040.0], [38.3, 1040.0], [38.4, 1069.0], [38.5, 1069.0], [38.6, 1069.0], [38.7, 1069.0], [38.8, 1069.0], [38.9, 1069.0], [39.0, 1069.0], [39.1, 1069.0], [39.2, 1069.0], [39.3, 1069.0], [39.4, 1076.0], [39.5, 1076.0], [39.6, 1076.0], [39.7, 1076.0], [39.8, 1076.0], [39.9, 1076.0], [40.0, 1076.0], [40.1, 1076.0], [40.2, 1076.0], [40.3, 1076.0], [40.4, 1076.0], [40.5, 1127.0], [40.6, 1127.0], [40.7, 1127.0], [40.8, 1127.0], [40.9, 1127.0], [41.0, 1127.0], [41.1, 1127.0], [41.2, 1127.0], [41.3, 1127.0], [41.4, 1127.0], [41.5, 1141.0], [41.6, 1141.0], [41.7, 1141.0], [41.8, 1141.0], [41.9, 1141.0], [42.0, 1141.0], [42.1, 1141.0], [42.2, 1141.0], [42.3, 1141.0], [42.4, 1141.0], [42.5, 1178.0], [42.6, 1178.0], [42.7, 1178.0], [42.8, 1178.0], [42.9, 1178.0], [43.0, 1178.0], [43.1, 1178.0], [43.2, 1178.0], [43.3, 1178.0], [43.4, 1178.0], [43.5, 1255.0], [43.6, 1255.0], [43.7, 1255.0], [43.8, 1255.0], [43.9, 1255.0], [44.0, 1255.0], [44.1, 1255.0], [44.2, 1255.0], [44.3, 1255.0], [44.4, 1255.0], [44.5, 1296.0], [44.6, 1296.0], [44.7, 1296.0], [44.8, 1296.0], [44.9, 1296.0], [45.0, 1296.0], [45.1, 1296.0], [45.2, 1296.0], [45.3, 1296.0], [45.4, 1296.0], [45.5, 1381.0], [45.6, 1381.0], [45.7, 1381.0], [45.8, 1381.0], [45.9, 1381.0], [46.0, 1381.0], [46.1, 1381.0], [46.2, 1381.0], [46.3, 1381.0], [46.4, 1381.0], [46.5, 1408.0], [46.6, 1408.0], [46.7, 1408.0], [46.8, 1408.0], [46.9, 1408.0], [47.0, 1408.0], [47.1, 1408.0], [47.2, 1408.0], [47.3, 1408.0], [47.4, 1408.0], [47.5, 1434.0], [47.6, 1434.0], [47.7, 1434.0], [47.8, 1434.0], [47.9, 1434.0], [48.0, 1434.0], [48.1, 1434.0], [48.2, 1434.0], [48.3, 1434.0], [48.4, 1434.0], [48.5, 1467.0], [48.6, 1467.0], [48.7, 1467.0], [48.8, 1467.0], [48.9, 1467.0], [49.0, 1467.0], [49.1, 1467.0], [49.2, 1467.0], [49.3, 1467.0], [49.4, 1467.0], [49.5, 1484.0], [49.6, 1484.0], [49.7, 1484.0], [49.8, 1484.0], [49.9, 1484.0], [50.0, 1484.0], [50.1, 1484.0], [50.2, 1484.0], [50.3, 1484.0], [50.4, 1484.0], [50.5, 1484.0], [50.6, 1552.0], [50.7, 1552.0], [50.8, 1552.0], [50.9, 1552.0], [51.0, 1552.0], [51.1, 1552.0], [51.2, 1552.0], [51.3, 1552.0], [51.4, 1552.0], [51.5, 1552.0], [51.6, 1580.0], [51.7, 1580.0], [51.8, 1580.0], [51.9, 1580.0], [52.0, 1580.0], [52.1, 1580.0], [52.2, 1580.0], [52.3, 1580.0], [52.4, 1580.0], [52.5, 1580.0], [52.6, 1580.0], [52.7, 1580.0], [52.8, 1580.0], [52.9, 1580.0], [53.0, 1580.0], [53.1, 1580.0], [53.2, 1580.0], [53.3, 1580.0], [53.4, 1580.0], [53.5, 1580.0], [53.6, 1580.0], [53.7, 1580.0], [53.8, 1580.0], [53.9, 1580.0], [54.0, 1580.0], [54.1, 1580.0], [54.2, 1580.0], [54.3, 1580.0], [54.4, 1580.0], [54.5, 1580.0], [54.6, 1592.0], [54.7, 1592.0], [54.8, 1592.0], [54.9, 1592.0], [55.0, 1592.0], [55.1, 1592.0], [55.2, 1592.0], [55.3, 1592.0], [55.4, 1592.0], [55.5, 1592.0], [55.6, 1595.0], [55.7, 1595.0], [55.8, 1595.0], [55.9, 1595.0], [56.0, 1595.0], [56.1, 1595.0], [56.2, 1595.0], [56.3, 1595.0], [56.4, 1595.0], [56.5, 1595.0], [56.6, 1634.0], [56.7, 1634.0], [56.8, 1634.0], [56.9, 1634.0], [57.0, 1634.0], [57.1, 1634.0], [57.2, 1634.0], [57.3, 1634.0], [57.4, 1634.0], [57.5, 1634.0], [57.6, 1680.0], [57.7, 1680.0], [57.8, 1680.0], [57.9, 1680.0], [58.0, 1680.0], [58.1, 1680.0], [58.2, 1680.0], [58.3, 1680.0], [58.4, 1680.0], [58.5, 1680.0], [58.6, 1763.0], [58.7, 1763.0], [58.8, 1763.0], [58.9, 1763.0], [59.0, 1763.0], [59.1, 1763.0], [59.2, 1763.0], [59.3, 1763.0], [59.4, 1763.0], [59.5, 1763.0], [59.6, 1789.0], [59.7, 1789.0], [59.8, 1789.0], [59.9, 1789.0], [60.0, 1789.0], [60.1, 1789.0], [60.2, 1789.0], [60.3, 1789.0], [60.4, 1789.0], [60.5, 1789.0], [60.6, 1789.0], [60.7, 1900.0], [60.8, 1900.0], [60.9, 1900.0], [61.0, 1900.0], [61.1, 1900.0], [61.2, 1900.0], [61.3, 1900.0], [61.4, 1900.0], [61.5, 1900.0], [61.6, 1900.0], [61.7, 1923.0], [61.8, 1923.0], [61.9, 1923.0], [62.0, 1923.0], [62.1, 1923.0], [62.2, 1923.0], [62.3, 1923.0], [62.4, 1923.0], [62.5, 1923.0], [62.6, 1923.0], [62.7, 1936.0], [62.8, 1936.0], [62.9, 1936.0], [63.0, 1936.0], [63.1, 1936.0], [63.2, 1936.0], [63.3, 1936.0], [63.4, 1936.0], [63.5, 1936.0], [63.6, 1936.0], [63.7, 1949.0], [63.8, 1949.0], [63.9, 1949.0], [64.0, 1949.0], [64.1, 1949.0], [64.2, 1949.0], [64.3, 1949.0], [64.4, 1949.0], [64.5, 1949.0], [64.6, 1949.0], [64.7, 1956.0], [64.8, 1956.0], [64.9, 1956.0], [65.0, 1956.0], [65.1, 1956.0], [65.2, 1956.0], [65.3, 1956.0], [65.4, 1956.0], [65.5, 1956.0], [65.6, 1956.0], [65.7, 1986.0], [65.8, 1986.0], [65.9, 1986.0], [66.0, 1986.0], [66.1, 1986.0], [66.2, 1986.0], [66.3, 1986.0], [66.4, 1986.0], [66.5, 1986.0], [66.6, 1986.0], [66.7, 2041.0], [66.8, 2041.0], [66.9, 2041.0], [67.0, 2041.0], [67.1, 2041.0], [67.2, 2041.0], [67.3, 2041.0], [67.4, 2041.0], [67.5, 2041.0], [67.6, 2041.0], [67.7, 2053.0], [67.8, 2053.0], [67.9, 2053.0], [68.0, 2053.0], [68.1, 2053.0], [68.2, 2053.0], [68.3, 2053.0], [68.4, 2053.0], [68.5, 2053.0], [68.6, 2053.0], [68.7, 2057.0], [68.8, 2057.0], [68.9, 2057.0], [69.0, 2057.0], [69.1, 2057.0], [69.2, 2057.0], [69.3, 2057.0], [69.4, 2057.0], [69.5, 2057.0], [69.6, 2057.0], [69.7, 2132.0], [69.8, 2132.0], [69.9, 2132.0], [70.0, 2132.0], [70.1, 2132.0], [70.2, 2132.0], [70.3, 2132.0], [70.4, 2132.0], [70.5, 2132.0], [70.6, 2132.0], [70.7, 2132.0], [70.8, 2137.0], [70.9, 2137.0], [71.0, 2137.0], [71.1, 2137.0], [71.2, 2137.0], [71.3, 2137.0], [71.4, 2137.0], [71.5, 2137.0], [71.6, 2137.0], [71.7, 2137.0], [71.8, 2139.0], [71.9, 2139.0], [72.0, 2139.0], [72.1, 2139.0], [72.2, 2139.0], [72.3, 2139.0], [72.4, 2139.0], [72.5, 2139.0], [72.6, 2139.0], [72.7, 2139.0], [72.8, 2213.0], [72.9, 2213.0], [73.0, 2213.0], [73.1, 2213.0], [73.2, 2213.0], [73.3, 2213.0], [73.4, 2213.0], [73.5, 2213.0], [73.6, 2213.0], [73.7, 2213.0], [73.8, 2594.0], [73.9, 2594.0], [74.0, 2594.0], [74.1, 2594.0], [74.2, 2594.0], [74.3, 2594.0], [74.4, 2594.0], [74.5, 2594.0], [74.6, 2594.0], [74.7, 2594.0], [74.8, 2660.0], [74.9, 2660.0], [75.0, 2660.0], [75.1, 2660.0], [75.2, 2660.0], [75.3, 2660.0], [75.4, 2660.0], [75.5, 2660.0], [75.6, 2660.0], [75.7, 2660.0], [75.8, 2841.0], [75.9, 2841.0], [76.0, 2841.0], [76.1, 2841.0], [76.2, 2841.0], [76.3, 2841.0], [76.4, 2841.0], [76.5, 2841.0], [76.6, 2841.0], [76.7, 2841.0], [76.8, 2899.0], [76.9, 2899.0], [77.0, 2899.0], [77.1, 2899.0], [77.2, 2899.0], [77.3, 2899.0], [77.4, 2899.0], [77.5, 2899.0], [77.6, 2899.0], [77.7, 2899.0], [77.8, 3018.0], [77.9, 3018.0], [78.0, 3018.0], [78.1, 3018.0], [78.2, 3018.0], [78.3, 3018.0], [78.4, 3018.0], [78.5, 3018.0], [78.6, 3018.0], [78.7, 3018.0], [78.8, 3046.0], [78.9, 3046.0], [79.0, 3046.0], [79.1, 3046.0], [79.2, 3046.0], [79.3, 3046.0], [79.4, 3046.0], [79.5, 3046.0], [79.6, 3046.0], [79.7, 3046.0], [79.8, 3107.0], [79.9, 3107.0], [80.0, 3107.0], [80.1, 3107.0], [80.2, 3107.0], [80.3, 3107.0], [80.4, 3107.0], [80.5, 3107.0], [80.6, 3107.0], [80.7, 3107.0], [80.8, 3107.0], [80.9, 3169.0], [81.0, 3169.0], [81.1, 3169.0], [81.2, 3169.0], [81.3, 3169.0], [81.4, 3169.0], [81.5, 3169.0], [81.6, 3169.0], [81.7, 3169.0], [81.8, 3169.0], [81.9, 3178.0], [82.0, 3178.0], [82.1, 3178.0], [82.2, 3178.0], [82.3, 3178.0], [82.4, 3178.0], [82.5, 3178.0], [82.6, 3178.0], [82.7, 3178.0], [82.8, 3178.0], [82.9, 3215.0], [83.0, 3215.0], [83.1, 3215.0], [83.2, 3215.0], [83.3, 3215.0], [83.4, 3215.0], [83.5, 3215.0], [83.6, 3215.0], [83.7, 3215.0], [83.8, 3215.0], [83.9, 3292.0], [84.0, 3292.0], [84.1, 3292.0], [84.2, 3292.0], [84.3, 3292.0], [84.4, 3292.0], [84.5, 3292.0], [84.6, 3292.0], [84.7, 3292.0], [84.8, 3292.0], [84.9, 4047.0], [85.0, 4047.0], [85.1, 4047.0], [85.2, 4047.0], [85.3, 4047.0], [85.4, 4047.0], [85.5, 4047.0], [85.6, 4047.0], [85.7, 4047.0], [85.8, 4047.0], [85.9, 4059.0], [86.0, 4059.0], [86.1, 4059.0], [86.2, 4059.0], [86.3, 4059.0], [86.4, 4059.0], [86.5, 4059.0], [86.6, 4059.0], [86.7, 4059.0], [86.8, 4059.0], [86.9, 4223.0], [87.0, 4223.0], [87.1, 4223.0], [87.2, 4223.0], [87.3, 4223.0], [87.4, 4223.0], [87.5, 4223.0], [87.6, 4223.0], [87.7, 4223.0], [87.8, 4223.0], [87.9, 4323.0], [88.0, 4323.0], [88.1, 4323.0], [88.2, 4323.0], [88.3, 4323.0], [88.4, 4323.0], [88.5, 4323.0], [88.6, 4323.0], [88.7, 4323.0], [88.8, 4323.0], [88.9, 4699.0], [89.0, 4699.0], [89.1, 4699.0], [89.2, 4699.0], [89.3, 4699.0], [89.4, 4699.0], [89.5, 4699.0], [89.6, 4699.0], [89.7, 4699.0], [89.8, 4699.0], [89.9, 5139.0], [90.0, 5139.0], [90.1, 5139.0], [90.2, 5139.0], [90.3, 5139.0], [90.4, 5139.0], [90.5, 5139.0], [90.6, 5139.0], [90.7, 5139.0], [90.8, 5139.0], [90.9, 5139.0], [91.0, 5281.0], [91.1, 5281.0], [91.2, 5281.0], [91.3, 5281.0], [91.4, 5281.0], [91.5, 5281.0], [91.6, 5281.0], [91.7, 5281.0], [91.8, 5281.0], [91.9, 5281.0], [92.0, 5382.0], [92.1, 5382.0], [92.2, 5382.0], [92.3, 5382.0], [92.4, 5382.0], [92.5, 5382.0], [92.6, 5382.0], [92.7, 5382.0], [92.8, 5382.0], [92.9, 5382.0], [93.0, 5525.0], [93.1, 5525.0], [93.2, 5525.0], [93.3, 5525.0], [93.4, 5525.0], [93.5, 5525.0], [93.6, 5525.0], [93.7, 5525.0], [93.8, 5525.0], [93.9, 5525.0], [94.0, 6218.0], [94.1, 6218.0], [94.2, 6218.0], [94.3, 6218.0], [94.4, 6218.0], [94.5, 6218.0], [94.6, 6218.0], [94.7, 6218.0], [94.8, 6218.0], [94.9, 6218.0], [95.0, 6396.0], [95.1, 6396.0], [95.2, 6396.0], [95.3, 6396.0], [95.4, 6396.0], [95.5, 6396.0], [95.6, 6396.0], [95.7, 6396.0], [95.8, 6396.0], [95.9, 6396.0], [96.0, 6675.0], [96.1, 6675.0], [96.2, 6675.0], [96.3, 6675.0], [96.4, 6675.0], [96.5, 6675.0], [96.6, 6675.0], [96.7, 6675.0], [96.8, 6675.0], [96.9, 6675.0], [97.0, 6752.0], [97.1, 6752.0], [97.2, 6752.0], [97.3, 6752.0], [97.4, 6752.0], [97.5, 6752.0], [97.6, 6752.0], [97.7, 6752.0], [97.8, 6752.0], [97.9, 6752.0], [98.0, 7078.0], [98.1, 7078.0], [98.2, 7078.0], [98.3, 7078.0], [98.4, 7078.0], [98.5, 7078.0], [98.6, 7078.0], [98.7, 7078.0], [98.8, 7078.0], [98.9, 7078.0], [99.0, 12152.0], [99.1, 12152.0], [99.2, 12152.0], [99.3, 12152.0], [99.4, 12152.0], [99.5, 12152.0], [99.6, 12152.0], [99.7, 12152.0], [99.8, 12152.0], [99.9, 12152.0], [100.0, 12152.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 10.0, "series": [{"data": [[700.0, 6.0], [12100.0, 1.0], [800.0, 6.0], [900.0, 9.0], [1000.0, 4.0], [1100.0, 3.0], [1200.0, 2.0], [1300.0, 1.0], [1400.0, 4.0], [1500.0, 6.0], [1600.0, 2.0], [1700.0, 2.0], [1900.0, 6.0], [2000.0, 3.0], [2100.0, 3.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [3000.0, 2.0], [3100.0, 3.0], [3200.0, 2.0], [4000.0, 2.0], [4300.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [5100.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [5500.0, 1.0], [6200.0, 1.0], [6300.0, 1.0], [400.0, 10.0], [6600.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 94.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 94.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 10.494949494949497, "minX": 1.68562218E12, "maxY": 10.494949494949497, "series": [{"data": [[1.68562218E12, 10.494949494949497]], "isOverall": false, "label": "bzm - Arrivals Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 850.0, "minX": 1.0, "maxY": 4699.0, "series": [{"data": [[8.0, 1897.8333333333333], [2.0, 1484.0], [9.0, 2535.2857142857147], [10.0, 1623.6153846153845], [11.0, 2455.0], [12.0, 1533.5], [3.0, 850.0], [13.0, 2321.8571428571427], [14.0, 3152.0], [15.0, 3505.4], [16.0, 1084.0], [1.0, 1789.0], [17.0, 1286.3333333333333], [18.0, 3670.5], [19.0, 4699.0], [20.0, 1040.0], [5.0, 4354.0], [6.0, 1121.0], [7.0, 985.6999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[10.494949494949497, 2084.3232323232314]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 216.0, "minX": 1.68562218E12, "maxY": 2037.9833333333333, "series": [{"data": [[1.68562218E12, 2037.9833333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68562218E12, 216.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2084.3232323232314, "minX": 1.68562218E12, "maxY": 2084.3232323232314, "series": [{"data": [[1.68562218E12, 2084.3232323232314]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2084.222222222221, "minX": 1.68562218E12, "maxY": 2084.222222222221, "series": [{"data": [[1.68562218E12, 2084.222222222221]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1895.6565656565651, "minX": 1.68562218E12, "maxY": 1895.6565656565651, "series": [{"data": [[1.68562218E12, 1895.6565656565651]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 900.0, "minX": 1.68562218E12, "maxY": 6218.0, "series": [{"data": [[1.68562218E12, 6218.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68562218E12, 6218.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68562218E12, 6218.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68562218E12, 6218.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68562218E12, 900.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68562218E12, 3215.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 873.5, "minX": 1.0, "maxY": 3215.0, "series": [{"data": [[8.0, 2626.5], [7.0, 3215.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 873.5], [1.0, 3178.0], [8.0, 1862.0], [4.0, 1603.0], [9.0, 1763.0], [5.0, 1314.0], [3.0, 1390.0], [6.0, 1507.0], [7.0, 1701.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 873.5, "minX": 1.0, "maxY": 3215.0, "series": [{"data": [[8.0, 2626.5], [7.0, 3215.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 873.5], [1.0, 3178.0], [8.0, 1861.5], [4.0, 1603.0], [9.0, 1763.0], [5.0, 1314.0], [3.0, 1389.5], [6.0, 1507.0], [7.0, 1701.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.68562218E12, "maxY": 1.65, "series": [{"data": [[1.68562218E12, 1.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.68562218E12, "maxY": 1.5666666666666667, "series": [{"data": [[1.68562218E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68562218E12, 1.5666666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68562218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.68562218E12, "maxY": 1.5666666666666667, "series": [{"data": [[1.68562218E12, 1.5666666666666667]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.68562218E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.68562218E12, "maxY": 1.5666666666666667, "series": [{"data": [[1.68562218E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68562218E12, 1.5666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68562218E12, "title": "Total Transactions Per Second"}},
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

