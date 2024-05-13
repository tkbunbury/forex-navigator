import React, { useEffect } from 'react';
import Select from './Select';
import { COUNTS } from '../app/data';
import { drawChart } from '../app/chart';

function PriceChart({
                            priceData, selectedPair, selectedGranularity, 
                            selectedCount, handleCountChange}) {

        useEffect(() => {
            if(priceData) {
                drawChart(priceData, selectedPair, selectedGranularity, 'chartDiv');
            }

        }, [priceData, selectedPair, selectedGranularity]);

    return (
    <div className='segment' id='price-chart-holder'>
        <Select
            name='numerous'
            title='Num. Candles.'
            options={COUNTS}
            defaultValue={selectedCount}
            onSelected={handleCountChange}
        />
        <div id='chartDiv'></div>
    </div>
    )
}

export default PriceChart