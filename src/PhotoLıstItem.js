import Image from 'next/image'
import React from 'react'

const PhotoLıstItem = (props) => {
  return (
    <div>
    <div className='group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
            <Image
              src={props.source}
              alt=''
              className='pointer-events-none object-cover group-hover:opacity-75'
              width={500}
              height={500}
            />
            <button
              type='button'
              className='absolute inset-0 focus:outline-none'
            >
              <span className='sr-only'>
                Ayrıntıları görüntüle {props.title}
              </span>
            </button>
          </div>
          <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
            {props.title}
          </p>
          <p className='pointer-events-none block text-sm font-medium text-gray-500'>
            {props.size}
          </p>
    </div>
        
  )
}

export default PhotoLıstItem