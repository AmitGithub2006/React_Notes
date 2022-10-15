import React, { useContext } from 'react';
import { NameContext } from '../App';
import { AgeContext } from '../App';

export function ComponentC() {
    const name = useContext(NameContext)
    const age = useContext(AgeContext)
  return (
    <div>ComponentC - {name}. My age is {age}</div>
  )
}