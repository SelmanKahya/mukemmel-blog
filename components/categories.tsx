import React, { useState } from 'react'
import { CategoryProps } from '../utils/props'
import { NextPageContext } from 'next'
import { loadDB } from '../utils/firebase'
import Link from 'next/link'

interface Props {

}

const Categories = (props: Props): React.FunctionComponentElement<React.ReactNode> => {
    const db = loadDB().firestore()
    const [categories, setCategories] = useState([])
    db.collection('categories').get().then(categories => {
        setCategories(categories.docs.map(category => category.data()))
    })
    

    return (
        <div>
            <div className="category  mx-auto">
                {categories.map((category: CategoryProps) => (
                    <Link href="/category/[categoryId]" as={`/category/${category.slug}`}>
                        <div className="btn m-3 w-32 shadow-xl hover:opacity-50 inline-block">
                            {category.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}


export default Categories