import React, { Component } from 'react'
import Select from 'react-select'
import "./Select.css"

const options1 = [
  { value: 'AGARTALA', label: 'AGARTALA' },
  { value: 'AGRA', label: 'AGRA' },
  { value: 'AIZWAL', label: 'AIZWAL' },
  { value: 'BADRINATH', label: 'BADRINATH' },
  { value: 'BANGALORE', label: 'BANGALORE' },
  { value: 'DWARKA', label: 'DWARKA' },
  { value: 'GAYA', label: 'GAYA' },
  { value: 'GOA', label: 'GOA' },
  { value: 'HANSI', label: 'HANSI' },
  { value: 'INDORE', label: 'INDORE' },
  { value: 'JAIPUR', label: 'JAIPUR' },
  { value: 'NAGPUR', label: 'NAGPUR' },
  { value: 'KARGIL', label: 'KARGIL' },
  { value: 'PUNE', label: 'PUNE' },
  { value: 'KANPUR', label: 'KANPUR' },
]
const options2 = [
    { value: 'FULL TIME', label: 'FULL TIME' },
    { value: 'PART TIME', label: 'PART TIME' },
    { value: 'WORK FROM HOME/CAMPUS', label: 'WORK FROM HOME/CAMPUS' }
]
  const options3 = [
    { value: 'ADMIN', label: 'ADMIN' },
    { value: 'ADVERTISEMENT', label: 'ADVERTISEMENT' },
    { value: 'ANIMATION', label: 'ANIMATION' },
    { value: 'BRANDING', label: 'BRANDING' },
    { value: 'ENGINEERING', label: 'ENGINEERING' },
    { value: 'FINANCE', label: 'FINANCE' }
]

export const MyComponent = () => (
   <div id='mainBox1'>
        <div className='box'><Select options={options1} placeholder="Cities..." /></div>
        <div className='box'><Select options={options2} placeholder="Types..." /></div>
        <div className='box'><Select options={options3} placeholder="Preferences" /></div>
        <div id='or'>OR</div>
        <div id='SearchBox'><div id='searchInput'><input type="text" placeholder='Search...'/></div>
             <div><button id='SearchBtn'>Search</button></div>
             </div>
   </div>
)