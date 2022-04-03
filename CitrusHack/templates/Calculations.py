
def calc(gas_bill, gas, oil, mileage, flightsLess, flightsGreater, doNewspaper, doRecycle ):
    return elec_calc(gas)+gas_calc(gas_bill)+elec_calc(oil)+oil_calc(mileage)+mileage_calc(mileage)+flightNumberLess(flightsLess)+flightNumberMore(flightsGreater)+isNewspaper(doNewspaper)+isRecycle(doRecycle)



def elec_calc(gas):
    return gas*105

def gas_calc(oil):
    return oil*105

def oil_calc(oil):
    return oil*113

def mileage_calc(mileage):
    return mileage*113

def flightNumberLess(flightsLess):
    return flightsLess*5

def flightNumberMore(flightsGreater):
    return flightsGreater*4400

def isNewspaper(doNewspaper):
    if(doNewspaper):
        return 184
    
    return 0

def isRecycle(doRecycle):
    if(doRecycle):
        return 166
    
    return 0

