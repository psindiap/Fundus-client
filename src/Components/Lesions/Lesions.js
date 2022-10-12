
import React from 'react';
import useCollapse from 'react-collapsed';
import { useState } from 'react';
function Lesions({selected, setSelected}) {
    const [x, setX]=useState(true);
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: x,
    }
    );
return (
    <div className="collapsible">
        <div className="header text-sm" {...getToggleProps({
             onClick: () => {
               setX(!x);
            }
        })}>
            {x ? 'Plus Lesions (Collapse)' : 'Plus Lesions (Expand)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content text-2xl text-red">
           

<div class="max-w-lg mx-auto">
    
    <fieldset class="mb-5">
    
        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentLesions = selected.meta_pm.lesions;
                if (currentLesions.includes('Lacquer Cracks')) {
                    currentLesions.splice(currentLesions.indexOf('Lacquer Cracks'), 1);
                }else { 
                    currentLesions.push('Lacquer Cracks');
                }

                setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    lesions: currentLesions
                }
            })}}  checked={selected.meta_pm.lesions.includes('Lacquer Cracks')} id="les_box" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
            <label for="les_box" class="text-sm ml-3 font-medium text-gray-900">Lacquer Cracks</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentLesions = selected.meta_pm.lesions;
                if (currentLesions.includes('Myopic choroidal neovascularization')) {
                    currentLesions.splice(currentLesions.indexOf('Myopic choroidal neovascularization'), 1);
                }else { 
                    currentLesions.push('Myopic choroidal neovascularization');
                }

                setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    lesions: currentLesions
                }
            })}} id="les_box_1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
            checked={selected.meta_pm.lesions.includes('Myopic choroidal neovascularization')}/>
            
            <label for="les_box_1" class="text-sm ml-3 font-medium text-gray-900">Myopic choroidal neovascularization</label>
        </div>
        
        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentLesions = selected.meta_pm.lesions;
                if (currentLesions.includes('Fuchs spot')) {
                    currentLesions.splice(currentLesions.indexOf('Fuchs spot'), 1);
                }else { 
                    currentLesions.push('Fuchs spot');
                }

                setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    lesions: currentLesions
                }
            })}}  checked={selected.meta_pm.lesions.includes('Fuchs spot')} id="les_box_2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
            <label for="les_box_2" class="text-sm ml-3 font-medium text-gray-900">Fuchs spot</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentLesions = selected.meta_pm.lesions;
                if (currentLesions.includes('None')) {
                    currentLesions.splice(currentLesions.indexOf('None'), 1);
                }else { 
                    currentLesions.push('None');
                }

                setSelected({
                ...selected,
                meta_pm: {
                    ...selected.meta_pm,
                    lesions: currentLesions
                }
            })}} checked={selected.meta_pm.lesions.includes('None')} id="les_box_3" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
            <label for="les_box_3" class="text-sm ml-3 font-medium text-gray-900">None</label>
        </div>
    </fieldset>

    
</div>
            </div>
        </div>
    </div>
    );
}

export default Lesions;