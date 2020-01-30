import React from "react";
import {Search} from 'styled-icons/boxicons-regular/Search'

export const SearchButton = ({onClick, ...rest}) => {
   return <button {...rest} onClick={onClick}><Search size="20"/></button>
}