import React from 'react'
import "@/app/guru/module.loader.css"

function Loader() {
    return <div className='min-w-[90vw] min-h-[90vh] flex justify-center items-center'>
        <span className="loader text-yellow-500"></span>
    </div>
}

export default Loader