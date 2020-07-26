
export class UI {

     constructor(year, gender, consolex, price){
          this.year = year,
          this.gender = gender,
          this.console = consolex,
          this.init()
     }

     init() {
          InitializeDropdrawns()
          test()
     }

     test(){
       console.log(this.year)
       console.log(this.consolex)
     }
}
