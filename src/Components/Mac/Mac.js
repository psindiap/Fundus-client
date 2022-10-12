
import React from 'react';
import useCollapse from 'react-collapsed';
function Mac({selected, setSelected,  mapExpanded ,setMapExpanded}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: mapExpanded.mac,
    });
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps({
             onClick: () => {
                let currdp=!mapExpanded.mac;

                setMapExpanded({
                    meta_pm:false,
                    ps: false,
                    mac: currdp,
                    peri: false,
                    perim: false,
                    dp: false,
                    other: false,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.mac ? 'Macular Tesselation (Collapse)' : 'Macular Tesselation (Expand)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content text-2xl text-red">
            {/* <div class="flex justify-center">
  <div>
    <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
        Default radio
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
      <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
        Default checked radio
      </label>
    </div>
  </div>
</div> */}


<div class="max-w-lg mx-auto">
    
    <fieldset class="mb-5">
        

        <div class="flex items-center mb-4">
            <input  onClick={() => {setSelected({
                ...selected,
                mac: 'Grade 0: No Tessellation'
            })}} id="mac" type="radio" name="Macs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.mac === 'Grade 0: No Tessellation'}/>
            <label for="mac" class="text-sm font-medium text-gray-900 ml-2 block" >
            Grade 0: No Tessellation
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                mac: 'Grade 1: Tessellation without involving the outer circle'
            })}} id="mac-1" type="radio" name="Macs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.mac === 'Grade 1: Tessellation without involving the outer circle'}/>
            <label for="mac-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 1: Tessellation without involving the outer circle
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                mac: 'Grade 2: Tessellation involving the outer circle'
            })}} id="mac-2" type="radio" name="Macs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.mac === 'Grade 2: Tessellation involving the outer circle'}/>
            <label for="mac-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 2: Tessellation involving the outer circle
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                mac: 'Grade 3: Tessellation involving the inner circle'
            })}} id="mac-3" type="radio" name="Macs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.mac === 'Grade 3: Tessellation involving the inner circle'}/>
            <label for="mac-3" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 3: Tessellation involving the inner circle
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                mac: 'Grade 4: Tessellation involving the center circle'
            })}} id="mac-4" type="radio" name="Macs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.mac === 'Grade 4: Tessellation involving the center circle'}/>
            <label for="mac-4" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 4: Tessellation involving the center circle
            </label>
        </div>
    </fieldset>
</div>
            </div>
        </div>
    </div>
    );
}

export default Mac;