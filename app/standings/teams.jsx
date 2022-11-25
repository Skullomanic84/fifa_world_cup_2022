import React from 'react';
import Image from 'next/image';

export default function Teams({ team }) {

// "mp" =>  matches played
//  "w"    =>  matches won
//  "l"      =>  matches lost
//  "pts"  =>  point / score
//  "gf"   =>   goals for
//  "ga"  =>   goals against
//  "gd"  =>   goals difference
//  "d"  =>     drawn

    const { name_en, mp, w, l, d, pts, flag } = team

  return (
    <div className='grid grid-cols-7 text-xs'>
        <div className='flex items.center space-x-4 my-2 min-w-max text-sm col-span-2'>
            <Image src={flag} width={40} height={40} alt={name_en}/>
            <p className='font-extrabold'>{name_en}</p>
        </div>
        <p className='m-auto font-bold'>{mp}</p>
        <p className='m-auto font-bold'>{w}</p>
        <p className='m-auto font-bold'>{l}</p>
        <p className='m-auto font-bold'>{d}</p>
        <p className='m-auto font-bold'>{pts}</p>
    </div>
  )
}
