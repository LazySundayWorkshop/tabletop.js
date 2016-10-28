function DiceRoller() {
    
    this.debug = false;
    
    this.debugLog = function(message) {
        if (this.debug == true) {
            console.log(message);
        }
    }
    
    this.splitRolls = function(r) {
        this.debugLog(r.split(new RegExp( "(?=[+|-])")));
        return r.split(new RegExp( "(?=[+|-])"));
    }
    
    this.rollArray = function(r) {
        var rolls = r[0];
        var sides = r[1];
        var total = 0;
        var sign, result;
        
        for (var i = 0; i < rolls; i++) {
            sign = r[i].includes("-") ? -1 : 1;
            rolls.replace("-", "").replace("\+", "");
            result = Math.floor(Math.random() * sides) + 1;
            this.debugLog("Rolling a d" + sides + " resulted in a " + result + ".");
            total += result;
        }
        
        return total;
        
    }
    
    this.roll = function(r) {
        
    }
    
    
}

roller = new DiceRoller();