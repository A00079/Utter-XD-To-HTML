import React from 'react'

export default function Headtohead(props) {
    return (
        <React.Fragment>
            <div className='dummy-main-container mt-10'>
                <div className='main-container border border-gray-300 w-full p-1 pl-2 rounded-md'>
                    <h4 className='text-xs font-semibold pb-1'>Head-to-Head</h4>
                    <div className="grid grid-cols-12">
                        <div class="col-span-4">
                            <div className='flex flex-row items-center relative'>
                                <img class="z-10 h-28 w-28 object-cover object-center mx-auto" src="/img/dhoni.png" alt="player1" />
                                <img class="z-0 absolute -right-4 h-16 w-16 object-cover object-center mx-auto" src="/img/chennai_logo.png" alt="player1" />
                            </div>
                        </div>
                        <div class="col-span-4">
                            <p style={{ fontSize: '0.6rem' }} className='font-bold text-center'>Matched Played: 27</p>
                            <p className='text-sm font-bold text-center mt-8'>VS</p>
                        </div>
                        <div class="col-span-4">
                            <div className='flex flex-row items-center relative'>
                                <img class="z-10 h-28 w-28 object-cover object-center mx-auto" src="/img/virat.png" alt="player2" />
                                <img class="z-0 h-16 w-16 absolute -left-2 object-cover object-center mx-auto" src="/img/rcb_logo.png" alt="player2" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div class="col-span-4 space-y-2">
                            <p className='text-center text-md font-bold'>13</p>
                            <div className='bg-gray-200 w-10 h-10 rounded-full mx-auto'></div>
                            <div className='flex flex-row justify-center items-center space-x-1'>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-green-600'>W</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-green-600'>W</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-red-600'>L</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-red-600'>L</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-green-600'>W</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4">
                            <p style={{ fontSize: '0.6rem' }} className='font-bold text-center text-gray-500'>Matches Won</p>
                            <p style={{ fontSize: '0.6rem' }} className='font-bold text-center text-gray-500 mt-7'>Win %</p>
                            <p style={{ fontSize: '0.6rem' }} className='font-bold text-center text-gray-500 mt-7'>Last 5 Matches </p>
                            <p style={{ fontSize: '0.6rem' }} className='font-bold text-center text-gray-900 mt-2'>No Result: 1 </p>
                        </div>
                        <div class="col-span-4 space-y-2">
                            <p className='text-center text-md font-bold'>13</p>
                            <div className='bg-gray-200 w-10 h-10 rounded-full mx-auto'></div>
                            <div className='flex flex-row justify-center items-center space-x-1'>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-red-600'>L</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-red-600'>L</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-green-600'>W</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-green-600'>W</p>
                                </div>
                                <div className='bg-gray-200 w-5 rounded-full'>
                                    <p className='font-bold text-sm text-center text-red-600'>L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
