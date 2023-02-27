class GuessingGame {
    constructor() {}

    CurentMin = 0;
    CurentMax = 0;
    CurentValue = 0;


    setRange(min, max) {
        this.CurentMin = min;
        this.CurentMax = max;
    }

    guess() {
        this.CurentValue = Math.round((this.CurentMax - this.CurentMin)/2 + this.CurentMin);
        console.log(this.CurentMin, this.CurentValue, this.CurentMax)
        return this.CurentValue
    }

    lower() {
         this.CurentMax = this.CurentValue
    }

    greater() {
         this.CurentMin = this.CurentValue
    }
}
