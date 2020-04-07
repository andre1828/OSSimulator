import Kernel from "./Kernel"

export default class Simulator {
    constructor() {
        this.kernel = new Kernel()
    }
    main(){
        this.kernel.run()
    }
}
