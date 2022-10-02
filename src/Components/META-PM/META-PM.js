
import React from 'react';
import useCollapse from 'react-collapsed';
import Lesions from '../Lesions/Lesions';
import { useState } from 'react';

function META_PM({selected, setSelected,  mapExpanded ,setMapExpanded}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: mapExpanded.meta_pm,
    });
return (
    <div className="collapsible">
      <div className="header" {...getToggleProps({
             onClick: () => {
                let currdp=!mapExpanded.meta_pm;
                setMapExpanded({
                    meta_pm:currdp,
                    ps: false,
                    mac: false,
                    peri: false,
                    dp: false,
                    other: false,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.meta_pm ? 'META-PM (Collapse)' : 'META-PM (Expand)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content text-2xl text-red">
            <div class="max-w-lg mx-auto">
    
    <fieldset class="mb-5">
        

        <div class="flex items-left mb-4">
            <input onClick={() => {setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    category: 'Category 0: No Myopic retinal degenerative lesion'
                }
            })}}  
            
            id="META" type="radio" name="METAs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
            checked={selected.meta_pm.category === 'Category 0: No Myopic retinal degenerative lesion'}/>
            <label for="META" class="text-sm font-medium text-gray-900 ml-2 block">
            Category 0: No Myopic retinal degenerative lesion
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    category: 'Category 1: Tessellated fundus'
                }
            })}}  id="META-1" type="radio" name="METAs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                checked={selected.meta_pm.category === 'Category 1: Tessellated fundus'} />
            <label for="META-1" class="text-sm font-medium text-gray-900 ml-2 block">
            Category 1: Tessellated fundus
            </label>
        </div>

        <div class="flex items-center mb-4">
        <input onClick={() => {setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    category: 'Category 2: Diffused chorioretinal atrophy'
                }
            })}} id="META-2" type="radio" name="METAs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
            checked={selected.meta_pm.category === 'Category 2: Diffused chorioretinal atrophy'}/>
            <label for="META-2" class="text-sm font-medium text-gray-900 ml-2 block">
            Category 2: Diffused chorioretinal atrophy

            </label>
        </div>

        <div class="flex items-center mb-4">
        <input  onClick={() => {setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    category: 'Category 3: Patchy chorioretinal atrophy'
                }
            })}} id="META-3" type="radio" name="METAs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
            checked={selected.meta_pm.category === 'Category 3: Patchy chorioretinal atrophy'}/>
            <label for="META-3" class="text-sm font-medium text-gray-900 ml-2 block">
            Category 3: Patchy chorioretinal atrophy

            </label>
        </div>

        <div class="flex items-center mb-4">
        <input  onClick={() => {setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    category: 'Category 4: Macular atrophy'
                }
            })}} id="META-4" type="radio" name="METAs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" 
            checked={selected.meta_pm.category === 'Category 4: Macular atrophy'}/>
            <label for="META-4" class="text-sm font-medium text-gray-900 ml-2 block">
            Category 4: Macular atrophy

            </label>
        </div>
    </fieldset>

    <Lesions selected={selected} setSelected={setSelected}/>



</div>
            </div>
        </div>
    </div>
    );
}

export default META_PM;