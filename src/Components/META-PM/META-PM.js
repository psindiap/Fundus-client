
import React from 'react';
import useCollapse from 'react-collapsed';
import IMG from '../../Assets/META-PM.bmp';
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
                    perim: false,
                    dp: false,
                    other: false,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.meta_pm ? 'META-PM (Collapse)' : 'META-PM (Expand)'}
        </div>
        <div {...getCollapseProps()}>

            <div className='flex'>
            <div className='flex flex-col'>
        <img src={IMG} alt="peri" border="0" />
    </div>
    <div className="w-full content text-2xl text-red">
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

    {/* <Lesions selected={selected} setSelected={setSelected}/>
     */}
 <div className="header text-sm">
            Plus Lesions
        </div>
<div class="max-w-lg mx-auto ">
    
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
            <label for="les_box" class="text-xs ml-3 font-medium text-gray-900">Lacquer Cracks</label>
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
            
            <label for="les_box_1" class="text-xs ml-3 font-medium text-gray-900">Myopic choroidal neovascularization</label>
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
            <label for="les_box_2" class="text-xs ml-3 font-medium text-gray-900">Fuchs spot</label>
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
            <label for="les_box_3" class="text-xs ml-3 font-medium text-gray-900">None</label>
        </div>
    </fieldset>

    
</div>



</div>
            </div>
            </div>
           
        </div>
    </div>
    );
}

export default META_PM;