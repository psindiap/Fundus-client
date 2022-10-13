
import React from 'react';
import useCollapse from 'react-collapsed';
import IMG from '../../Assets/Perim.bmp';
function Peri({selected, setSelected,  mapExpanded ,setMapExpanded}) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: mapExpanded.perim,
    });
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps({
             onClick: () => {
                let currdp=!mapExpanded.perim;
                setMapExpanded({
                    meta_pm:false,
                    ps: false,
                    mac: false,
                    peri: false,
                    perim:currdp,
                    dp: false,
                    other: false,
                  });
                
                console.log(mapExpanded);
            }
        })}>
            {mapExpanded.perim ? 'Peripappilary Tesselation (Collapse)' : 'Peripappilary Tesselation (Expand)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="flex">
            <div className='flex flex-col'>
        <img src={IMG} alt="peri" border="0" />
    </div>
    <div className="w-full content text-2xl text-red">
<div class="flex justify-center">
  <div class="mb-3 w-full">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      value={selected.perim?(selected.perim.nasal):"Nasal"}
      onChange={(e) => {
        setSelected({
          ...selected,
          perim: {
            ...selected.perim,
            nasal: e.target.value,
          },
        });
      }}
    >
        <option value="Nasal" >Nasal</option>
        <option value="Grade 0" >Grade 0</option>
        <option value="Grade 1" >Grade 1</option>
        <option value="Grade 2" >Grade 2</option>
        <option value="Grade 3">Grade 3</option>
    </select>
  </div>
</div>

<div class="flex justify-center">
  <div class="mb-3 w-full">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      value={selected.perim?(selected.perim.temporal):"Temporal"}
      onChange={(e) => {
        setSelected({
          ...selected,
          perim: {
            ...selected.perim,
            temporal: e.target.value,
          },
        });
      }}>
        <option value="Temporal">Temporal</option>
        <option value="Grade 0">Grade 0</option>
        <option value="Grade 1">Grade 1</option>
        <option value="Grade 2">Grade 2</option>
        <option value="Grade 3">Grade 3</option>
    </select>
  </div>
</div>

<div class="flex justify-center">
  <div class="mb-3 w-full">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      value={selected.perim?(selected.perim.superior):"Superior"}
      onChange={(e) => {
        setSelected({
          ...selected,
          perim: {
            ...selected.perim,
            superior: e.target.value,
          },
        });
      }}>
        <option value="Superior">Superior</option>
        <option value="Grade 0">Grade 0</option>
        <option value="Grade 1">Grade 1</option>
        <option value="Grade 2">Grade 2</option>
        <option value="Grade 3">Grade 3</option>
    </select>
  </div>
</div>

<div class="flex justify-center">
    
  <div class="mb-3 w-full">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      value={selected.perim?(selected.perim.inferior):"Inferior"}
      onChange={(e) => {
        setSelected({
          ...selected,
          perim: {
            ...selected.perim,
            inferior: e.target.value,
          },
        });
      }}>
        <option value="Inferior">Inferior</option>
        <option value="Grade 0">Grade 0</option>
        <option value="Grade 1">Grade 1</option>
        <option value="Grade 2">Grade 2</option>
        <option value="Grade 3">Grade 3</option>
    </select>
  </div>
</div>

            </div>
            </div>
            
        </div>
    </div>
    );
}

export default Peri;