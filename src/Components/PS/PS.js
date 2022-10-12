
import React from 'react';
import useCollapse from 'react-collapsed';
import IMG from '../../Assets/PS.bmp';
function PS({selected, setSelected,  mapExpanded ,setMapExpanded}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: mapExpanded.ps,
    });
return (
    <div className="collapsible">
       <div className="header" {...getToggleProps({
             onClick: () => {
                let currdp=!mapExpanded.ps;
                setMapExpanded({
                    meta_pm:false,
                    ps: currdp,
                    mac: false,
                    peri: false,
                    perim: false,
                    dp: false,
                    other: false,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.ps ? 'Posterior Staphyloma (Collapse)' : 'Posterior Staphyloma (Expand)'}
        </div>
        <div {...getCollapseProps()}>
            <div className='flex'>
            <div className='flex flex-col'>
        <img src={IMG} alt="peri" border="0" />
    </div>
    <div className="w-full content text-2xl text-red">
            <div class="max-w-lg mx-auto">
    
    <fieldset class="mb-5">
        

        <div class="flex items-center mb-4">
            <input onClick={() => {setSelected({
                ...selected,
                ps: 'No Staphyloma'
            })}}
            id="PS" type="radio" name="PSs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.ps === 'No Staphyloma'}/>
            <label for="PS" class="text-sm font-medium text-gray-900 ml-2 block">
            No Staphyloma
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                ps: 'Type 1: Wide Macular'
            })}} id="PS-1" type="radio" name="PSs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.ps === 'Type 1: Wide Macular'}/>
            <label for="PS-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Type 1: Wide Macular
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                ps: 'Type 2: Narrow Macular'
            })}} id="PS-2" type="radio" name="PSs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.ps === 'Type 2: Narrow Macular'}/>
            <label for="PS-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Type 2: Narrow Macular

            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                ps: 'Type 3: Peripapillary'
            })}} id="PS-3" type="radio" name="PSs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.ps === 'Type 3: Peripapillary'}/>
            <label for="PS-3" class="text-sm font-medium text-gray-900 ml-2 block">
            Type 3: Peripapillary

            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                ps: 'Type 4: Nasal'
            })}} id="PS-4" type="radio" name="PSs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.ps === 'Type 4: Nasal'}/>
            <label for="PS-4" class="text-sm font-medium text-gray-900 ml-2 block">
            Type 4: Nasal

            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                ps: 'Type 5: Inferior'
            })}} id="PS-5" type="radio" name="PSs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.ps === 'Type 5: Inferior'}/>
            <label for="PS-5" class="text-sm font-medium text-gray-900 ml-2 block">
            Type 5: Inferior

            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                ps: 'Type 6: Other than 1-5'
            })}} id="PS-6" type="radio" name="PSs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.ps === 'Type 6: Other than 1-5'}/>
            <label for="PS-6" class="text-sm font-medium text-gray-900 ml-2 block">
            Type 6: Other than 1-5

            </label>
        </div>
    </fieldset>
</div>
            </div>
            </div>
            
        </div>
    </div>
    );
}

export default PS;