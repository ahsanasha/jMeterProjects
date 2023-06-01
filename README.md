# jMeter project
Hi! this is my **jMeter projects** to load test or stress test. Here are some examples of jMeter scripts:
## getUser.jmx
The file is a jMeter script to load endpoint tests get user information, Threads use bzm - Arrival Thread Group. Some fields are configured as arguments. So here are the configuration details:

>  - Target Rate (arrival/sec) **${__P(thread)}**
>  - Ramp Up Time (sec) **${__P(rampUp)}**
>  - Ramp-Up Steps Count	**${__P(rampUpStep)}**
>  - Hold Target Rate Time (sec) **${__P(duration)}**
>  - Concurency Limit **${__P(conlimit)}**

### Run in your local machine (Non GUI)
#### Execute jmx file
Open cmd, change directory to jMeter/bin and type command bellow

> jmeter -Jthread=5 -JrampUp=5 -JrampUpStep=0 -Jduration=20 -Jconlimit=20 -JxmlOutputResponse=C:/Users/AhsanKhuluk/Documents/Tools/apache-jmeter-5.5/projects/reports/attempt_1.xml -n -t C:/Users/AhsanKhuluk/Documents/Tools/apache-jmeter-5.5/projects/getUser.jmx -l C:/Users/AhsanKhuluk/Documents/Tools/apache-jmeter-5.5/projects/reports/attempt_1.jtl

#### Convert report

> jmeter -g C:/Users/AhsanKhuluk/Documents/Tools/apache-jmeter5.5/projects/reports/attempt_1.jtl -o C:/Users/AhsanKhuluk/Documents/Tools/apache-jmeter5.5/projects/reports/attempt_1

## Notes
Change C:/Users/AhsanKhuluk/Documents/Tools/apache-jmeter-5.5/ to your directories.

## getAllUser.jmx