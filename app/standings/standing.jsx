import React from 'react';
import Teams from './teams';
import orderBy from 'lodash';

export default function Standing({ standing }) {

    const { _id, group, teams } = standing
  return (
    <div className='p-4 shadow bg-gray-50 rounded-lg'>
        <div className='grid grid-cols-7 text-xs'>
        <p className='font-extrabold col-span-2 text-rose-900'>Group {group}</p>
        <p className='mx-auto font-bold'>Played</p>
        <p className='mx-auto font-bold'>Won</p>
        <p className='mx-auto font-bold'>Lost</p>
        <p className='mx-auto font-bold'>Draw</p>
        <p className='mx-auto font-bold'>Points</p>
        </div>
        <hr className='my-2' />
        {orderBy(teams, 'pts', 'desc').map(team =>(
            <Teams team={team} key={team.name_en}/>
        ))}
    </div>
  )
}
