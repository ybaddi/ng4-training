class Report {
    data: Array<string>;
  
    constructor(data: Array<string>) {
      this.data = data;
    }
  
    // run() {
    //   for(var line of this.data){   // for(var line in this.data){
    //     console.log(line)           // console.log(this.data[line])
    //   }
    // }
    run() {
        this.data.forEach(function diplay(x){
            console.log(x);
        })
      }
  }

  class TabbedReport extends Report {
    headers;
    values;
  
    constructor(headers : string[], values: string[]) {
      super(values)
      this.headers = headers;
    }
    run() {
        console.log(this.headers);
        super.run();
      }
    }


var r = new Report(['First line', 'Second line']);
r.run();

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Paul Pfifer', 'Louis Blakenship']; var TtbbedReport: TabbedReport = new TabbedReport(headers, data)
TtbbedReport.run();