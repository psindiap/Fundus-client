
import React from 'react';
import useCollapse from 'react-collapsed';
function Peri({selected, setSelected,  mapExpanded ,setMapExpanded}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: mapExpanded.peri,
    });
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps({
             onClick: () => {
                let currdp=!mapExpanded.peri;
                setMapExpanded({
                    meta_pm:false,
                    ps: false,
                    mac: false,
                    peri: currdp,
                    perim: false,
                    dp: false,
                    other: false,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.peri ? 'Peripappilary Tesselation (Collapse)' : 'Peripappilary Tesselation (Expand)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content text-2xl text-red">

<div class="max-w-lg mx-auto">
    
    <fieldset class="mb-5">
        

        <div class="flex items-center mb-4">
            <input  onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 0'
            })}} id="peri" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 0'}/>
            <label for="peri" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 0
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 0.5'
            })}} id="peri-1" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 0.5'}/>
            <label for="peri-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 0.5
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 1'
            })}} id="peri-2" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 1'}/>
            <label for="peri-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 1
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 1.5'
            })}} id="peri-3" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 1.5'}/>
            <label for="peri-3" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 1.5
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 2'
            })}} id="peri-4" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 2'}/>
            <label for="peri-4" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 2
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 2.5'
            })}} id="peri-5" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 2.5'}/>
            <label for="peri-5" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 2.5
            </label>
        </div>


        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 3'
            })}} id="peri-6" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 3'}/>
            <label for="peri-6" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 3
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                peri: 'Grade 3.5'
            })}} id="peri-7" type="radio" name="peris" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.peri === 'Grade 3.5'}/>
            <label for="peri-7" class="text-sm font-medium text-gray-900 ml-2 block">
            Grade 3.5
            </label>
        </div>
    </fieldset>
</div>
            </div>
        </div>
    </div>
    );
}

export default Peri;