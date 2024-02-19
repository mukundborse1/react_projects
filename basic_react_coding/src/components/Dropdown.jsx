import React, { useState } from 'react'

const Dropdown = () => {
    const data = [
        {value: "Apple", label: "apple"},
        {value: "Mango", label:"mango"},
        {value: "Banana", label:"banana"},
        {value: "Orange", label:"orange"},
        {value: "Guva", label:"guva"},
        {value: "Chiku", label:"chiku"},
        ];
    const [dropdownValu1, setDropdownValue1] = useState("")
    const [dropdownValu2, setDropdownValue2] = useState("")

    const handleDropdown1 = (value) => {
        setDropdownValue1(value)
        setDropdownValue2('')
    }

    const handleDropdown2 = (value) => {
        setDropdownValue2(value)

        setDropdownValue1("")
    }

    const dropdown1Options = data.filter((fruit)=> fruit.value !== dropdownValu2)
    const dropdown2Options = data.filter((fruit)=> fruit.value !== dropdownValu1)
  return (
    <div>
        <label>Dropdown-1</label>
        <select value={dropdownValu1} onChange={(e)=> handleDropdown1(e.target.value)}>
            <option value="">Select</option>
        {
            dropdown1Options.map((fruit)=>(
                <option key={fruit.label} value={fruit.value}>
                    {fruit.label}
                </option>
            )
            )
        }
        </select><br></br>
        <label>Dropdown-2</label>
        <select value={dropdownValu2} onChange={(e) => handleDropdown2(e.target.value)}>
            <option value="">Select</option>
        {
            dropdown2Options.map((fruit)=> (
                <option key={fruit.label} value={fruit.value}>
                    {fruit.label}
                </option>
            )
            )
        }
        </select>
    </div>
  )
}

export default Dropdown;