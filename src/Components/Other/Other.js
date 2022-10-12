
import React from 'react';
import useCollapse from 'react-collapsed';
function Other({selected, setSelected,  mapExpanded ,setMapExpanded}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: mapExpanded.other,
    });
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps({
             onClick: () => {
                let currdp=!mapExpanded.other;
                setMapExpanded({
                    meta_pm:false,
                    ps: false,
                    mac: false,
                    peri: false,
                    perim: false,
                    dp: false,
                    other: currdp,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.other ? 'Other retinal changes (Collapse)' : 'Other retinal changes (Expand)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content text-2xl text-red">

<div class='flex flex-wrap'>
<div class="max-w-lg mx-auto">
    
    <fieldset class="mb-5">
    
        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('White Areas')) {
                    currentOther.splice(currentOther.indexOf('White Areas'), 1);
                }else { 
                    currentOther.push('White Areas');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('White Areas')}/>
            <label for="checkbox-1" class="text-sm ml-3 font-medium text-gray-900">White Areas</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Lattice Degeneration')) {
                    currentOther.splice(currentOther.indexOf('Lattice Degeneration'), 1);
                }else { 
                    currentOther.push('Lattice Degeneration');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Lattice Degeneration')}/>
            <label for="checkbox-2" class="text-sm ml-3 font-medium text-gray-900">Lattice Degeneration</label>
        </div>
        
        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Retinal Hole')) {
                    currentOther.splice(currentOther.indexOf('Retinal Hole'), 1);
                }else { 
                    currentOther.push('Retinal Hole');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}}  id="checkbox-3" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Retinal Hole')}/>
            <label for="checkbox-3" class="text-sm ml-3 font-medium text-gray-900">Retinal Hole</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Horse Shoe Tear')) {
                    currentOther.splice(currentOther.indexOf('Horse Shoe Tear'), 1);
                }else { 
                    currentOther.push('Horse Shoe Tear');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}}  id="checkbox-4" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Horse Shoe Tear')}/>
            <label for="checkbox-4" class="text-sm ml-3 font-medium text-gray-900">Horse Shoe Tear</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Paving Stone Degeneration')) {
                    currentOther.splice(currentOther.indexOf('Paving Stone Degeneration'), 1);
                }else { 
                    currentOther.push('Paving Stone Degeneration');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}}  id="checkbox-5" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Paving Stone Degeneration')}/>
            <label for="checkbox-5" class="text-sm ml-3 font-medium text-gray-900">Paving Stone Degeneration</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Peripheral Avascular Area')) {
                    currentOther.splice(currentOther.indexOf('Peripheral Avascular Area'), 1);
                }else { 
                    currentOther.push('Peripheral Avascular Area');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}}  id="checkbox-6" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Peripheral Avascular Area')}/>
            <label for="checkbox-6" class="text-sm ml-3 font-medium text-gray-900">Peripheral Avascular Area</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Macular Detachment')) {
                    currentOther.splice(currentOther.indexOf('Macular Detachment'), 1);
                }else { 
                    currentOther.push('Macular Detachment');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}}  id="checkbox-7" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Macular Detachment')}/>
            <label for="checkbox-7" class="text-sm ml-3 font-medium text-gray-900">Macular Detachment</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Macular Hole')) {
                    currentOther.splice(currentOther.indexOf('Macular Hole'), 1);
                }else { 
                    currentOther.push('Macular Hole');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-8" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Macular Hole')}/>
            <label for="checkbox-8" class="text-sm ml-3 font-medium text-gray-900">Macular Hole</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('ERM')) {
                    currentOther.splice(currentOther.indexOf('ERM'), 1);
                }else { 
                    currentOther.push('ERM');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}}  id="checkbox-9" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('ERM')}/>
            <label for="checkbox-9" class="text-sm ml-3 font-medium text-gray-900">ERM</label>
        </div>
    </fieldset>

    
</div>


<div class="max-w-lg mx-auto">
    
    <fieldset class="mb-5">
    
        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Retinal Detachment')) {
                    currentOther.splice(currentOther.indexOf('Retinal Detachment'), 1);
                }else { 
                    currentOther.push('Retinal Detachment');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}}  id="checkbox-10" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Retinal Detachment')}/>
            <label for="checkbox-10" class="text-sm ml-3 font-medium text-gray-900">Retinal Detachment</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('LASER Scar')) {
                    currentOther.splice(currentOther.indexOf('LASER Scar'), 1);
                }else { 
                    currentOther.push('LASER Scar');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-11" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('LASER Scar')}/>
            <label for="checkbox-11" class="text-sm ml-3 font-medium text-gray-900">LASER Scar</label>
        </div>
        
        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Pigments')) {
                    currentOther.splice(currentOther.indexOf('Pigments'), 1);
                }else { 
                    currentOther.push('Pigments');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-12" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Pigments')}/>
            <label for="checkbox-12" class="text-sm ml-3 font-medium text-gray-900">Pigments</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Weiss Ring')) {
                    currentOther.splice(currentOther.indexOf('Weiss Ring'), 1);
                }else { 
                    currentOther.push('Weiss Ring');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-13" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Weiss Ring')}/>
            <label for="checkbox-13" class="text-sm ml-3 font-medium text-gray-900">Weiss Ring</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Vitreous Condensation')) {
                    currentOther.splice(currentOther.indexOf('Vitreous Condensation'), 1);
                }else { 
                    currentOther.push('Vitreous Condensation');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-14" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Vitreous Condensation')}/>
            <label for="checkbox-14" class="text-sm ml-3 font-medium text-gray-900">Vitreous Condensation</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Chorioretinal Atrophy')) {
                    currentOther.splice(currentOther.indexOf('Chorioretinal Atrophy'), 1);
                }else { 
                    currentOther.push('Chorioretinal Atrophy');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-15" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Chorioretinal Atrophy')}/>
            <label for="checkbox-15" class="text-sm ml-3 font-medium text-gray-900">Chorioretinal Atrophy</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('Snowflake degeneration')) {
                    currentOther.splice(currentOther.indexOf('Snowflake degeneration'), 1);
                }else { 
                    currentOther.push('Snowflake degeneration');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-16" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('Snowflake degeneration')}/>
            <label for="checkbox-16" class="text-sm ml-3 font-medium text-gray-900">Snowflake degeneration</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('VMT')) {
                    currentOther.splice(currentOther.indexOf('VMT'), 1);
                }else { 
                    currentOther.push('VMT');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-17" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('VMT')}/>
            <label for="checkbox-17" class="text-sm ml-3 font-medium text-gray-900">VMT</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('CNVM')) {
                    currentOther.splice(currentOther.indexOf('CNVM'), 1);
                }else { 
                    currentOther.push('CNVM');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-18" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('CNVM')}/>
            <label for="checkbox-18" class="text-sm ml-3 font-medium text-gray-900">CNVM</label>
        </div>

        <div class="flex items-start items-center mb-4">
            <input onClick={() => {
                let currentOther = selected.other;
                if (currentOther.includes('None')) {
                    currentOther.splice(currentOther.indexOf('None'), 1);
                }else { 
                    currentOther.push('None');
                }
                setSelected({
                ...selected,
                other: currentOther
               
            })}} id="checkbox-19" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={selected.other.includes('None')}/>
            <label for="checkbox-19" class="text-sm ml-3 font-medium text-gray-900">None</label>
        </div>
    </fieldset>

    
</div>
</div>
            </div>
        </div>
    </div>
    );
}

export default Other;