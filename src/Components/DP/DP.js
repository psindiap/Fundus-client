
import React from 'react';
import useCollapse from 'react-collapsed';
import {useState} from 'react';
import IMG from '../../Assets/DP.bmp';
function DP({selected, setSelected,  mapExpanded ,setMapExpanded}) {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: mapExpanded.dp,
    });
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps({
            onClick: () => {
                let currdp=!mapExpanded.dp;
                setMapExpanded({
                    meta_pm:false,
                    ps: false,
                    mac: false,
                    peri: false,
                    perim: false,
                    dp: currdp,
                    other: false,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.dp ? 'Disc positional & Morphological changes (Collapse)' : 'Disc positional & Morphological changes (Expand)'}
        </div>
        <div {...getCollapseProps()}>

            <div className='flex'>
            <div className='flex flex-col'>
        <img src={IMG} alt="peri" border="0" />
    </div>
            <div className="flex content w-full text-2xl text-red">
                
                <div class="max-w-lg mx-auto ">
                    
                    <fieldset class="mb-5 ">
                        
                
                        <div class="flex items-center mb-4">
                            <input onClick={() => {setSelected({
                                ...selected,
                                dp: 'A: Horizontal'
                            })}} id="DP" type="radio" name="DPs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.dp === 'A: Horizontal'}/>
                            <label for="DP" class="text-sm font-medium text-gray-900 ml-2 block">
                            A: Horizontal
                            </label>
                        </div>
                
                        <div class="flex items-center mb-4">
                        <input onClick={() => {setSelected({
                                ...selected,
                                dp: 'B: Nasal'
                            })}} id="DP-1" type="radio" name="DPs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.dp === 'B: Nasal'}/>
                            <label for="DP-1" class="text-sm font-medium text-gray-900 ml-2 block">
                            B: Nasal
                
                            </label>
                        </div>
                
                        <div class="flex items-center mb-4">
                        <input onClick={() => {setSelected({
                                ...selected,
                                dp: 'C: Vertical'
                            })}} id="DP-2" type="radio" name="DPs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.dp === 'C: Vertical'}/>
                            <label for="DP-2" class="text-sm font-medium text-gray-900 ml-2 block">
                            C: Vertical
                
                            </label>
                        </div>
                
                        <div class="flex items-center mb-4">
                        <input onClick={() => {setSelected({
                                ...selected,
                                dp: 'D: Oblique'
                            })}} id="DP-3" type="radio" name="DPs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.dp === 'D: Oblique'}/>
                            <label for="DP-3" class="text-sm font-medium text-gray-900 ml-2 block">
                            D: Oblique
                
                            </label>
                        </div>
                
                        <div class="flex items-center mb-4">
                        <input onClick={() => {setSelected({
                                ...selected,
                                dp: 'E: No Tilt'
                            })}} id="DP-4" type="radio" name="DPs" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked={selected.dp === 'E: No Tilt'}/>
                            <label for="DP-4" class="text-sm font-medium text-gray-900 ml-2 block">
                            E: No Tilt
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

export default DP;