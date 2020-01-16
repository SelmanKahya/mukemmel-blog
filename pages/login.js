import React from 'react'
import Link from 'next/link';


const login = () => {
    return (
        <div>
            Login page.
            <Link href="/addNewPost">
   <a>myroute</a>
</Link>
        </div>
    )
}

export default login
